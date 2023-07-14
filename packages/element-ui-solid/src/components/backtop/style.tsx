import { styled } from "solid-styled-components";

export let StyledBacktop = styled.div`
  &.el-backtop {
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    z-index: 5;
  }
  &.el-backtop:hover {
    background-color: #f2f6fc;
  }
`;

