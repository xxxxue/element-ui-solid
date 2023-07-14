import { styled } from "solid-styled-components";

export let StyledStatistic = styled.div`
  &.el-statistic {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    text-align: center;
  }
  &.el-statistic .head {
    margin-bottom: 4px;
    color: #606266;
    font-size: 13px;
  }
  &.el-statistic .con {
    font-family: Sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #303133;
  }
  &.el-statistic .con .number {
    font-size: 20px;
    padding: 0 4px;
  }
  &.el-statistic .con span {
    display: inline-block;
    margin: 0;
    line-height: 100%;
  }
`;
