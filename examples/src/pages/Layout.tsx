import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="layout/basic" class="space-y-5 w-full"/>
      <DemoModule name="layout/gutter"  class="space-y-5 w-full"/>
      <DemoModule name="layout/offset" class="space-y-5 w-full"/>
      <DemoModule name="layout/type" class="space-y-5 w-full"/>
      <DemoModule name="layout/responsive" class="space-y-5 w-full"/>

      @props(layout)
      
    </>
  );
};

export default Index;
