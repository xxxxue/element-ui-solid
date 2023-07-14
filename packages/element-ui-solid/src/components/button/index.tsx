import clsx from "clsx";
import { Component, JSX, ParentComponent, Show, createMemo, useContext } from "solid-js";
import { useDefaultProps } from "../../utils";
import { ElementContext, ElFormContext, ElFormItemContext } from "../context";
import {StyledButton} from "./style";

export interface IButtonProps {
  /**
   * 类型
   * @default  default
   */
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info" | "text";

  /**
   * 尺寸
   * @default undefined
   */
  size?: "medium" | "small" | "mini";

  /** 图标 */
  icon?: string;

  /**
   * @default button
   */
  nativeType?: "submit" | "reset" | "button";

  /**
   * 加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 朴素按钮
   * @default false
   */
  plain?: boolean;
  /**
   * 默认聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 圆角按钮
   * @default
   */
  round?: boolean;
  /**
   * 圆形按钮
   * @default
   */
  circle?: boolean;
  children?: JSX.Element;
  /**
   * 点击事件
   */
  onClick?: () => void;
  class?: string;
  style?: JSX.CSSProperties;
}

export let Button: Component<IButtonProps> = (inPorps) => {
  let props = useDefaultProps(inPorps, {
    type: "default",
    nativeType: "button",
    loading: false,
    disabled: false,
    plain: false,
    autofocus: false,
    round: false,
    circle: false,
  });

  let elementContext = useContext(ElementContext);
  let formContext = useContext(ElFormContext);
  let formItemContext = useContext(ElFormItemContext);
  let buttonSize = createMemo(() => {
    return props.size || formItemContext?.elFormItemSize || elementContext.size;
  });
  let buttonDisabled = createMemo(() => {
    return inPorps.disabled != undefined ? props.disabled : formContext.disabled;
  });
  return (
    <>
      <StyledButton
        style={props.style}
        disabled={props.loading}
        class={clsx(
          props.class,
          "el-button",

          props.type ? "el-button--" + props.type : "",
          buttonSize() ? "el-button--" + buttonSize() : "",
          {
            "is-disabled": buttonDisabled(),
            "is-loading": props.loading,
            "is-plain": props.plain,
            "is-round": props.round,
            "is-circle": props.circle,
          }
        )}
        type={props.nativeType}
        onClick={props.onClick}
      >
        <Show when={props.loading}>
          <i class="el-icon-loading"></i>
        </Show>
        <Show when={props.icon && !props.loading}>
          <i class={props.icon}></i>
        </Show>
        <Show when={props.children}>
          <span>{props.children}</span>
        </Show>
      </StyledButton>
    </>
  );
};

export let ButtonGroup: ParentComponent = (props) => {
  return <div class="el-button-group">{props.children}</div>;
};
