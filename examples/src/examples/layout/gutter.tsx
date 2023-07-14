import { Row, Col } from "element-ui-solid";

export default () => {
  return (
    <div class="space-y-5">
      <Row gutter={20}>
        <Col span={16}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={8}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={8}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={16}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
    </div>
  );
};
