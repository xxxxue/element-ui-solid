import { Statistic, Row, Col } from "element-ui-solid";
import { Show, createSignal } from "solid-js";

export default () => {
  const [like, setLike] = createSignal<boolean>(true);
  const [value1, setValue1] = createSignal<number>(4154.564);
  const [value2, setValue2] = createSignal<number>(1314);
  const [title, setTitle] = createSignal<string>("增长人数");
  return (
    <>
      <div>
        <Row gutter={20}>
          <Col span={6}>
            <div>
              <Statistic groupSeparator="," precision={2} value={value2()} title={title()} />
            </div>
          </Col>
          <Col span={6}>
            <div>
              <Statistic title="男女比" formatter="456/2"></Statistic>
            </div>
          </Col>
          <Col span={6}>
            <div>
              <Statistic
                groupSeparator=","
                precision={2}
                decimalSeparator="."
                value={value1()}
                title={title()}
                prefix={<i class="el-icon-s-flag" style="color: red"></i>}
                suffix={<i class="el-icon-s-flag" style="color: blue"></i>}
              />
            </div>
          </Col>
          <Col span={6}>
            <div>
              <Statistic
                value={like() ? 521 : 520}
                title="反馈"
                suffix={
                  <span
                    onClick={() => {
                      setLike((p) => !p);
                    }}
                    class="like"
                    style={{
                      cursor: "pointer",
                      "font-size": "25px",
                      display: "inline-block",
                    }}
                  >
                    <Show when={!!like()}>
                      <i
                        class="el-icon-star-on"
                        style={{
                          color: "red",
                        }}
                      ></i>
                    </Show>

                    <Show when={!like()}>
                      <i class="el-icon-star-off"></i>
                    </Show>
                  </span>
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
