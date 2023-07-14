import { Button, Card, Skeleton, SkeletonItem } from "element-ui-solid";
import { createSignal } from "solid-js";

export default () => {
  const [loading, setLoading] = createSignal<boolean>(false);

  return (
    <>
      <div style={{ width: "240px" }}>
        <p>
          <label style={{ "margin-right": "16px" }}>切换 Loading</label>
          <input
            type="checkbox"
            checked={loading()}
            onChange={(e) => {
              setLoading(e.currentTarget.checked);
            }}
          />
        </p>
        <Skeleton
          throttle={500}
          style={{ width: "240px" }}
          loading={loading()}
          animated
          template={
            <>
              <SkeletonItem variant="image" style={{ width: "240px", height: "240px" }} />
              <div style={{ padding: "14px" }}>
                <SkeletonItem variant="h3" style={{ width: "50%" }} />
                <div
                  style={{
                    display: "flex",
                    "align-items": "center",
                    "justify-items": "space-between",
                    "margin-top": "16px",
                    height: "16px",
                  }}
                >
                  <SkeletonItem variant="text" style={{ "margin-right": "16px" }} />
                  <SkeletonItem variant="text" style={{ width: "30%" }} />
                </div>
              </div>
            </>
          }
        >
          <Card bodyStyle={{ padding: "0px" }}>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style={{ width: "100%" }}
            />
            <div style={{ padding: "14px" }}>
              <span>好吃的汉堡</span>
              <div
                style={{
                  "margin-top": "13px",
                  "line-height": "12px",
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                }}
              >
                <span style={{ "font-size": "13px", color: "#999" }}>2021-06-01</span>
                <Button type="text" style={{ padding: "0", "min-height": "auto" }}>
                  操作按钮
                </Button>
              </div>
            </div>
          </Card>
        </Skeleton>
      </div>
    </>
  );
};
