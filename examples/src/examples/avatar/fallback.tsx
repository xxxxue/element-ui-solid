import { Avatar } from "element-ui-solid";

export default () => {
  return (
    <>
      <Avatar
        size={100}
        src="https://avatar-test"
        onError={() => {
          return true;
        }}
      >
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </Avatar>
    </>
  );
};
