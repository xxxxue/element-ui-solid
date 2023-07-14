import { Container, Aside, Header, Main } from "element-ui-solid";

export default () => {
  return (
    <>
      <Container>
        <Aside style={{ width: "100px" }}>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </Container>
    </>
  );
};
