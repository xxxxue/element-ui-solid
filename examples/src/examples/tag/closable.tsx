import { Tag } from "element-ui-solid";

export default () => {
  return (
    <>
      <Tag
        closable
        onClick={() => {
          alert("click");
        }}
        onClose={() => {
          alert("close");
        }}
      >
        标签一
      </Tag>
      <Tag closable type="success">
        标签二
      </Tag>
      <Tag closable type="info">
        标签三
      </Tag>
      <Tag closable type="warning">
        标签四
      </Tag>
      <Tag closable type="danger">
        标签五
      </Tag>
    </>
  );
};
