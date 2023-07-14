import { Container, Header, Aside, Main, Footer } from "element-ui-solid";

export default () => {
  return (
    <>
      <Container>
        <Header>Header</Header>
        <Container>
          <Aside style={{ width: "100px" }}>Aside</Aside>
          <Container>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </Container>
    </>
  );
};
