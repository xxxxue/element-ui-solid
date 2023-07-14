import DemoModule from "../components/DemoModule";
let Index = () => {
  return (
    <>
      <DemoModule name="card/basic"/>
      <DemoModule name="card/simple"/>
      <DemoModule name="card/style"/>
      <DemoModule name="card/shadow" class="flex space-x-5" />

      @props(card)
    </>
  );
};

export default Index;
