import clsx from "clsx";
import { JSX, ParentComponent, Show, createSignal } from "solid-js";
import { useDefaultProps } from "../../utils";
import { StyledAlert } from "./style";

export interface IAlertProps {
  title?: JSX.Element;
  type?: "success" | "warning" | "info" | "error";
  closable?: boolean;
  closeText?: string;
  showIcon?: boolean;
  center?: boolean;
  effect?: "light" | "dark";
  onClose?: () => void;
}
export let Alert: ParentComponent<IAlertProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    type: "info",
    closable: true,
    center: false,
    showIcon: false,
    effect: "light",
    closeText: "",
  });
  const [visible, setVisible] = createSignal<boolean>(true);

  let handleClose = () => {
    setVisible(false);
    props.onClose?.();
  };
  return (
    <>
      <Show when={visible}>
        <StyledAlert
          class={clsx(
            "el-alert",
            `el-alert--${props.type}`,
            props.center ? "is-center" : "",
            `is-${props.effect}`
          )}
          role="alert"
        >
          <Show when={props.showIcon}>
            <i
              class={clsx(
                "el-alert__icon",
                `el-icon-${props.type}`,
                props.children ? "is-big" : ""
              )}
            ></i>
          </Show>

          <div class="el-alert__content">
            <Show when={props.title}>
              <span class={clsx("el-alert__title", props.children ? "is-blod" : "")}>
                {props.title}
              </span>
            </Show>

            <Show when={props.children}>
              <p class="el-alert__description">{props.children}</p>
            </Show>

            <Show when={props.closable}>
              <i
                class={clsx("el-alert__closebtn", {
                  "is-customed": props.closeText !== "",
                  "el-icon-close": props.closeText === "",
                })}
                onClick={handleClose}
              >
                {props.closeText}
              </i>
            </Show>
          </div>
        </StyledAlert>
      </Show>
    </>
  );
};
