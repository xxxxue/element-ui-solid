import { ParentComponent } from "solid-js";

interface IProps {}
let TitleModule: ParentComponent<IProps> = (props) => {
  return (
    <>
      <h1 class="text-3xl mb-5">{props.children}</h1>
    </>
  );
};

export default TitleModule;
