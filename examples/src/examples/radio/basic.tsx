import { Radio } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");

  let handChange = (v: string) => {
    setValue(v);
  };
  return (
    <>
      <Radio value={value()} onChange={handChange} label="1">
        备选项
      </Radio>
      <Radio value={value()} onChange={handChange} label="2">
        备选项
      </Radio>
    </>
  );
};
