import { ParentComponent, Show } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledTag } from "./style";

export interface ITagProps {
  text?: string;
  closable?: boolean;
  type?: "success" | "info" | "warning" | "danger";
  hit?: boolean;
  disableTransitions?: boolean;
  color?: string;
  size?: "medium" | "small" | "mini";
  effect?: "dark" | "light" | "plain";

  onClose?: () => void;
  onClick?: () => void;
}
export let Tag: ParentComponent<ITagProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    effect: "light",
    closable: false,
    disableTransitions: false,
    hit: false,
  });
  return (
    <StyledTag
      class={clsx(
        "el-tag",
        props.type && `el-tag--${props.type}`,
        props.size && `el-tag--${props.size}`,
        props.effect && `el-tag--${props.effect}`,
        props.hit && "is-hit"
      )}
      style={{
        "background-color": props.color,
      }}
      onClick={props.onClick}
    >
      {props.children}
      <Show when={props.closable}>
        <i
          class="el-tag__close el-icon-close"
          onClick={(e) => {
            e.stopPropagation();
            props.onClose?.();
          }}
        ></i>
      </Show>
    </StyledTag>
  );
};
