<template>
  <el-card>
    <defaultSlot>只有一个插槽的组件，直接写内容即可</defaultSlot>
  </el-card>
  <el-card class="mt20">
    <namedSlot>
      <template #header>命名slot</template>
      <template #body>可以将不同的内容插入到不同的slot中</template>
      <template #footer>自定义页脚</template>
    </namedSlot>
  </el-card>
  <el-card class="mt20">
    <slotWithParams>
      <template #header="{param1, param2}">带参数的slot携带参数{{param1}} {{param2}}</template>
      <template #body>自定义内容</template>
      <template #footer>自定义页脚</template>
    </slotWithParams>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 默认插槽可以有后备内容
const defaultSlot = defineComponent({
  template: /*html*/`
    <h1 class="header">页标题</h1>
    <p class="body">
      <slot>正文替补</slot>
    </p>
    <p class="footer">页脚</p>
  `
})

const namedSlot = defineComponent({
  template: /*html*/`
    <h1 class="header">
      <slot name="header">页标题</slot>
    </h1>
    <p class="body">
      <slot name="body">正文替补</slot>
    </p>
    <p class="footer">
      <slot name="footer">页脚</slot>
    </p>
  `
})

const slotWithParams = defineComponent({
  template: /*html*/`
    <h1 class="header">
      <slot name="header" param1="hello" param2="world">页标题</slot>
    </h1>
    <p class="body">
      <slot name="body">正文替补</slot>
    </p>
    <p class="footer">
      <slot name="footer">页脚</slot>
    </p>
  `
})

export default defineComponent({
  components: { defaultSlot, namedSlot, slotWithParams },
  data() {
    return {

    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
</style>