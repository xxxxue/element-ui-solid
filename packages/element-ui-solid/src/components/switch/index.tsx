import {
  ParentComponent,
  Show,
  createEffect,
  createMemo,
  createSignal,
  onMount,
  useContext,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { ElFormContext, ElFormItemContext } from "../context";
import { StyledSwitch } from "./style";

export interface ISwitchProps {
  value?: boolean | string | number;
  disabled?: boolean;
  width?: number;
  activeIconClass?: string;
  inactiveIconClass?: string;
  activeText?: string;
  inactiveText?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeValue?: boolean | string | number;
  inactiveValue?: boolean | string | number;
  name?: string;
  validateEvent?: boolean;
  id?: string;
  onInput?: (v: any) => void;
  onChange?: (v: any) => void;
}
export let Switch: ParentComponent<ISwitchProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    value: false,
    disabled: false,
    width: 40,
    activeIconClass: "",
    inactiveIconClass: "",
    activeColor: "",
    inactiveColor: "",
    activeValue: true,
    inactiveValue: false,
    name: "",
    validateEvent: true,
  });
  const [coreWidth, setCoreWidth] = createSignal<number>(props.width);

  let elFormContext = useContext(ElFormContext);
  let elFormItemContext = useContext(ElFormItemContext);

  let inputRef: HTMLInputElement | undefined = undefined;

  let coreRef: HTMLSpanElement | undefined = undefined;

  onMount(() => {
    if (!~[props.activeValue, props.inactiveValue].indexOf(props.value)) {
      props.onInput?.(props.inactiveValue);
    }
  });

  let checked = createMemo(() => {
    return props.value === props.activeValue;
  });

  let switchDisabled = createMemo(() => {
    return props.disabled || elFormContext.disabled;
  });

  createEffect(() => {
    if (inputRef) {
      inputRef.checked = checked();
    }
  });

  createEffect(() => {
    if (props.activeColor || props.inactiveColor) {
      setBackgroundColor();
    }
    if (props.validateEvent) {
      elFormItemContext?.elFormChange?.(props.value);
    }
  });

  let handleChange = () => {
    let val = checked() ? props.inactiveValue : props.activeValue;

    props.onInput?.(val);
    props.onChange?.(val);

    // $nextTick
    if (inputRef) {
      inputRef.checked = checked();
    }
  };

  let setBackgroundColor = () => {
    let newColor = checked() ? props.activeColor : props.inactiveColor;
    if (coreRef) {
      coreRef.style.borderColor = newColor;
      coreRef.style.backgroundColor = newColor;
    }
  };

  let switchValue = () => {
    !switchDisabled() && handleChange();
  };

  onMount(() => {
    setCoreWidth(props.width || 40);
    if (props.activeColor || props.inactiveColor) {
      setBackgroundColor();
    }
    if (inputRef) {
      inputRef.checked = checked();
    }
  });

  let focus = () => {
    if (inputRef) {
      inputRef.focus();
    }
  };

  return (
    <>
      <StyledSwitch
        class={clsx("el-switch", {
          "is-disabled": switchDisabled(),
          "is-checked": checked(),
        })}
        role="switch"
        aria-checked={checked()}
        aria-disabled={switchDisabled()}
        onClick={(e) => {
          e.preventDefault();
          switchValue();
        }}
      >
        <input
          class="el-switch__input"
          type="checkbox"
          onChange={handleChange}
          ref={(r) => {
            inputRef = r;
          }}
          id={props.id}
          name={props.name}
          true-value={props.activeValue}
          false-value={props.inactiveValue}
          disabled={switchDisabled()}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              switchValue();
            }
          }}
        />
        <Show when={props.inactiveIconClass || props.inactiveText}>
          <span
            class={clsx("el-switch__label", "el-switch__label--left", {
              "is-active": !checked(),
            })}
          >
            <Show when={props.inactiveIconClass}>
              <i class={props.inactiveIconClass}></i>
            </Show>

            <Show when={!props.inactiveIconClass && props.inactiveText}>
              <span aria-hidden={checked()}>{props.inactiveText}</span>
            </Show>
          </span>
        </Show>

        <span
          class="el-switch__core"
          ref={(r) => (coreRef = r)}
          style={{
            width: coreWidth() + "px",
          }}
        ></span>

        <Show when={props.activeIconClass || props.activeText}>
          <span
            class={clsx("el-switch__label", "el-switch__label--right", {
              "is-active": checked(),
            })}
          >
            <Show when={props.activeIconClass}>
              <i class={props.activeIconClass}></i>
            </Show>
            <Show when={!props.activeIconClass && props.activeText}>
              <span aria-hidden={!checked()}>{props.activeText}</span>
            </Show>
          </span>
        </Show>
      </StyledSwitch>
    </>
  );
};
