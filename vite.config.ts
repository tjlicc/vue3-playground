import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 要是vite支持jsx语法，需要手动引入
import vueJsx from '@vitejs/plugin-vue-jsx'
const srcPath = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  preview: {
    host: true
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js'
      },
      {
        find: '@',
        replacement: srcPath
      }
    ]
  }
})
