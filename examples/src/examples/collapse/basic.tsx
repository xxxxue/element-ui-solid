import { Collapse, CollapseItem } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [activeNames, setActiveNames] = createSignal<string[]>(["0"]);

  return (
    <>
      <Collapse
        activeKey={activeNames()}
        onChange={(v) => {
          setActiveNames(v);
        }}
      >
        <CollapseItem title="一致性 Consistency" name="1">
          1
        </CollapseItem>
        <CollapseItem title="反馈 Feedback" name="2">
          2
        </CollapseItem>
        <CollapseItem title="效率 Efficiency" name="3">
          3
        </CollapseItem>
        <CollapseItem title="可控 Controllability" name="4">
          4
        </CollapseItem>
      </Collapse>
    </>
  );
};
