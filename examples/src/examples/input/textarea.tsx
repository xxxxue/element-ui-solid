import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <>
      <Input
        type="textarea"
        value={value()}
        rows={5}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </>
  );
};
