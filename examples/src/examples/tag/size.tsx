import { Tag } from "element-ui-solid";

export default () => {
  return (
    <>
      <Tag closable>默认标签</Tag>
      <Tag size="medium" closable>
        中等标签
      </Tag>
      <Tag size="small" closable>
        小型标签
      </Tag>
      <Tag size="mini" closable>
        超小标签
      </Tag>
    </>
  );
};
