import { Switch } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [booleanValue, setBooleanValue] = createSignal<boolean>(false);

  return (
    <>
      <Switch
        disabled
        value={booleanValue()}
        onChange={(v) => {
          setBooleanValue(v);
        }}
      />
    </>
  );
};
