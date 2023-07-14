import { Button, Card } from "element-ui-solid";
import { For } from "solid-js";

export default () => {
  return (
    <>
      <Card
        cardStyle={{ width: "400px" }}
        header={
          <div>
            <span>卡片名称</span>
            <Button
              type="text"
              style={{
                float: "right",
                padding: "3px 0",
              }}
            >
              操作按钮
            </Button>
          </div>
        }
      >
        <For each={[1, 2, 3, 4, 5]}>
          {(item) => {
            return <div>列表{item}</div>;
          }}
        </For>
      </Card>
    </>
  );
};
