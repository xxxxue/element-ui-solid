import { Button, Drawer } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [open, setOpen] = createSignal<boolean>(false);
  const [open2, setOpen2] = createSignal<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>click</Button>
      <Drawer visible={open()} onClose={() => setOpen(false)} title="hhh">
      <Button onClick={() => setOpen2(true)}>click2</Button>
        <Drawer direction="ltr" visible={open2()} onClose={() => setOpen2(false)} title="222"></Drawer>
      </Drawer>
    </>
  );
};
