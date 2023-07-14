import { Progress } from "element-ui-solid";

export default () => {

  let format= (percentage)=> {
    return percentage === 100 ? '满' : `${percentage}%`;
  }
  return (
    <>
      <Progress percentage={50}></Progress>
      <Progress percentage={100} format={format}></Progress>
      <Progress percentage={100} status="success"></Progress>
      <Progress percentage={100} status="warning"></Progress>
      <Progress percentage={50} status="exception"></Progress>
    </>
  );
};
