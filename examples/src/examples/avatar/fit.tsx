import { Avatar } from "element-ui-solid";
import { For } from "solid-js";

export default () => {
  return (
    <>
      <div class="space-y-10 lg:space-y-0 lg:justify-center lg:items-center lg:flex lg:space-x-3  ">
        <For each={["fill", "contain", "cover", "none", "scale-down"]}>
          {(item) => {
            return (
              <div class="flex flex-col space-y-3">
                <span class="text-center">{item}</span>
                <Avatar
                  shape="square"
                  size={150}
                  fit={item as any}
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                ></Avatar>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
};
