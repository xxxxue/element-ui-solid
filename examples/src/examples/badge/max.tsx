import { Badge, Button } from "element-ui-solid";

export default () => {
  return (
    <>
      <Badge value={200} max={99}>
        <Button size="small">评论</Button>
      </Badge>
      <Badge value={100} max={10}>
        <Button size="small">回复</Button>
      </Badge>
    </>
  );
};
