import { styled } from "solid-styled-components";

export let StyledProgress = styled.div`
  &.el-progress {
    position: relative;
    line-height: 1;
  }
  .el-progress__text {
    font-size: 14px;
    color: #606266;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;
  }
  .el-progress__text i {
    vertical-align: middle;
    display: block;
  }
  &.el-progress--circle,
  &.el-progress--dashboard {
    display: inline-block;
  }
  &.el-progress--circle .el-progress__text,
  &.el-progress--dashboard .el-progress__text {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    transform: translate(0, -50%);
  }
  &.el-progress--circle .el-progress__text i,
  &.el-progress--dashboard .el-progress__text i {
    vertical-align: middle;
    display: inline-block;
  }
  &.el-progress--without-text .el-progress__text {
    display: none;
  }
  &.el-progress--without-text .el-progress-bar {
    padding-right: 0;
    margin-right: 0;
    display: block;
  }
  &.el-progress--text-inside .el-progress-bar {
    padding-right: 0;
    margin-right: 0;
  }
  &.el-progress.is-success .el-progress-bar__inner {
    background-color: #67c23a;
  }
  &.el-progress.is-success .el-progress__text {
    color: #67c23a;
  }
  &.el-progress.is-warning .el-progress-bar__inner {
    background-color: #e6a23c;
  }
  &.el-progress.is-warning .el-progress__text {
    color: #e6a23c;
  }
  &.el-progress.is-exception .el-progress-bar__inner {
    background-color: #f56c6c;
  }
  &.el-progress.is-exception .el-progress__text {
    color: #f56c6c;
  }
  .el-progress-bar {
    padding-right: 50px;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -55px;
    box-sizing: border-box;
  }
  .el-progress-bar__outer {
    height: 6px;
    border-radius: 100px;
    background-color: #ebeef5;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }
  .el-progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #409eff;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;
    transition: width 0.6s ease;
  }
  .el-progress-bar__inner::after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
  .el-progress-bar__innerText {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
  }
  @keyframes progress {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 32px 0;
    }
  }
`;
