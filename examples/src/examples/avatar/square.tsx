import { Avatar } from "element-ui-solid";
import { For } from "solid-js";

export default () => {
  return (
    <>
      <Avatar
        shape="square"
        size={100}
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></Avatar>
      <For each={["large", "medium", "small"]}>
        {(item) => {
          return (
            <div class="block">
              <Avatar
                shape="square"
                size={item as any}
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              ></Avatar>
            </div>
          );
        }}
      </For>
    </>
  );
};
