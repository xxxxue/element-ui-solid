import { Component, JSX } from "solid-js";
import { useDefaultProps } from "../../utils";
import { StyledPageHeader } from "./style";

export interface IPageHeaderProps {
  title?: JSX.Element;
  content?: string;
  onBack?: () => void;
}
export let PageHeader: Component<IPageHeaderProps> = (inProps) => {
  let props = useDefaultProps(inProps, {
    title: "返回",
  });

  return (
    <>
      <StyledPageHeader class="el-page-header">
        <div class="el-page-header__left" onClick={() => props.onBack?.()}>
          <i class="el-icon-back"></i>
          <div class="el-page-header__title">{props.title}</div>
        </div>
        <div class="el-page-header__content">{props.content}</div>
      </StyledPageHeader>
    </>
  );
};
