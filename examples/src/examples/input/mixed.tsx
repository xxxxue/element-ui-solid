import { Button, Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <>
      <Input
        prepend="Http://"
        append={<Button icon="el-icon-search"></Button>}
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </>
  );
};
