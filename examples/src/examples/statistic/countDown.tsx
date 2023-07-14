import { Statistic, Row, Col, Card, Button, IStatisticRef } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  let ref: IStatisticRef;

  const [deadline2, setDeadline2] = createSignal<number>(Date.now() + 1000 * 60 * 60 * 8);

  const [deadline3, setDeadline3] = createSignal<number>(Date.now() + 1000 * 30);

  const [deadline4, setDeadline4] = createSignal<number>(
    Date.now() + (new Date().setHours(23, 59, 59) - Date.now())
  );

  const [deadline5, setDeadline5] = createSignal<Date>(
    new Date(`${new Date().getFullYear() + 1}-01-01`)
  );

  const [stop, setStop] = createSignal<boolean>(true);

  const [msg, setMsg] = createSignal<string>("正在计时");

  let count = 0;

  let handleFinish = () => {
    count++;
    setMsg("时间已到--" + count);
  };

  let handleSuspendClick = () => {
    ref.suspend(stop());
    setStop((p) => !p);
  };

  let handleAdd = () => {
    setDeadline3((p) => {
      if (p < Date.now()) {
        return Date.now() + 1000 * 10;
      } else {
        return p + 1000 * 10;
      }
    });
    setMsg("正在计时");
  };
  return (
    <div class="space-y-3">
      <Statistic value={deadline2()} timeIndices title="🎉商品降价🎉" suffix="抢购即将开始" />

      <Statistic
        onFinish={handleFinish}
        value={deadline3()}
        timeIndices
        title={"时间游戏--" + msg()}
        suffix={
          <Button type="primary" size="mini" onClick={handleAdd}>
            add 10s
          </Button>
        }
      />

      <Statistic format="DD天HH小时mm分钟" value={deadline5()} timeIndices title="距离明年还有:" />

      <Statistic
        ref={(r) => (ref = r)}
        format="HH:mm:ss"
        value={deadline4()}
        title="距离明日:"
        timeIndices
        suffix={
          <Button type="primary" size="mini" onClick={handleSuspendClick}>
            暂停
          </Button>
        }
      />
    </div>
  );
};
