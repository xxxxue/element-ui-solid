import clsx from "clsx";
import { ParentComponent, Show, createMemo } from "solid-js";
import {StyledBadge} from "./style";

export interface IBadgeProps {
  value?: string | number;
  max?: number;
  isDot?: boolean;
  hidden?: boolean;
  type?: "primary" | "success" | "warning" | "info" | "danger";
}
export let Badge: ParentComponent<IBadgeProps> = (props) => {
  let content = createMemo(() => {
    if (props.isDot) {
      return;
    }

    let value = props.value;
    let max = props.max;
    if (typeof value === "number" && typeof max === "number") {
      return max < value ? `${max}+` : value;
    }
    return value;
  });
  return (
    <StyledBadge class="el-badge">
      {props.children}
      <Show when={!props.hidden && (content() || content() === 0 || props.isDot)}>
        <sup
          class={clsx("el-badge__content", props.type && "el-badge__content--" + props.type, {
            "is-fixed": props.children,
            "is-dot": props.isDot,
          })}
        >
          {content()}
        </sup>
      </Show>
    </StyledBadge>
  );
};
