import { createApp } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue"
import AsideMenu from '@/components/AsideMenu.vue'
import i18n from "./plugins/i18n"
import '@/assets/scss/global.scss'

// 每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的
// 该应用实例是用来在应用中注册“全局”组件的
const app = createApp(App)
app.use(ElementPlus)

// 全局注册组件
app.component('AsideMenu', AsideMenu)
// 全局注册指令
// app.directive('xxx', {})

// 使用自定义的插件
app.use(i18n, {
  greetings: {
    hello: '你好'
  }
})

// mount 不返回应用本身。它返回的是根组件实例。
const vm = app.mount('#app')

console.log('应用实例', app)
console.log('应用的根组件实例', vm)
