import { styled } from "solid-styled-components";

export let StyledDrawer = styled.div`
  .v-modal-enter {
    animation: v-modal-in 0.2s ease;
  }
  .v-modal-leave {
    animation: v-modal-out 0.2s ease forwards;
  }
  @keyframes v-modal-in {
    0% {
      opacity: 0;
    }
  }
  @keyframes v-modal-out {
    100% {
      opacity: 0;
    }
  }
  .v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
  }
  .el-popup-parent--hidden {
    overflow: hidden;
  }
  @keyframes el-drawer-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes rtl-drawer-in {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes rtl-drawer-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
  @keyframes ltr-drawer-in {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes ltr-drawer-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  @keyframes ttb-drawer-in {
    0% {
      transform: translate(0, -100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes ttb-drawer-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }
  @keyframes btt-drawer-in {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes btt-drawer-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 100%);
    }
  }
  .el-drawer {
    position: absolute;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow:
      0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    outline: 0;
  }
  &.el-drawer__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
  }
  .el-drawer__header {
    align-items: center;
    color: #72767b;
    display: flex;
    margin-bottom: 32px;
    padding: 20px;
    padding-bottom: 0;
  }
  .el-drawer__header > :first-child {
    flex: 1;
  }
  .el-drawer__title {
    margin: 0;
    flex: 1;
    line-height: inherit;
    font-size: 1rem;
  }
  .el-drawer__close-btn {
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: inherit;
    background-color: transparent;
  }
  .el-drawer__body {
    flex: 1;
    overflow: auto;
  }
  .el-drawer__body > * {
    box-sizing: border-box;
  }
  .el-drawer.ltr,
  .el-drawer.rtl {
    height: 100%;
    top: 0;
    bottom: 0;
  }
  .el-drawer.btt,
  .el-drawer.ttb {
    width: 100%;
    left: 0;
    right: 0;
  }
  .el-drawer.ltr {
    left: 0;
  }
  .el-drawer.rtl {
    right: 0;
  }
  .el-drawer.ttb {
    top: 0;
  }
  .el-drawer.btt {
    bottom: 0;
  }
  .el-drawer__container {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  .el-drawer-fade-enter-active {
    animation: el-drawer-fade-in 0.3s;
  }
  .el-drawer-fade-leave-active {
    animation: el-drawer-fade-in 0.3s reverse;
  }
`;
