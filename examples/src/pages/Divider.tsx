import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
      <DemoModule name="divider/basic"/>
      <DemoModule name="divider/content" />
      <DemoModule name="divider/vertical" />
      @props(divider)
    </>
  );
}; 

export default Index;
