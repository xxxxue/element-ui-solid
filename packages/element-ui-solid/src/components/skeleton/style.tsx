import { styled } from "solid-styled-components";

export let StyledSkeleton = styled.div`
  .el-skeleton__item {
    background: #f2f2f2;
    display: inline-block;
    height: 16px;
    border-radius: 4px;
    width: 100%;
  }
  .el-skeleton__circle {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
  .el-skeleton__circle--lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .el-skeleton__circle--md {
    width: 28px;
    height: 28px;
    line-height: 28px;
  }
  .el-skeleton__button {
    height: 40px;
    width: 64px;
    border-radius: 4px;
  }
  .el-skeleton__p {
    width: 100%;
  }
  .el-skeleton__p.is-last {
    width: 61%;
  }
  .el-skeleton__p.is-first {
    width: 33%;
  }
  .el-skeleton__text {
    width: 100%;
    height: 13px;
  }
  .el-skeleton__caption {
    height: 12px;
  }
  .el-skeleton__h1 {
    height: 20px;
  }
  .el-skeleton__h3 {
    height: 18px;
  }
  .el-skeleton__h5 {
    height: 16px;
  }
  .el-skeleton__image {
    width: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
  }
  .el-skeleton__image svg {
    fill: #dcdde0;
    width: 22%;
    height: 22%;
  }
  @keyframes el-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  &.el-skeleton {
    width: 100%;
  }
  .el-skeleton__first-line {
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2;
  }
  .el-skeleton__paragraph {
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2;
  }
  &.el-skeleton.is-animated .el-skeleton__item {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: el-skeleton-loading 1.4s ease infinite;
  }
`;

export let StyledSkeletonItem = styled.div`
  &.el-skeleton__item {
    background: #f2f2f2;
    display: inline-block;
    height: 16px;
    border-radius: 4px;
    width: 100%;
  }
  &.el-skeleton__circle {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
  &.el-skeleton__circle--lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  &.el-skeleton__circle--md {
    width: 28px;
    height: 28px;
    line-height: 28px;
  }
  &.el-skeleton__button {
    height: 40px;
    width: 64px;
    border-radius: 4px;
  }
  &.el-skeleton__p {
    width: 100%;
  }
  &.el-skeleton__p.is-last {
    width: 61%;
  }
  &.el-skeleton__p.is-first {
    width: 33%;
  }
  &.el-skeleton__text {
    width: 100%;
    height: 13px;
  }
  &.el-skeleton__caption {
    height: 12px;
  }
  &.el-skeleton__h1 {
    height: 20px;
  }
  &.el-skeleton__h3 {
    height: 18px;
  }
  &.el-skeleton__h5 {
    height: 16px;
  }
  &.el-skeleton__image {
    width: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
  }
  &.el-skeleton__image svg {
    fill: #dcdde0;
    width: 22%;
    height: 22%;
  }
`;
