import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="switch/basic" class="space-y-4" />
      <DemoModule name="switch/color" />
      <DemoModule name="switch/disabled" />

      @props(switch)
    </>
  );
};

export default Index;
