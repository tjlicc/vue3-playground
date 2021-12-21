<template>
  <el-menu v-bind="$attrs">
    <aside-menu-items :menus="menus" @item-click="handleClick"></aside-menu-items>
  </el-menu>
</template>

<script lang="ts">
import MenuItem from '@/typings/menu-item'
import Menus from '@/typings/menus'
import { defineComponent } from 'vue'
import AsideMenuItems from './AsideMenuItems.vue'

export default defineComponent({
  components: { AsideMenuItems },
  props: {
    menus: {
      type: Menus,
      default: () => []
    }
  },
  emits: ["item-click"],
  methods: {
    handleClick(menu: MenuItem) {
      this.$emit("item-click", menu);
    }
  },
})
</script>

<style lang="scss">
</style>