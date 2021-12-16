import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const srcPath = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  preview: {
    host: true
  },
  plugins: [vue()],
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
