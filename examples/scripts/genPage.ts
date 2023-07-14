import fg from "fast-glob";
import path from "node:path";
import fs from "node:fs";
let dirPath = path.join(process.cwd(), "example", "**", "*.tsx");
dirPath = dirPath.replace(/\\/g, "/");
console.log(dirPath);
let fileList = await fg([dirPath]);

let data: any = {};

for (const item of fileList) {
  let dirPath = path.dirname(item);
  let dirName = path.basename(dirPath);
  let fileName = path.basename(item);
  let ext = path.extname(fileName);
  let fileNameWithoutExtName = fileName.replace(ext, "");
  if (data[dirName] == undefined) {
    data[dirName] = [];
  }
  data[dirName].push(fileNameWithoutExtName);
}

for (const keyName of Object.keys(data)) {
  let fileData = `

    ${data[keyName]
      .map((compName) => {
        return `\n<demo path="${keyName}/${compName}"/>\n`;
      })
      .join("\n")}

@props(${keyName})
    `;
  console.log(fileData);

  fs.writeFileSync(path.join(process.cwd(), "components", keyName + ".md"), fileData);
}

console.log("结束");
