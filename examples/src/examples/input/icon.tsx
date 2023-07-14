import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <>
      <Input
        suffixIcon="el-icon-date"
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />

      <Input
        prefixIcon="el-icon-search"
        value={value()}
        onChange={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </>
  );
};
