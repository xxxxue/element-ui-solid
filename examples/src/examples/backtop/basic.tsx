import { Backtop, Icon } from "element-ui-solid";

export default () => {
  // 这个 demo 网站窗口设置了固定的高度, 
  // 所以需要设置 target,改为监听 backtopBox, (默认是 window)
  return (
    <div id="backtopBox" style={{ height: "200px", "overflow-y": "scroll" }}>
      <div style={{ height: "1000px" }}>
        请滚动到底部, 注意右下角
        <Backtop target="#backtopBox" />
        <Backtop target="#backtopBox" bottom={100}>
          <Icon name="setting" />
        </Backtop>
      </div>
    </div>
  );
};
