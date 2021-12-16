<template>
  <div class="playground__selector">
    <aside-menu :default-active="activeMenu" :menus="menus" @item-click="handleMenuClick"></aside-menu>
  </div>
  <div class="playground__component">
    <template v-if="currentComponent">
      <el-page-header class="component__header" :content="currentComponent" @back="goBack" />
      <div class="component__wrapper">
        <component :is="currentComponent"></component>
      </div>
    </template>
    <el-empty v-else description="请选择要查看的特性"></el-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import MenuItem from './types/menu-item'

interface Components {
  [key: string]: { [key: string]: any; }
}

const historyMenus: Array<Partial<MenuItem>> = []

function addPathsToMenus(menus: Array<MenuItem>, paths: Array<string>) {
  const compName = paths.join('-')
  let key = ''

  while (paths.length > 0) {
    const path = paths[0]
    const isLeaf = paths.length === 1
    if (key) {
      key += '-' + path + '-' + isLeaf
    } else {
      key = path + '-' + isLeaf
    }

    let menuItem = menus.find(item => item.label === path && item.isLeaf === isLeaf)
    if (!menuItem) {
      menuItem = {
        key,
        label: path,
        children: [],
        isLeaf
      }
      if (isLeaf) {
        menuItem.compName = compName
      }
      menus.push(menuItem)
    }

    paths.shift()
    menus = menuItem.children
  }
}

// 加载指定目录下的所有组件
const menus: Array<MenuItem> = [];
const components: Components = {};

// 以下代码适用于vite
const modules = import.meta.glob('./playground/**/*{.vue,.tsx}')
for (const path in modules) {
  const module = modules[path]

  const route = path.replace(/(\.\/playground\/)|(\.vue)|(\.tsx)/g, '')
  addPathsToMenus(menus, route.split('/'))

  const compName = route.replace(/\//g, '-')
  // 此处要使用vue的异步组件定义方法，不然无法正确注册组件
  components[compName] = defineAsyncComponent(module)
}

// 以下代码适用于webpack
// const requireContext = require.context("./playground/", true, /.*\.vue/);
// requireContext.keys().forEach(filename => {
//   console.log(filename);
//   const module = requireContext(filename);

//   filename = filename.substring(2, filename.lastIndexOf("."));
//   fileNameList.push(filename);
//   components[filename] = module.default;
// });

export default defineComponent({
  name: "App",
  components,
  data() {
    let currentComponent: string | undefined;
    let activeMenu: string | undefined;
    return {
      menus,
      currentComponent,
      activeMenu
    };
  },
  methods: {
    handleMenuClick(menu: MenuItem) {
      if (menu.isLeaf) {
        this.activeMenu = menu.key
        this.currentComponent = menu.compName;
        historyMenus.push({
          key: menu.key,
          compName: menu.compName
        })
      }
    },
    goBack() {
      historyMenus.pop()
      if (historyMenus.length > 0) {
        this.currentComponent = historyMenus[historyMenus.length - 1].compName;
        this.activeMenu = historyMenus[historyMenus.length - 1].key
      } else {
        this.currentComponent = undefined
        this.activeMenu = undefined
      }
    }
  },
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  display: flex;
  align-items: stretch;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.playground__selector {
  flex: none;
  max-width: 300px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}
.playground__component {
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .component__header {
    flex: none;
  }
  .component__wrapper {
    flex: auto;
    overflow: auto;
    padding: 16px;
  }
}
.component__header {
  padding: 16px;
  border-bottom: 1px solid #ddd;
}
.playground__empty {
  padding: 16px;
}
.el-sub-menu__title {
  min-width: 200px;
}
</style>
