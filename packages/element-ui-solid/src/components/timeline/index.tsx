import { JSX, ParentComponent, Show, children, createMemo } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledTimeline } from "./style";

export interface ITimelineProps {
  reverse?: boolean;
}
export let Timeline: ParentComponent<ITimelineProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    reverse: false,
  });

  let child = children(() => props.children);

  let wrapperChild = () => {
    let arr = Array.from(child.toArray());
    if (Array.isArray(arr) && props.reverse) {
      arr.reverse();
    }
    return arr;
  };

  return (
    <StyledTimeline
      class={clsx("el-timeline", {
        "is-reverse": props.reverse,
      })}
    >
      {wrapperChild()}
    </StyledTimeline>
  );
};

export interface ITimelineItemProps {
  timestamp?: string;
  hideTimestamp?: boolean;
  placement?: "top" | "bottom";
  type?: "primary" | "success" | "warning" | "danger" | "info";
  color?: string;
  size?: "normal" | "large";
  icon?: string;
  dot?: JSX.Element;
}
export let TimelineItem: ParentComponent<ITimelineItemProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    hideTimestamp: false,
    placement: "bottom",
    size: "normal",
  });

  return (
    <>
      <li class="el-timeline-item">
        <div class="el-timeline-item__tail"></div>

        <div
          v-if="!$slots.dot"
          class={clsx(
            "el-timeline-item__node",
            `el-timeline-item__node--${props.size || ""}`,
            `el-timeline-item__node--${props.type || ""}`
          )}
          style={{ "background-color": props.color }}
        >
          <Show when={props.icon}>
            <i v-if="icon" class={clsx("el-timeline-item__icon", props.icon)}></i>
          </Show>
        </div>

        <Show when={props.dot}>
          <div class="el-timeline-item__dot">{props.dot}</div>
        </Show>

        <div class="el-timeline-item__wrapper">
          <Show when={!props.hideTimestamp && props.placement === "top"}>
            <div class="el-timeline-item__timestamp is-top">{props.timestamp}</div>
          </Show>

          <div class="el-timeline-item__content">{props.children}</div>

          <Show when={!props.hideTimestamp && props.placement === "bottom"}>
            <div class="el-timeline-item__timestamp is-bottom">{props.timestamp}</div>
          </Show>
        </div>
      </li>
    </>
  );
};
