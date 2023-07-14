import { Progress } from "element-ui-solid";

export default () => {
  return (
    <>
      <Progress type="circle" percentage={0}></Progress>
      <Progress type="circle" percentage={25}></Progress>
      <Progress type="circle" percentage={100} status="success"></Progress>
      <Progress type="circle" percentage={70} status="warning"></Progress>
      <Progress type="circle" percentage={50} status="exception"></Progress>
    </>
  );
};
