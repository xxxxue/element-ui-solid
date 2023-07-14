import {
  Match,
  ParentComponent,
  Switch,
  createContext,
  onMount,
  useContext,
} from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledBreadcrumb } from "./style";

export interface IBreadcrumbProps {
  separator?: string;
  separatorClass?: string;
}

export let BreadcrumbContext = createContext<Required<IBreadcrumbProps>>({
  separator: "/",
  separatorClass: "",
});

export let Breadcrumb: ParentComponent<IBreadcrumbProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    separator: "/",
    separatorClass: "",
  });

  onMount(() => {
    let items = document.querySelectorAll(".el-breadcrumb__item");
    if (items.length) {
      items[items.length - 1].setAttribute("aria-current", "page");
    }
  });
  return (
    <BreadcrumbContext.Provider
      value={{ separator: props.separator, separatorClass: props.separatorClass }}
    >
      <StyledBreadcrumb class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
        {props.children}
      </StyledBreadcrumb>
    </BreadcrumbContext.Provider>
  );
};




interface IBreadcrumbItemProps {
  onClick?: () => void;
}
export let BreadcrumbItem: ParentComponent<IBreadcrumbItemProps> = (inProps) => {
  let props = useDefaultProps(inProps, {});
  let breadcrumbContext = useContext(BreadcrumbContext);

  return (
    <>
      <span class="el-breadcrumb__item">
        <span
          class={clsx("el-breadcrumb__inner", props.onClick ? "is-link" : "")}
          role="link"
          onClick={props.onClick}
        >
          {props.children}
        </span>

        <Switch
          fallback={
            <span class="el-breadcrumb__separator" role="presentation">
              {breadcrumbContext.separator}
            </span>
          }
        >
          <Match when={breadcrumbContext.separatorClass}>
            <i class={clsx("el-breadcrumb__separator", breadcrumbContext.separatorClass)}></i>
          </Match>
        </Switch>
      </span>
    </>
  );
};
