import { styled } from "solid-styled-components";

export let StyledAlert = styled.div`
  &.el-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
  }
  &.el-alert.is-light .el-alert__closebtn {
    color: #c0c4cc;
  }
  &.el-alert.is-dark .el-alert__closebtn {
    color: #fff;
  }
  &.el-alert.is-dark .el-alert__description {
    color: #fff;
  }
  &.el-alert.is-center {
    justify-content: center;
  }
  &.el-alert--success.is-light {
    background-color: #f0f9eb;
    color: #67c23a;
  }
  &.el-alert--success.is-light .el-alert__description {
    color: #67c23a;
  }
  &.el-alert--success.is-dark {
    background-color: #67c23a;
    color: #fff;
  }
  &.el-alert--info.is-light {
    background-color: #f4f4f5;
    color: #909399;
  }
  &.el-alert--info.is-dark {
    background-color: #909399;
    color: #fff;
  }
  &.el-alert--info .el-alert__description {
    color: #909399;
  }
  &.el-alert--warning.is-light {
    background-color: #fdf6ec;
    color: #e6a23c;
  }
  &.el-alert--warning.is-light .el-alert__description {
    color: #e6a23c;
  }
  &.el-alert--warning.is-dark {
    background-color: #e6a23c;
    color: #fff;
  }
  &.el-alert--error.is-light {
    background-color: #fef0f0;
    color: #f56c6c;
  }
  &.el-alert--error.is-light .el-alert__description {
    color: #f56c6c;
  }
  &.el-alert--error.is-dark {
    background-color: #f56c6c;
    color: #fff;
  }
  .el-alert__content {
    display: table-cell;
    padding: 0 8px;
  }
  .el-alert__icon {
    font-size: 16px;
    width: 16px;
  }
  .el-alert__icon.is-big {
    font-size: 28px;
    width: 28px;
  }
  .el-alert__title {
    font-size: 13px;
    line-height: 18px;
  }
  .el-alert__title.is-bold {
    font-weight: 700;
  }
  &.el-alert .el-alert__description {
    font-size: 12px;
    margin: 5px 0 0 0;
  }
  .el-alert__closebtn {
    font-size: 12px;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  }
  .el-alert__closebtn.is-customed {
    font-style: normal;
    font-size: 13px;
    top: 9px;
  }
  .el-alert-fade-enter,
  .el-alert-fade-leave-active {
    opacity: 0;
  }
`;

