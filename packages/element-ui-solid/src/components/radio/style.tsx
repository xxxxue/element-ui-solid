import { styled } from "solid-styled-components";

export let StyledRadio = styled.label`
  &.el-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: 0;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  &.el-radio.is-bordered {
    padding: 12px 20px 0 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    height: 40px;
  }
  &.el-radio.is-bordered.is-checked {
    border-color: #409eff;
  }
  &.el-radio.is-bordered.is-disabled {
    cursor: not-allowed;
    border-color: #ebeef5;
  }
  &.el-radio.is-bordered + .el-radio.is-bordered {
    margin-left: 10px;
  }
  .el-radio--medium.is-bordered {
    padding: 10px 20px 0 10px;
    border-radius: 4px;
    height: 36px;
  }
  &.el-radio--medium.is-bordered .el-radio__label {
    font-size: 14px;
  }
  &.el-radio--medium.is-bordered .el-radio__inner {
    height: 14px;
    width: 14px;
  }
  &.el-radio--small.is-bordered {
    padding: 8px 15px 0 10px;
    border-radius: 3px;
    height: 32px;
  }
  &.el-radio--small.is-bordered .el-radio__label {
    font-size: 12px;
  }
  &.el-radio--small.is-bordered .el-radio__inner {
    height: 12px;
    width: 12px;
  }
  &.el-radio--mini.is-bordered {
    padding: 6px 15px 0 10px;
    border-radius: 3px;
    height: 28px;
  }
  &.el-radio--mini.is-bordered .el-radio__label {
    font-size: 12px;
  }
  &.el-radio--mini.is-bordered .el-radio__inner {
    height: 12px;
    width: 12px;
  }
  &.el-radio:last-child {
    margin-right: 0;
  }
  .el-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .el-radio__input.is-disabled .el-radio__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
  .el-radio__input.is-disabled .el-radio__inner::after {
    cursor: not-allowed;
    background-color: #f5f7fa;
  }
  .el-radio__input.is-disabled .el-radio__inner + .el-radio__label {
    cursor: not-allowed;
  }
  .el-radio__input.is-disabled.is-checked .el-radio__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
  }
  .el-radio__input.is-disabled.is-checked .el-radio__inner::after {
    background-color: #c0c4cc;
  }
  .el-radio__input.is-disabled + span.el-radio__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #409eff;
    background: #409eff;
  }
  .el-radio__input.is-checked .el-radio__inner::after {
    transform: translate(-50%, -50%) scale(1);
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #409eff;
  }
  .el-radio__input.is-focus .el-radio__inner {
    border-color: #409eff;
  }
  .el-radio__inner {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
  }
  .el-radio__inner:hover {
    border-color: #409eff;
  }
  .el-radio__inner::after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.15s ease-in;
  }
  .el-radio__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
    box-shadow: 0 0 2px 2px #409eff;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
`;

export let StyledRadioGroup = styled.label`
  &.el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
  }
`;

export let StyledRadioButton = styled.label`
  &.el-radio-button {
    position: relative;
    display: inline-block;
    outline: 0;
  }
  .el-radio-button__inner {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    position: relative;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
  }
  .el-radio-button__inner.is-round {
    padding: 12px 20px;
  }
  .el-radio-button__inner:hover {
    color: #409eff;
  }
  .el-radio-button__inner [class*="el-icon-"] {
    line-height: 0.9;
  }
  .el-radio-button__inner [class*="el-icon-"] + span {
    margin-left: 5px;
  }
  &.el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    box-shadow: none !important;
  }
  .el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    box-shadow: -1px 0 0 0 #409eff;
  }
  .el-radio-button__orig-radio:disabled + .el-radio-button__inner {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    box-shadow: none;
  }
  .el-radio-button__orig-radio:disabled:checked + .el-radio-button__inner {
    background-color: #f2f6fc;
  }
  &.el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0 4px 4px 0;
  }
  &.el-radio-button:first-child:last-child .el-radio-button__inner {
    border-radius: 4px;
  }
  &.el-radio-button--medium .el-radio-button__inner {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0;
  }
  &.el-radio-button--medium .el-radio-button__inner.is-round {
    padding: 10px 20px;
  }
  &.el-radio-button--small .el-radio-button__inner {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0;
  }
  &.el-radio-button--small .el-radio-button__inner.is-round {
    padding: 9px 15px;
  }
  &.el-radio-button--mini .el-radio-button__inner {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0;
  }
  &.el-radio-button--mini .el-radio-button__inner.is-round {
    padding: 7px 15px;
  }
  &.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    box-shadow: 0 0 2px 2px #409eff;
  }
`;
