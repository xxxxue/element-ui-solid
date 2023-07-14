import { Alert } from "element-ui-solid";

export default () => {
  return (
    <>
      <Alert title="成功提示的文案" type="success" center showIcon></Alert>
      <Alert title="消息提示的文案" type="info" center showIcon></Alert>
      <Alert title="警告提示的文案" type="warning" center showIcon></Alert>
      <Alert title="错误提示的文案" type="error" center showIcon></Alert>
    </>
  );
};
