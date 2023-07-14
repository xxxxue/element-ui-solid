import { Container, Header, Aside, Main } from "element-ui-solid";

export default () => {
  return (
    <>
      <Container>
        <Header>Header</Header>
        <Container>
          <Aside style={{ width: "100px" }}>Aside</Aside>
          <Main>Main</Main>
        </Container>
      </Container>
    </>
  );
};
