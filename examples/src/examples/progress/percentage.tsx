import { Progress } from "element-ui-solid";

export default () => {
  return (
    <>
      <Progress textInside strokeWidth={26} percentage={70}></Progress>
      <Progress textInside strokeWidth={24} percentage={100} status="success"></Progress>
      <Progress textInside strokeWidth={22} percentage={80} status="warning"></Progress>
      <Progress textInside strokeWidth={20} percentage={50} status="exception"></Progress>
    </>
  );
};
