import { Alert } from "element-ui-solid";

export default () => {
  return (
    <>
      <Alert title="成功提示的文案" type="success" showIcon></Alert>
      <Alert title="消息提示的文案" type="info" showIcon></Alert>
      <Alert title="警告提示的文案" type="warning" showIcon></Alert>
      <Alert title="错误提示的文案" type="error" showIcon></Alert>
    </>
  );
};
