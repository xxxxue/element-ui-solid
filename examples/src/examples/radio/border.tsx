import { Radio, RadioGroup } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");

  let handChange = (v: string) => {
    setValue(v);
  };
  return (
    <>
      <div>
        <Radio label="1" border value={value()} onChange={handChange}>
          备选项1
        </Radio>
        <Radio label="2" border value={value()} onChange={handChange}>
          备选项2
        </Radio>
      </div>
      <div>
        <Radio label="1" border size="medium" value={value()} onChange={handChange}>
          备选项1
        </Radio>
        <Radio label="2" border size="medium" value={value()} onChange={handChange}>
          备选项2
        </Radio>
      </div>
      <div>
        <RadioGroup size="small" value={value()} onChange={handChange}>
          <Radio label="1" border>
            备选项1
          </Radio>
          <Radio label="2" border disabled>
            备选项2
          </Radio>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup size="mini" disabled value={value()} onChange={handChange}>
          <Radio label="1" border>
            备选项1
          </Radio>
          <Radio label="2" border>
            备选项2
          </Radio>
        </RadioGroup>
      </div>
    </>
  );
};
