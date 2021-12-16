<template>
  <el-card>
    <p>
      如果在template中需要进行很多逻辑处理，或者说是处理很多条件分支时，直接使用渲染函数反而是个更好的选择
    </p>
    <AnchoredHeading :level="2">该组件使用了render</AnchoredHeading>
    <useCompInRender>点击</useCompInRender>
  </el-card>
</template>

<script lang="ts">
import { ElButton } from "element-plus";
import { defineComponent, h, resolveComponent } from "vue";

const AnchoredHeading = defineComponent({
  render() {
    // @returns {VNode}
    return h(
      // {String | Object | Function} tag
      // 一个 HTML 标签名、一个组件、一个异步组件、或一个函数式组件。
      //
      // 必需的。
      "h" + this.level,
      // {Object} props
      // 与 attribute、prop 和事件相对应的对象。这会在模板中用到。
      //
      // 可选的。
      {},
      // {String | Array | Object} children
      // 子 VNodes, 使用 `h()` 构建, 或使用字符串获取 "文本 VNode" 或者
      // 有插槽的对象。
      //
      // 可选的。
      this.$slots.default()
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

const useCompInRender = defineComponent({
  render() {
    // return h(ElButton, null, "click me");
    return h(
      // 有了resolveComponent方法，template中<component>的使用在render中就没有必要了
      resolveComponent("ElButton"),
      {
        onClick: () => {
          alert(123);
        },
      },
      // 可以通过传递一个slots对象，使用组件的插槽
      {
        default: () => this.$slots.default(),
      }
    );
  },
});

export default defineComponent({
  components: { AnchoredHeading, useCompInRender },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss"></style>
