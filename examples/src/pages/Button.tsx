import DemoModule from "../components/DemoModule";
import TitleModule from "../components/TitleModule";

const Index = () => {
  return (
    <>
      <TitleModule>Button</TitleModule>

      <DemoModule name="button/basic" />

      <DemoModule name="button/plain" />

      <DemoModule name="button/round" />

      <DemoModule name="button/icon" />

      <DemoModule name="button/disabled" />

      <DemoModule name="button/text" />

      <DemoModule name="button/group" />

      
      @props(button)
    </>
  );
};

export default Index;
