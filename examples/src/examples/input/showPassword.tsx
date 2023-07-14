import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <>
      <Input
        showPassword
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
      />
    </>
  );
};
