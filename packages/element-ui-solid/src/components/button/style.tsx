import { styled } from "solid-styled-components";

export let StyledButton = styled.button`
  &.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.el-button.is-round {
    padding: 12px 20px;
  }
  &.el-button:focus,
  &.el-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.el-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }
  &.el-button::-moz-focus-inner {
    border: 0;
  }
  &.el-button [class*="el-icon-"] + span {
    margin-left: 5px;
  }
  &.el-button.is-plain:focus,
  &.el-button.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.el-button.is-plain:active {
    background: #fff;
    border-color: #3a8ee6;
    color: #3a8ee6;
    outline: 0;
  }
  &.el-button.is-active {
    color: #3a8ee6;
    border-color: #3a8ee6;
  }
  &.el-button.is-disabled,
  &.el-button.is-disabled:focus,
  &.el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &.el-button.is-disabled.el-button--text {
    background-color: transparent;
  }
  &.el-button.is-disabled.is-plain,
  &.el-button.is-disabled.is-plain:focus,
  &.el-button.is-disabled.is-plain:hover {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
  }
  &.el-button.is-loading {
    position: relative;
    pointer-events: none;
  }
  &.el-button.is-loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: rgba(255, 255, 255, 0.35);
  }
  &.el-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.el-button.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  &.el-button--primary:focus,
  &.el-button--primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &.el-button--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: 0;
  }
  &.el-button--primary.is-active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  &.el-button--primary.is-disabled,
  &.el-button--primary.is-disabled:active,
  &.el-button--primary.is-disabled:focus,
  &.el-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
  &.el-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  &.el-button--primary.is-plain:focus,
  &.el-button--primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  &.el-button--primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: 0;
  }
  &.el-button--primary.is-plain.is-disabled,
  &.el-button--primary.is-plain.is-disabled:active,
  &.el-button--primary.is-plain.is-disabled:focus,
  &.el-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
  }
  &.el-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  &.el-button--success:focus,
  &.el-button--success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &.el-button--success:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: 0;
  }
  &.el-button--success.is-active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
  &.el-button--success.is-disabled,
  &.el-button--success.is-disabled:active,
  &.el-button--success.is-disabled:focus,
  &.el-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
  &.el-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  &.el-button--success.is-plain:focus,
  &.el-button--success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.el-button--success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: 0;
  }
  &.el-button--success.is-plain.is-disabled,
  &.el-button--success.is-plain.is-disabled:active,
  &.el-button--success.is-plain.is-disabled:focus,
  &.el-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }
  &.el-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  &.el-button--warning:focus,
  &.el-button--warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &.el-button--warning:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: 0;
  }
  &.el-button--warning.is-active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
  &.el-button--warning.is-disabled,
  &.el-button--warning.is-disabled:active,
  &.el-button--warning.is-disabled:focus,
  &.el-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
  &.el-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  &.el-button--warning.is-plain:focus,
  &.el-button--warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  &.el-button--warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: 0;
  }
  &.el-button--warning.is-plain.is-disabled,
  &.el-button--warning.is-plain.is-disabled:active,
  &.el-button--warning.is-plain.is-disabled:focus,
  &.el-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }
  &.el-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  &.el-button--danger:focus,
  &.el-button--danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &.el-button--danger:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: 0;
  }
  &.el-button--danger.is-active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
  &.el-button--danger.is-disabled,
  &.el-button--danger.is-disabled:active,
  &.el-button--danger.is-disabled:focus,
  &.el-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
  &.el-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  &.el-button--danger.is-plain:focus,
  &.el-button--danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  &.el-button--danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: 0;
  }
  &.el-button--danger.is-plain.is-disabled,
  &.el-button--danger.is-plain.is-disabled:active,
  &.el-button--danger.is-plain.is-disabled:focus,
  &.el-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
  &.el-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  &.el-button--info:focus,
  &.el-button--info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &.el-button--info:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: 0;
  }
  &.el-button--info.is-active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
  &.el-button--info.is-disabled,
  &.el-button--info.is-disabled:active,
  &.el-button--info.is-disabled:focus,
  &.el-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
  &.el-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  &.el-button--info.is-plain:focus,
  &.el-button--info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.el-button--info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: 0;
  }
  &.el-button--info.is-plain.is-disabled,
  &.el-button--info.is-plain.is-disabled:active,
  &.el-button--info.is-plain.is-disabled:focus,
  &.el-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
  }
  &.el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.el-button--medium.is-round {
    padding: 10px 20px;
  }
  &.el-button--medium.is-circle {
    padding: 10px;
  }
  &.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.el-button--small.is-round {
    padding: 9px 15px;
  }
  &.el-button--small.is-circle {
    padding: 9px;
  }
  &.el-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.el-button--mini.is-round {
    padding: 7px 15px;
  }
  &.el-button--mini.is-circle {
    padding: 7px;
  }
  &.el-button--text {
    border-color: transparent;
    color: #409eff;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
  }
  &.el-button--text:focus,
  &.el-button--text:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
  &.el-button--text:active {
    color: #3a8ee6;
    border-color: transparent;
    background-color: transparent;
  }
  &.el-button--text.is-disabled,
  &.el-button--text.is-disabled:focus,
  &.el-button--text.is-disabled:hover {
    border-color: transparent;
  }
  .el-button-group & {
    display: inline-block;
    vertical-align: middle;
  }
  .el-button-group::after &,
  .el-button-group::before & {
    display: table;
    content: "";
  }
  .el-button-group::after & {
    clear: both;
  }
  .el-button-group > &.el-button {
    float: left;
    position: relative;
  }
  .el-button-group > &.el-button + .el-button {
    margin-left: 0;
  }
  .el-button-group > &.el-button.is-disabled {
    z-index: 1;
  }
  .el-button-group > &.el-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .el-button-group > &.el-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-button-group > &.el-button:first-child:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .el-button-group > &.el-button:first-child:last-child.is-round {
    border-radius: 20px;
  }
  .el-button-group > &.el-button:first-child:last-child.is-circle {
    border-radius: 50%;
  }
  .el-button-group > &.el-button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  .el-button-group > &.el-button:not(:last-child) {
    margin-right: -1px;
  }
  .el-button-group > &.el-button:not(.is-disabled):active,
  .el-button-group > &.el-button:not(.is-disabled):focus,
  .el-button-group > &.el-button:not(.is-disabled):hover {
    z-index: 1;
  }
  .el-button-group > &.el-button.is-active {
    z-index: 1;
  }
  .el-button-group > .el-dropdown > &.el-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--primary:first-child {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--primary:last-child {
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--primary:not(:first-child):not(:last-child) {
    border-left-color: rgba(255, 255, 255, 0.5);
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--success:first-child {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--success:last-child {
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--success:not(:first-child):not(:last-child) {
    border-left-color: rgba(255, 255, 255, 0.5);
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--warning:first-child {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--warning:last-child {
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--warning:not(:first-child):not(:last-child) {
    border-left-color: rgba(255, 255, 255, 0.5);
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--danger:first-child {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--danger:last-child {
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--danger:not(:first-child):not(:last-child) {
    border-left-color: rgba(255, 255, 255, 0.5);
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--info:first-child {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--info:last-child {
    border-left-color: rgba(255, 255, 255, 0.5);
  }
  .el-button-group &.el-button--info:not(:first-child):not(:last-child) {
    border-left-color: rgba(255, 255, 255, 0.5);
    border-right-color: rgba(255, 255, 255, 0.5);
  }
`;
