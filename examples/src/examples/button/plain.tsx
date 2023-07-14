import { Button } from "element-ui-solid";
export default () => {
  return (
    <>
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>
        主要按钮
      </Button>
      <Button type="success" plain>
        成功按钮
      </Button>
      <Button type="info" plain>
        信息按钮
      </Button>
      <Button type="warning" plain>
        警告按钮
      </Button>
      <Button type="danger" plain>
        危险按钮
      </Button>
    </>
  );
};
