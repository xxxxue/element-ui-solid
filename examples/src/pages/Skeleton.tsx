import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="skeleton/basic" class="w-full"/>
      <DemoModule name="skeleton/row" class="w-full"/>
      <DemoModule name="skeleton/animated" class="w-full"/>
      <DemoModule name="skeleton/loading" class="w-full"/>
      <DemoModule name="skeleton/style" class="w-full"/>
      @props(skeleton)
    </>
  );
};

export default Index;
