import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "node:path";

import ts from "typescript";

import pkg from "./package.json";

let input = path.resolve(__dirname, "src/index.ts");

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    minify: false,
    sourcemap: true,
    chunkSizeWarningLimit: 10000,
    lib: {
      entry: input,
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },

  plugins: [
    solid(),
    {
      name: "emit-dts",
      buildEnd() {
        const program = ts.createProgram([input], {
          target: ts.ScriptTarget.ESNext,
          module: ts.ModuleKind.ESNext,
          moduleResolution: ts.ModuleResolutionKind.NodeJs,

          // jsx实现 根据自己的需求改
          jsx: ts.JsxEmit.Preserve,
          jsxImportSource: "solid-js",

          allowSyntheticDefaultImports: true,
          esModuleInterop: true,

          // js 源码输出的文件夹
          outDir: `dist/source`,
          // d.ts 输出的文件夹
          declarationDir: `dist/types`,

          declaration: true,
          // true 只输出 dts 到 declarationDir,
          // false 同时输出js源码到 outDir
          emitDeclarationOnly: true,
          allowJs: true,
        });
        program.emit();
      },
    },
  ],
});
