/// <reference types="vite/client" />
import { DefineComponent } from 'vue'

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 通过类型声明，可以让VSCode中的TS模块支持自定属性
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $translate: (key: string) => any
  }
}
