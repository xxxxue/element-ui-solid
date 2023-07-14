import { PageHeader } from "element-ui-solid";

export default () => {
  return (
    <>
      <PageHeader onBack={() => alert("back")} content="详情页面" />
      <PageHeader onBack={() => alert("back")} content="页面" title="上一页" />
    </>
  );
};
