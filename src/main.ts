import { createApp } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue"
import AsideMenu from '@/components/AsideMenu.vue'

// 每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的
// 该应用实例是用来在应用中注册“全局”组件的
const app = createApp(App)
app.use(ElementPlus)
app.component('AsideMenu', AsideMenu)

// mount 不返回应用本身。它返回的是根组件实例。
const vm = app.mount('#app')

console.log('应用实例', app)
console.log('应用的根组件实例', vm)
