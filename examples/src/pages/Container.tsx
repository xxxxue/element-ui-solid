import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="container/container1" class="w-full"/>
      <DemoModule name="container/container2" class="w-full"/>
      <DemoModule name="container/container3" class="w-full"/>
      <DemoModule name="container/container4" class="w-full"/>
      <DemoModule name="container/container5" class="w-full"/>
      <DemoModule name="container/container6" class="w-full"/>
      <DemoModule name="container/container7" class="w-full"/>

      @props(container)
    </>
  );
};

export default Index;
