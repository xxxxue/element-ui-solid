import { Row, Col } from "element-ui-solid";

export default () => {
  return (
    <div class="space-y-5">
      <Row gutter={10}>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </div>
  );
};
