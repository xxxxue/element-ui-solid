import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="timeline/basic" />
            <DemoModule name="timeline/customNode" />
            <DemoModule name="timeline/customTimestamp" />
            @props(timeline)
        </>
    );
};

export default Index;
