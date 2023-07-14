import {
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  MergeProps,
  createContext,
  onMount,
  onCleanup,
  on,
} from "solid-js";

type DefaultProps<T, K extends keyof T> = MergeProps<[Required<Pick<T, K>>, T]>;
export function useDefaultProps<T, K extends keyof T>(
  props: T,
  defaults: Required<Pick<T, K>>
): DefaultProps<T, K> {
  // eslint-disable-next-line solid/reactivity
  return mergeProps(defaults, props);
}

export let useState = createSignal;
export let useEffect = createEffect;
export let useMemo = createMemo;
export let useMount = onMount;
export let useCleanup = onCleanup;

type OnParameters<T1, T2> = Parameters<typeof on<T1, T2>>;
export let useEffectWatch = <T1, T2>(
  a: OnParameters<T1, T2>[0],
  b: OnParameters<T1, T2>[1],
  c?: OnParameters<T1, T2>[2]
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createEffect(on(a, b, c));
};

export let useEffectWatchDefer = <T1, T2>(
  a: OnParameters<T1, T2>[0],
  b: OnParameters<T1, T2>[1]
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createEffect(on(a, b, { defer: true }));
};
