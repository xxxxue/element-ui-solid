import { Link } from "element-ui-solid";

export default () => {
  return (
    <div class="space-x-5">
      <Link disabled>默认链接</Link>
      <Link type="primary" disabled>
        主要链接
      </Link>
      <Link type="success" disabled>
        成功链接
      </Link>
      <Link type="warning" disabled>
        警告链接
      </Link>
      <Link type="danger" disabled>
        危险链接
      </Link>
      <Link type="info" disabled>
        信息链接
      </Link>
    </div>
  );
};
