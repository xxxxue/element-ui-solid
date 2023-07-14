import { Component, For, JSX, Show } from "solid-js";
import clsx from "clsx";
let ApiModule: Component<{
  data: Array<{
    required?: boolean;
    name?: JSX.Element;
    type?: JSX.Element;
    desc?: JSX.Element;
    default?: JSX.Element;
    version?: JSX.Element;
  }>;
}> = (props) => {
  return (
    <>
      <h2 class="text-2xl mb-5">Props</h2>
      <div class="overflow-x-auto w-full pr-[1px]">
        <table class="border-collapse table-auto w-full text-sm">
          {/* <caption class="text-slate-500 dark:text-slate-400 pb-4 text-xs caption-top">
          Table 3.1: Professional wrestlers and their signature moves.
        </caption> */}
          <thead>
            <tr>
              <th class="border border-solid dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Name
              </th>
              <th class="border border-solid dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left max-w-2xl">
                Desc
              </th>
              <th class="border border-solid dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Type
              </th>
              <th class="border border-solid dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Default
              </th>
              <th class="border border-solid dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Version
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <For each={props.data}>
              {(item) => {
                return (
                  <tr>
                    <td class="border border-solid border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      <span
                        class={clsx({
                          "border-dashed border-2 border-red-500 p-1 cursor-pointer": item.required,
                        })}
                        title={item.required ? "Required" : undefined}
                      >
                        {item.name}
                      </span>
                    </td>
                    <td class="border border-solid border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </td>
                    <td class="border border-solid border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      <span class="text-pink-600">{item.type}</span>
                    </td>

                    <td class="border border-solid border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      <Show when={item.default}>
                        <span class="bg-slate-200 p-1  rounded-lg">{item.default}</span>
                      </Show>
                    </td>
                    <td class="border border-solid border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      {item.version}
                    </td>
                  </tr>
                );
              }}
            </For>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApiModule;
