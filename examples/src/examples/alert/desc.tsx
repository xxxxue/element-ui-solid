import { Alert } from "element-ui-solid";

export default () => {
  return (
    <>
      <Alert title="带辅助性文字介绍" type="success">
        这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。
        黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……
      </Alert>

      <Alert title="成功提示的文案" type="success" showIcon>
        文字说明文字说明文字说明文字说明文字说明文字说明
      </Alert>
      <Alert title="消息提示的文案" type="info" showIcon>
        文字说明文字说明文字说明文字说明文字说明文字说明
      </Alert>
      <Alert title="警告提示的文案" type="warning" showIcon>
        文字说明文字说明文字说明文字说明文字说明文字说明
      </Alert>
      <Alert title="错误提示的文案" type="error" showIcon>
        文字说明文字说明文字说明文字说明文字说明文字说明
      </Alert>
    </>
  );
};
