import { Button } from "element-ui-solid";
export default () => {
  return (
    <>
      <Button round>圆角按钮</Button>
      <Button type="primary" round>
        主要按钮
      </Button>
      <Button type="success" round>
        成功按钮
      </Button>
      <Button type="info" round>
        信息按钮
      </Button>
      <Button type="warning" round>
        警告按钮
      </Button>
      <Button type="danger" round>
        危险按钮
      </Button>
    </>
  );
};
