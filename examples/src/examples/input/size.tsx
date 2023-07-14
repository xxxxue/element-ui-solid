import { Input } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal<string>("");
  return (
    <div class="space-y-2">
      <Input
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
      <Input
        size="medium"
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
      <Input
        size="small"
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
      <Input
        size="mini"
        value={value()}
        onInput={(e) => {
          setValue(e);
        }}
        placeholder="Please input"
      />
    </div>
  );
};
