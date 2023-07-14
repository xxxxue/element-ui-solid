import { Row, Col } from "element-ui-solid";

export default () => {
  return (
    <div class="space-y-5">
      <Row type="flex" class="row-bg">
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row type="flex" class="row-bg" justify="center">
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row type="flex" class="row-bg" justify="end">
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row type="flex" class="row-bg" justify="space-between">
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row type="flex" class="row-bg" justify="space-around">
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div class="grid-content bg-purple"></div>
        </Col>
      </Row>
    </div>
  );
};
