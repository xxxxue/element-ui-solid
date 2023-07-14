import { Timeline, TimelineItem } from "element-ui-solid";
import { For, createSignal } from "solid-js";

let data = [
  {
    content: "1",
    timestamp: "2018-04-11",
  },
  {
    content: "2",
    timestamp: "2018-04-12",
  },
  {
    content: "3",
    timestamp: "2018-04-13",
  },
  {
    content: "4",
    timestamp: "2018-04-14",
  },
];
export default () => {
  const [reverse, setReverse] = createSignal<boolean>(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setReverse((p) => !p);
          }}
        >
          reverse
        </button>
      </div>
      <br />
      <div>
        <Timeline reverse={reverse()}>
          <For each={data}>
            {(item) => {
              return <TimelineItem timestamp={item.timestamp}>{item.content}</TimelineItem>;
            }}
          </For>
        </Timeline>
      </div>
    </>
  );
};
