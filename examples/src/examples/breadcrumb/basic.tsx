import { Breadcrumb, BreadcrumbItem } from "element-ui-solid";

export default () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem onClick={() => alert("1")}>首页</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">活动管理</a>
        </BreadcrumbItem>
        <BreadcrumbItem>活动列表</BreadcrumbItem>
        <BreadcrumbItem>活动详情</BreadcrumbItem>
      </Breadcrumb>

      
      <Breadcrumb separator="\">
        <BreadcrumbItem onClick={() => alert("1")}>首页</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">活动管理</a>
        </BreadcrumbItem>
        <BreadcrumbItem>活动列表</BreadcrumbItem>
        <BreadcrumbItem>活动详情</BreadcrumbItem>
      </Breadcrumb>


      <Breadcrumb separator="#">
        <BreadcrumbItem onClick={() => alert("1")}>首页</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">活动管理</a>
        </BreadcrumbItem>
        <BreadcrumbItem>活动列表</BreadcrumbItem>
        <BreadcrumbItem>活动详情</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
