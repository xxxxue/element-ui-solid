import { Badge, Button } from "element-ui-solid";

export default () => {
  return (
    <>
      <Badge value="new">
        <Button size="small">评论</Button>
      </Badge>
      <Badge value="hot">
        <Button size="small">回复</Button>
      </Badge>
    </>
  );
};
