<template>
  <div v-custom:color="'green'">
    该元素使用了自定义的指令，过隔一段时间会变换颜色
  </div>
</template>

<script lang="ts">
import { defineComponent, Directive, DirectiveBinding } from "vue";

const customDirective = {
  // 在绑定元素的 attribute 或事件监听器被应用之前调用。
  created() {},
  // 当指令第一次绑定到元素并且在挂载父组件之前调用。
  beforeMount() {},
  // 在绑定元素的父组件被挂载后调用。
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // binding参数中包含了指定的参数和表达式值
    const { arg, value } = binding;
    setTimeout(() => {
      el.style[arg] = value;
    }, 5000);
  },
  // 在更新包含组件的 VNode 之前调用。
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新后调用。
  updated() {},
  // 在卸载绑定元素的父组件之前调用
  beforeUnmount() {},
  // 当指令与元素解除绑定且父组件已卸载时，只调用一次。
  unmounted() {},
} as Directive;

export default defineComponent({
  directives: {
    custom: customDirective,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss"></style>
