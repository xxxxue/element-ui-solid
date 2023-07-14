import { styled } from "solid-styled-components";

export let StyledPageHeader = styled.div`
  &.el-page-header {
    display: flex;
    line-height: 24px;
  }

  .el-page-header__left {
    display: flex;
    cursor: pointer;
    margin-right: 40px;
    position: relative;
  }

  .el-page-header__left::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 16px;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #dcdfe6;
  }

  .el-page-header__left .el-icon-back {
    font-size: 18px;
    margin-right: 6px;
    align-self: center;
  }

  .el-page-header__title {
    font-size: 14px;
    font-weight: 500;
  }

  .el-page-header__content {
    font-size: 18px;
    color: #303133;
  }
`;
