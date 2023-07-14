import vitePluginImp from "vite-plugin-imp";

export default function () {
  return vitePluginImp({
    libList: [
      {
        libName: "element-ui-solid",
        // true: 会把 import { Button } from "XXX" 变为 import Button from "XXX/es/button"
        // false : 保持原状 import { Button } from "XXX"
        // vite dev 时是 false , build 时是 true, 这个 bug 只会在 build 时触发
        replaceOldImport: false,
        style(name) {
          if (
            [
              //"button",
              //"button-group",
              //"tag",
              //"alert",
              //"badge",
              //"empty",
              //"backtop",
              //"card",
              //"row",
              //"col",
              //"container",
              //"header",
              //"main",
              //"footer",
              //"aside",
              //"link",
              //"radio",
              //"radio-button",
              //"radio-group",
              //"page-header",
              //"breadcrumb",
              //"breadcrumb-item",
              //"avatar",
              //"skeleton",
              //"skeleton-item",
              //"result",
              //"collapse",
              //"collapse-item",
              "icon",
              //"spinner",
              //"switch",
              //"checkbox",
              //"checkbox-group",
              //"divider",
              //"timeline",
              //"timeline-item",
              //"progress",
              //"statistic",
              //"input",
             // "drawer",
            ].includes(name)
          ) {
            return `element-ui-solid/dist/css/${name}.css`;
          }
          console.log(name);

          return false;
        },
      },
    ],
  });
}
