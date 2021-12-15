<template>
  <p>在进入/离开的过渡中，会有 6 个 class 切换。</p>
  <ol>
    <li>
      <p>
        v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
      </p>
    </li>
    <li>
      <p>
        v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
      </p>
    </li>
    <li>
      <p>
        v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效
        (与此同时v-enter-from 被移除)，在过渡/动画完成之后移除。
      </p>
    </li>
    <li>
      <p>
        v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
      </p>
    </li>
    <li>
      <p>
        v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
      </p>
    </li>
    <li>
      <p>
        v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效
        (与此同时v-leave-from 被移除)，在过渡/动画完成之后移除。
      </p>
    </li>
  </ol>
  <p>这里的每个 class 都将以过渡的名字添加前缀。如果你使用了一个没有名字的 &lt;transition&gt;，则 v- 是这些 class 名的默认前缀。举例来说，如果你使用了 &lt;transition name="my-transition"&gt;，那么 v-enter-from 会替换为 my-transition-enter-from。</p>
  <img :src="transitionImg" alt="" />
  <el-card>
    <template #header>单元素/组件的过渡</template>
    <span
      >Vue 提供了 transition
      的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡</span
    >
    <ul>
      <li>条件渲染 (使用 v-if)</li>
      <li>条件展示 (使用 v-show)</li>
      <li>动态组件</li>
      <li>组件根节点</li>
    </ul>
    <singleTransition></singleTransition>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import transitionImg from "@/assets/images/transition.jpg";

const singleTransition = defineComponent({
  template: `
    <div id="demo">
      <button @click="show = !show">
        Toggle
      </button>

      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  `,
  data() {
    return {
      show: true,
    };
  },
});

export default defineComponent({
  components: { singleTransition },
  data() {
    return {
      transitionImg,
    };
  },
  methods: {},
});
</script>

<style lang="scss">
img {
  max-width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
