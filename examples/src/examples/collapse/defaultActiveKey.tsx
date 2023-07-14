import { Collapse, CollapseItem } from "element-ui-solid";

export default () => {
  return (
    <>
      <Collapse defaultActiveKey={["3"]}>
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
