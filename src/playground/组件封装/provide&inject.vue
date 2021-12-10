<template>
  <el-card>
    <parentComp>
      <childComp></childComp>
    </parentComp>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

// provide/inject用来跳跃多层嵌套，从父组件传递属性给深层的子组件

const parentComp = defineComponent({
  template: /*html*/`
    <div>
      <div>
        <span>修改user的值，子组件不会同步更新</span>
        <el-input v-model="user" size="small"></el-input>
      </div>
      <el-button size="small" class="mt20 mb20" @click="files.push(1)">修改files长度，子组件会同步更新</el-button>
      <slot></slot>
      </div>
    </div>
  `,
  data() {
    return {
      user: "test",
      files: [],
    };
  },
  // 对象类型的provide无法对外提供实例属性，因为此时的this无法指向实例
  // provide: {
  //   user: 'test'
  // }
  provide() {
    return {
      // 直接通过this访问到的属性，provide之后会丢失响应性
      user: this.user,
      // provide出去的属性，如果要保持响应性，需要使用Vue.computed
      fileLength: computed(() => this.files.length),
    };
  },
});

const childComp = defineComponent({
  template:
    "<div>从父组件接收到数据：user: {{user}}, fileLength: {{fileLength}}</div>",
  inject: ["user", "fileLength"],
});

export default defineComponent({
  components: { parentComp, childComp },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss"></style>
