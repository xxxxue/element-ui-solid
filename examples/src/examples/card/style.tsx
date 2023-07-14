import { Card } from "element-ui-solid";

export default () => {
  return (
    <>
      <Card
        cardStyle={{
          width: "400px",
        }}
        bodyStyle={{
          padding: "0px",
        }}
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style={{
            width: "100%",
            display: "block",
          }}
        />
        <div style={{ padding: "14px" }}>
          <span>好吃的汉堡</span>
        </div>
      </Card>
    </>
  );
};
