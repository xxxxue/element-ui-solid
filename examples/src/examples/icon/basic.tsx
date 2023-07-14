import clsx from "clsx";
import { IconList } from "element-ui-solid";
import { For, ParentComponent } from "solid-js";

let Tag: ParentComponent = (props) => {
  return <code class="bg-gray-200 p-2 rounded-lg">{props.children}</code>;
};

let Index = () => {
  return (
    <div class="space-y-7">
      <div>
        <Tag>el-icon-</Tag> + <Tag>name</Tag>
      </div>
      <div>eg:</div>
      <div>
        <Tag>{`<i class="el-icon-platform-eleme"></i>`}</Tag>
      </div>
      <div>{`↓`}</div>
      <div>
        <Tag>
          <i class="el-icon-platform-eleme"></i>
        </Tag>
      </div>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 ">
        <For each={IconList}>
          {(item) => {
            return (
              <div class="flex flex-col items-center border border-solid p-3 justify-center rounded-lg">
                <i class={clsx(item, "text-4xl")}></i>
                <span>{item.replace("el-icon-", "")}</span>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Index;
