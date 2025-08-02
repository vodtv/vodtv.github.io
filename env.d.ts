/// <reference types="vitepress/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module '@vue/theme/config' {
  import { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}

declare module '@vue/theme/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>
  export default createHighlighter
}