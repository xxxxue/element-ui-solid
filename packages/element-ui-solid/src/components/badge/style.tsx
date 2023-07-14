import { styled } from "solid-styled-components";

export let StyledBadge = styled.div`
  &.el-badge {
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }
  .el-badge__content {
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
  }
  .el-badge__content.is-fixed {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
  }
  .el-badge__content.is-fixed.is-dot {
    right: 5px;
  }
  .el-badge__content.is-dot {
    height: 8px;
    width: 8px;
    padding: 0;
    right: 0;
    border-radius: 50%;
  }
  .el-badge__content--primary {
    background-color: #409eff;
  }
  .el-badge__content--success {
    background-color: #67c23a;
  }
  .el-badge__content--warning {
    background-color: #e6a23c;
  }
  .el-badge__content--info {
    background-color: #909399;
  }
  .el-badge__content--danger {
    background-color: #f56c6c;
  }
`;