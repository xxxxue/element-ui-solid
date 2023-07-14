import DemoModule from "../components/DemoModule";

let Index = () => {
  return (
    <>
     <DemoModule name="avatar/basic" class="flex space-x-4"/>
     <DemoModule name="avatar/square" class="flex space-x-4"/>
     <DemoModule name="avatar/type"/>
     <DemoModule name="avatar/fallback"/>
     <DemoModule name="avatar/fit"/>

     @props(avatar)
    </>
  );
};

export default Index;
