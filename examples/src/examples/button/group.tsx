import { Button, ButtonGroup } from "element-ui-solid";
export default () => {
  return (
    <>
      <ButtonGroup>
        <Button type="primary" round icon="el-icon-arrow-left">
          上一页
        </Button>
        <Button type="primary" round>
          下一页<i class="el-icon-arrow-right el-icon--right"></i>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="el-icon-edit"></Button>
        <Button type="primary" icon="el-icon-share"></Button>
        <Button type="primary" icon="el-icon-delete"></Button>
      </ButtonGroup>
    </>
  );
};
