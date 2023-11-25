import { styled } from "solid-styled-components";

export let StyledCollapse = styled.div`
  .fade-in-linear-enter-active,
  .fade-in-linear-leave-active {
    transition: opacity 0.2s linear;
  }
  .fade-in-linear-enter,
  .fade-in-linear-leave,
  .fade-in-linear-leave-active {
    opacity: 0;
  }
  .el-fade-in-linear-enter-active,
  .el-fade-in-linear-leave-active {
    transition: opacity 0.2s linear;
  }
  .el-fade-in-linear-enter,
  .el-fade-in-linear-leave,
  .el-fade-in-linear-leave-active {
    opacity: 0;
  }
  .el-fade-in-enter-active,
  .el-fade-in-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .el-fade-in-enter,
  .el-fade-in-leave-active {
    opacity: 0;
  }
  .el-zoom-in-center-enter-active,
  .el-zoom-in-center-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .el-zoom-in-center-enter,
  .el-zoom-in-center-leave-active {
    opacity: 0;
    transform: scaleX(0);
  }
  .el-zoom-in-top-enter-active,
  .el-zoom-in-top-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition:
      transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }
  .el-zoom-in-top-enter,
  .el-zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
  .el-zoom-in-bottom-enter-active,
  .el-zoom-in-bottom-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition:
      transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center bottom;
  }
  .el-zoom-in-bottom-enter,
  .el-zoom-in-bottom-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
  .el-zoom-in-left-enter-active,
  .el-zoom-in-left-leave-active {
    opacity: 1;
    transform: scale(1, 1);
    transition:
      transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: top left;
  }
  .el-zoom-in-left-enter,
  .el-zoom-in-left-leave-active {
    opacity: 0;
    transform: scale(0.45, 0.45);
  }
  .collapse-transition {
    transition:
      0.3s height ease-in-out,
      0.3s padding-top ease-in-out,
      0.3s padding-bottom ease-in-out;
  }
  .horizontal-collapse-transition {
    transition:
      0.3s width ease-in-out,
      0.3s padding-left ease-in-out,
      0.3s padding-right ease-in-out;
  }
  .el-list-enter-active,
  .el-list-leave-active {
    transition: all 1s;
  }
  .el-list-enter,
  .el-list-leave-active {
    opacity: 0;
    transform: translateY(-30px);
  }
  .el-opacity-transition {
    transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  &.el-collapse {
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
  .el-collapse-item.is-disabled .el-collapse-item__header {
    color: #bbb;
    cursor: not-allowed;
  }
  .el-collapse-item__header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color 0.3s;
    outline: 0;
  }
  .el-collapse-item__arrow {
    margin: 0 8px 0 auto;
    transition: transform 0.3s;
    font-weight: 300;
  }
  .el-collapse-item__arrow.is-active {
    transform: rotate(90deg);
  }
  .el-collapse-item__header.focusing:focus:not(:hover) {
    color: #409eff;
  }
  .el-collapse-item__header.is-active {
    border-bottom-color: transparent;
  }
  .el-collapse-item__wrap {
    will-change: height;
    background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
  }
  .el-collapse-item__content {
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 1.7692307692;
  }
  .el-collapse-item:last-child {
    margin-bottom: -1px;
  }
`;
