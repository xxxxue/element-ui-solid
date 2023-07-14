import { styled } from "solid-styled-components";

export let StyledSwitch = styled.div`
  &.el-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
  }
  &.el-switch.is-disabled .el-switch__core,
  &.el-switch.is-disabled .el-switch__label {
    cursor: not-allowed;
  }
  .el-switch__label {
    transition: 0.2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
  }
  .el-switch__label.is-active {
    color: #409eff;
  }
  .el-switch__label--left {
    margin-right: 10px;
  }
  .el-switch__label--right {
    margin-left: 10px;
  }
  .el-switch__label * {
    line-height: 1;
    font-size: 14px;
    display: inline-block;
  }
  .el-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .el-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: 0;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition:
      border-color 0.3s,
      background-color 0.3s;
    vertical-align: middle;
  }
  .el-switch__core:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
  &.el-switch.is-checked .el-switch__core {
    border-color: #409eff;
    background-color: #409eff;
  }
  &.el-switch.is-checked .el-switch__core::after {
    left: 100%;
    margin-left: -17px;
  }
  &.el-switch.is-disabled {
    opacity: 0.6;
  }
  .el-switch--wide .el-switch__label.el-switch__label--left span {
    left: 10px;
  }
  .el-switch--wide .el-switch__label.el-switch__label--right span {
    right: 10px;
  }
  &.el-switch .label-fade-enter,
  &.el-switch .label-fade-leave-active {
    opacity: 0;
  }
`;
