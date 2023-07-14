import { Link } from "element-ui-solid";

export default () => {
  return (
    <div class="space-x-5">
      <Link underline={false}>无下划线</Link>
      <Link>有下划线</Link>
    </div>
  );
};
