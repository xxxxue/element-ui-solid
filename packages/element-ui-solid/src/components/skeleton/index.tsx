import {
  For,
  JSX,
  Match,
  ParentComponent,
  Show,
  Switch,
  createEffect,
  createSignal,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledSkeleton, StyledSkeletonItem } from "./style";

export interface ISkeletonProps {
  animated?: boolean;
  count?: number;
  rows?: number;
  loading?: boolean;
  throttle?: number;
  template?: JSX.Element;
  style?: JSX.CSSProperties;
}
export let Skeleton: ParentComponent<ISkeletonProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    animated: false,
    count: 1,
    rows: 4,
    loading: true,
    throttle: 0,
  });

  const [uiLoading, setUiLoading] = createSignal<boolean>(
    props.throttle <= 0 ? props.loading : false
  );

  let timeoutHandle: any;
  createEffect(() => {
    if (props.throttle <= 0) {
      setUiLoading(props.loading);
      return;
    }

    if (props.loading) {
      clearTimeout(timeoutHandle);
      timeoutHandle = setTimeout(() => {
        setUiLoading(props.loading);
      }, props.throttle);
    } else {
      setUiLoading(props.loading);
    }
  });

  return (
    <>
      <Switch fallback={props.children}>
        <Match when={uiLoading()}>
          <StyledSkeleton
            style={props.style}
            class={clsx("el-skeleton", props.animated ? "is-animated" : "")}
          >
            <For each={Array(props.count)}>
              {() => {
                return (
                  <Show when={props.loading}>
                    <Switch
                      fallback={
                        <For each={Array(props.rows)}>
                          {(_, index) => {
                            return (
                              <SkeletonItem
                                class={clsx({
                                  "el-skeleton__paragraph": index() !== 0,
                                  "is-first": index() === 0,
                                  "is-last": index() === props.rows - 1 && props.rows > 1,
                                })}
                                variant="p"
                              />
                            );
                          }}
                        </For>
                      }
                    >
                      <Match when={props.template}>{props.template}</Match>
                    </Switch>
                  </Show>
                );
              }}
            </For>
          </StyledSkeleton>
        </Match>
      </Switch>
    </>
  );
};



interface ISkeletonItemProps {
    variant?: string;
    class?: string;
    style?: string | JSX.CSSProperties;
  }
  export let SkeletonItem: ParentComponent<ISkeletonItemProps> = (inProps) => {
    let props = useDefaultProps(inProps, {
      variant: "text",
    });
  
    return (
      <>
        <StyledSkeletonItem
          style={props.style}
          class={clsx(props.class, "el-skeleton__item", `el-skeleton__${props.variant}`)}
        >
          <Show when={props.variant === "image"}>
            <SkeletonImgPlaceholder />
          </Show>
        </StyledSkeletonItem>
      </>
    );
  };
  
  export let SkeletonImgPlaceholder = () => {
    return (
      <>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z" />
        </svg>
      </>
    );
  };