import { Match, ParentComponent, Show, Switch, createMemo, createSignal, onMount } from "solid-js";
import { useCleanup, useDefaultProps, useEffectWatch } from "../../utils";
import clsx from "clsx";
import { Portal } from "solid-js/web";
import { StyledDrawer } from "./style";

export interface IDrawerProps {
  appendToBody?: boolean;
  onBeforeClose?: (v: any) => void;
  customClass?: string;
  closeOnPressEscape?: boolean;
  destroyOnClose?: boolean;
  modal?: boolean;
  direction?: "ltr" | "rtl" | "ttb" | "btt";
  modalAppendToBody?: boolean;
  showClose?: boolean;
  size?: string | number;
  title?: string;
  visible?: boolean;
  wrapperClosable?: boolean;
  withHeader?: boolean;

  onOpened?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
  onClose?: () => void;
  onVisibleChange?: (v: boolean) => void;
}
export let Drawer: ParentComponent<IDrawerProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    appendToBody: false,
    customClass: "",
    closeOnPressEscape: true,
    destroyOnClose: false,
    modal: true,
    direction: "rtl",
    modalAppendToBody: true,
    showClose: true,
    size: "30%",
    title: "",
    wrapperClosable: true,
    withHeader: true,
  });

  let isHorizontal = createMemo(() => {
    return props.direction === "rtl" || props.direction === "ltr";
  });

  let drawerSize = createMemo(() => {
    return typeof props.size === "number" ? `${props.size}px` : props.size;
  });

  const [closed, setClosed] = createSignal<boolean>(false);

  useEffectWatch(
    () => props.visible,
    () => {
      if (props.visible) {
        setClosed(false);
        props.onOpen?.();
        setRendered(true)
      } else {
        if (!closed()) {
          props.onClose?.();
          if (props.destroyOnClose === true) {
            setRendered(false);
          }
        }
      }
    }
  );

  const [rendered, setRendered] = createSignal<boolean>(false);

  let closeDrawer = () => {
    props.onClose?.();
  };

  return (
    <>
      <Show when={props.visible}>
        <Portal >
          <StyledDrawer class="el-drawer__wrapper" tabindex="-1">
            <div
              class={clsx("el-drawer__container", {
                 "el-drawer__open": props.visible,
              })}
              role="document"
              tabindex="-1"
            >
              <div onClick={() => closeDrawer()} class="v-modal" tabindex="0"></div>

              <div
                class={clsx("el-drawer", props.direction, props.customClass)}
                style={isHorizontal() ? { width: drawerSize() } : { height: drawerSize() }}
                role="dialog"
                tabindex="-1"
              >
                <Show when={props.withHeader}>
                  <header class="el-drawer__header">
                    <span>{props.title}</span>

                    <Show when={props.showClose}>
                      <button class="el-drawer__close-btn" type="button" onClick={closeDrawer}>
                        <i class="el-dialog__close el-icon el-icon-close"></i>
                      </button>
                    </Show>
                  </header>
                </Show>
                <Show when={rendered()}>
                  <section class="el-drawer__body">{props.children}</section>
                </Show>
              </div>
            </div>
          </StyledDrawer>
        </Portal>
      </Show>
    </>
  );
};
