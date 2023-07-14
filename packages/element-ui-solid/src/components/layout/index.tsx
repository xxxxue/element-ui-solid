import { JSX, ParentComponent, createMemo, useContext, createContext } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledCol, StyledColGlobal, StyledRow } from "./style";

export interface ISpanOffset {
  span: number;
  offset: number;
}

export interface IColProps {
  span?: number;
  tag?: string;
  offset?: number;
  pull?: number;
  push?: number;
  xs?: number | ISpanOffset;
  sm?: number | ISpanOffset;
  md?: number | ISpanOffset;
  lg?: number | ISpanOffset;
  xl?: number | ISpanOffset;
  style?: string | JSX.CSSProperties;
  class?: string;
}
export let Col: ParentComponent<IColProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    span: 24,
    offset: 0,
    push: 0,
    pull: 0,
    tag: "div",
  });

  let row = useContext(RowContext);

  let gutter = createMemo(() => {
    return row;
  });

  let style = createMemo(() => {
    let style: JSX.CSSProperties = {};

    if (gutter()) {
      style["padding-left"] = gutter() / 2 + "px";
      style["padding-right"] = style["padding-left"];
    }
    return style;
  });

  let classList = createMemo(() => {
    let classList = [];

    classList.push(`el-col-${props.span}`);
    classList.push(`el-col-offset-${props.offset}`);
    classList.push(`el-col-pull-${props.pull}`);
    classList.push(`el-col-push-${props.push}`);

    if (typeof props.xs === "number") {
      classList.push(`el-col-xs-${props.xs}`);
    } else if (typeof props.xs === "object") {
      classList.push(`el-col-xs-offset-${props.xs.offset}`);
      classList.push(`el-col-xs-${props.xs.span}`);
    }

    if (typeof props.sm === "number") {
      classList.push(`el-col-sm-${props.sm}`);
    } else if (typeof props.sm === "object") {
      classList.push(`el-col-sm-offset-${props.sm.offset}`);
      classList.push(`el-col-sm-${props.sm.span}`);
    }

    if (typeof props.md === "number") {
      classList.push(`el-col-md-${props.md}`);
    } else if (typeof props.md === "object") {
      classList.push(`el-col-md-offset-${props.md.offset}`);
      classList.push(`el-col-md-${props.md.span}`);
    }

    if (typeof props.lg === "number") {
      classList.push(`el-col-lg-${props.lg}`);
    } else if (typeof props.lg === "object") {
      classList.push(`el-col-lg-offset-${props.lg.offset}`);
      classList.push(`el-col-lg-${props.lg.span}`);
    }

    if (typeof props.xl === "number") {
      classList.push(`el-col-xl-${props.xl}`);
    } else if (typeof props.xl === "object") {
      classList.push(`el-col-xl-offset-${props.xl.offset}`);
      classList.push(`el-col-xl-${props.xl.span}`);
    }

    return classList.join(" ");
  });

  return (
    <>
      <StyledColGlobal />
      <StyledCol
        as={props.tag}
        class={clsx(props.class, "el-col", classList())}
        style={style()}
        children={props.children}
      />
    </>
  );
};

export interface IRowProps {
  tag?: string;
  gutter?: number;
  type?: string;
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  align?: "top" | "middle" | "bottom";
  class?: string;
}
export let RowContext = createContext<number>(0);
export let Row: ParentComponent<IRowProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    justify: "start",
    tag: "div",
    gutter: 0,
  });

  let style = createMemo(() => {
    let ret: JSX.CSSProperties = {};
    if (props.gutter) {
      ret["margin-left"] = `-${props.gutter / 2}px`;
      ret["margin-right"] = ret["margin-left"];
    }
    return ret;
  });

  return (
    <RowContext.Provider value={props.gutter}>
      <StyledRow
        as={props.tag}
        class={clsx(
          props.class,
          "el-row",
          props.justify !== "start" ? `is-justify-${props.justify}` : "",
          props.align ? `is-align-${props.align}` : "",
          { "el-row--flex": props.type === "flex" }
        )}
        style={style()}
        children={props.children}
      />
    </RowContext.Provider>
  );
};
