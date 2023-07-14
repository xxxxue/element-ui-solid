import {
  Accessor,
  JSX,
  ParentComponent,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  useContext,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { generateId } from "../utils";
import { StyledCollapse } from "./style";
export let CollapseContext = createContext<{
  activeNames?: Accessor<string[]>;
  itemClick?: (name: string) => void;
}>();

export interface ICollapseProps {
  accordion?: boolean;
  defaultActiveKey?: string[];
  activeKey?: string[];
  onChange?: (v: string[]) => void;
}
export let Collapse: ParentComponent<ICollapseProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});

  const [activeNames, setActiveNames] = createSignal<string[]>(
    props.activeKey || props.defaultActiveKey || []
  );

  createEffect(() => {
    // 父组件中 activeKey 发生变化, 同步到 createSignal
    if (props.activeKey != undefined) {
      setActiveNames(props.activeKey);
    }
  });

  let handleItemClick = (item: string) => {
    if (props.accordion) {
      let arr = [];
      if (!activeNames().includes(item)) {
        arr.push(item);
      }

      if (props.activeKey != undefined) {
        props.onChange?.(arr);
      } else {
        setActiveNames(arr);
      }
    } else {
      let names = [...activeNames()];
      let index = names.indexOf(item);

      if (index > -1) {
        names.splice(index, 1);
      } else {
        names.push(item);
      }

      if (props.activeKey != undefined) {
        props?.onChange?.(names);
      } else {
        setActiveNames(names);
      }
    }
  };

  return (
    <>
      <CollapseContext.Provider
        value={{
          activeNames: activeNames,
          itemClick: handleItemClick,
        }}
      >
        <StyledCollapse class="el-collapse" role="tablist" aria-multiselectable="true">
          {props.children}
        </StyledCollapse>
      </CollapseContext.Provider>
    </>
  );
};




interface ICollapseItemProps {
  name?: string;
  title?: JSX.Element;
  disabled?: boolean;
}
export let CollapseItem: ParentComponent<ICollapseItemProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    name: generateId().toString(),
  });

  let collapseContext = useContext(CollapseContext);
  const [focusing, setFocusing] = createSignal<boolean>(false);
  const [isClick, setIsClick] = createSignal<boolean>(false);
  const id = generateId();

  let isActive = createMemo(() => {
    return collapseContext?.activeNames?.()?.includes(props.name);
  });

  let handleFoucus = () => {
    setTimeout(() => {
      if (!isClick()) {
        setFocusing(true);
      } else {
        setIsClick(false);
      }
    }, 50);
  };

  let handleHeaderClick = () => {
    if (props.disabled) {
      return;
    }
    collapseContext?.itemClick?.(props.name);
    setFocusing(false);
    setIsClick(true);
  };

  let handleEnterClick = () => {
    collapseContext?.itemClick?.(props.name);
  };

  return (
    <>
      <div
        class={clsx("el-collapse-item", {
          "is-active": isActive(),
          "is-disabled": props.disabled,
        })}
      >
        <div
          role="tab"
          aria-expanded={isActive()}
          aria-controls={`el-collapse-content-${id}`}
          aria-describedby={`el-collapse-content-${id}`}
        >
          <div
            class={clsx("el-collapse-item__header", {
              focusing: focusing(),
              "is-active": isActive(),
            })}
            onClick={handleHeaderClick}
            role="button"
            id={`el-collapse-head-${id}`}
            tabindex={props.disabled ? undefined : 0}
            onKeyUp={(e) => {
              if (e.key == "Enter" || e.key == "Space") {
                e.stopPropagation();
                handleEnterClick();
              }
            }}
            onFocus={handleFoucus}
            onBlur={() => setFocusing(false)}
          >
            {props.title}

            <i
              class={clsx("el-collapse-item__arrow el-icon-arrow-right", {
                "is-active": isActive(),
              })}
            ></i>
          </div>
        </div>

        <div
          class="el-collapse-item__wrap"
          style={
            isActive()
              ? {}
              : {
                  display: "none",
                }
          }
          role="tabpanel"
          aria-hidden={!isActive()}
          aria-labelledby={`el-collapse-head-${id}`}
          id={`el-collapse-content-${id}`}
        >
          <div class="el-collapse-item__content">{props.children}</div>
        </div>
      </div>
    </>
  );
};