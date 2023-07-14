import { JSX, Match, ParentComponent, Show, Switch, useContext } from "solid-js";
import { useDefaultProps, useEffectWatch, useMemo, useMount, useState } from "../../utils";
import clsx from "clsx";
import { ElFormContext, ElFormItemContext, ElementContext } from "../context";
import { merge } from "lodash-es";
import { isKorean } from "../utils";
import { StyledInput } from "./style";

export interface IInputProps {
  value?: string | number;
  size?: "medium" | "small" | "mini";
  resize?: "none" | "both" | "horizontal" | "vertical";
  form?: string;
  disabled?: boolean;
  readonly?: boolean;
  type?: "text" | "textarea";
  autosize?: boolean | IAutosizeObject;
  autocomplete?: "on" | "off";

  validateEvent?: boolean;
  suffixIcon?: string;
  prefixIcon?: string;
  label?: string;
  clearable?: boolean;
  showPassword?: boolean;
  showWordLimit?: boolean;
  tabindex?: string;

  maxlength?: number;

  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  onCompositionStart?: (e: any) => void;
  onCompositionUpdate?: (e: any) => void;
  onCompositionEnd?: (e: any) => void;
  onInput?: (e: any) => void;
  onChange?: (e: any) => void;
  onClear?: () => void;
  onInputSelect?: (e: any) => void;

  suffix?: JSX.Element;
  prefix?: JSX.Element;
  prepend?: JSX.Element;
  append?: JSX.Element;

  placeholder?: string;
  rows?: number;
}

export interface IAutosizeObject {
  minRows: number;
  maxRows: number;
}

export let Input: ParentComponent<IInputProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    type: "text",
    autosize: false,
    autocomplete: "off",
    validateEvent: true,
    clearable: false,
    showPassword: false,
    showWordLimit: false,
  });

  const [textareaCalcStyle, setTextareaCalcStyle] = useState<any>({});
  const [hovering, setHovering] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const elFormItemContext = useContext(ElFormItemContext);
  const elFormContext = useContext(ElFormContext);
  const elementContext = useContext(ElementContext);

  let _elFormItemSize = useMemo(() => {
    return elFormItemContext?.elFormItemSize;
  });

  let validateState = useMemo((): string => {
    return elFormItemContext?.validateState ?? "";
  });
  let needStatusIcon = useMemo(() => {
    return elFormContext?.statusIcon ?? false;
  });
  let validateIcon = useMemo(() => {
    let state = validateState();
    if (state === "validating") {
      return "el-icon-loading";
    } else if (state === "success") {
      return "el-icon-circle-check";
    } else if (state === "error") {
      return "el-icon-circle-close";
    }
  });
  let textareaStyle = useMemo(() => {
    return merge({}, textareaCalcStyle(), { resize: props.resize });
  });
  let inputSize = useMemo(() => {
    return props.size || _elFormItemSize() || elementContext.size;
  });
  let inputDisabled = useMemo(() => {
    return props.disabled || elFormContext.disabled;
  });

  let nativeInputValue = useMemo(() => {
    return props.value === null || props.value === undefined ? "" : String(props.value);
  });

  let showClear = useMemo(() => {
    return (
      props.clearable &&
      !inputDisabled() &&
      !props.readonly &&
      nativeInputValue() &&
      (focused() || hovering())
    );
  });
  let showPwdVisible = useMemo(() => {
    return (
      props.showPassword &&
      !inputDisabled() &&
      !props.readonly &&
      (!!nativeInputValue() || focused())
    );
  });

  let isWordLimitVisible = useMemo(() => {
    return (
      props.showWordLimit &&
      props.maxlength &&
      (props.type === "text" || props.type === "textarea") &&
      !inputDisabled() &&
      !props.readonly &&
      !props.showPassword
    );
  });

  let upperLimit = useMemo(() => {
    return props?.maxlength ?? 0;
  });
  let textLength = useMemo(() => {
    if (typeof props.value === "number") {
      return String(props.value).length;
    }
    return (props.value || "").length;
  });

  let input: HTMLInputElement;
  let textarea: HTMLTextAreaElement;

  let root: HTMLDivElement;
  let inputExceed = useMemo(() => {
    return isWordLimitVisible() && textLength() > upperLimit();
  });
  let getInput = () => {
    return input || textarea;
  };
  let focus = () => {
    getInput().focus();
  };
  let blur = () => {
    getInput().blur();
  };
  let select = () => {
    getInput().select();
  };
  let handleBlur = (event: any) => {
    setFocused(false);
    props.onBlur?.(event);
    if (props.validateEvent) {
      elFormItemContext?.elFormBlur?.(props.value);
    }
  };
  let resizeTextarea = () => {
    // TODO:
  };

  let setNativeInputValue = () => {
    let input = getInput();
    if (!input) {
      return;
    }

    if (input.value === nativeInputValue()) {
      return;
    }

    input.value = nativeInputValue();
  };

  let handleFocus = (event: any) => {
    setFocused(true);
    props.onFocus?.(event);
  };

  let handleCompositionStart = (event: any) => {
    props.onCompositionStart?.(event);
    setIsComposing(true);
  };
  let handleCompositionUpdate = (event: any) => {
    props.onCompositionUpdate?.(event);
    let text = event.target.value;
    const lastCharacter = text[text.length - 1] || "";
    setIsComposing(!isKorean(lastCharacter));
  };
  let handleCompositionEnd = (event: any) => {
    props.onCompositionEnd?.(event);

    if (isComposing()) {
      setIsComposing(false);
      handleInput(event);
    }
  };
  let handleInput = (event: any) => {
    if (isComposing()) {
      return;
    }

    if (event.target.value === nativeInputValue()) {
      return;
    }

    props.onInput?.(event.target.value);

    //setNativeInputValue();
  };

  let handleChange = (event: any) => {
    props.onChange?.(event.target.value);
  };

  let calcIconOffset = (place: string) => {
    let elList: HTMLElement[] = [].slice.call(root.querySelectorAll(`.el-input__${place}`) || []);
    if (!elList.length) {
      return;
    }

    let el = null;
    for (let i = 0; i < elList.length; i++) {
      if (elList[i].parentNode === root) {
        el = elList[i];
        break;
      }
    }
    if (!el) {
      return;
    }
    const pendantMap: { [key: string]: string } = {
      suffix: "append",
      prefix: "prepend",
    };

    const pendant = pendantMap[place];
    if (pendant in props) {
      el.style.transform = `translateX(${place === "suffix" ? "-" : ""}${
        (root.querySelector(`.el-input-group__${pendant}`) as HTMLElement)?.offsetWidth ?? 0
      }px)`;
    } else {
      el.removeAttribute("style");
    }
  };

  let updateIconOffset = () => {
    calcIconOffset("prefix");
    calcIconOffset("suffix");
  };

  let clear = () => {
    props.onInput?.("");
    props.onChange?.("");
    props.onClear?.();
  };
  let handlePasswordVisible = () => {
    setPasswordVisible((p) => !p);
    focus();
  };
  let getSuffixVisible = () => {
    return (
      props.suffix ||
      props.suffixIcon ||
      showClear() ||
      props.showPassword ||
      isWordLimitVisible ||
      (validateState() && needStatusIcon())
    );
  };

  useMount(() => {
    props.onInputSelect?.(select());
    //setNativeInputValue();
    updateIconOffset();
  });

  useEffectWatch(
    () => props.value,
    (a, b) => {
      setNativeInputValue();
    }
  );
  return (
    <>
      <StyledInput
        ref={(r) => (root = r)}
        class={clsx(
          props.type === "textarea" ? "el-textarea" : "el-input",
          inputSize() ? "el-input--" + inputSize() : "",
          {
            "is-disabled": inputDisabled(),
            "is-exceed": inputExceed(),
            "el-input-group": props.prepend || props.append,
            "el-input-group--append": props.append,
            "el-input-group--prepend": props.prepend,
            "el-input--prefix": props.prefix || props.prefixIcon,
            "el-input--suffix":
              props.suffix || props.suffixIcon || props.clearable || props.showPassword,
          }
        )}
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <Switch
          fallback={
            <textarea
              tabIndex={props.tabindex}
              class="el-textarea__inner"
              onCompositionStart={handleCompositionStart}
              onCompositionUpdate={handleCompositionUpdate}
              onCompositionEnd={handleCompositionEnd}
              onInput={handleInput}
              ref={(r) => (textarea = r)}
              disabled={inputDisabled()}
              readOnly={props.readonly}
              autocomplete={props.autocomplete}
              style={textareaStyle()}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              aria-label={props.label}
              placeholder={props.placeholder}
              rows={props.rows}
            ></textarea>
          }
        >
          <Match when={props.type !== "textarea"}>
            <Show when={props.prepend}>
              <div class="el-input-group__prepend">{props.prepend}</div>
            </Show>
            <input
              tabIndex={props.tabindex}
              class="el-input__inner"
              type={props.showPassword ? (passwordVisible() ? "text" : "password") : props.type}
              disabled={inputDisabled()}
              readOnly={props.readonly}
              autocomplete={props.autocomplete}
              ref={(r) => (input = r)}
              onCompositionStart={handleCompositionStart}
              onCompositionUpdate={handleCompositionUpdate}
              onCompositionEnd={handleCompositionEnd}
              onInput={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              aria-label={props.label}
              placeholder={props.placeholder}
            />
            <Show when={props.prefix || props.prefixIcon}>
              <span class="el-input__prefix">
                {props.prefix}
                <Show when={props.prefixIcon}>
                  <i class={clsx("el-input__icon", props.prefixIcon)}></i>
                </Show>
              </span>
            </Show>

            <Show when={getSuffixVisible()}>
              <span class="el-input__suffix">
                <span class="el-input__suffix-inner">
                  <Show when={!showClear() || !showPwdVisible() || !isWordLimitVisible()}>
                    {props.suffix}
                    <Show when={props.suffixIcon}>
                      <i class={clsx("el-input__icon", props.suffixIcon)}></i>
                    </Show>
                  </Show>

                  <Show when={showClear()}>
                    <i
                      class="el-input__icon el-icon-circle-close el-input__clear"
                      onClick={clear}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    ></i>
                  </Show>

                  <Show when={showPwdVisible()}>
                    <i
                      class="el-input__icon el-icon-view el-input__clear"
                      onClick={handlePasswordVisible}
                    ></i>
                  </Show>

                  <Show when={isWordLimitVisible()}>
                    <span class="el-input__count">
                      <span class="el-input__count-inner">
                        {textLength()}/{upperLimit()}
                      </span>
                    </span>
                  </Show>
                </span>
                <Show when={validateState()}>
                  <i class={clsx("el-input__icon", "el-input__validateIcon", validateIcon())}></i>
                </Show>
              </span>
            </Show>

            <Show when={props.append}>
              <div class="el-input-group__append">{props.append}</div>
            </Show>
          </Match>
        </Switch>

        <Show when={isWordLimitVisible() && props.type === "textarea"}>
          <span class="el-input__count">
            {textLength()}/{upperLimit()}
          </span>
        </Show>
      </StyledInput>
    </>
  );
};
