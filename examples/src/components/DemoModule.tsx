import { useDefaultProps } from "element-ui-solid";
import { Component, JSX, Match, Show, Switch, createSignal, onMount } from "solid-js";
import hljs from "highlight.js";
import hljs_ts from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-light.css";
import clsx from "clsx";
import { Dynamic, render as solidRender } from "solid-js/web";
import style from "./DemoModule.module.css";
interface ICodeLineHighLight {
  line: number;
  type: "error" | "info";
}

interface IProps {
  name: string;
  title?: JSX.Element;
  desc?: JSX.Element;
  code?: string;
  codeLineHighLight?: ICodeLineHighLight[];
  language?: "typescript"; // 预留位置
  class?: string;
  spaceX10?: boolean;
}

let allComponents = import.meta.glob("../examples/**/*.tsx");

let DemoModule: Component<IProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    language: "typescript",
    codeLineHighLight: [],
  });
  const [showCode, setShowCode] = createSignal<boolean>(false);

  const [code, setCode] = createSignal<string>("");

  let preRef: HTMLElement;

  let renderDivRef: HTMLDivElement;

  let renderHighlightjs = (content: string, styleList: ICodeLineHighLight[], language: string) => {
    let html = hljs.highlight(content, { language: language }).value;

    let handleClass = (i: number) => {
      let tag = styleList.find((a) => a.line === i)?.type;
      if (tag != undefined) {
        return style[tag] || "";
      }
      return "";
    };

    // 添加行号
    html = html
      .split("\n")
      .map((data, i) => {
        let lineNumber = i + 1;
        let line = `<line class="${style.line}">${lineNumber}</line>`;
        return `<div class="${handleClass(i)}">${line}${data}</div>`;
      })
      .join("");
    return html;
  };

  // 渲染源码
  onMount(() => {
    if (props.code == undefined) {
      console.error("未设置 DocsModule 的 code 属性");
      return;
    }
    hljs.registerLanguage("typescript", hljs_ts);
    let newCode = decodeURIComponent(props.code);
    let hlCode = renderHighlightjs(newCode, props.codeLineHighLight, props.language);
    setCode(hlCode);
  });

  let sizeIncrease = () => {
    preRef.style.lineHeight =
      Number.parseFloat(preRef.style.lineHeight.replace("px", "")) + 3 + "px";
    preRef.style.fontSize = Number.parseFloat(preRef.style.fontSize.replace("px", "")) + 3 + "px";
  };

  let sizeReduce = () => {
    preRef.style.lineHeight =
      Number.parseFloat(preRef.style.lineHeight.replace("px", "")) - 3 + "px";
    preRef.style.fontSize = Number.parseFloat(preRef.style.fontSize.replace("px", "")) - 3 + "px";
  };

  // 渲染组件
  onMount(async () => {
    if (props.name == undefined) {
      console.error("未设置 DocsModule 的 name 属性");
      return;
    }
    // 获取对应的组件对象 (包含所有的 export)
    let componentObj = (await allComponents[`../examples/${props.name}.tsx`]()) as { default: any };
    // console.log(componentObj);

    // 渲染 "export default" ,
    // ( 一个例子一个文件,可以保证例子源码的完整性,编译时,读取文件赋值给 code 属性,)
    solidRender(() => <Dynamic component={componentObj.default} />, renderDivRef);
  });

  return (
    <div class={clsx(style["demo-module"],"__my_code_title")}>
      <div class={style["demo-module__demo"]}>
        <div
          ref={(r) => (renderDivRef = r)}
          class={clsx({ [style["space-x-10"]]: props.spaceX10 }, props.class)}
        ></div>
      </div>
      <Show when={props.title}>
        <div class={style["demo-module__title"]}>{props.title}</div>
      </Show>
      <Show when={props.desc}>
        <div class={style["demo-module__desc"]}>{props.desc}</div>
      </Show>
      <Show when={code()}>
        <div class={clsx(style["demo-module__tool"], style["demo-module__group"])}>
          <div
            class={clsx(style["demo-module__tool-center-element"], style["space-x-2"])}
            onClick={() => setShowCode((p) => !p)}
          >
            <span class={style["demo-module__group-item"]}>Code </span>
            <Switch fallback={<IconArrayDown />}>
              <Match when={showCode()}>
                <IconArrayUp />
              </Match>
            </Switch>
          </div>
          <div class={style["demo-module__group-item"]}>
            <button class={clsx(style["w-16"], style["h-full"])} onClick={sizeIncrease}>
              +
            </button>
          </div>
          <div class={style["demo-module__group-item"]}>
            <button class={clsx(style["w-16"], style["h-full"])} onClick={sizeReduce}>
              -
            </button>
          </div>
        </div>
      </Show>
      <Show when={showCode()}>
        <div class={style["demo-module__code"]}>
          <pre
            ref={(r) => (preRef = r)}
            class={style["overflow-auto"]}
            style={{
              "line-height": "23px",
              "font-size": "18px",
            }}
          >
            {/* eslint-disable-next-line solid/no-innerhtml */}
            <code class="language-typescript hljs" innerHTML={code()} />
          </pre>
        </div>
      </Show>
    </div>
  );
};

let IconArrayDown = () => {
  return (
    <svg
      viewBox="0 0 1025 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5980"
      width="20"
      height="20"
    >
      <path
        d="M84.883165 277.730942c-0.108532 6.288704 2.1819 12.616315 6.896892 17.497176l386.129681 399.638824c25.107716 25.985186 66.674388 26.700882 92.661622 1.594189 0.125938-0.121842 0.250852-0.244709 0.374742-0.369623l397.182524-400.527557c9.555922-9.636809 9.491417-25.19577-0.146416-34.751692-9.636809-9.555922-25.196794-9.490393-34.752716 0.146416L536.272226 661.258931c-3.12797 2.94879-7.209177 4.529669-11.515638 4.455949-4.375062-0.074744-8.459341-1.850161-11.50028-4.99656L127.126626 261.078471c-9.431008-9.759675-24.986897-10.026909-34.747596-0.597949C87.499192 265.195514 84.991697 271.443262 84.883165 277.730942z"
        fill="#272536"
        p-id="5981"
      ></path>
    </svg>
  );
};

let IconArrayUp = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4891"
      width="20"
      height="20"
    >
      <path
        d="M478.08 222.08L71.04 629.376a48 48 0 0 0 67.84 67.84L512 323.904l373.376 373.312a48 48 0 0 0 67.84-67.84L545.92 222.08a48 48 0 0 0-67.84 0z"
        fill="#666666"
        p-id="4892"
      ></path>
    </svg>
  );
};

export default DemoModule;
