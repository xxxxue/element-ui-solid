import { Card } from "element-ui-solid";

export default () => {
  return (
    <>
      <Card shadow="always">总是显示</Card>
      <Card shadow="hover">鼠标悬浮时显示</Card>
      <Card shadow="never">从不显示</Card>
    </>
  );
};
