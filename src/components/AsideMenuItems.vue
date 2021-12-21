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
import MenuItem from "@/typings/menu-item";
import Menus from "@/typings/menus";
import { PropType } from "vue";

// 使用defineProps声明ts类型的两种情况
// defineProps<{
//   menus: Menus;
// }>();
defineProps({
  menus: Array as PropType<Menus>,
});

const emit = defineEmits(["item-click"]);

function handleClick(menu: MenuItem) {
  emit("item-click", menu);
}
</script>
