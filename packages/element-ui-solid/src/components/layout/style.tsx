import { Dynamic } from "solid-js/web";
import { createGlobalStyles, styled } from "solid-styled-components";

export let StyledRow = styled.div`
  &.el-row {
    position: relative;
    box-sizing: border-box;
  }
  &.el-row::after,
  &.el-row::before {
    display: table;
    content: "";
  }
  &.el-row::after {
    clear: both;
  }
  &.el-row--flex {
    display: flex;
  }
  &.el-row--flex:after,
  &.el-row--flex:before {
    display: none;
  }
  &.el-row--flex.is-justify-center {
    justify-content: center;
  }
  &.el-row--flex.is-justify-end {
    justify-content: flex-end;
  }
  &.el-row--flex.is-justify-space-between {
    justify-content: space-between;
  }
  &.el-row--flex.is-justify-space-around {
    justify-content: space-around;
  }
  &.el-row--flex.is-align-top {
    align-items: flex-start;
  }
  &.el-row--flex.is-align-middle {
    align-items: center;
  }
  &.el-row--flex.is-align-bottom {
    align-items: flex-end;
  }
`;

export let StyledColGlobal = createGlobalStyles`
  [class*="el-col-"] {
    float: left;
    box-sizing: border-box;
  }
`;

export let StyledCol = styled.div`
  &.el-col-0 {
    display: none;
  }
  &.el-col-0 {
    width: 0%;
  }
  &.el-col-offset-0 {
    margin-left: 0;
  }
  &.el-col-pull-0 {
    position: relative;
    right: 0;
  }
  &.el-col-push-0 {
    position: relative;
    left: 0;
  }
  &.el-col-1 {
    width: 4.1666666667%;
  }
  &.el-col-offset-1 {
    margin-left: 4.1666666667%;
  }
  &.el-col-pull-1 {
    position: relative;
    right: 4.1666666667%;
  }
  &.el-col-push-1 {
    position: relative;
    left: 4.1666666667%;
  }
  &.el-col-2 {
    width: 8.3333333333%;
  }
  &.el-col-offset-2 {
    margin-left: 8.3333333333%;
  }
  &.el-col-pull-2 {
    position: relative;
    right: 8.3333333333%;
  }
  &.el-col-push-2 {
    position: relative;
    left: 8.3333333333%;
  }
  &.el-col-3 {
    width: 12.5%;
  }
  &.el-col-offset-3 {
    margin-left: 12.5%;
  }
  &.el-col-pull-3 {
    position: relative;
    right: 12.5%;
  }
  &.el-col-push-3 {
    position: relative;
    left: 12.5%;
  }
  &.el-col-4 {
    width: 16.6666666667%;
  }
  &.el-col-offset-4 {
    margin-left: 16.6666666667%;
  }
  &.el-col-pull-4 {
    position: relative;
    right: 16.6666666667%;
  }
  &.el-col-push-4 {
    position: relative;
    left: 16.6666666667%;
  }
  &.el-col-5 {
    width: 20.8333333333%;
  }
  &.el-col-offset-5 {
    margin-left: 20.8333333333%;
  }
  &.el-col-pull-5 {
    position: relative;
    right: 20.8333333333%;
  }
  &.el-col-push-5 {
    position: relative;
    left: 20.8333333333%;
  }
  &.el-col-6 {
    width: 25%;
  }
  &.el-col-offset-6 {
    margin-left: 25%;
  }
  &.el-col-pull-6 {
    position: relative;
    right: 25%;
  }
  &.el-col-push-6 {
    position: relative;
    left: 25%;
  }
  &.el-col-7 {
    width: 29.1666666667%;
  }
  &.el-col-offset-7 {
    margin-left: 29.1666666667%;
  }
  &.el-col-pull-7 {
    position: relative;
    right: 29.1666666667%;
  }
  &.el-col-push-7 {
    position: relative;
    left: 29.1666666667%;
  }
  &.el-col-8 {
    width: 33.3333333333%;
  }
  &.el-col-offset-8 {
    margin-left: 33.3333333333%;
  }
  &.el-col-pull-8 {
    position: relative;
    right: 33.3333333333%;
  }
  &.el-col-push-8 {
    position: relative;
    left: 33.3333333333%;
  }
  &.el-col-9 {
    width: 37.5%;
  }
  &.el-col-offset-9 {
    margin-left: 37.5%;
  }
  &.el-col-pull-9 {
    position: relative;
    right: 37.5%;
  }
  &.el-col-push-9 {
    position: relative;
    left: 37.5%;
  }
  &.el-col-10 {
    width: 41.6666666667%;
  }
  &.el-col-offset-10 {
    margin-left: 41.6666666667%;
  }
  &.el-col-pull-10 {
    position: relative;
    right: 41.6666666667%;
  }
  &.el-col-push-10 {
    position: relative;
    left: 41.6666666667%;
  }
  &.el-col-11 {
    width: 45.8333333333%;
  }
  &.el-col-offset-11 {
    margin-left: 45.8333333333%;
  }
  &.el-col-pull-11 {
    position: relative;
    right: 45.8333333333%;
  }
  &.el-col-push-11 {
    position: relative;
    left: 45.8333333333%;
  }
  &.el-col-12 {
    width: 50%;
  }
  &.el-col-offset-12 {
    margin-left: 50%;
  }
  &.el-col-pull-12 {
    position: relative;
    right: 50%;
  }
  &.el-col-push-12 {
    position: relative;
    left: 50%;
  }
  &.el-col-13 {
    width: 54.1666666667%;
  }
  &.el-col-offset-13 {
    margin-left: 54.1666666667%;
  }
  &.el-col-pull-13 {
    position: relative;
    right: 54.1666666667%;
  }
  &.el-col-push-13 {
    position: relative;
    left: 54.1666666667%;
  }
  &.el-col-14 {
    width: 58.3333333333%;
  }
  &.el-col-offset-14 {
    margin-left: 58.3333333333%;
  }
  &.el-col-pull-14 {
    position: relative;
    right: 58.3333333333%;
  }
  &.el-col-push-14 {
    position: relative;
    left: 58.3333333333%;
  }
  &.el-col-15 {
    width: 62.5%;
  }
  &.el-col-offset-15 {
    margin-left: 62.5%;
  }
  &.el-col-pull-15 {
    position: relative;
    right: 62.5%;
  }
  &.el-col-push-15 {
    position: relative;
    left: 62.5%;
  }
  &.el-col-16 {
    width: 66.6666666667%;
  }
  &.el-col-offset-16 {
    margin-left: 66.6666666667%;
  }
  &.el-col-pull-16 {
    position: relative;
    right: 66.6666666667%;
  }
  &.el-col-push-16 {
    position: relative;
    left: 66.6666666667%;
  }
  &.el-col-17 {
    width: 70.8333333333%;
  }
  &.el-col-offset-17 {
    margin-left: 70.8333333333%;
  }
  &.el-col-pull-17 {
    position: relative;
    right: 70.8333333333%;
  }
  &.el-col-push-17 {
    position: relative;
    left: 70.8333333333%;
  }
  &.el-col-18 {
    width: 75%;
  }
  &.el-col-offset-18 {
    margin-left: 75%;
  }
  &.el-col-pull-18 {
    position: relative;
    right: 75%;
  }
  &.el-col-push-18 {
    position: relative;
    left: 75%;
  }
  &.el-col-19 {
    width: 79.1666666667%;
  }
  &.el-col-offset-19 {
    margin-left: 79.1666666667%;
  }
  &.el-col-pull-19 {
    position: relative;
    right: 79.1666666667%;
  }
  &.el-col-push-19 {
    position: relative;
    left: 79.1666666667%;
  }
  &.el-col-20 {
    width: 83.3333333333%;
  }
  &.el-col-offset-20 {
    margin-left: 83.3333333333%;
  }
  &.el-col-pull-20 {
    position: relative;
    right: 83.3333333333%;
  }
  &.el-col-push-20 {
    position: relative;
    left: 83.3333333333%;
  }
  &.el-col-21 {
    width: 87.5%;
  }
  &.el-col-offset-21 {
    margin-left: 87.5%;
  }
  &.el-col-pull-21 {
    position: relative;
    right: 87.5%;
  }
  &.el-col-push-21 {
    position: relative;
    left: 87.5%;
  }
  &.el-col-22 {
    width: 91.6666666667%;
  }
  &.el-col-offset-22 {
    margin-left: 91.6666666667%;
  }
  &.el-col-pull-22 {
    position: relative;
    right: 91.6666666667%;
  }
  &.el-col-push-22 {
    position: relative;
    left: 91.6666666667%;
  }
  &.el-col-23 {
    width: 95.8333333333%;
  }
  &.el-col-offset-23 {
    margin-left: 95.8333333333%;
  }
  &.el-col-pull-23 {
    position: relative;
    right: 95.8333333333%;
  }
  &.el-col-push-23 {
    position: relative;
    left: 95.8333333333%;
  }
  &.el-col-24 {
    width: 100%;
  }
  &.el-col-offset-24 {
    margin-left: 100%;
  }
  &.el-col-pull-24 {
    position: relative;
    right: 100%;
  }
  &.el-col-push-24 {
    position: relative;
    left: 100%;
  }
  @media only screen and ((max-width: 767px)) {
    &.el-col-xs-0 {
      display: none;
    }
    &.el-col-xs-0 {
      width: 0%;
    }
    &.el-col-xs-offset-0 {
      margin-left: 0;
    }
    &.el-col-xs-pull-0 {
      position: relative;
      right: 0;
    }
    &.el-col-xs-push-0 {
      position: relative;
      left: 0;
    }
    &.el-col-xs-1 {
      width: 4.1666666667%;
    }
    &.el-col-xs-offset-1 {
      margin-left: 4.1666666667%;
    }
    &.el-col-xs-pull-1 {
      position: relative;
      right: 4.1666666667%;
    }
    &.el-col-xs-push-1 {
      position: relative;
      left: 4.1666666667%;
    }
    &.el-col-xs-2 {
      width: 8.3333333333%;
    }
    &.el-col-xs-offset-2 {
      margin-left: 8.3333333333%;
    }
    &.el-col-xs-pull-2 {
      position: relative;
      right: 8.3333333333%;
    }
    &.el-col-xs-push-2 {
      position: relative;
      left: 8.3333333333%;
    }
    &.el-col-xs-3 {
      width: 12.5%;
    }
    &.el-col-xs-offset-3 {
      margin-left: 12.5%;
    }
    &.el-col-xs-pull-3 {
      position: relative;
      right: 12.5%;
    }
    &.el-col-xs-push-3 {
      position: relative;
      left: 12.5%;
    }
    &.el-col-xs-4 {
      width: 16.6666666667%;
    }
    &.el-col-xs-offset-4 {
      margin-left: 16.6666666667%;
    }
    &.el-col-xs-pull-4 {
      position: relative;
      right: 16.6666666667%;
    }
    &.el-col-xs-push-4 {
      position: relative;
      left: 16.6666666667%;
    }
    &.el-col-xs-5 {
      width: 20.8333333333%;
    }
    &.el-col-xs-offset-5 {
      margin-left: 20.8333333333%;
    }
    &.el-col-xs-pull-5 {
      position: relative;
      right: 20.8333333333%;
    }
    &.el-col-xs-push-5 {
      position: relative;
      left: 20.8333333333%;
    }
    &.el-col-xs-6 {
      width: 25%;
    }
    &.el-col-xs-offset-6 {
      margin-left: 25%;
    }
    &.el-col-xs-pull-6 {
      position: relative;
      right: 25%;
    }
    &.el-col-xs-push-6 {
      position: relative;
      left: 25%;
    }
    &.el-col-xs-7 {
      width: 29.1666666667%;
    }
    &.el-col-xs-offset-7 {
      margin-left: 29.1666666667%;
    }
    &.el-col-xs-pull-7 {
      position: relative;
      right: 29.1666666667%;
    }
    &.el-col-xs-push-7 {
      position: relative;
      left: 29.1666666667%;
    }
    &.el-col-xs-8 {
      width: 33.3333333333%;
    }
    &.el-col-xs-offset-8 {
      margin-left: 33.3333333333%;
    }
    &.el-col-xs-pull-8 {
      position: relative;
      right: 33.3333333333%;
    }
    &.el-col-xs-push-8 {
      position: relative;
      left: 33.3333333333%;
    }
    &.el-col-xs-9 {
      width: 37.5%;
    }
    &.el-col-xs-offset-9 {
      margin-left: 37.5%;
    }
    &.el-col-xs-pull-9 {
      position: relative;
      right: 37.5%;
    }
    &.el-col-xs-push-9 {
      position: relative;
      left: 37.5%;
    }
    &.el-col-xs-10 {
      width: 41.6666666667%;
    }
    &.el-col-xs-offset-10 {
      margin-left: 41.6666666667%;
    }
    &.el-col-xs-pull-10 {
      position: relative;
      right: 41.6666666667%;
    }
    &.el-col-xs-push-10 {
      position: relative;
      left: 41.6666666667%;
    }
    &.el-col-xs-11 {
      width: 45.8333333333%;
    }
    &.el-col-xs-offset-11 {
      margin-left: 45.8333333333%;
    }
    &.el-col-xs-pull-11 {
      position: relative;
      right: 45.8333333333%;
    }
    &.el-col-xs-push-11 {
      position: relative;
      left: 45.8333333333%;
    }
    &.el-col-xs-12 {
      width: 50%;
    }
    &.el-col-xs-offset-12 {
      margin-left: 50%;
    }
    &.el-col-xs-pull-12 {
      position: relative;
      right: 50%;
    }
    &.el-col-xs-push-12 {
      position: relative;
      left: 50%;
    }
    &.el-col-xs-13 {
      width: 54.1666666667%;
    }
    &.el-col-xs-offset-13 {
      margin-left: 54.1666666667%;
    }
    &.el-col-xs-pull-13 {
      position: relative;
      right: 54.1666666667%;
    }
    &.el-col-xs-push-13 {
      position: relative;
      left: 54.1666666667%;
    }
    &.el-col-xs-14 {
      width: 58.3333333333%;
    }
    &.el-col-xs-offset-14 {
      margin-left: 58.3333333333%;
    }
    &.el-col-xs-pull-14 {
      position: relative;
      right: 58.3333333333%;
    }
    &.el-col-xs-push-14 {
      position: relative;
      left: 58.3333333333%;
    }
    &.el-col-xs-15 {
      width: 62.5%;
    }
    &.el-col-xs-offset-15 {
      margin-left: 62.5%;
    }
    &.el-col-xs-pull-15 {
      position: relative;
      right: 62.5%;
    }
    &.el-col-xs-push-15 {
      position: relative;
      left: 62.5%;
    }
    &.el-col-xs-16 {
      width: 66.6666666667%;
    }
    &.el-col-xs-offset-16 {
      margin-left: 66.6666666667%;
    }
    &.el-col-xs-pull-16 {
      position: relative;
      right: 66.6666666667%;
    }
    &.el-col-xs-push-16 {
      position: relative;
      left: 66.6666666667%;
    }
    &.el-col-xs-17 {
      width: 70.8333333333%;
    }
    &.el-col-xs-offset-17 {
      margin-left: 70.8333333333%;
    }
    &.el-col-xs-pull-17 {
      position: relative;
      right: 70.8333333333%;
    }
    &.el-col-xs-push-17 {
      position: relative;
      left: 70.8333333333%;
    }
    &.el-col-xs-18 {
      width: 75%;
    }
    &.el-col-xs-offset-18 {
      margin-left: 75%;
    }
    &.el-col-xs-pull-18 {
      position: relative;
      right: 75%;
    }
    &.el-col-xs-push-18 {
      position: relative;
      left: 75%;
    }
    &.el-col-xs-19 {
      width: 79.1666666667%;
    }
    &.el-col-xs-offset-19 {
      margin-left: 79.1666666667%;
    }
    &.el-col-xs-pull-19 {
      position: relative;
      right: 79.1666666667%;
    }
    &.el-col-xs-push-19 {
      position: relative;
      left: 79.1666666667%;
    }
    &.el-col-xs-20 {
      width: 83.3333333333%;
    }
    &.el-col-xs-offset-20 {
      margin-left: 83.3333333333%;
    }
    &.el-col-xs-pull-20 {
      position: relative;
      right: 83.3333333333%;
    }
    &.el-col-xs-push-20 {
      position: relative;
      left: 83.3333333333%;
    }
    &.el-col-xs-21 {
      width: 87.5%;
    }
    &.el-col-xs-offset-21 {
      margin-left: 87.5%;
    }
    &.el-col-xs-pull-21 {
      position: relative;
      right: 87.5%;
    }
    &.el-col-xs-push-21 {
      position: relative;
      left: 87.5%;
    }
    &.el-col-xs-22 {
      width: 91.6666666667%;
    }
    &.el-col-xs-offset-22 {
      margin-left: 91.6666666667%;
    }
    &.el-col-xs-pull-22 {
      position: relative;
      right: 91.6666666667%;
    }
    &.el-col-xs-push-22 {
      position: relative;
      left: 91.6666666667%;
    }
    &.el-col-xs-23 {
      width: 95.8333333333%;
    }
    &.el-col-xs-offset-23 {
      margin-left: 95.8333333333%;
    }
    &.el-col-xs-pull-23 {
      position: relative;
      right: 95.8333333333%;
    }
    &.el-col-xs-push-23 {
      position: relative;
      left: 95.8333333333%;
    }
    &.el-col-xs-24 {
      width: 100%;
    }
    &.el-col-xs-offset-24 {
      margin-left: 100%;
    }
    &.el-col-xs-pull-24 {
      position: relative;
      right: 100%;
    }
    &.el-col-xs-push-24 {
      position: relative;
      left: 100%;
    }
  }
  @media only screen and ((min-width: 768px)) {
    &.el-col-sm-0 {
      display: none;
    }
    &.el-col-sm-0 {
      width: 0%;
    }
    &.el-col-sm-offset-0 {
      margin-left: 0;
    }
    &.el-col-sm-pull-0 {
      position: relative;
      right: 0;
    }
    &.el-col-sm-push-0 {
      position: relative;
      left: 0;
    }
    &.el-col-sm-1 {
      width: 4.1666666667%;
    }
    &.el-col-sm-offset-1 {
      margin-left: 4.1666666667%;
    }
    &.el-col-sm-pull-1 {
      position: relative;
      right: 4.1666666667%;
    }
    &.el-col-sm-push-1 {
      position: relative;
      left: 4.1666666667%;
    }
    &.el-col-sm-2 {
      width: 8.3333333333%;
    }
    &.el-col-sm-offset-2 {
      margin-left: 8.3333333333%;
    }
    &.el-col-sm-pull-2 {
      position: relative;
      right: 8.3333333333%;
    }
    &.el-col-sm-push-2 {
      position: relative;
      left: 8.3333333333%;
    }
    &.el-col-sm-3 {
      width: 12.5%;
    }
    &.el-col-sm-offset-3 {
      margin-left: 12.5%;
    }
    &.el-col-sm-pull-3 {
      position: relative;
      right: 12.5%;
    }
    &.el-col-sm-push-3 {
      position: relative;
      left: 12.5%;
    }
    &.el-col-sm-4 {
      width: 16.6666666667%;
    }
    &.el-col-sm-offset-4 {
      margin-left: 16.6666666667%;
    }
    &.el-col-sm-pull-4 {
      position: relative;
      right: 16.6666666667%;
    }
    &.el-col-sm-push-4 {
      position: relative;
      left: 16.6666666667%;
    }
    &.el-col-sm-5 {
      width: 20.8333333333%;
    }
    &.el-col-sm-offset-5 {
      margin-left: 20.8333333333%;
    }
    &.el-col-sm-pull-5 {
      position: relative;
      right: 20.8333333333%;
    }
    &.el-col-sm-push-5 {
      position: relative;
      left: 20.8333333333%;
    }
    &.el-col-sm-6 {
      width: 25%;
    }
    &.el-col-sm-offset-6 {
      margin-left: 25%;
    }
    &.el-col-sm-pull-6 {
      position: relative;
      right: 25%;
    }
    &.el-col-sm-push-6 {
      position: relative;
      left: 25%;
    }
    &.el-col-sm-7 {
      width: 29.1666666667%;
    }
    &.el-col-sm-offset-7 {
      margin-left: 29.1666666667%;
    }
    &.el-col-sm-pull-7 {
      position: relative;
      right: 29.1666666667%;
    }
    &.el-col-sm-push-7 {
      position: relative;
      left: 29.1666666667%;
    }
    &.el-col-sm-8 {
      width: 33.3333333333%;
    }
    &.el-col-sm-offset-8 {
      margin-left: 33.3333333333%;
    }
    &.el-col-sm-pull-8 {
      position: relative;
      right: 33.3333333333%;
    }
    &.el-col-sm-push-8 {
      position: relative;
      left: 33.3333333333%;
    }
    &.el-col-sm-9 {
      width: 37.5%;
    }
    &.el-col-sm-offset-9 {
      margin-left: 37.5%;
    }
    &.el-col-sm-pull-9 {
      position: relative;
      right: 37.5%;
    }
    &.el-col-sm-push-9 {
      position: relative;
      left: 37.5%;
    }
    &.el-col-sm-10 {
      width: 41.6666666667%;
    }
    &.el-col-sm-offset-10 {
      margin-left: 41.6666666667%;
    }
    &.el-col-sm-pull-10 {
      position: relative;
      right: 41.6666666667%;
    }
    &.el-col-sm-push-10 {
      position: relative;
      left: 41.6666666667%;
    }
    &.el-col-sm-11 {
      width: 45.8333333333%;
    }
    &.el-col-sm-offset-11 {
      margin-left: 45.8333333333%;
    }
    &.el-col-sm-pull-11 {
      position: relative;
      right: 45.8333333333%;
    }
    &.el-col-sm-push-11 {
      position: relative;
      left: 45.8333333333%;
    }
    &.el-col-sm-12 {
      width: 50%;
    }
    &.el-col-sm-offset-12 {
      margin-left: 50%;
    }
    &.el-col-sm-pull-12 {
      position: relative;
      right: 50%;
    }
    &.el-col-sm-push-12 {
      position: relative;
      left: 50%;
    }
    &.el-col-sm-13 {
      width: 54.1666666667%;
    }
    &.el-col-sm-offset-13 {
      margin-left: 54.1666666667%;
    }
    &.el-col-sm-pull-13 {
      position: relative;
      right: 54.1666666667%;
    }
    &.el-col-sm-push-13 {
      position: relative;
      left: 54.1666666667%;
    }
    &.el-col-sm-14 {
      width: 58.3333333333%;
    }
    &.el-col-sm-offset-14 {
      margin-left: 58.3333333333%;
    }
    &.el-col-sm-pull-14 {
      position: relative;
      right: 58.3333333333%;
    }
    &.el-col-sm-push-14 {
      position: relative;
      left: 58.3333333333%;
    }
    &.el-col-sm-15 {
      width: 62.5%;
    }
    &.el-col-sm-offset-15 {
      margin-left: 62.5%;
    }
    &.el-col-sm-pull-15 {
      position: relative;
      right: 62.5%;
    }
    &.el-col-sm-push-15 {
      position: relative;
      left: 62.5%;
    }
    &.el-col-sm-16 {
      width: 66.6666666667%;
    }
    &.el-col-sm-offset-16 {
      margin-left: 66.6666666667%;
    }
    &.el-col-sm-pull-16 {
      position: relative;
      right: 66.6666666667%;
    }
    &.el-col-sm-push-16 {
      position: relative;
      left: 66.6666666667%;
    }
    &.el-col-sm-17 {
      width: 70.8333333333%;
    }
    &.el-col-sm-offset-17 {
      margin-left: 70.8333333333%;
    }
    &.el-col-sm-pull-17 {
      position: relative;
      right: 70.8333333333%;
    }
    &.el-col-sm-push-17 {
      position: relative;
      left: 70.8333333333%;
    }
    &.el-col-sm-18 {
      width: 75%;
    }
    &.el-col-sm-offset-18 {
      margin-left: 75%;
    }
    &.el-col-sm-pull-18 {
      position: relative;
      right: 75%;
    }
    &.el-col-sm-push-18 {
      position: relative;
      left: 75%;
    }
    &.el-col-sm-19 {
      width: 79.1666666667%;
    }
    &.el-col-sm-offset-19 {
      margin-left: 79.1666666667%;
    }
    &.el-col-sm-pull-19 {
      position: relative;
      right: 79.1666666667%;
    }
    &.el-col-sm-push-19 {
      position: relative;
      left: 79.1666666667%;
    }
    &.el-col-sm-20 {
      width: 83.3333333333%;
    }
    &.el-col-sm-offset-20 {
      margin-left: 83.3333333333%;
    }
    &.el-col-sm-pull-20 {
      position: relative;
      right: 83.3333333333%;
    }
    &.el-col-sm-push-20 {
      position: relative;
      left: 83.3333333333%;
    }
    &.el-col-sm-21 {
      width: 87.5%;
    }
    &.el-col-sm-offset-21 {
      margin-left: 87.5%;
    }
    &.el-col-sm-pull-21 {
      position: relative;
      right: 87.5%;
    }
    &.el-col-sm-push-21 {
      position: relative;
      left: 87.5%;
    }
    &.el-col-sm-22 {
      width: 91.6666666667%;
    }
    &.el-col-sm-offset-22 {
      margin-left: 91.6666666667%;
    }
    &.el-col-sm-pull-22 {
      position: relative;
      right: 91.6666666667%;
    }
    &.el-col-sm-push-22 {
      position: relative;
      left: 91.6666666667%;
    }
    &.el-col-sm-23 {
      width: 95.8333333333%;
    }
    &.el-col-sm-offset-23 {
      margin-left: 95.8333333333%;
    }
    &.el-col-sm-pull-23 {
      position: relative;
      right: 95.8333333333%;
    }
    &.el-col-sm-push-23 {
      position: relative;
      left: 95.8333333333%;
    }
    &.el-col-sm-24 {
      width: 100%;
    }
    &.el-col-sm-offset-24 {
      margin-left: 100%;
    }
    &.el-col-sm-pull-24 {
      position: relative;
      right: 100%;
    }
    &.el-col-sm-push-24 {
      position: relative;
      left: 100%;
    }
  }
  @media only screen and ((min-width: 992px)) {
    &.el-col-md-0 {
      display: none;
    }
    &.el-col-md-0 {
      width: 0%;
    }
    &.el-col-md-offset-0 {
      margin-left: 0;
    }
    &.el-col-md-pull-0 {
      position: relative;
      right: 0;
    }
    &.el-col-md-push-0 {
      position: relative;
      left: 0;
    }
    &.el-col-md-1 {
      width: 4.1666666667%;
    }
    &.el-col-md-offset-1 {
      margin-left: 4.1666666667%;
    }
    &.el-col-md-pull-1 {
      position: relative;
      right: 4.1666666667%;
    }
    &.el-col-md-push-1 {
      position: relative;
      left: 4.1666666667%;
    }
    &.el-col-md-2 {
      width: 8.3333333333%;
    }
    &.el-col-md-offset-2 {
      margin-left: 8.3333333333%;
    }
    &.el-col-md-pull-2 {
      position: relative;
      right: 8.3333333333%;
    }
    &.el-col-md-push-2 {
      position: relative;
      left: 8.3333333333%;
    }
    &.el-col-md-3 {
      width: 12.5%;
    }
    &.el-col-md-offset-3 {
      margin-left: 12.5%;
    }
    &.el-col-md-pull-3 {
      position: relative;
      right: 12.5%;
    }
    &.el-col-md-push-3 {
      position: relative;
      left: 12.5%;
    }
    &.el-col-md-4 {
      width: 16.6666666667%;
    }
    &.el-col-md-offset-4 {
      margin-left: 16.6666666667%;
    }
    &.el-col-md-pull-4 {
      position: relative;
      right: 16.6666666667%;
    }
    &.el-col-md-push-4 {
      position: relative;
      left: 16.6666666667%;
    }
    &.el-col-md-5 {
      width: 20.8333333333%;
    }
    &.el-col-md-offset-5 {
      margin-left: 20.8333333333%;
    }
    &.el-col-md-pull-5 {
      position: relative;
      right: 20.8333333333%;
    }
    &.el-col-md-push-5 {
      position: relative;
      left: 20.8333333333%;
    }
    &.el-col-md-6 {
      width: 25%;
    }
    &.el-col-md-offset-6 {
      margin-left: 25%;
    }
    &.el-col-md-pull-6 {
      position: relative;
      right: 25%;
    }
    &.el-col-md-push-6 {
      position: relative;
      left: 25%;
    }
    &.el-col-md-7 {
      width: 29.1666666667%;
    }
    &.el-col-md-offset-7 {
      margin-left: 29.1666666667%;
    }
    &.el-col-md-pull-7 {
      position: relative;
      right: 29.1666666667%;
    }
    &.el-col-md-push-7 {
      position: relative;
      left: 29.1666666667%;
    }
    &.el-col-md-8 {
      width: 33.3333333333%;
    }
    &.el-col-md-offset-8 {
      margin-left: 33.3333333333%;
    }
    &.el-col-md-pull-8 {
      position: relative;
      right: 33.3333333333%;
    }
    &.el-col-md-push-8 {
      position: relative;
      left: 33.3333333333%;
    }
    &.el-col-md-9 {
      width: 37.5%;
    }
    &.el-col-md-offset-9 {
      margin-left: 37.5%;
    }
    &.el-col-md-pull-9 {
      position: relative;
      right: 37.5%;
    }
    &.el-col-md-push-9 {
      position: relative;
      left: 37.5%;
    }
    &.el-col-md-10 {
      width: 41.6666666667%;
    }
    &.el-col-md-offset-10 {
      margin-left: 41.6666666667%;
    }
    &.el-col-md-pull-10 {
      position: relative;
      right: 41.6666666667%;
    }
    &.el-col-md-push-10 {
      position: relative;
      left: 41.6666666667%;
    }
    &.el-col-md-11 {
      width: 45.8333333333%;
    }
    &.el-col-md-offset-11 {
      margin-left: 45.8333333333%;
    }
    &.el-col-md-pull-11 {
      position: relative;
      right: 45.8333333333%;
    }
    &.el-col-md-push-11 {
      position: relative;
      left: 45.8333333333%;
    }
    &.el-col-md-12 {
      width: 50%;
    }
    &.el-col-md-offset-12 {
      margin-left: 50%;
    }
    &.el-col-md-pull-12 {
      position: relative;
      right: 50%;
    }
    &.el-col-md-push-12 {
      position: relative;
      left: 50%;
    }
    &.el-col-md-13 {
      width: 54.1666666667%;
    }
    &.el-col-md-offset-13 {
      margin-left: 54.1666666667%;
    }
    &.el-col-md-pull-13 {
      position: relative;
      right: 54.1666666667%;
    }
    &.el-col-md-push-13 {
      position: relative;
      left: 54.1666666667%;
    }
    &.el-col-md-14 {
      width: 58.3333333333%;
    }
    &.el-col-md-offset-14 {
      margin-left: 58.3333333333%;
    }
    &.el-col-md-pull-14 {
      position: relative;
      right: 58.3333333333%;
    }
    &.el-col-md-push-14 {
      position: relative;
      left: 58.3333333333%;
    }
    &.el-col-md-15 {
      width: 62.5%;
    }
    &.el-col-md-offset-15 {
      margin-left: 62.5%;
    }
    &.el-col-md-pull-15 {
      position: relative;
      right: 62.5%;
    }
    &.el-col-md-push-15 {
      position: relative;
      left: 62.5%;
    }
    &.el-col-md-16 {
      width: 66.6666666667%;
    }
    &.el-col-md-offset-16 {
      margin-left: 66.6666666667%;
    }
    &.el-col-md-pull-16 {
      position: relative;
      right: 66.6666666667%;
    }
    &.el-col-md-push-16 {
      position: relative;
      left: 66.6666666667%;
    }
    &.el-col-md-17 {
      width: 70.8333333333%;
    }
    &.el-col-md-offset-17 {
      margin-left: 70.8333333333%;
    }
    &.el-col-md-pull-17 {
      position: relative;
      right: 70.8333333333%;
    }
    &.el-col-md-push-17 {
      position: relative;
      left: 70.8333333333%;
    }
    &.el-col-md-18 {
      width: 75%;
    }
    &.el-col-md-offset-18 {
      margin-left: 75%;
    }
    &.el-col-md-pull-18 {
      position: relative;
      right: 75%;
    }
    &.el-col-md-push-18 {
      position: relative;
      left: 75%;
    }
    &.el-col-md-19 {
      width: 79.1666666667%;
    }
    &.el-col-md-offset-19 {
      margin-left: 79.1666666667%;
    }
    &.el-col-md-pull-19 {
      position: relative;
      right: 79.1666666667%;
    }
    &.el-col-md-push-19 {
      position: relative;
      left: 79.1666666667%;
    }
    &.el-col-md-20 {
      width: 83.3333333333%;
    }
    &.el-col-md-offset-20 {
      margin-left: 83.3333333333%;
    }
    &.el-col-md-pull-20 {
      position: relative;
      right: 83.3333333333%;
    }
    &.el-col-md-push-20 {
      position: relative;
      left: 83.3333333333%;
    }
    &.el-col-md-21 {
      width: 87.5%;
    }
    &.el-col-md-offset-21 {
      margin-left: 87.5%;
    }
    &.el-col-md-pull-21 {
      position: relative;
      right: 87.5%;
    }
    &.el-col-md-push-21 {
      position: relative;
      left: 87.5%;
    }
    &.el-col-md-22 {
      width: 91.6666666667%;
    }
    &.el-col-md-offset-22 {
      margin-left: 91.6666666667%;
    }
    &.el-col-md-pull-22 {
      position: relative;
      right: 91.6666666667%;
    }
    &.el-col-md-push-22 {
      position: relative;
      left: 91.6666666667%;
    }
    &.el-col-md-23 {
      width: 95.8333333333%;
    }
    &.el-col-md-offset-23 {
      margin-left: 95.8333333333%;
    }
    &.el-col-md-pull-23 {
      position: relative;
      right: 95.8333333333%;
    }
    &.el-col-md-push-23 {
      position: relative;
      left: 95.8333333333%;
    }
    &.el-col-md-24 {
      width: 100%;
    }
    &.el-col-md-offset-24 {
      margin-left: 100%;
    }
    &.el-col-md-pull-24 {
      position: relative;
      right: 100%;
    }
    &.el-col-md-push-24 {
      position: relative;
      left: 100%;
    }
  }
  @media only screen and ((min-width: 1200px)) {
    &.el-col-lg-0 {
      display: none;
    }
    &.el-col-lg-0 {
      width: 0%;
    }
    &.el-col-lg-offset-0 {
      margin-left: 0;
    }
    &.el-col-lg-pull-0 {
      position: relative;
      right: 0;
    }
    &.el-col-lg-push-0 {
      position: relative;
      left: 0;
    }
    &.el-col-lg-1 {
      width: 4.1666666667%;
    }
    &.el-col-lg-offset-1 {
      margin-left: 4.1666666667%;
    }
    &.el-col-lg-pull-1 {
      position: relative;
      right: 4.1666666667%;
    }
    &.el-col-lg-push-1 {
      position: relative;
      left: 4.1666666667%;
    }
    &.el-col-lg-2 {
      width: 8.3333333333%;
    }
    &.el-col-lg-offset-2 {
      margin-left: 8.3333333333%;
    }
    &.el-col-lg-pull-2 {
      position: relative;
      right: 8.3333333333%;
    }
    &.el-col-lg-push-2 {
      position: relative;
      left: 8.3333333333%;
    }
    &.el-col-lg-3 {
      width: 12.5%;
    }
    &.el-col-lg-offset-3 {
      margin-left: 12.5%;
    }
    &.el-col-lg-pull-3 {
      position: relative;
      right: 12.5%;
    }
    &.el-col-lg-push-3 {
      position: relative;
      left: 12.5%;
    }
    &.el-col-lg-4 {
      width: 16.6666666667%;
    }
    &.el-col-lg-offset-4 {
      margin-left: 16.6666666667%;
    }
    &.el-col-lg-pull-4 {
      position: relative;
      right: 16.6666666667%;
    }
    &.el-col-lg-push-4 {
      position: relative;
      left: 16.6666666667%;
    }
    &.el-col-lg-5 {
      width: 20.8333333333%;
    }
    &.el-col-lg-offset-5 {
      margin-left: 20.8333333333%;
    }
    &.el-col-lg-pull-5 {
      position: relative;
      right: 20.8333333333%;
    }
    &.el-col-lg-push-5 {
      position: relative;
      left: 20.8333333333%;
    }
    &.el-col-lg-6 {
      width: 25%;
    }
    &.el-col-lg-offset-6 {
      margin-left: 25%;
    }
    &.el-col-lg-pull-6 {
      position: relative;
      right: 25%;
    }
    &.el-col-lg-push-6 {
      position: relative;
      left: 25%;
    }
    &.el-col-lg-7 {
      width: 29.1666666667%;
    }
    &.el-col-lg-offset-7 {
      margin-left: 29.1666666667%;
    }
    &.el-col-lg-pull-7 {
      position: relative;
      right: 29.1666666667%;
    }
    &.el-col-lg-push-7 {
      position: relative;
      left: 29.1666666667%;
    }
    &.el-col-lg-8 {
      width: 33.3333333333%;
    }
    &.el-col-lg-offset-8 {
      margin-left: 33.3333333333%;
    }
    &.el-col-lg-pull-8 {
      position: relative;
      right: 33.3333333333%;
    }
    &.el-col-lg-push-8 {
      position: relative;
      left: 33.3333333333%;
    }
    &.el-col-lg-9 {
      width: 37.5%;
    }
    &.el-col-lg-offset-9 {
      margin-left: 37.5%;
    }
    &.el-col-lg-pull-9 {
      position: relative;
      right: 37.5%;
    }
    &.el-col-lg-push-9 {
      position: relative;
      left: 37.5%;
    }
    &.el-col-lg-10 {
      width: 41.6666666667%;
    }
    &.el-col-lg-offset-10 {
      margin-left: 41.6666666667%;
    }
    &.el-col-lg-pull-10 {
      position: relative;
      right: 41.6666666667%;
    }
    &.el-col-lg-push-10 {
      position: relative;
      left: 41.6666666667%;
    }
    &.el-col-lg-11 {
      width: 45.8333333333%;
    }
    &.el-col-lg-offset-11 {
      margin-left: 45.8333333333%;
    }
    &.el-col-lg-pull-11 {
      position: relative;
      right: 45.8333333333%;
    }
    &.el-col-lg-push-11 {
      position: relative;
      left: 45.8333333333%;
    }
    &.el-col-lg-12 {
      width: 50%;
    }
    &.el-col-lg-offset-12 {
      margin-left: 50%;
    }
    &.el-col-lg-pull-12 {
      position: relative;
      right: 50%;
    }
    &.el-col-lg-push-12 {
      position: relative;
      left: 50%;
    }
    &.el-col-lg-13 {
      width: 54.1666666667%;
    }
    &.el-col-lg-offset-13 {
      margin-left: 54.1666666667%;
    }
    &.el-col-lg-pull-13 {
      position: relative;
      right: 54.1666666667%;
    }
    &.el-col-lg-push-13 {
      position: relative;
      left: 54.1666666667%;
    }
    &.el-col-lg-14 {
      width: 58.3333333333%;
    }
    &.el-col-lg-offset-14 {
      margin-left: 58.3333333333%;
    }
    &.el-col-lg-pull-14 {
      position: relative;
      right: 58.3333333333%;
    }
    &.el-col-lg-push-14 {
      position: relative;
      left: 58.3333333333%;
    }
    &.el-col-lg-15 {
      width: 62.5%;
    }
    &.el-col-lg-offset-15 {
      margin-left: 62.5%;
    }
    &.el-col-lg-pull-15 {
      position: relative;
      right: 62.5%;
    }
    &.el-col-lg-push-15 {
      position: relative;
      left: 62.5%;
    }
    &.el-col-lg-16 {
      width: 66.6666666667%;
    }
    &.el-col-lg-offset-16 {
      margin-left: 66.6666666667%;
    }
    &.el-col-lg-pull-16 {
      position: relative;
      right: 66.6666666667%;
    }
    &.el-col-lg-push-16 {
      position: relative;
      left: 66.6666666667%;
    }
    &.el-col-lg-17 {
      width: 70.8333333333%;
    }
    &.el-col-lg-offset-17 {
      margin-left: 70.8333333333%;
    }
    &.el-col-lg-pull-17 {
      position: relative;
      right: 70.8333333333%;
    }
    &.el-col-lg-push-17 {
      position: relative;
      left: 70.8333333333%;
    }
    &.el-col-lg-18 {
      width: 75%;
    }
    &.el-col-lg-offset-18 {
      margin-left: 75%;
    }
    &.el-col-lg-pull-18 {
      position: relative;
      right: 75%;
    }
    &.el-col-lg-push-18 {
      position: relative;
      left: 75%;
    }
    &.el-col-lg-19 {
      width: 79.1666666667%;
    }
    &.el-col-lg-offset-19 {
      margin-left: 79.1666666667%;
    }
    &.el-col-lg-pull-19 {
      position: relative;
      right: 79.1666666667%;
    }
    &.el-col-lg-push-19 {
      position: relative;
      left: 79.1666666667%;
    }
    &.el-col-lg-20 {
      width: 83.3333333333%;
    }
    &.el-col-lg-offset-20 {
      margin-left: 83.3333333333%;
    }
    &.el-col-lg-pull-20 {
      position: relative;
      right: 83.3333333333%;
    }
    &.el-col-lg-push-20 {
      position: relative;
      left: 83.3333333333%;
    }
    &.el-col-lg-21 {
      width: 87.5%;
    }
    &.el-col-lg-offset-21 {
      margin-left: 87.5%;
    }
    &.el-col-lg-pull-21 {
      position: relative;
      right: 87.5%;
    }
    &.el-col-lg-push-21 {
      position: relative;
      left: 87.5%;
    }
    &.el-col-lg-22 {
      width: 91.6666666667%;
    }
    &.el-col-lg-offset-22 {
      margin-left: 91.6666666667%;
    }
    &.el-col-lg-pull-22 {
      position: relative;
      right: 91.6666666667%;
    }
    &.el-col-lg-push-22 {
      position: relative;
      left: 91.6666666667%;
    }
    &.el-col-lg-23 {
      width: 95.8333333333%;
    }
    &.el-col-lg-offset-23 {
      margin-left: 95.8333333333%;
    }
    &.el-col-lg-pull-23 {
      position: relative;
      right: 95.8333333333%;
    }
    &.el-col-lg-push-23 {
      position: relative;
      left: 95.8333333333%;
    }
    &.el-col-lg-24 {
      width: 100%;
    }
    &.el-col-lg-offset-24 {
      margin-left: 100%;
    }
    &.el-col-lg-pull-24 {
      position: relative;
      right: 100%;
    }
    &.el-col-lg-push-24 {
      position: relative;
      left: 100%;
    }
  }
  @media only screen and ((min-width: 1920px)) {
    &.el-col-xl-0 {
      display: none;
    }
    &.el-col-xl-0 {
      width: 0%;
    }
    &.el-col-xl-offset-0 {
      margin-left: 0;
    }
    &.el-col-xl-pull-0 {
      position: relative;
      right: 0;
    }
    &.el-col-xl-push-0 {
      position: relative;
      left: 0;
    }
    &.el-col-xl-1 {
      width: 4.1666666667%;
    }
    &.el-col-xl-offset-1 {
      margin-left: 4.1666666667%;
    }
    &.el-col-xl-pull-1 {
      position: relative;
      right: 4.1666666667%;
    }
    &.el-col-xl-push-1 {
      position: relative;
      left: 4.1666666667%;
    }
    &.el-col-xl-2 {
      width: 8.3333333333%;
    }
    &.el-col-xl-offset-2 {
      margin-left: 8.3333333333%;
    }
    &.el-col-xl-pull-2 {
      position: relative;
      right: 8.3333333333%;
    }
    &.el-col-xl-push-2 {
      position: relative;
      left: 8.3333333333%;
    }
    &.el-col-xl-3 {
      width: 12.5%;
    }
    &.el-col-xl-offset-3 {
      margin-left: 12.5%;
    }
    &.el-col-xl-pull-3 {
      position: relative;
      right: 12.5%;
    }
    &.el-col-xl-push-3 {
      position: relative;
      left: 12.5%;
    }
    &.el-col-xl-4 {
      width: 16.6666666667%;
    }
    &.el-col-xl-offset-4 {
      margin-left: 16.6666666667%;
    }
    &.el-col-xl-pull-4 {
      position: relative;
      right: 16.6666666667%;
    }
    &.el-col-xl-push-4 {
      position: relative;
      left: 16.6666666667%;
    }
    &.el-col-xl-5 {
      width: 20.8333333333%;
    }
    &.el-col-xl-offset-5 {
      margin-left: 20.8333333333%;
    }
    &.el-col-xl-pull-5 {
      position: relative;
      right: 20.8333333333%;
    }
    &.el-col-xl-push-5 {
      position: relative;
      left: 20.8333333333%;
    }
    &.el-col-xl-6 {
      width: 25%;
    }
    &.el-col-xl-offset-6 {
      margin-left: 25%;
    }
    &.el-col-xl-pull-6 {
      position: relative;
      right: 25%;
    }
    &.el-col-xl-push-6 {
      position: relative;
      left: 25%;
    }
    &.el-col-xl-7 {
      width: 29.1666666667%;
    }
    &.el-col-xl-offset-7 {
      margin-left: 29.1666666667%;
    }
    &.el-col-xl-pull-7 {
      position: relative;
      right: 29.1666666667%;
    }
    &.el-col-xl-push-7 {
      position: relative;
      left: 29.1666666667%;
    }
    &.el-col-xl-8 {
      width: 33.3333333333%;
    }
    &.el-col-xl-offset-8 {
      margin-left: 33.3333333333%;
    }
    &.el-col-xl-pull-8 {
      position: relative;
      right: 33.3333333333%;
    }
    &.el-col-xl-push-8 {
      position: relative;
      left: 33.3333333333%;
    }
    &.el-col-xl-9 {
      width: 37.5%;
    }
    &.el-col-xl-offset-9 {
      margin-left: 37.5%;
    }
    &.el-col-xl-pull-9 {
      position: relative;
      right: 37.5%;
    }
    &.el-col-xl-push-9 {
      position: relative;
      left: 37.5%;
    }
    &.el-col-xl-10 {
      width: 41.6666666667%;
    }
    &.el-col-xl-offset-10 {
      margin-left: 41.6666666667%;
    }
    &.el-col-xl-pull-10 {
      position: relative;
      right: 41.6666666667%;
    }
    &.el-col-xl-push-10 {
      position: relative;
      left: 41.6666666667%;
    }
    &.el-col-xl-11 {
      width: 45.8333333333%;
    }
    &.el-col-xl-offset-11 {
      margin-left: 45.8333333333%;
    }
    &.el-col-xl-pull-11 {
      position: relative;
      right: 45.8333333333%;
    }
    &.el-col-xl-push-11 {
      position: relative;
      left: 45.8333333333%;
    }
    &.el-col-xl-12 {
      width: 50%;
    }
    &.el-col-xl-offset-12 {
      margin-left: 50%;
    }
    &.el-col-xl-pull-12 {
      position: relative;
      right: 50%;
    }
    &.el-col-xl-push-12 {
      position: relative;
      left: 50%;
    }
    &.el-col-xl-13 {
      width: 54.1666666667%;
    }
    &.el-col-xl-offset-13 {
      margin-left: 54.1666666667%;
    }
    &.el-col-xl-pull-13 {
      position: relative;
      right: 54.1666666667%;
    }
    &.el-col-xl-push-13 {
      position: relative;
      left: 54.1666666667%;
    }
    &.el-col-xl-14 {
      width: 58.3333333333%;
    }
    &.el-col-xl-offset-14 {
      margin-left: 58.3333333333%;
    }
    &.el-col-xl-pull-14 {
      position: relative;
      right: 58.3333333333%;
    }
    &.el-col-xl-push-14 {
      position: relative;
      left: 58.3333333333%;
    }
    &.el-col-xl-15 {
      width: 62.5%;
    }
    &.el-col-xl-offset-15 {
      margin-left: 62.5%;
    }
    &.el-col-xl-pull-15 {
      position: relative;
      right: 62.5%;
    }
    &.el-col-xl-push-15 {
      position: relative;
      left: 62.5%;
    }
    &.el-col-xl-16 {
      width: 66.6666666667%;
    }
    &.el-col-xl-offset-16 {
      margin-left: 66.6666666667%;
    }
    &.el-col-xl-pull-16 {
      position: relative;
      right: 66.6666666667%;
    }
    &.el-col-xl-push-16 {
      position: relative;
      left: 66.6666666667%;
    }
    &.el-col-xl-17 {
      width: 70.8333333333%;
    }
    &.el-col-xl-offset-17 {
      margin-left: 70.8333333333%;
    }
    &.el-col-xl-pull-17 {
      position: relative;
      right: 70.8333333333%;
    }
    &.el-col-xl-push-17 {
      position: relative;
      left: 70.8333333333%;
    }
    &.el-col-xl-18 {
      width: 75%;
    }
    &.el-col-xl-offset-18 {
      margin-left: 75%;
    }
    &.el-col-xl-pull-18 {
      position: relative;
      right: 75%;
    }
    &.el-col-xl-push-18 {
      position: relative;
      left: 75%;
    }
    &.el-col-xl-19 {
      width: 79.1666666667%;
    }
    &.el-col-xl-offset-19 {
      margin-left: 79.1666666667%;
    }
    &.el-col-xl-pull-19 {
      position: relative;
      right: 79.1666666667%;
    }
    &.el-col-xl-push-19 {
      position: relative;
      left: 79.1666666667%;
    }
    &.el-col-xl-20 {
      width: 83.3333333333%;
    }
    &.el-col-xl-offset-20 {
      margin-left: 83.3333333333%;
    }
    &.el-col-xl-pull-20 {
      position: relative;
      right: 83.3333333333%;
    }
    &.el-col-xl-push-20 {
      position: relative;
      left: 83.3333333333%;
    }
    &.el-col-xl-21 {
      width: 87.5%;
    }
    &.el-col-xl-offset-21 {
      margin-left: 87.5%;
    }
    &.el-col-xl-pull-21 {
      position: relative;
      right: 87.5%;
    }
    &.el-col-xl-push-21 {
      position: relative;
      left: 87.5%;
    }
    &.el-col-xl-22 {
      width: 91.6666666667%;
    }
    &.el-col-xl-offset-22 {
      margin-left: 91.6666666667%;
    }
    &.el-col-xl-pull-22 {
      position: relative;
      right: 91.6666666667%;
    }
    &.el-col-xl-push-22 {
      position: relative;
      left: 91.6666666667%;
    }
    &.el-col-xl-23 {
      width: 95.8333333333%;
    }
    &.el-col-xl-offset-23 {
      margin-left: 95.8333333333%;
    }
    &.el-col-xl-pull-23 {
      position: relative;
      right: 95.8333333333%;
    }
    &.el-col-xl-push-23 {
      position: relative;
      left: 95.8333333333%;
    }
    &.el-col-xl-24 {
      width: 100%;
    }
    &.el-col-xl-offset-24 {
      margin-left: 100%;
    }
    &.el-col-xl-pull-24 {
      position: relative;
      right: 100%;
    }
    &.el-col-xl-push-24 {
      position: relative;
      left: 100%;
    }
  }
`;
