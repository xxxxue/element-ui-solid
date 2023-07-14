import { ButtonGroup, Progress, Button } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [percentage, setPercentage] = createSignal<number>(20);

  let customColorMethod = () => {
    if (percentage() < 30) {
      return "#909399";
    } else if (percentage() < 70) {
      return "#e6a23c";
    } else {
      return "#67c23a";
    }
  };
  let increase = () => {
    setPercentage((p) => p + 10);

    if (percentage() > 100) {
      setPercentage(100);
    }
  };
  let decrease = () => {
    setPercentage((p) => p - 10);
    if (percentage() < 0) {
      setPercentage(0);
    }
  };

  return (
    <>
      <Progress percentage={percentage()} color="#409eff"></Progress>

      <Progress percentage={percentage()} color={customColorMethod()}></Progress>

      <Progress
        percentage={percentage()}
        color={[
          { color: "#f56c6c", percentage: 20 },
          { color: "#e6a23c", percentage: 40 },
          { color: "#5cb87a", percentage: 60 },
          { color: "#1989fa", percentage: 80 },
          { color: "#6f7ad3", percentage: 100 },
        ]}
      ></Progress>
      <div>
        <ButtonGroup>
          <Button icon="el-icon-minus" onClick={decrease}></Button>
          <Button icon="el-icon-plus" onClick={increase}></Button>
        </ButtonGroup>
      </div>
    </>
  );
};
