import { Button, Result } from "element-ui-solid";

export default () => {
  return (
    <>
      <Result
        icon="success"
        title="成功提示"
        subTitle="请根据提示进行操作"
        extra={
          <Button type="primary" size="medium">
            返回
          </Button>
        }
      />

      <Result
        icon="warning"
        title="警告提示"
        subTitle="请根据提示进行操作"
        extra={
          <Button type="primary" size="medium">
            返回
          </Button>
        }
      />

      <Result
        icon="error"
        title="错误提示"
        subTitle="请根据提示进行操作"
        extra={
          <Button type="primary" size="medium">
            返回
          </Button>
        }
      />

      <Result
        icon="info"
        title="信息提示"
        subTitle="请根据提示进行操作"
        extra={
          <Button type="primary" size="medium">
            返回
          </Button>
        }
      />

      <Result
        title="404"
        subTitle="抱歉，请求错误"
        icon={
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></img>
        }
        extra={
          <Button type="primary" size="medium">
            返回
          </Button>
        }
      />
    </>
  );
};
