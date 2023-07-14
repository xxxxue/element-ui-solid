import {
  Accessor,
  JSX,
  ParentComponent,
  Show,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { ElementContext, ElFormContext, ElFormItemContext } from "../context";
import { StyledRadio, StyledRadioButton, StyledRadioGroup } from "./style";

export interface IRadioProps {
  value?: string | number;
  onChange?: (v: string) => void;

  label?: string | number;
  disabled?: boolean;
  name?: string;
  border?: boolean;
  size?: string;
}

export let Radio: ParentComponent<IRadioProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    disabled: false,
    border: false,
  });

  const [focus, setFocus] = createSignal<boolean>(false);

  let elementContext = useContext(ElementContext);
  let radioGroupContext = useContext(RadioGroupContext);
  let formContext = useContext(ElFormContext);
  let formItemContext = useContext(ElFormItemContext);

  let isGroup = () => {
    return radioGroupContext.isGroup;
  };

  let radioSize = () => {
    let temRadioSize = props.size || formItemContext?.elFormItemSize || elementContext.size;
    return isGroup() ? radioGroupContext.radioGroupSize || temRadioSize : temRadioSize;
  };

  let isDisabled = () => {
    if (isGroup()) {
      return radioGroupContext.disabled || props.disabled || formContext.disabled;
    } else {
      return props.disabled || formContext.disabled;
    }
  };

  let getValue = () => {
    if (isGroup()) {
      return radioGroupContext.value();
    } else {
      return props.value;
    }
  };
  let isChecked = () => {
    return getValue() === props.label;
  };
  let tabIndex = () => {
    if (isDisabled()) {
      return -1;
    } else if (isGroup() && isChecked()) {
      return -1;
    } else {
      return 0;
    }
  };

  let handleChange = (v: string) => {
    props.onChange?.(v);
    isGroup() && radioGroupContext.handleChange?.(v);
  };

  let getName = () => {
    if (isGroup()) {
      return radioGroupContext.name || props.name;
    } else {
      return props.name;
    }
  };
  return (
    <>
      <StyledRadio
        class={clsx(
          "el-radio",
          props.border && radioSize() ? "el-radio--" + radioSize() : "",
          { "is-disabled": isDisabled() },
          { "is-focus": focus() },
          { "is-bordered": props.border },
          { "is-checked": isChecked() }
        )}
        role="radio"
        aria-checked={isChecked()}
        aria-disabled={isDisabled()}
        tabindex={tabIndex()}
      >
        <span
          class={clsx("el-radio__input", {
            "is-disabled": isDisabled(),
            "is-checked": isChecked(),
          })}
        >
          <span class="el-radio__inner"></span>
          <input
            class="el-radio__original"
            value={props.label}
            type="radio"
            aria-hidden="true"
            checked={isChecked()}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => {
              handleChange(e.currentTarget.value);
            }}
            name={getName()}
            disabled={isDisabled()}
            tabindex="-1"
            autocomplete="off"
          />
        </span>
        <span class="el-radio__label">
          {props.children}
          <Show when={!props.children}>{props.label}</Show>
        </span>
      </StyledRadio>
    </>
  );
};

interface IRadioButtonProps {
  label?: string;
  disabled?: boolean;
  name?: string;
}
export let RadioButton: ParentComponent<IRadioButtonProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});
  let elementContext = useContext(ElementContext);
  let radioGroupContext = useContext(RadioGroupContext);
  let formContext = useContext(ElFormContext);
  let fromItemContext = useContext(ElFormItemContext);

  const [focus, setFocus] = createSignal<boolean>(false);

  let getValue = () => {
    return radioGroupContext.value();
  };

  let activeStyle = (): JSX.CSSProperties => {
    return {
      "background-color": radioGroupContext.fill || "",
      "border-color": radioGroupContext.fill || "",
      "box-shadow": radioGroupContext.fill ? `-1px 0 0 0 ${radioGroupContext.fill}` : "",
      color: radioGroupContext.textColor || "",
    };
  };

  let formItemSize = () => {
    return fromItemContext?.elFormItemSize;
  };

  let size = () => {
    return radioGroupContext.radioGroupSize || formItemSize() || elementContext.size;
  };

  let isDisabled = () => {
    return props.disabled || radioGroupContext.disabled || formContext.disabled;
  };

  let tabIndex = () => {
    return isDisabled() || (radioGroupContext.isGroup && getValue() !== props.label) ? -1 : 0;
  };

  let handleChange = (v: any) => {
    radioGroupContext.handleChange?.(v);
  };

  let isChecked = () => {
    return getValue() === props.label;
  };

  let isGroup = () => {
    return radioGroupContext.isGroup;
  };
  let getName = () => {
    if (isGroup()) {
      return radioGroupContext.name || props.name;
    } else {
      return props.name;
    }
  };
  return (
    <StyledRadioButton
      class={clsx(
        "el-radio-button",
        size() ? "el-radio-button--" + size() : "",
        { "is-active": isChecked() },
        { "is-disabled": isDisabled() },
        { "is-focus": focus() }
      )}
      role="radio"
      aria-checked={isChecked()}
      aria-disabled={isDisabled()}
      tabindex={tabIndex()}
    >
      <input
        class="el-radio-button__orig-radio"
        value={props.label}
        type="radio"
        checked={isChecked()}
        name={getName()}
        onChange={(e) => {
          handleChange(e.currentTarget.value);
        }}
        disabled={isDisabled()}
        tabindex="-1"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autocomplete="off"
      />
      <span class="el-radio-button__inner" style={isChecked() ? activeStyle() : undefined}>
        {props.children}
        <Show when={!props.children}>{props.label}</Show>
      </span>
    </StyledRadioButton>
  );
};

export let RadioGroupContext = createContext<{
  isGroup: boolean;
  radioGroupSize?: "medium" | "small" | "mini";
  disabled: boolean;
  handleChange?: (v: any) => void;
  value: Accessor<string>;
  fill?: string;
  textColor?: string;
  name?: string;
}>({ isGroup: false, disabled: false, value: () => "" });

interface IRadioGroupProps {
  value: string;
  onChange: (v: string) => void;
  size?: "medium" | "small" | "mini";
  fill?: string;
  textColor?: string;
  disabled?: boolean;
  name?: string;
}

export let RadioGroup: ParentComponent<IRadioGroupProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    disabled: false,
    textColor: "#ffffff",
    fill: "#409EFF",
  });

  return (
    <RadioGroupContext.Provider
      value={{
        fill: props.fill,
        textColor: props.textColor,
        isGroup: true,
        radioGroupSize: props.size,
        disabled: props.disabled,
        value: () => props.value,
        handleChange: props.onChange,
        name: props.name,
      }}
    >
      <StyledRadioGroup class="el-radio-group" role="radiogroup">
        {props.children}
      </StyledRadioGroup>
    </RadioGroupContext.Provider>
  );
};
