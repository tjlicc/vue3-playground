<template>
  <template v-for="menu of menus" :key="menu.key">
    <el-menu-item v-if="menu.isLeaf" :index="menu.key" @click="handleClick(menu)">{{ menu.label }}</el-menu-item>
    <el-sub-menu v-else :index="menu.key">
      <template #title>{{ menu.label }}</template>
      <aside-menu-items :menus="menu.children" @item-click="handleClick"></aside-menu-items>
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import MenuItem from '@/types/menu-item'
import Menus from '@/types/menus'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    menus: {
      type: Menus,
      default: () => []
    }
  },
  emits: ['item-click'],
  methods: {
    handleClick(menu: MenuItem) {
      this.$emit('item-click', menu)
    }
  }
})
</script>

<style lang="scss">
</style>