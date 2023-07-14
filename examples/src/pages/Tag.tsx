import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="tag/basic" class="space-x-4" />
      <DemoModule name="tag/closable" class="space-x-4" />
      <DemoModule name="tag/effect" class="space-y-4" />
      <DemoModule name="tag/size" class="space-x-4 items-end flex" />

      @props(tag)
      
    </>
  );
};

export default Index;
