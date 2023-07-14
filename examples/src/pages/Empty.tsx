import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="empty/basic"/>
      <DemoModule name="empty/description"/>
      <DemoModule name="empty/image"/>

      @props(empty)
    </>
  );
};

export default Index;
