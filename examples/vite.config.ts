import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import pages from "vite-plugin-pages";
import generateDemoModule from "./plugins/generateDemoModule";

import propsToMarkdownTable from "./plugins/propsToMarkdownTable";
export default defineConfig({
  plugins: [propsToMarkdownTable(), generateDemoModule(), solid(), pages()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 9999,
    minify: false,
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          try {
            if (id.includes("node_modules")) {
              let name = id.split("node_modules/")[1].split("/");
              if (name[0] == ".pnpm") {
                return name[1];
              } else {
                return name[0];
              }
            }
          } catch (error) {
            console.error(error);
          }
        },
      },
    },
  },
});
