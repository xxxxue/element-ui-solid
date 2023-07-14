import { styled } from "solid-styled-components";

export let StyledAvatar = styled.span`
  &.el-avatar {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    color: #fff;
    background: #c0c4cc;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  &.el-avatar > img {
    display: block;
    height: 100%;
    vertical-align: middle;
  }
  &.el-avatar--circle {
    border-radius: 50%;
  }
  &.el-avatar--square {
    border-radius: 4px;
  }
  &.el-avatar--icon {
    font-size: 18px;
  }
  &.el-avatar--large {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  &.el-avatar--medium {
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
  &.el-avatar--small {
    width: 28px;
    height: 28px;
    line-height: 28px;
  }
`;