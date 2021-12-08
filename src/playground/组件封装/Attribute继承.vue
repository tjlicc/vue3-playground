<template>
  <p>一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 props 或 emits 定义的 attribute。常见的示例包括 class、style 和 id attribute。可以通过 $attrs property 访问那些 attribute。</p>
  <p>下面的组件展示了单个根节点的组件对attr的继承，审查元素查看继承情况</p>
  <oneRootCompWithInherit class="another-class" data-status="open"></oneRootCompWithInherit>
  <p>下面的组件展示了单个根节点的组件如何将attr继承到指定元素上，审查元素查看继承情况</p>
  <oneRootCompWithoutInherit class="another-class" data-status="open"></oneRootCompWithoutInherit>
  <p>下面的组件展示了多个根节点的组件如何将attr继承到指定元素上，审查元素查看继承情况</p>
  <multioRootComp class="another-class" data-status="open"></multioRootComp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 默认情况下，单个根节点的$attrs会被继承到根节点上
const oneRootCompWithInherit = defineComponent({
  template: /*html*/`
    <div class="date-picker">
      <input type="datetime-local" />
    </div>
  `
})

const oneRootCompWithoutInherit = defineComponent({
  // 如果不声明inheritAttrs: false，$attrs除了会被显示继承到指定元素外还会默认继承一份到根节点上，
  inheritAttrs: false,
  template: /*html*/`
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs"/>
    </div>
  `
})

// 具有多个根节点的组件不自动继承$attrs。如果未显式绑定 $attrs，将发出运行时警告。
const multioRootComp = defineComponent({
  template: /*html*/`
    <div class="header"></div>
    <div class="date-picker">
      <input type="datetime-local"  v-bind="$attrs" />
    </div>
    <div class="footer"></div>
  `
})

export default defineComponent({
  components: {
    oneRootCompWithInherit,
    oneRootCompWithoutInherit,
    multioRootComp
  },
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