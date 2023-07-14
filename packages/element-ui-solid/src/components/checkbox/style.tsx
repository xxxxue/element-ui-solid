import { styled } from "solid-styled-components";

export let StyledCheckbox = styled.label`
  &.el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin-right: 30px;
  }
  &.el-checkbox.is-bordered {
    padding: 9px 20px 9px 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    line-height: normal;
    height: 40px;
  }
  &.el-checkbox.is-bordered.is-checked {
    border-color: #409eff;
  }
  &.el-checkbox.is-bordered.is-disabled {
    border-color: #ebeef5;
    cursor: not-allowed;
  }
  &.el-checkbox.is-bordered + &.el-checkbox.is-bordered {
    margin-left: 10px;
  }
  &.el-checkbox.is-bordered.el-checkbox--medium {
    padding: 7px 20px 7px 10px;
    border-radius: 4px;
    height: 36px;
  }
  &.el-checkbox.is-bordered.el-checkbox--medium .el-checkbox__label {
    line-height: 17px;
    font-size: 14px;
  }
  &.el-checkbox.is-bordered.el-checkbox--medium .el-checkbox__inner {
    height: 14px;
    width: 14px;
  }
  &.el-checkbox.is-bordered.el-checkbox--small {
    padding: 5px 15px 5px 10px;
    border-radius: 3px;
    height: 32px;
  }
  &.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label {
    line-height: 15px;
    font-size: 12px;
  }
  &.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner {
    height: 12px;
    width: 12px;
  }
  .el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner::after {
    height: 6px;
    width: 2px;
  }
  &.el-checkbox.is-bordered.el-checkbox--mini {
    padding: 3px 15px 3px 10px;
    border-radius: 3px;
    height: 28px;
  }
  &.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__label {
    line-height: 12px;
    font-size: 12px;
  }
  &.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__inner {
    height: 12px;
    width: 12px;
  }
  &.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__inner::after {
    height: 6px;
    width: 2px;
  }
  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner + .el-checkbox__label {
    cursor: not-allowed;
  }
  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }
  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }
  .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }
  .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before {
    background-color: #c0c4cc;
    border-color: #c0c4cc;
  }
  .el-checkbox__input.is-disabled + span.el-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    transform: rotate(45deg) scaleY(1);
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #409eff;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #409eff;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
    content: "";
    position: absolute;
    display: block;
    background-color: #fff;
    height: 2px;
    transform: scale(0.5);
    left: 0;
    right: 0;
    top: 5px;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner::after {
    display: none;
  }
  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition:
      border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }
  .el-checkbox__inner:hover {
    border-color: #409eff;
  }
  .el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform 0.15s ease-in 50ms;
    transform-origin: center;
  }
  .el-checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  .el-checkbox:last-of-type {
    margin-right: 0;
  }
  .el-checkbox-button {
    position: relative;
    display: inline-block;
  }
  .el-checkbox-button__inner {
    display: inline-block;
    line-height: 1;
    font-weight: 500;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    position: relative;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
  }
  .el-checkbox-button__inner.is-round {
    padding: 12px 20px;
  }
  .el-checkbox-button__inner:hover {
    color: #409eff;
  }
  .el-checkbox-button__inner [class*="el-icon-"] {
    line-height: 0.9;
  }
  .el-checkbox-button__inner [class*="el-icon-"] + span {
    margin-left: 5px;
  }
  .el-checkbox-button__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    z-index: -1;
  }
  &.el-checkbox-button.is-checked .el-checkbox-button__inner {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    box-shadow: -1px 0 0 0 #8cc5ff;
  }
  &.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner {
    border-left-color: #409eff;
  }
  &.el-checkbox-button.is-disabled .el-checkbox-button__inner {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    box-shadow: none;
  }
  &.el-checkbox-button.is-disabled:first-child .el-checkbox-button__inner {
    border-left-color: #ebeef5;
  }
  &.el-checkbox-button:first-child .el-checkbox-button__inner {
    border-left: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    box-shadow: none !important;
  }
  &.el-checkbox-button.is-focus .el-checkbox-button__inner {
    border-color: #409eff;
  }
  &.el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 0 4px 4px 0;
  }
  &.el-checkbox-button--medium .el-checkbox-button__inner {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0;
  }
  &.el-checkbox-button--medium .el-checkbox-button__inner.is-round {
    padding: 10px 20px;
  }
  &.el-checkbox-button--small .el-checkbox-button__inner {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0;
  }
  &.el-checkbox-button--small .el-checkbox-button__inner.is-round {
    padding: 9px 15px;
  }
  &.el-checkbox-button--mini .el-checkbox-button__inner {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0;
  }
  &.el-checkbox-button--mini .el-checkbox-button__inner.is-round {
    padding: 7px 15px;
  }
`;

export let StyledCheckboxGroup = styled.div`
  .el-checkbox-group {
    font-size: 0;
  }
`;
