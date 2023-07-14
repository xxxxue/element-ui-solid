import { Match, ParentComponent, Show, Switch, createSignal, onCleanup, onMount } from "solid-js";
import { Icon } from "../icon";
import { throttle } from "lodash-es";
import { useDefaultProps } from "../../utils";
import { StyledBacktop } from "./style";
export interface IBacktopProps {
  visibilityHeight?: number;
  target?: string;
  right?: number;
  bottom?: number;
  onClick?: () => void;
}
export let Backtop: ParentComponent<IBacktopProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    visibilityHeight: 200,
    right: 40,
    bottom: 40,
  });

  const cubic = (value: any) => {
    return Math.pow(value, 3);
  };
  const easeInOutCubic = (value: any) => {
    if (value < 0.5) {
      return cubic(value * 2) / 2;
    } else {
      return 1 - cubic((1 - value) * 2) / 2;
    }
  };

  const [visible, setVisible] = createSignal<boolean>(false);
  let el: HTMLElement | null;
  let container: Document | HTMLElement | null;
  let handleClick = () => {
    scrollToTop();
    props.onClick?.();
  };
  let init = () => {
    container = document;
    el = document.documentElement;
    if (props.target) {
      el = document.querySelector(props.target);
      if (!el) {
        throw new Error(`target is not existed: ${props.target}`);
      }
      container = el;
    }
  };
  let onScroll = () => {
    let scrollTop = el?.scrollTop;
    if (scrollTop != undefined && props.visibilityHeight != undefined) {
      setVisible(scrollTop >= props.visibilityHeight);
    }
  };

  let scrollToTop = () => {
    const beginTime = Date.now();
    const beginValue = el!.scrollTop;
    const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500;
      if (progress < 1) {
        el!.scrollTop = beginValue * (1 - easeInOutCubic(progress));
        rAF(frameFunc);
      } else {
        el!.scrollTop = 0;
      }
    };
    rAF(frameFunc);
  };

  let throttledScrollHandler = throttle(onScroll, 300);

  onMount(() => {
    init();
    container?.addEventListener("scroll", throttledScrollHandler);
    onCleanup(() => {
      container?.removeEventListener("scroll", throttledScrollHandler);
    });
  });

  return (
    <Show when={visible()}>
      <StyledBacktop
        onClick={handleClick}
        class="el-backtop"
        style={{
          right: props.right + "px",
          bottom: props.bottom + "px",
        }}
      >
        <Switch fallback={<Icon name="caret-top" />}>
          <Match when={props.children}>{props.children}</Match>
        </Switch>
      </StyledBacktop>
    </Show>
  );
};
