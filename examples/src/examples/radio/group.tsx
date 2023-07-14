import { Radio, RadioGroup } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");

  let handChange = (v: string) => {
    setValue(v);
  };
  return (
    <>
      <RadioGroup value={value()} onChange={handChange}>
        <Radio label="3">备选项</Radio>
        <Radio label="6">备选项</Radio>
        <Radio label="9">备选项</Radio>
      </RadioGroup>
    </>
  );
};
