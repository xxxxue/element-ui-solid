/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-solid" />

declare module '*.mdx' {
    const src: string
    export default src
  }