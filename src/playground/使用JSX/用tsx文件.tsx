import { ElCard } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <ElCard>使用vite开发和构建.jsx 和 .tsx 文件，需要使用官方提供的 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx" target="_blank">@vitejs/plugin-vue-jsx</a> 插件</ElCard>
    )
  }
})