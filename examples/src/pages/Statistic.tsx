import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="statistic/basic" />
            <DemoModule name="statistic/countDown" />
            @props(statistic)
        </>
    );
};

export default Index;
