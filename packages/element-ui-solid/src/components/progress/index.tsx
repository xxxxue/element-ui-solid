import { JSX, Match, ParentComponent, Show, Switch, createMemo } from "solid-js";
import { useDefaultProps } from "../../utils";
import clsx from "clsx";
import { StyledProgress } from "./style";

export interface IProgressProps {
  type?: "line" | "circle" | "dashboard";
  percentage?: number;
  status?: "success" | "exception" | "warning";
  strokeWidth?: number;
  strokeLinecap?: string;
  textInside?: boolean;
  width?: number;
  showText?: boolean;
  color?: string | any[] | ((v: any) => void);
  defineBackColor?: string | any[] | ((v: any) => void);
  textColor?: string | any[] | ((v: any) => void);
  format?: (v: any) => any;
}
export let Progress: ParentComponent<IProgressProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    type: "line",
    percentage: 0,
    strokeWidth: 6,
    strokeLinecap: "round",
    textInside: false,
    width: 126,
    showText: true,
    color: "",
    defineBackColor: "#ebeef5",
    textColor: "#606266",
  });

  let getCurrentColor = (percentage: number) => {
    if (typeof props.color === "function") {
      return props.color(percentage);
    } else if (typeof props.color === "string") {
      return props.color;
    } else {
      return getLevelColor(percentage);
    }
  };
  let getLevelColor = (percentage: number) => {
    let colorArray = getColorArray().sort((a, b) => a.percentage - b.percentage);
    for (let i = 0; i < colorArray.length; i++) {
      if (colorArray[i].percentage > percentage) {
        return colorArray[i].color;
      }
    }
    return colorArray[colorArray.length - 1].color;
  };

  let getColorArray = () => {
    let color = props.color as string[];
    let span = 100 / color.length;
    return color.map((seriesColor, index) => {
      if (typeof seriesColor === "string") {
        return {
          color: seriesColor,
          percentage: (index + 1) * span,
        };
      }
      return seriesColor;
    });
  };
  let barStyle = createMemo(() => {
    let style: JSX.CSSProperties = {};
    style.width = props.percentage + "%";
    style["background-color"] = getCurrentColor(props.percentage) as any;
    return style;
  });

  let relativeStrokeWidth = createMemo(() => {
    return ((props.strokeWidth / props.width) * 100).toFixed(1);
  });

  let radius = createMemo(() => {
    if (props.type === "circle" || props.type === "dashboard") {
      return parseInt((50 - parseFloat(relativeStrokeWidth()) / 2).toString(), 10);
    } else {
      return 0;
    }
  });

  let trackPath = createMemo(() => {
    let lRadius = radius();
    let isDashboard = props.type === "dashboard";
    return `
    M 50 50
    m 0 ${isDashboard ? "" : "-"}${lRadius}
    a ${lRadius} ${lRadius} 0 1 1 0 ${isDashboard ? "-" : ""}${lRadius * 2}
    a ${lRadius} ${lRadius} 0 1 1 0 ${isDashboard ? "" : "-"}${lRadius * 2}
    `;
  });

  let perimeter = createMemo(() => {
    return 2 * Math.PI * radius();
  });

  let rate = createMemo(() => {
    return props.type === "dashboard" ? 0.75 : 1;
  });

  let strokeDashoffset = createMemo(() => {
    const offset = (-1 * perimeter() * (1 - rate())) / 2;
    return `${offset}px`;
  });

  let trailPathStyle = createMemo(() => {
    return {
      "stroke-dasharray": `${perimeter() * rate()}px, ${perimeter()}px`,
      "stroke-dashoffset": strokeDashoffset(),
    };
  });
  let circlePathStyle = createMemo(() => {
    return {
      "stroke-dasharray": `${perimeter() * rate() * (props.percentage / 100)}px, ${perimeter()}px`,
      "stroke-dashoffset": strokeDashoffset(),
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease",
    } as JSX.CSSProperties;
  });

  let stroke = createMemo(() => {
    let ret;
    if (props.color) {
      ret = getCurrentColor(props.percentage);
    } else {
      switch (props.status) {
        case "success":
          ret = "#13ce66";
          break;
        case "exception":
          ret = "#ff4949";
          break;
        case "warning":
          ret = "#e6a23c";
          break;
        default:
          ret = "#20a0ff";
      }
    }
    return ret;
  });

  let iconClass = createMemo(() => {
    if (props.status === "warning") {
      return "el-icon-warning";
    }
    if (props.type === "line") {
      return props.status === "success" ? "el-icon-circle-check" : "el-icon-circle-close";
    } else {
      return props.status === "success" ? "el-icon-check" : "el-icon-close";
    }
  });

  let progressTextSize = createMemo(() => {
    return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
  });

  let content = createMemo(() => {
    if (typeof props.format === "function") {
      return props.format(props.percentage) || "";
    } else {
      return `${props.percentage}%`;
    }
  });

  return (
    <>
      <StyledProgress
        class={clsx("el-progress", "el-progress--" + props.type, {
          ["is-" + props.status]: props.status,
          "el-progress--without-text": !props.showText,
          "el-progress--text-inside": props.textInside,
        })}
        role="progressbar"
        aria-valuenow={props.percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <Switch
          fallback={
            <div
              class="el-progress-circle"
              style={{
                height: props.width + "px",
                width: props.width + "px",
              }}
            >
              <svg viewBox="0 0 100 100">
                <path
                  class="el-progress-circle__track"
                  d={trackPath()}
                  stroke={props.defineBackColor as any}
                  stroke-width={relativeStrokeWidth()}
                  fill="none"
                  style={trailPathStyle()}
                ></path>
                <path
                  class="el-progress-circle__path"
                  d={trackPath()}
                  stroke={stroke() as any}
                  fill="none"
                  stroke-linecap={props.strokeLinecap as any}
                  stroke-width={props.percentage ? relativeStrokeWidth() : 0}
                  style={circlePathStyle()}
                ></path>
              </svg>
            </div>
          }
        >
          <Match when={props.type === "line"}>
            <div class="el-progress-bar">
              <div
                class="el-progress-bar__outer"
                style={{
                  height: props.strokeWidth + "px",
                  "background-color": props.defineBackColor as any,
                }}
              >
                <div class="el-progress-bar__inner" style={barStyle()}>
                  <Show when={props.showText && props.textInside}>
                    <div
                      class="el-progress-bar__innerText"
                      style={{ color: props.textColor as any }}
                    >
                      {content()}
                    </div>
                  </Show>
                </div>
              </div>
            </div>
          </Match>
        </Switch>

        <Show when={props.showText && !props.textInside}>
          <div
            class="el-progress__text"
            style={{
              "font-size": progressTextSize() + "px",
              color: props.textColor as any,
            }}
          >
            <Switch fallback={<i class={iconClass()}></i>}>
              <Match when={!props.status}>{content()}</Match>
            </Switch>
          </div>
        </Show>
      </StyledProgress>
    </>
  );
};
