import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="alert/basic" class="w-full space-y-3"/>
      <DemoModule name="alert/center" class="w-full space-y-3"/>
      <DemoModule name="alert/close" class="w-full space-y-3"/>
      <DemoModule name="alert/desc" class="w-full space-y-3"/>
      <DemoModule name="alert/effect" class="w-full space-y-3"/>
      <DemoModule name="alert/showIcon" class="w-full space-y-3"/>

      @props(alert)
    </>
  );
};

export default Index;
