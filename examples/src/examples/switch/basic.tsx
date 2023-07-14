import { createSignal } from "solid-js";
import { Switch } from 'element-ui-solid';
export default () => {
  const [booleanValue, setBooleanValue] = createSignal<boolean>(false);
  const [stringValue, setStringValue] = createSignal<string>("love");
  const [numberValue, setNumberValue] = createSignal<number>(100);
  return (
    <>
      <Switch
        value={booleanValue()}
        onChange={(v) => {
          setBooleanValue(v);
        }}
      />
      <p>booleanValue: {booleanValue().toString()}</p>

      <Switch
        activeValue="love"
        inactiveValue="happy"
        value={stringValue()}
        onChange={(v) => {
          setStringValue(v);
        }}
      />
      <p>stringValue: {stringValue()}</p>

      <Switch
        activeValue={100}
        inactiveValue={0}
        value={numberValue()}
        onChange={(v) => {
          setNumberValue(v);
        }}
      />
      <p>numberValue: {numberValue()}</p>
    </>
  );
};
