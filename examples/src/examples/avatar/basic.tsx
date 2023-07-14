import { Avatar } from "element-ui-solid";
import { For } from "solid-js";

export default () => {
  return (
    <>
      <Avatar
        size={100}
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></Avatar>

      <For each={["large", "medium", "small"]}>
        {(item) => {
          return (
            <div class="block">
              <Avatar
                size={item as any}
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></Avatar>
            </div>
          );
        }}
      </For>
    </>
  );
};
