import { Badge, Button } from "element-ui-solid";

export default () => {
  return (
    <>
      <Badge isDot>数据查询</Badge>
      <Badge isDot>
        <Button icon="el-icon-share" type="primary"></Button>
      </Badge>
    </>
  );
};
