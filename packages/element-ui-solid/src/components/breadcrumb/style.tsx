import { styled } from "solid-styled-components";

export let StyledBreadcrumb = styled.div`
  &.el-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }
  &.el-breadcrumb::after,
  &.el-breadcrumb::before {
    display: table;
    content: "";
  }
  & .el-breadcrumb::after {
    clear: both;
  }
  .el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
  }
  .el-breadcrumb__separator[class*="icon"] {
    margin: 0 6px;
    font-weight: 400;
  }
  .el-breadcrumb__item {
    float: left;
  }
  .el-breadcrumb__inner {
    color: #606266;
  }
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #303133;
  }
  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__inner.is-link:hover {
    color: #409eff;
    cursor: pointer;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 400;
    color: #606266;
    cursor: text;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__separator {
    display: none;
  }
`;
