import { Checkbox } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [boolValue, setBoolValue] = createSignal<boolean>(false);

  return (
    <>
      <Checkbox
        checked={boolValue()}
        onChange={(e) => {
          setBoolValue(e.target.checked);
        }}
      >
        备选项
      </Checkbox>
      <Checkbox border>备选项2</Checkbox>
    </>
  );
};
