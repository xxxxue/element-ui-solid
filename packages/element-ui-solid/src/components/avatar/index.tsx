import { JSX, Match, ParentComponent, Switch, createSignal } from "solid-js";
import { useDefaultProps } from "../../utils";
import { StyledAvatar } from "./style";

export interface IAvatarProps {
  size?: "large" | "medium" | "small" | number;
  shape?: "circle" | "square";
  icon?: string;
  src?: string;
  alt?: string;
  srcSet?: string;
  onError?: (
    e: Event & {
      currentTarget: HTMLImageElement;
      target: Element;
    }
  ) => boolean;
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}
export let Avatar: ParentComponent<IAvatarProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    size: "large",
    shape: "circle",
    fit: "cover",
  });

  const [isImageExist, setIsImageExist] = createSignal<boolean>(true);

  let avatarClass = () => {
    let classList = ["el-avatar"];
    if (props.size && typeof props.size === "string") {
      classList.push(`el-avatar--${props.size}`);
    }

    if (props.icon) {
      classList.push("el-avatar--icon");
    }

    if (props.shape) {
      classList.push(`el-avatar--${props.shape}`);
    }

    return classList.join(" ");
  };

  let sizeStyle: JSX.CSSProperties =
    typeof props.size === "number"
      ? {
          height: `${props.size}px`,
          width: `${props.size}px`,
          "line-height": `${props.size}px`,
        }
      : {};

  return (
    <>
      <StyledAvatar class={avatarClass()} style={sizeStyle}>
        <Switch fallback={props.children}>
          <Match when={isImageExist() && props.src}>
            <img
              src={props.src}
              onError={(e) => {
                let errorFlag = props.onError ? props.onError(e) : undefined;
                if (errorFlag !== false) {
                  setIsImageExist(false);
                }
              }}
              alt={props.alt}
              srcSet={props.srcSet}
              style={{ "object-fit": props.fit }}
            />
          </Match>
          <Match when={props.icon}>
            <i class={props.icon} />
          </Match>
        </Switch>
      </StyledAvatar>
    </>
  );
};
