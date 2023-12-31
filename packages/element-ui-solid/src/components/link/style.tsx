import { styled } from "solid-styled-components";

export let StyledLink = styled.a`
  &.el-link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }
  &.el-link.is-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid #409eff;
  }
  &.el-link.is-disabled {
    cursor: not-allowed;
  }
  &.el-link [class*="el-icon-"] + span {
    margin-left: 5px;
  }
  &.el-link.el-link--default {
    color: #606266;
  }
  &.el-link.el-link--default:hover {
    color: #409eff;
  }
  &.el-link.el-link--default:after {
    border-color: #409eff;
  }
  &.el-link.el-link--default.is-disabled {
    color: #c0c4cc;
  }
  &.el-link.el-link--primary {
    color: #409eff;
  }
  &.el-link.el-link--primary:hover {
    color: #66b1ff;
  }
  &.el-link.el-link--primary:after {
    border-color: #409eff;
  }
  &.el-link.el-link--primary.is-disabled {
    color: #a0cfff;
  }
  &.el-link.el-link--primary.is-underline:hover:after {
    border-color: #409eff;
  }
  &.el-link.el-link--danger {
    color: #f56c6c;
  }
  &.el-link.el-link--danger:hover {
    color: #f78989;
  }
  &.el-link.el-link--danger:after {
    border-color: #f56c6c;
  }
  &.el-link.el-link--danger.is-disabled {
    color: #fab6b6;
  }
  &.el-link.el-link--danger.is-underline:hover:after {
    border-color: #f56c6c;
  }
  &.el-link.el-link--success {
    color: #67c23a;
  }
  &.el-link.el-link--success:hover {
    color: #85ce61;
  }
  &.el-link.el-link--success:after {
    border-color: #67c23a;
  }
  &.el-link.el-link--success.is-disabled {
    color: #b3e19d;
  }
  &.el-link.el-link--success.is-underline:hover:after {
    border-color: #67c23a;
  }
  &.el-link.el-link--warning {
    color: #e6a23c;
  }
  &.el-link.el-link--warning:hover {
    color: #ebb563;
  }
  &.el-link.el-link--warning:after {
    border-color: #e6a23c;
  }
  &.el-link.el-link--warning.is-disabled {
    color: #f3d19e;
  }
  &.el-link.el-link--warning.is-underline:hover:after {
    border-color: #e6a23c;
  }
  &.el-link.el-link--info {
    color: #909399;
  }
  &.el-link.el-link--info:hover {
    color: #a6a9ad;
  }
  &.el-link.el-link--info:after {
    border-color: #909399;
  }
  &.el-link.el-link--info.is-disabled {
    color: #c8c9cc;
  }
  &.el-link.el-link--info.is-underline:hover:after {
    border-color: #909399;
  }
`;
