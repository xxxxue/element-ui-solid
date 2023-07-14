import { Card } from "element-ui-solid";
import { For } from "solid-js";

export default () => {
  return (
    <>
      <Card
        cardStyle={{
          width: "400px",
        }}
      >
        <For each={[0, 1, 2, 3, 4]}>
          {(item) => {
            return <div>列表{item}</div>;
          }}
        </For>
      </Card>
    </>
  );
};
