import { Badge, Button } from "element-ui-solid";

export default () => {
  return (
    <>
      <Badge value="12">
        <Button size="small">评论</Button>
      </Badge>
      <Badge value="3">
        <Button size="small">回复</Button>
      </Badge>
      <Badge value="1" type="primary">
        <Button size="small">评论</Button>
      </Badge>
      <Badge value="2" type="warning">
        <Button size="small">回复</Button>
      </Badge>
    </>
  );
};
