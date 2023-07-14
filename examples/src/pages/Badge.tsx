import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="badge/basic" class="my-space md:space-x-10" />
      <DemoModule name="badge/max" class="space-x-10" />
      <DemoModule name="badge/text" class="space-x-10" />
      <DemoModule name="badge/isDot" class="space-x-10" />

      @props(badge)
    </>
  );
};

export default Index;
