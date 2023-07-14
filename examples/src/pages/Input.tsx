import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="input/basic" />
            <DemoModule name="input/disabled" />
            <DemoModule name="input/clearable" />
            <DemoModule name="input/showPassword" />
            <DemoModule name="input/icon" />
            <DemoModule name="input/textarea" />
            <DemoModule name="input/mixed" />
            <DemoModule name="input/size" />
            <DemoModule name="input/limit" />
            @props(input)
        </>
    );
};

export default Index;
