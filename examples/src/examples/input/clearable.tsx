import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("qwe456");

  return (
    <>
      <Input
        clearable
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </>
  );
};
