import { Alert } from "element-ui-solid";

export default () => {
  return (
    <>
        <Alert title="不可关闭的 alert" type="success" closable={false}></Alert>
        <Alert title="自定义 closeText" type="info" closeText="知道了"></Alert>
        <Alert title="设置了回调的 alert" type="warning" onClose={() => alert("close")}></Alert>
    </>
  );
}