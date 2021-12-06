<template>
  <div class="lifecycle">
    <p>{{ msg }}</p>
    <img :src="lifecycle" alt="生命周期示意图" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lifecycle from '@/assets/lifecycle.svg'

export default defineComponent({
  data() {
    return {
      lifecycle,
      msg: '打开浏览器调试模式，查看组件的生命周期'
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    this.msg = '在mounted之后修改数据，会触发update相关事件，打开浏览器调试模式，观察组件的生命周期的变化'
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
})
</script>