import { styled } from "solid-styled-components";

export let StyledEmpty = styled.div`
  &.el-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 40px 0;
  }
  .el-empty__image {
    width: 160px;
  }
  .el-empty__image img {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    height: 100%;
    vertical-align: top;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .el-empty__image svg {
    fill: #dcdde0;
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
  .el-empty__description {
    margin-top: 20px;
  }
  .el-empty__description p {
    margin: 0;
    font-size: 14px;
    color: #909399;
  }
  .el-empty__bottom {
    margin-top: 20px;
  }
`;
