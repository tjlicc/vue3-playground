import { Plugin } from "vue"

interface Options {
  [index: string]: any
}

export default {
  install: (app, options: Options) => {
    // 通过在app.config.globalProperties上面添加自定义的属性，可以在组件中使用this来访问
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }

    // app上的任何方法都是可以调用的，具体使用就看实际需要和你的想象力了\(^o^)/~
    app.provide('i18n', options)
  }
} as Plugin