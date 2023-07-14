import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="checkbox/basic"/>
      <DemoModule name="checkbox/group"/>

      @props(checkbox)
    </>
  );
};

export default Index;
