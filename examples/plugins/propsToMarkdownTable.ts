import { join } from "node:path";
import type { Plugin } from "vite";
import fs from "node:fs";
import { parse } from "@babel/parser";
import { visit, ASTNode } from "ast-types";
import get from "lodash/get";
/** 查找符合符合条件的 ts interface 类 */
function findInterfaces(node: ASTNode) {
  let ret = {};
  visit(node, {
    visitTSInterfaceDeclaration(nodePath) {
      // 只有导出的 interface 才会被解析
      if (nodePath.parentPath.value.type === "ExportNamedDeclaration") {
        ret[nodePath.value.id.name] = nodePath.value.body.body;
      }
      this.traverse(nodePath);
    },
  });
  return ret;
}

function parseTSFunctionType(parameters: any[], typeAnnotation: any) {
  const parseTSFunctionParameters = (parameters: any[]) => {
    if (!parameters || !parameters.length) {
      return `()`;
    }
    let args = parameters.map((parameter) => {
      return `${get(parameter, "name")}${parameter.optional ? "?" : ""}: ${parseTypeAnnotation(
        get(parameter, "typeAnnotation.typeAnnotation")
      )}`;
    });
    return "(" + args.join(", ") + ")";
  };
  return `${parseTSFunctionParameters(parameters)} => ${parseTypeAnnotation(typeAnnotation)}`;
}

function parseTSTypeLiteral(members: any[]) {
  const ret = parseInterfaceDefinitions(members);
  let args = ret.map((t) => `${t.name}: ${t.type}`);
  return "{" + args.join(", ") + "}";
}

function parseTSArrayType(type: string | string[]) {
  if (Array.isArray(type)) {
    return `(${type.join(" | ")})[]`;
  } else {
    return `${type}[]`;
  }
}

function parseTSLiteralType(Node) {
  return get(Node, "literal.value");
}

function parseTypeAnnotation(typeAnnotation: any): any {
  const type = get(typeAnnotation, "type");

  switch (type) {
    case "TSNumberKeyword":
    case "TSStringKeyword":
    case "TSBooleanKeyword":
    case "TSNullKeyword":
    case "TSUndefinedKeyword":
    case "TSSymbolKeyword":
    case "TSAnyKeyword":
    case "TSVoidKeyword":
    case "TSNeverKeyword":
    case "TSUnknownKeyword":
      return type.match(/TS(\w+)Keyword/)[1].toLowerCase();
    case "TSLiteralType":
      return parseTSLiteralType(typeAnnotation);
    case "TSArrayType":
      return parseTSArrayType(parseTypeAnnotation(get(typeAnnotation, "elementType")));
    // case "TSUnionType":
    //   return get(typeAnnotation, "types", [])
    //     .map((node: any) => parseTypeAnnotation(node))
    //     .join(" | ");
    case "TSUnionType":
      return get(typeAnnotation, "types", [])
        .map((node: any) => parseTypeAnnotation(node))
        .join(" \\| ");
    case "TSFunctionType":
      const parameters = get(typeAnnotation, "parameters");
      return parseTSFunctionType(parameters, get(typeAnnotation, "typeAnnotation.typeAnnotation"));

    case "TSTypeReference":
      //   const typeName = get(typeAnnotation, "typeName.name");
      //   const typeParameters = get(typeAnnotation, "typeParameters.params", []).map(
      //     parseTypeAnnotation
      //   );

      //   return `${typeName}${
      //     typeParameters.length ? `<${typeParameters.join(", ")}>` : typeParameters
      //   }`;
      function getAllLeftRightName(myNode: any) {
        let name = get(myNode, "name");

        if (name == undefined) {
          let left = get(myNode, "left.name");
          let right = get(myNode, "right.name");
          if (left == undefined) {
            left = getAllLeftRightName(get(myNode, "left"));
          }
          return left + "." + right;
        }
        return name;
      }
      return getAllLeftRightName(get(typeAnnotation, "typeName"));
    case "TSTypeLiteral":
      return parseTSTypeLiteral(get(typeAnnotation, "members"));
    // (any)[]
    case "TSParenthesizedType":
      return `(${parseTypeAnnotation(get(typeAnnotation, "typeAnnotation"))})`;
    default:
      return type;
  }
}

function parseCommentBlock(jsDoc: string) {
  /**
   * 不使用matchAll 因为解析无法区分带@和不带@的情况
   */
  let arr = jsDoc.replaceAll(/[\/\*]/g, "").split("\n");

  let ret = {};
  for (const item of arr) {
    if (item.includes("@")) {
      // 解析 jsdoc @ 作为 key value 的注释
      const match = /@(\w+)\s+(.+)/.exec(item);
      if (match) {
        let keyName = match[1];
        let value = match[2];

        // 高亮 "default"
        if (keyName == "default") {
          //value = "<span style='background-color:yellow;'>" + value + "</span>";
        }

        ret[keyName] = value;
      }
    } else {
      // 匹配任意不为空的字符
      const match = /\S+/.exec(item);
      if (match) {
        ret["description"] = match[0];
      }
    }
  }
  return ret;
}

function parseComments(comments: any) {
  let ret = {};

  for (let item of comments) {
    let comment = parseCommentBlock(item.value);
    ret = { ...ret, ...comment };
  }

  return ret;
}

function parseInterfaceDefinitions(nodePaths: any): any[] {
  const parseInterfaceDefinitionsNode = (nodePath: any) => {
    const name = get(nodePath, "key.name");

    const required = !get(nodePath, "optional") ? "true" : "";

    const typeAnnotation = get(nodePath, "typeAnnotation.typeAnnotation");

    //const type = "<span style='background-color:yellow;'>" + parseTypeAnnotation(typeAnnotation) + "</span>";
    const type = parseTypeAnnotation(typeAnnotation);

    let ret = { name, type, required };

    const comments = parseComments(get(nodePath, "leadingComments", []));
    // 将 comments 的 key 放到 一级
    for (const item of Object.keys(comments)) {
      ret[item] = comments[item];
    }

    return ret;
  };

  return nodePaths.map(parseInterfaceDefinitionsNode);
}

function parseInterface(code: string): Record<string, any[]> {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  const interfaces = findInterfaces(ast);

  let ret = {};
  for (const keyName of Object.keys(interfaces)) {
    let data = parseInterfaceDefinitions(interfaces[keyName]);

    // 如果 所有的 required 都是空, 则将 required 字段 删除
    for (const dataItem of data) {
      let defaultKeyAllEmpty = true;
      for (const dataKey of Object.keys(dataItem)) {
        if (dataKey == "required") {
          if (dataItem[dataKey] != "") {
            defaultKeyAllEmpty = false;
          }
        }
      }
      if (defaultKeyAllEmpty) {
        delete dataItem.required;
      }
    }

    ret[keyName] = data;
  }

  return ret;
}

// demo内的应该被忽略
let inDemoReg = /\`{2,3}[\s\S]*?\`{2,3}/g;

function getCodeIndex(code: string) {
  if (code.includes("@")) {
    return [...code.matchAll(inDemoReg)].map((item) => [item.index, item.index! + item[0].length]);
  }
  return [];
}

function replaceCode2table(code: string) {
  let demoScope = getCodeIndex(code);

  let c2t = code.replaceAll(/@props\((.+)\)/g, (substring, params: string, index: number) => {
    // demo内不进行替换
    for (let i = 0; i < demoScope.length; i++) {
      let element = demoScope[i];
      if (index > element[0]! && index < element[1]!) {
        return substring;
      }
    }
    let [filePath, id = "default", interfaceName] = params.split(",");
    filePath = normalizeParam(filePath);
    id = normalizeParam(id);
    interfaceName = normalizeParam(interfaceName);

    filePath = filePath.endsWith("/index.tsx") ? filePath : filePath + "/index.tsx";

    let path = join(process.cwd(), `../packages/element-ui-solid/src/components/${filePath}`);
    if (!path) {
      console.error(`path no found:`, path);
    }
    let fileContent = "";
    try {
      fileContent = fs.readFileSync(path, "utf-8");
    } catch (error) {
      console.error(error);
      return substring;
    }

    let tableData = parseInterface(fileContent);

    return (
      "\n\n<h2 style='font-size:24px;'>Props</h2>\n\n" +
      (interfaceName ? [interfaceName] : Object.keys(tableData))
        .map((title) => {
          let data = tableData[title];
          return generateTable(title, data);
        })
        .join("")
    );
  });
  return c2t;
}

function normalizeParam(str: string) {
  if (str) {
    return str.replaceAll(/['"]/g, "").trim();
  }
  return "";
}

// 按照给定的顺序排序, 未指定的靠后排
function customSort(arr, order) {
  arr.sort((a, b) => {
    if (!order.includes(a) && !order.includes(b)) {
      return 0; // 如果两个值都不在指定的顺序数组中，则保持原有顺序
    }
    if (!order.includes(a)) {
      return 1; // 如果 a 不在指定的顺序数组中，则将 a 排到后面
    }
    if (!order.includes(b)) {
      return -1; // 如果 b 不在指定的顺序数组中，则将 b 排到后面
    }
    return order.indexOf(a) - order.indexOf(b); // 按照指定顺序比较 a 和 b 的索引位置
  });
}

function generateMarkdownTable(data) {
  if (data.length === 0) {
    return "";
  }

  // 取出所有的表头,并去重
  let arr: string[] = [];
  for (let item of data) {
    arr = [...arr, ...Object.keys(item)];
  }

  let headersArr = [...new Set(arr)];

  customSort(headersArr, ["name", "type", "default", "description", "required"]);

  // 提取表头
  let headers = headersArr;

  // 生成表头行
  let headerRow =
    "<thead><tr>" +
    headers
      .map((a) => {
        return "<th>" + a + "</th>";
      })
      .join("\n") +
    "</tr></thead>";

  // 生成数据行
  let dataRows =
    "<tbody>" +
    data
      .map((item) => {
        return (
          "<tr>" +
          headers
            .map((header) => {
              return "<td>" + (item[header] ?? "") + "</td>";
            })
            .join("\n") +
          "</tr>"
        );
      })
      .join("\n") +
    "</tbody>";

  // 返回拼接后的 Markdown 表格
  return (
    "<div className='MyPropsTable' style='overflow-x:auto;'> <table>" +
    headerRow +
    dataRows +
    "</table></div>"
  );
}

function generateTable(title: string, data: any[]) {
  let table = generateMarkdownTable(data);

  return `
  <h3 style='font-size:20px; margin-top:20px;margin-bottom:20px'>${
    title.endsWith("Props") ? title.substring(1) : title
  } </h3>  
  
  ${table}

  `;
}

export default function (): Plugin {
  return {
    enforce: "pre",
    name: "PropsToMarkdownTable",
    transform(source, id) {
      if (!id.includes("node_modules") && id.endsWith(".tsx") && id.includes("/src/pages/")) {
        let code = replaceCode2table(source);
        return {
          code: code,
          map: null,
        };
      }
    },
  };
}
