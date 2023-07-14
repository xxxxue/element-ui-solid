import { parse } from "@babel/parser";
import babelTraverse from "@babel/traverse";
import * as babelTypes from "@babel/types";
import babelGenerator from "@babel/generator";

import fs from "node:fs";
import qs from "node:querystring";
import path from "node:path";
import { Plugin } from "vite";

export default function (): Plugin {
  return {
    name: "自动获取 jsx 内容,填写到 jsxCode",
    enforce: "pre",
    transform(code, id) {
      // 只处理自己的 pages 目录代码
      if (!id.includes("node_modules") && id.includes("/examples/src/pages/")) {
        const ast = parse(code, {
          plugins: ["jsx", "typescript"],
          sourceType: "module",
        });

        // @ts-ignore
        babelTraverse.default(ast, {
          JSXOpeningElement(element) {
            if (
              element.node.name.type == "JSXIdentifier" &&
              element.node.name.name === "DemoModule"
            ) {
              const attributes = element.node.attributes;
              let compName = "";
              let hasTitle = false;
              for (const item of attributes) {
                // 找到属性 name 的值
                // @ts-ignore
                if (item.type == "JSXAttribute" && item.name.name == "name") {
                  // @ts-ignore
                  compName = item.value.value;
                }
                if (item.type == "JSXAttribute" && item.name.name == "title") {
                  hasTitle = true;
                }
              }

              if (compName != "") {
                let fileData = fs
                  .readFileSync(`./src/examples/${compName}.tsx`, { encoding: "utf-8" })
                  .trim();

                if (element.parent.type == "JSXElement") {
                  let codeAttribute = babelTypes.jsxAttribute(
                    babelTypes.jsxIdentifier("code"),
                    babelTypes.stringLiteral(qs.escape(fileData))
                  );

                  // 向原始属性列表中添加新的 'jsxCode' 属性
                  attributes.push(codeAttribute as any);

                  if (!hasTitle) {
                    const titleAttribute = babelTypes.jsxAttribute(
                      babelTypes.jsxIdentifier("title"),
                      babelTypes.stringLiteral(path.basename(compName))
                    );

                    // 向原始属性列表中添加新的 'title' 属性
                    attributes.push(titleAttribute as any);
                  }
                }
              }
            }
          },
        });

        // 生成转换后的代码
        // @ts-ignore
        let transformedCode: string = babelGenerator.default(ast).code;

        // fix: ast处理后末尾出现了分号
        transformedCode = transformedCode.replaceAll(">;", ">");

        return {
          code: transformedCode,
          map: null,
        };
      }
      return {
        code: code,
        map: null,
      };
    },
  };
}
