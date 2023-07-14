import { Link } from "element-ui-solid";

export default () => {
  return (
    <div class="space-x-5">
      <Link href="https://element.eleme.io">默认链接</Link>
      <Link type="primary">主要链接</Link>
      <Link type="success">成功链接</Link>
      <Link type="warning">警告链接</Link>
      <Link type="danger">危险链接</Link>
      <Link type="info">信息链接</Link>
    </div>
  );
};
