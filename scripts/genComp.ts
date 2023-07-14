import fs from "node:fs";
import path from "node:path";

let args = process.argv.slice(2);
if (args.length != 1) {
  throw "参数错误" + args;
}
console.log("创建的组件:", args[0]);

let name = args[0];
let uiDirPath = path.join(process.cwd(), "packages", "element-ui-solid", "src", "components");
let compPath = path.join(uiDirPath, name, "index.tsx");
let compIndexPath = path.join(uiDirPath, "index.ts");

let uName = name[0].toUpperCase() + name.substring(1).toLowerCase();
uName = getCamelCase(uName);

let webPath = path.join(process.cwd(), "examples", "src", "pages", uName + ".tsx");

let examplePath = path.join(process.cwd(), "examples", "src", "examples", name, "basic.tsx");
function getCamelCase(str) {
  let arr = str.split("-");
  return arr
    .map((item, index) => {
      if (index === 0) {
        return item;
      } else {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }
    })
    .join("");
}

fs.mkdirSync(path.dirname(compPath));
// 组件代码
fs.writeFileSync(
  compPath,
  `
import { ParentComponent } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";

export interface I${uName}Props {
 
}
export let ${uName}: ParentComponent<I${uName}Props> = (inProps) => {
  let props = useDefaultProps(inProps, {
    
  });
  
  return (
    <>
        ${uName}
    </>
  );
};

`
);

fs.writeFileSync(
  compIndexPath,
  fs.readFileSync(compIndexPath) +
    `
export * from './${name}';`
);

//  web 代码
fs.writeFileSync(
  webPath,
  `import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="${name}/basic" />
            @props(${name})
        </>
    );
};

export default Index;
`
);


fs.mkdirSync(path.dirname(examplePath), {recursive:true})

fs.writeFileSync(
  examplePath,
  `import { ${uName} } from "element-ui-solid";

export default () => {
  return (
    <>
        <${uName} />
    </>
  );
};
  `
);

console.log("结束");
