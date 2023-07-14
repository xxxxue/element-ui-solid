import { Checkbox, CheckboxGroup } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [checkList, setCheckList] = createSignal<string[]>(["选中且禁用", "复选框 A"]);

  return (
    <>
      <CheckboxGroup
        value={checkList()}
        onChange={(v) => {
          setCheckList(v);
        }}
      >
        <Checkbox value="复选框 A"></Checkbox>
        <Checkbox value="复选框 B"></Checkbox>
        <Checkbox value="复选框 C"></Checkbox>
        <Checkbox value="禁用" disabled></Checkbox>
        <Checkbox value="选中且禁用" disabled></Checkbox>
      </CheckboxGroup>
    </>
  );
};
