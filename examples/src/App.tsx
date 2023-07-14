import { useLocation, useNavigate, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";
import { useEffectWatch, useState } from "element-ui-solid";
import clsx from "clsx";
import { For, createSignal } from "solid-js";

interface IData {
  name?: string;
  zhCnName?: string;
  completed?: boolean;
  desc?: string;
}

let basicList: IData[] = [
  {
    name: "Layout",
    zhCnName: "布局",
    completed: true,
    desc: "",
  },
  {
    name: "Container",
    zhCnName: "布局容器",
    completed: true,
    desc: "",
  },
  {
    name: "Icon",
    zhCnName: "图标",
    completed: true,
    desc: "",
  },
  {
    name: "Button",
    zhCnName: "按钮",
    completed: true,
    desc: "",
  },
  {
    name: "Link",
    zhCnName: "文字链接",
    completed: true,
    desc: "",
  },
];

let formList: IData[] = [
  {
    name: "Radio",
    zhCnName: "单选框",
    completed: true,
    desc: "",
  },
  {
    name: "Checkbox",
    zhCnName: "多选框",
    completed: true,
    desc: "缺少 checkbox-button",
  },
  {
    name: "Input",
    zhCnName: "输入框",
    completed: true,
    desc: "",
  },
  {
    name: "AutoComplete",
    zhCnName: "自动完成",
    completed: false,
    desc: "",
  },
  {
    name: "InputNumber",
    zhCnName: "计数器",
    completed: false,
    desc: "",
  },
  {
    name: "Select",
    zhCnName: "选择器",
    completed: false,
    desc: "",
  },
  {
    name: "Cascader",
    zhCnName: "级联选择器",
    completed: false,
    desc: "",
  },
  {
    name: "Switch",
    zhCnName: "开关",
    completed: true,
    desc: "",
  },
  {
    name: "Slider",
    zhCnName: "滑块",
    completed: false,
    desc: "",
  },
  {
    name: "TimePicker",
    zhCnName: "时间选择器",
    completed: false,
    desc: "",
  },
  {
    name: "DatePicker",
    zhCnName: "日期选择器",
    completed: false,
    desc: "",
  },
  {
    name: "DateTimePicker",
    zhCnName: "日期时间选择器",
    completed: false,
    desc: "",
  },
  {
    name: "Upload",
    zhCnName: "上传",
    completed: false,
    desc: "",
  },
  {
    name: "Rate",
    zhCnName: "评分",
    completed: false,
    desc: "",
  },
  {
    name: "ColorPicker",
    zhCnName: "颜色选择器",
    completed: false,
    desc: "",
  },
  {
    name: "Transfer",
    zhCnName: "穿梭框",
    completed: false,
    desc: "",
  },
  {
    name: "Form",
    zhCnName: "表单",
    completed: false,
    desc: "",
  },
];

let dataList: IData[] = [
  {
    name: "Table",
    zhCnName: "表格",
    completed: false,
    desc: "",
  },
  {
    name: "Tag",
    zhCnName: "标签",
    completed: true,
    desc: "",
  },
  {
    name: "Progress",
    zhCnName: "进度条",
    completed: true,
    desc: "",
  },
  {
    name: "Tree", // 较为复杂,前置组件-- checkbox
    zhCnName: "树形控件",
    completed: false,
    desc: "",
  },
  {
    name: "Pagination", // 前置组件-- select option input ,多语言
    zhCnName: "分页",
    completed: false,
    desc: "",
  },
  {
    name: "Badge",
    zhCnName: "标记",
    completed: true,
    desc: "",
  },
  {
    name: "Avatar",
    zhCnName: "头像",
    completed: true,
    desc: "",
  },
  {
    name: "Skeleton",
    zhCnName: "骨架屏",
    completed: true,
    desc: "",
  },
  {
    name: "Empty",
    zhCnName: "空状态",
    completed: true,
    desc: "",
  },
  {
    name: "Descriptions",//最后再做
    zhCnName: "描述列表",
    completed: false,
    desc: "",
  },
  {
    name: "Result",
    zhCnName: "结果",
    completed: true,
    desc: "",
  },
  {
    name: "Statistic",
    zhCnName: "统计数值",
    completed: true,
    desc: "",
  },
];

let noticeList: IData[] = [
  {
    name: "Alert",
    zhCnName: "警告",
    completed: true,
    desc: "",
  },
  {
    name: "Loading",
    zhCnName: "加载",
    completed: false,
    desc: "",
  },
  {
    name: "Message",
    zhCnName: "消息提示",
    completed: false,
    desc: "",
  },
  {
    name: "MessageBox",
    zhCnName: "弹框",
    completed: false,
    desc: "",
  },
  {
    name: "Notification",
    zhCnName: "通知",
    completed: false,
    desc: "",
  },
];

let navigationList : IData[] = [
  {
    name: "NavMenu",
    zhCnName: "导航菜单",
    completed: false,
    desc: "",
  },{
    name: "Tabs",
    zhCnName: "标签页",
    completed: false,
    desc: "",
  },{
    name: "Breadcrumb",
    zhCnName: "面包屑",
    completed: true,
    desc: "",
  }
  ,{
    name: "PageHeader",
    zhCnName: "页头",
    completed: true,
    desc: "",
  }
  ,{
    name: "Dropdown",
    zhCnName: "下拉菜单",
    completed: false,
    desc: "",
  }
  ,{
    name: "Steps",
    zhCnName: "步骤条",
    completed: false,
    desc: "",
  }
]

let othersList: IData[] = [
  {
    name: "Dialog",
    zhCnName: "对话框",
    completed: false,
    desc: "",
  },
  {
    name: "Tooltip",
    zhCnName: "文字提示",
    completed: false,
    desc: "",
  },
  {
    name: "Popover",
    zhCnName: "弹出框",
    completed: false,
    desc: "",
  },
  {
    name: "Popconfirm",
    zhCnName: "气泡确认框",
    completed: false,
    desc: "",
  },
  {
    name: "Card",
    zhCnName: "卡片",
    completed: true,
    desc: "",
  },
  {
    name: "Carousel",
    zhCnName: "走马灯",
    completed: false,
    desc: "",
  },
  {
    name: "Collapse",
    zhCnName: "折叠面板",
    completed: true,
    desc: "",
  },
  {
    name: "Timeline",
    zhCnName: "时间线",
    completed: true,
    desc: "",
  },
  {
    name: "Divider",
    zhCnName: "分割线",
    completed: true,
    desc: "",
  },
  {
    name: "Calendar",
    zhCnName: "日历",
    completed: false,
    desc: "",
  },
  {
    name: "Image",
    zhCnName: "图片",
    completed: false,
    desc: "",
  },
  {
    name: "Backtop",
    zhCnName: "回到顶部",
    completed: true,
    desc: "",
  },
  {
    name: "InfiniteScroll",
    zhCnName: "无限滚动",
    completed: false,
    desc: "",
  },
  {
    name: "Drawer",
    zhCnName: "抽屉",
    completed: true,
    desc: "",
  },
];

let restList: IData[] = [
  {
    name: "Spinner",
    zhCnName: "旋转器",
    completed: true,
    desc: "",
  },
];

let list = {
  basic: basicList,
  form:formList,
  data: dataList,
  notice: noticeList,
  navigation: navigationList,
  others: othersList,
  rest: restList,
};

let Index = () => {
  let nav = useNavigate();

  const [allCount, setAllCount] = createSignal<number>(0);
  const [completedCount, setCompletedCount] = createSignal<number>(0);
  const Routes = useRoutes(routes);
  let loc = useLocation();

  let goToBlock = (index) => {
    let domList = document.querySelectorAll(".__my_code_title > div:nth-child(2)");
    console.log(domList.length);

    for (let i = 0; i < domList.length; i++) {
      if (i == index) {
        document.getElementsByClassName("__my_code_title")[i].scrollIntoView();
        return;
      }
    }
  };

  const [titleArray, setTitleArray] = useState<string[]>([]);

 

  let genTitle = ()=>{
    console.log(1);
    
    setTitleArray([])
    setTimeout(() => {
      let titleList: string[] = [];
      let domList = document.querySelectorAll(".__my_code_title > div:nth-child(2)");
      console.log(domList.length);

      for (const item of domList) {
        let content = item?.textContent;
        if (content != void 0) {
          titleList.push(content);
        }
      }
      setTitleArray(titleList);
    }, 2000);
  }

  useEffectWatch(()=>loc.pathname,()=>{
    genTitle()
  })
  return (
    <div class="flex h-screen">
      <div class="w-80 overflow-auto ">
        <div class="flex justify-center items-center text-xl">
          <span class="text-green-400" >{completedCount()}</span>/{allCount()}
        </div>
        <div class="flex flex-col w-full items-center ">
          <div>
            <For each={Object.keys(list)}>
              {(key) => {
                return (
                  <>
                    <h1 class="pl-2 text-xl my-3 border-t border-solid text-red-400">{key}</h1>
                    <div class="space-y-2 p-1 text-lg">
                      <For each={list[key]}>
                        {(item: IData) => {
                          setAllCount((p) => p + 1);

                          if (item.completed) {
                            setCompletedCount((p) => p + 1);
                          }
                          return (
                            <div class="space-x-2 p-1">
                              <span
                                class={clsx("p-[2px]", {
                                  "cursor-pointer border border-solid border-red-400":
                                    item.completed,
                                })}
                                onClick={() => {
                                  if (item.name != undefined && item.completed) {
                                    nav(item.name);
                                  }
                                }}
                              >
                                {item.name}
                              </span>
                              <span class="text-gray-500 text-sm">{item.zhCnName}</span>
                              <span class="text-gray-300 text-sm">{item.desc}</span>
                            </div>
                          );
                        }}
                      </For>
                    </div>
                  </>
                );
              }}
            </For>
          </div>
        </div>
      </div>

      <div class="overflow-auto w-full p-2">
        <Routes />
      </div>
      <div class="w-52">
        <ul class="space-y-3">
          <For each={titleArray()}>
            {(item, index) => {
              return <li class="cursor-pointer p-1 border border-solid hover:bg-gray-300" onClick={() => goToBlock(index())}>{item}</li>;
            }}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Index;
