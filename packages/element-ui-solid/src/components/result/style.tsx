import { styled } from "solid-styled-components";

export let StyledResult = styled.div`
  &.el-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 40px 30px;
  }
  .el-result__icon svg {
    width: 64px;
    height: 64px;
  }
  .el-result__title {
    margin-top: 20px;
  }
  .el-result__title p {
    margin: 0;
    font-size: 20px;
    color: #303133;
    line-height: 1.3;
  }
  .el-result__subtitle {
    margin-top: 10px;
  }
  .el-result__subtitle p {
    margin: 0;
    font-size: 14px;
    color: #606266;
    line-height: 1.3;
  }
  .el-result__extra {
    margin-top: 30px;
  }
  &.el-result .icon-success {
    fill: #67c23a;
  }
  &.el-result .icon-error {
    fill: #f56c6c;
  }
  &.el-result .icon-info {
    fill: #909399;
  }
  &.el-result .icon-warning {
    fill: #e6a23c;
  }
`;
