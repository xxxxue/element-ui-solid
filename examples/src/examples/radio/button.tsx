import { RadioButton, RadioGroup } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");

  let handChange = (v: string) => {
    setValue(v);
  };
  return (
    <>
      <div>
        <RadioGroup textColor="#0cfa9b" value={value()} onChange={handChange}>
          <RadioButton label="上海"></RadioButton>
          <RadioButton label="北京"></RadioButton>
          <RadioButton label="广州"></RadioButton>
          <RadioButton label="深圳"></RadioButton>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup size="medium" value={value()} onChange={handChange}>
          <RadioButton label="上海"></RadioButton>
          <RadioButton label="北京"></RadioButton>
          <RadioButton label="广州"></RadioButton>
          <RadioButton label="深圳"></RadioButton>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup size="small" value={value()} onChange={handChange}>
          <RadioButton label="上海"></RadioButton>
          <RadioButton label="北京" disabled></RadioButton>
          <RadioButton label="广州"></RadioButton>
          <RadioButton label="深圳"></RadioButton>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup disabled size="mini" value={value()} onChange={handChange}>
          <RadioButton label="上海"></RadioButton>
          <RadioButton label="北京"></RadioButton>
          <RadioButton label="广州"></RadioButton>
          <RadioButton label="深圳"></RadioButton>
        </RadioGroup>
      </div>
    </>
  );
};
