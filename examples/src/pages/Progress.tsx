import DemoModule from "../components/DemoModule";

let Index = () => {
    return (
        <>
            <DemoModule name="progress/basic" class="w-full" />
            <DemoModule name="progress/percentage" class="w-full space-y-3" />
            <DemoModule name="progress/customColor" class="w-full " />
            <DemoModule name="progress/circular" class="w-full " />
            <DemoModule name="progress/dashboard" class="w-full " />
            @props(progress)
        </>
    );
};

export default Index;
