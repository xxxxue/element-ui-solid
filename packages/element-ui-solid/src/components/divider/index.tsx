import { ParentComponent, Show } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledDivider } from "./style";

export interface IDividerProps {
  direction?: "horizontal" | "vertical";
  contentPosition?: "left" | "center" | "right";
}
export let Divider: ParentComponent<IDividerProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    direction: "horizontal",
    contentPosition: "center",
  });

  return (
    <>
      <StyledDivider class={clsx("el-divider", `el-divider--${props.direction}`)}>
        <Show when={props.children && props.direction !== "vertical"}>
          <div class={clsx("el-divider__text", `is-${props.contentPosition}`)}>
            {props.children}
          </div>
        </Show>
      </StyledDivider>
    </>
  );
};
