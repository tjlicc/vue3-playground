<template>
  <template v-for="menu of menus" :key="menu.key">
    <el-menu-item
      v-if="menu.isLeaf"
      :index="menu.key"
      @click="handleClick(menu)"
      >{{ menu.label }}</el-menu-item
    >
    <el-sub-menu v-else :index="menu.key">
      <template #title>{{ menu.label }}</template>
      <aside-menu-items
        :menus="menu.children"
        @item-click="handleClick"
      ></aside-menu-items>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import MenuItem from "@/types/menu-item";
import Menus from "@/types/menus";

defineProps<{
  menus: Menus;
}>();

const emit = defineEmits(["item-click"]);

function handleClick(menu: MenuItem) {
  emit("item-click", menu);
}
</script>
