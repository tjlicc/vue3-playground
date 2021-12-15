<template>
  <el-card>
    <p>
      Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染了
      HTML，而不必求助于全局状态或将其拆分为两个组件。
    </p>
    <modalButtom></modalButtom>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const modalButtom = defineComponent({
  template: /*html*/ `
    <button @click="modalOpen = true">
        Open full screen modal!
    </button>

    <!-- teleport包含的组件在逻辑上属于当前组件，与to无关 -->
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <button @click="modalOpen = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  `,
  data() {
    return {
      modalOpen: false,
    };
  },
});

export default defineComponent({
  components: { modalButtom },
});
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
