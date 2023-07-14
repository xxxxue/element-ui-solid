import { Accessor, JSX, ParentComponent, createMemo } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledAside, StyledContainer, StyledFooter, StyledHeader, StyledMain } from "./style";

export interface IContainerProps {
  direction?: "vertical" | "horizontal";
  style?: JSX.CSSProperties;
  class?: string;
}
export let Container: ParentComponent<IContainerProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  let isVertical = createMemo(() => {
    if (props.direction === "vertical") {
      return true;
    } else if (props.direction === "horizontal") {
      return false;
    }

    // 嵌套了 style-components, 所以需要 "()"
    return props.children
      ? (props?.children as unknown as Array<() => HTMLElement>)?.some((item) => {
          return item?.()?.localName == "header" || item?.()?.localName == "footer";
        })
      : false;
  });

  return (
    <>
      <StyledContainer
        style={props.style}
        class={clsx(props.class, "el-container", { "is-vertical": isVertical() })}
      >
        {props.children}
      </StyledContainer>
    </>
  );
};

export interface IHeaderProps {
  style?: JSX.CSSProperties;
  class?: string;
}
export let Header: ParentComponent<IHeaderProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  return (
    <>
      <StyledHeader class={clsx(props.class, "el-header")} style={props.style}>
        {props.children}
      </StyledHeader>
    </>
  );
};

export interface IAsideProps {
  style?: JSX.CSSProperties;
  class?: string;
}
export let Aside: ParentComponent<IAsideProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  return (
    <>
      <StyledAside class={clsx(props.class, "el-aside")} style={props.style}>
        {props.children}
      </StyledAside>
    </>
  );
};

export interface IMainProps {
  style?: JSX.CSSProperties;
  class?: string;
}
export let Main: ParentComponent<IMainProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  return (
    <>
      <StyledMain class={clsx(props.class, "el-main")} style={props.style}>
        {props.children}
      </StyledMain>
    </>
  );
};

export interface IFooterProps {
  style?: JSX.CSSProperties;
  class?: string;
}
export let Footer: ParentComponent<IFooterProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  return (
    <>
      <StyledFooter class={clsx(props.class, "el-footer")} style={props.style}>
        {props.children}
      </StyledFooter>
    </>
  );
};
