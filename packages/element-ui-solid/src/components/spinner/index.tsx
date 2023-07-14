import { ParentComponent } from "solid-js";
import { useDefaultProps } from "../../utils";
import { StyledSpinner } from "./style";

export interface ISpinnerProps {
  radius?: number;
  strokeWidth?: number;
  strokeColor?: string;
}
export let Spinner: ParentComponent<ISpinnerProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    radius: 100,
    strokeWidth: 5,
    strokeColor: "#efefef",
  });

  return (
    <>
      <StyledSpinner class="el-spinner">
        <svg
          class="el-spinner-inner"
          viewBox="0 0 50 50"
          style={{
            width: `${props.radius / 2}px`,
            height: `${props.radius / 2}px`,
          }}
        >
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={props.strokeColor}
            stroke-width={props.strokeWidth}
          ></circle>
        </svg>
      </StyledSpinner>
    </>
  );
};
