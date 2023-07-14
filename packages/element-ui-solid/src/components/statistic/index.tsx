import { Component, JSX, Match, Show, Switch, startTransition } from "solid-js";
import { useDefaultProps, useCleanup, useEffectWatchDefer, useMount, useState } from "../../utils";
import { divide, floor, isNumber, multiply, padStart, reduce } from "lodash-es";
import { StyledStatistic } from "./style";

export interface IStatisticProps {
  decimalSeparator?: string;
  groupSeparator?: string;
  precision?: number;
  value?: string | number | Date;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  title?: JSX.Element;
  timeIndices?: boolean;

  valueStyle?: any;
  format?: string;
  rate?: number;

  onChange?: (v: any) => void;
  onFinish?: (v: any) => void;
  formatter?: JSX.Element;
  ref?: (v: IStatisticRef) => void;
}

export interface IStatisticRef {
  suspend: (v: boolean) => string | undefined;
}
export let Statistic: Component<IStatisticProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    decimalSeparator: ".",
    groupSeparator: "",
    value: "",
    prefix: "",
    suffix: "",
    title: "",
    timeIndices: false,
    valueStyle: () => {},
    format: "HH:mm:ss:SSS",
    rate: 1000,
  });

  const [disposeValue, setDisposeValue] = useState<string>();

  const [timeTask, setTimeTask] = useState<any>();

  useMount(() => {
    branch();
  });

  useEffectWatchDefer(
    () => props.value,
    () => {
      suspend(true);
      branch();
    }
  );

  useCleanup(() => {
    suspend(true);
  });

  let magnification = (num: string, mulriple = 1000, groupSeparator = ",") => {
    let level = String(mulriple).length;
    return num.replace(new RegExp(`(\\d)(?=(\\d{${level - 1}})+$)`, "g"), `$1${groupSeparator}`);
  };

  let dispose = () => {
    let value = props.value;
    let rate = props.rate;
    let groupSeparator = props.groupSeparator;

    if (!isNumber(value)) {
      return false;
    }

    if (props.precision) {
      value = value.toFixed(props.precision);
    }
    let [integer, decimal] = String(value).split(".");
    // 1000 multiplying power
    if (groupSeparator) {
      integer = magnification(integer, rate, groupSeparator);
    }
    let result = `${integer}${decimal ? props.decimalSeparator + decimal : ""}`;
    setDisposeValue(result);
    return result;
  };

  let diffDate = (minuend: number, subtrahend: number) => {
    return Math.max(minuend - subtrahend, 0);
  };

  let suspend = (isStop: boolean) => {
    if (isStop) {
      if (timeTask()) {
        clearInterval(timeTask());
        setTimeTask(undefined);
      }
    } else {
      branch();
    }
    return disposeValue();
  };

  props.ref?.({ suspend });
  let formatTimeStr = (time: any) => {
    let format = props.format;
    const escapeRegex = /\[[^\]]*]/g;
    const keepList = (format.match(escapeRegex) || []).map((str) => str.slice(1, -1));
    const timeUnits = [
      ["Y", 1000 * 60 * 60 * 24 * 365], // years
      ["M", 1000 * 60 * 60 * 24 * 30], // months
      ["D", 1000 * 60 * 60 * 24], // days
      ["H", 1000 * 60 * 60], // hours
      ["m", 1000 * 60], // minutes
      ["s", 1000], // seconds
      ["S", 1], // million seconds
    ];
    let formatText = reduce(
      timeUnits,
      (con, item) => {
        let name = item[0];
        let val = item[1] as number;
        return con.replace(new RegExp(`${name}+`, "g"), (match) => {
          let sum = floor(divide(time, val), 0);
          time -= multiply(sum, val);
          return padStart(String(sum), String(match).length, 0 as any);
        });
      },
      format
    );
    let index = 0;
    return formatText.replace(escapeRegex, () => {
      const match = keepList[index];
      index += 1;
      return match;
    });
  };

  let stopTime = (time: any) => {
    let result = true; // stop
    if (time) {
      props.onChange?.(time);
      result = false;
    } else {
      result = true;
      suspend(true);
      props.onFinish?.(true);
    }
    return result;
  };

  let countDown = (timeVlaue: any) => {
    if (timeTask()) return;
    let id = setInterval(() => {
      startTransition(() => {
        let diffTiem = diffDate(timeVlaue, Date.now());
        setDisposeValue(formatTimeStr(diffTiem));
        stopTime(diffTiem);
      });
    }, 1000 / 30);
    setTimeTask(id);
  };

  let branch = () => {
    if (props.timeIndices) {
      countDown(props.value.valueOf() || props.value);
    } else {
      dispose();
    }
  };

  return (
    <>
      <StyledStatistic class="el-statistic">
        <Show when={props.title}>
          <div class="head">
            <Switch fallback={props.title}>
              <Match when={typeof props.title == "string" || typeof props.title == "number"}>
                <span class="title">{props.title}</span>
              </Match>
            </Switch>
          </div>
        </Show>

        <div class="con">
          <Show when={props.prefix}>
            <span class="prefix">{props.prefix}</span>
          </Show>

          <span class="number" style={props.valueStyle}>
            <Switch fallback={disposeValue()}>
              <Match when={props.formatter}>{props.formatter}</Match>
            </Switch>
          </span>

          <Show when={props.suffix}>
            <span class="suffix">{props.suffix}</span>
          </Show>
        </div>
      </StyledStatistic>
    </>
  );
};
