import { Row, Col } from "element-ui-solid";

export default () => {
  return (
    <div class="space-y-5">
      <Row gutter={20}>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6} offset={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6} offset={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6} offset={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12} offset={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
    </div>
  );
};
