import { styled } from "solid-styled-components";

export let StyledDivider = styled.div`
  &.el-divider {
    background-color: #dcdfe6;
    position: relative;
  }
  &.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
  }
  &.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
  }
  .el-divider__text {
    position: absolute;
    background-color: #fff;
    padding: 0 20px;
    font-weight: 500;
    color: #303133;
    font-size: 14px;
  }
  .el-divider__text.is-left {
    left: 20px;
    transform: translateY(-50%);
  }
  .el-divider__text.is-center {
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .el-divider__text.is-right {
    right: 20px;
    transform: translateY(-50%);
  }
`;
