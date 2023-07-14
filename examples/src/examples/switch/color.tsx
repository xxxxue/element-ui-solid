import { Switch } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [booleanValue, setBooleanValue] = createSignal<boolean>(false);

  return (
    <>
      <Switch
          activeText="按月付费"
          inactiveText="按年付费"
          activeColor="#13ce66"
          inactiveColor="#e100fe"
          value={booleanValue()}
          onChange={(v) => {
            setBooleanValue(v);
          }}
        />
    </>
  );
}