import { Button } from "element-ui-solid";
export default () => {
  return (
    <>
      <div>
        <Button icon="el-icon-search" circle></Button>
        <Button type="primary" icon="el-icon-edit" circle></Button>
        <Button type="success" icon="el-icon-check" circle></Button>
        <Button type="info" icon="el-icon-message" circle></Button>
        <Button type="warning" icon="el-icon-star-off" circle></Button>
        <Button type="danger" icon="el-icon-delete" circle></Button>
      </div>
      <div>
        <Button type="primary" icon="el-icon-edit"></Button>
        <Button type="primary" icon="el-icon-share"></Button>
        <Button type="primary" icon="el-icon-delete"></Button>
        <Button type="primary" icon="el-icon-search">
          搜索
        </Button>
        <Button type="primary">
          上传<i class="el-icon-upload el-icon--right"></i>
        </Button>
      </div>
    </>
  );
};
