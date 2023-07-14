import { JSX, ParentComponent, Show } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledCard } from "./style";

export interface ICardProps {
  header?: JSX.Element;
  headerStyle?: JSX.CSSProperties;
  headerClass?: string;

  bodyClass?: string;
  bodyStyle?: JSX.CSSProperties;

  cardStyle?: JSX.CSSProperties;
  cardClass?: string;

  shadow?: "always" | "hover" | "never";
}
export let Card: ParentComponent<ICardProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    shadow: "always",
  });

  return (
    <StyledCard
      class={clsx("el-card", props.cardClass, `is-${props.shadow}-shadow`)}
      style={props.cardStyle}
    >
      <Show when={props.header}>
        <div class={clsx("el-card__header", props.headerClass)} style={props.headerStyle}>
          {props.header}
        </div>
      </Show>
      <div class={clsx("el-card__body", props.bodyClass)} style={props.bodyStyle}>
        {props.children}
      </div>
    </StyledCard>
  );
};
