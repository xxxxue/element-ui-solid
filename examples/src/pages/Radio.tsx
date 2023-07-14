import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="radio/basic" />
      <DemoModule name="radio/disabled" />
      <DemoModule name="radio/group"  />
      <DemoModule name="radio/button" class="space-y-4"/>
      <DemoModule name="radio/border" class="space-y-4" />
      @props(radio)
    </>
  );
};

export default Index;
