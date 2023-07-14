import { JSX, ParentComponent, Show } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledLink } from "./style";

export interface ILinkProps {
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: string;
  iconJsx?: string | JSX.Element;
  onClick?: () => void;
  target?: string;
}
export let Link: ParentComponent<ILinkProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    type: "default",
    underline: true,
    target:'_blank'
  });

  let handleClick = () => {
    if (!props.disabled && !props.href) {
      props.onClick?.();
    }
  };

  return (
    <>
      <StyledLink
        target={props.target}
        class={clsx(
          "el-link",
          props.type ? `el-link--${props.type}` : "",
          props.disabled && "is-disabled",
          props.underline && !props.disabled && "is-underline"
        )}
        href={props.disabled ? undefined : props.href}
        onClick={handleClick}
      >
        <Show when={props.icon}>
          <i class={props.icon}></i>
        </Show>
        <Show when={props.children}>
          <span class="el-link--inner">{props.children}</span>
        </Show>
        <Show when={props.iconJsx}>{props.iconJsx}</Show>
      </StyledLink>
    </>
  );
};
