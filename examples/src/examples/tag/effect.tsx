import { Tag } from "element-ui-solid";

export default () => {
  return (
    <>
      <div class="space-x-4">
        <Tag effect="dark">标签一</Tag>
        <Tag effect="dark" type="success">
          标签二
        </Tag>
        <Tag effect="dark" type="info">
          标签三
        </Tag>
        <Tag effect="dark" type="warning">
          标签四
        </Tag>
        <Tag effect="dark" type="danger">
          标签五
        </Tag>
      </div>

      <div class="space-x-4">
        <Tag effect="plain">标签一</Tag>
        <Tag effect="plain" type="success">
          标签二
        </Tag>
        <Tag effect="plain" type="info">
          标签三
        </Tag>
        <Tag effect="plain" type="warning">
          标签四
        </Tag>
        <Tag effect="plain" type="danger">
          标签五
        </Tag>
      </div>
    </>
  );
};
