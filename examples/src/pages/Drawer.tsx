import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="drawer/basic" />
            <DemoModule name="drawer/content" />
            <DemoModule name="drawer/header" />
            <DemoModule name="drawer/more" />
            @props(drawer)
        </>
    );
};

export default Index;
