import DemoModule from "../components/DemoModule";
import ApiModule from "../components/ApiModule";

let Index = () => {
  return (
    <>
      <DemoModule name="collapse/basic" />

      <DemoModule name="collapse/defaultActiveKey" />

      <DemoModule name="collapse/accordion" />

      @props(collapse)
    </>
  );
};

export default Index;
