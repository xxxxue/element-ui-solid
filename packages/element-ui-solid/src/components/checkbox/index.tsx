import {
  Accessor,
  Match,
  ParentComponent,
  Show,
  Switch,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  useContext,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { ElFormContext, ElFormItemContext, ElementContext } from "../context";
import { StyledCheckbox, StyledCheckboxGroup } from "./style";

type MyHTMLInputEvent = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

export interface ICheckBoxProps {
  /** 配合CheckboxGroup来定义选中后的值 */
  value?: boolean | string | number;
  /** 不确定状态框中是一条横线(常用来做全选功能)(确定状态是✔,取消状态是空)*/
  indeterminate?: boolean;
  disabled?: boolean;
  /** 选中状态,用于单个多选框 */
  checked?: boolean;
  name?: string;
  id?: string;
  border?: boolean;
  size?: "medium" | "small" | "mini";
  onChange?: (e: MyHTMLInputEvent) => void;
}

export let Checkbox: ParentComponent<ICheckBoxProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    disabled: false,
    border: false,
    checked: false,
    indeterminate: false,
  });

  const [focus, setFocus] = createSignal<boolean>(false);

  let elFormContext = useContext(ElFormContext);
  let elFormItemContext = useContext(ElFormItemContext);
  let elCheckBoxGroupContext = useContext(ElCheckBoxGroupContext);
  let elementContext = useContext(ElementContext);

  let isChecked = createMemo(() => {
    let temChecked = props.checked;
    if (elCheckBoxGroupContext.isGroup) {
      return elCheckBoxGroupContext.value().includes(props.value) || temChecked;
    } else {
      return temChecked;
    }
  });

  let isDisabled = createMemo(() => {
    let temDisabled = props.disabled || elFormContext.disabled;
    if (elCheckBoxGroupContext.isGroup) {
      return elCheckBoxGroupContext.disabled || temDisabled;
    } else {
      return temDisabled;
    }
  });

  let elFormItemSize = createMemo(() => {
    return elFormItemContext?.elFormItemSize;
  });

  let checkboxSize = createMemo(() => {
    let temCheckboxSize = props.size || elFormItemSize() || elementContext.size;
    if (elCheckBoxGroupContext.isGroup) {
      return elCheckBoxGroupContext.checkboxGroupSize() || temCheckboxSize;
    } else {
      return temCheckboxSize;
    }
  });

  let handleChange = (e: MyHTMLInputEvent) => {
    props.onChange?.(e);

    // $nextTick

    if (elCheckBoxGroupContext.isGroup) {
      elCheckBoxGroupContext.onChange?.(e);
    }
  };
  createEffect(() => {
    elFormItemContext?.elFormChange?.(props.value);
  });

  return (
    <>
      <StyledCheckbox
        class={clsx(
          "el-checkbox",
          props.border && checkboxSize() ? "el-checkbox--" + checkboxSize() : "",
          {
            "is-disabled": isDisabled(),
            "is-bordered": props.border,
            "is-checked": isChecked(),
          }
        )}
        id={props.id}
      >
        <span
          class={clsx("el-checkbox__input", {
            "is-disabled": isDisabled(),
            "is-checked": isChecked(),
            "is-indeterminate": props.indeterminate,
            "is-focus": focus(),
          })}
        >
          <span class="el-checkbox__inner"></span>

          <input
            type="checkbox"
            disabled={isDisabled()}
            {...(props.value ? { value: props.value as any } : {})}
            name={props.name}
            onChange={handleChange}
            checked={isChecked()}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            class="el-checkbox__original"
          />
        </span>
        <Show when={props.children || props.value}>
          <span class="el-checkbox__label">
            <Switch fallback={props.value}>
              <Match when={props.children}>{props.children}</Match>
            </Switch>
          </span>
        </Show>
      </StyledCheckbox>
    </>
  );
};

export let ElCheckBoxGroupContext = createContext<{
  isGroup: boolean;
  value: Accessor<any[]>;
  disabled: boolean;
  checkboxGroupSize: Accessor<string>;
  min?: any;
  max?: any;
  onInput?: (v: any) => void;
  onChange?: (e: MyHTMLInputEvent) => void;
}>({
  value: () => [],
  checkboxGroupSize: () => "",
  isGroup: false,
  disabled: false,
});
export interface ICheckBoxGroupProps {
  value?: (boolean | string | number)[];
  disabled?: boolean;
  min?: number;
  max?: number;
  size?: "medium" | "small" | "mini";
  fill?: string;
  textColor?: string;
  onChange?: (v: any) => void;
}
export let CheckboxGroup: ParentComponent<ICheckBoxGroupProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    disabled: false,
  });
  let elFormItemContext = useContext(ElFormItemContext);
  let elementContext = useContext(ElementContext);

  let elFormItemSize = createMemo(() => {
    return elFormItemContext?.elFormItemSize;
  });

  let checkboxGroupSize = createMemo(() => {
    return props.size || elFormItemSize() || elementContext.size;
  });

  createEffect(() => {
    elFormItemContext?.elFormChange?.(props.value);
  });

  const [list, setList] = createSignal<any[]>(props.value || []);

  let handleChange = (e: MyHTMLInputEvent) => {
    let checked = e.target.checked;
    let value = e.target.value;
    if (checked) {
      setList([...list(), value]);
    } else {
      setList([...list().filter((a) => a != value)]);
    }
    props.onChange?.(list());
  };

  return (
    <>
      <ElCheckBoxGroupContext.Provider
        value={{
          isGroup: true,
          disabled: props.disabled,
          min: props.min,
          max: props.max,
          value: list,
          onChange: handleChange,
          checkboxGroupSize: checkboxGroupSize,
        }}
      >
        <StyledCheckboxGroup class="el-checkbox-group">{props.children}</StyledCheckboxGroup>
      </ElCheckBoxGroupContext.Provider>
    </>
  );
};
