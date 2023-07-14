import { Timeline, TimelineItem } from "element-ui-solid";
import { For } from "solid-js";

let data = [
  {
    content: "支持使用图标",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
    icon: "el-icon-more",
  },
  {
    content: "支持自定义颜色",
    timestamp: "2018-04-03 20:46",
    color: "#0bbd87",
  },
  {
    content: "支持自定义尺寸",
    timestamp: "2018-04-03 20:46",
    size: "large",
  },
  {
    content: "默认样式的节点",
    timestamp: "2018-04-03 20:46",
  },
];

export default () => {
  return (
    <>
      <Timeline>
        <For each={data}>
          {(item) => {
            return (
              <TimelineItem
                icon={item.icon}
                type={item.type as any}
                color={item.color}
                size={item.size as any}
                timestamp={item.timestamp}
              >
                {item.content}
              </TimelineItem>
            );
          }}
        </For>
      </Timeline>
    </>
  );
};
