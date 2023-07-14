import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <div class="space-y-2">
      <Input
        showWordLimit
        maxlength={10}
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />

      <Input
        type="textarea"
        showWordLimit
        maxlength={10}
        rows={3}
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </div>
  );
};
