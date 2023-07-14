import { Container, Aside, Main } from "element-ui-solid";

export default () => {
  return (
    <>
      <Container>
          <Aside style={{ width: "100px" }}>Aside</Aside>
          <Main>Main</Main>
        </Container>
    </>
  );
}