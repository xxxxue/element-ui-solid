import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="link/basic" />
      <DemoModule name="link/disabled" />
      <DemoModule name="link/icon" />
      <DemoModule name="link/underline" />
      @props(link)
    </>
  );
};

export default Index;
