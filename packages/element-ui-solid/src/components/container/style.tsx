import { styled } from "solid-styled-components";

export let StyledContainer = styled.section`
  &.el-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }
  &.el-container.is-vertical {
    flex-direction: column;
  }
`;

export let StyledHeader = styled.header`
  &.el-header {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
`;

export let StyledAside = styled.aside`
  &.el-aside {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
  }
`;

export let StyledMain = styled.main`
  &.el-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
  }
`;

export let StyledFooter = styled.footer`
  &.el-footer {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
`;
