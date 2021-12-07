<template>
  <p>vue的v-model其实是个语法糖</p>
  <p>对自定义组件而言其底层是modelValue和update:modelValue事件的结合</p>
  <p>&lt;comp v-model="param" /&gt;相当于&lt;comp :model-value="param" @update:model-value="param=$event"&gt;</p>
  <p>comp组件中需要声明modelValue属性，并在适当的时候触发update:modelValue事件并给事件传参</p>
  <custom-input v-model="customText"></custom-input><span>输入内容为：{{customText}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomInput from '@/components/CustomInput.vue'

export default defineComponent({
  components: { CustomInput },
  data() {
    return {
      customText: ''
    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
</style>