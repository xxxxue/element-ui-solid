import { createContext } from "solid-js";

export let ElFormContext = createContext<{
  disabled: boolean;
  statusIcon: boolean;
}>({
  disabled: false,
  statusIcon: false,
});

export let ElFormItemContext = createContext<{
  elFormItemSize?: string;
  elFormChange?: (v: any) => void;
  validateState?: "";
  elFormBlur?: (v: any) => void;
}>();

export let ElementContext = createContext<{
  size: string;
  zIndex: number;
}>({
  size: "",
  zIndex: 2000,
});
