import { Button, Drawer } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [open, setOpen] = createSignal<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>click</Button>
      <Drawer visible={open()} onClose={() => setOpen(false)} title="hhh">
      </Drawer>
    </>
  );
};
