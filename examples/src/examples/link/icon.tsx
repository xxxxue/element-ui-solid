import { Link } from "element-ui-solid";

export default () => {
  return (
    <div class="space-x-5">
      <Link icon="el-icon-edit">编辑</Link>
      <Link>
        查看<i class="el-icon-view el-icon--right"></i>
      </Link>
    </div>
  );
};
