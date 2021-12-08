<template>
  <el-card>
    <template #header>
      <div>原始的v-model</div>
    </template>
    <div>vue的v-model其实是个语法糖</div>
    <p>对自定义组件而言其底层是modelValue和update:modelValue事件的结合</p>
    <p>&lt;comp v-model="value" /&gt;相当于&lt;comp :model-value="value" @update:model-value="value=$event"&gt;</p>
    <p>comp组件中需要声明属性modelValue，并在适当的时候触发update:modelValue事件并给事件传参</p>
    <vModel v-model="vModelText"></vModel>
    <span>输入内容为：{{ vModelText }}</span>
  </el-card>
  <el-card class="mt20">
    <template #header>
      <div>带参数的v-model</div>
    </template>
    <div>&lt;comp v-model:param1="value" v-model:param2="value" /&gt;相当于&lt;comp :param1="value" @update:param1="value=$event" :param2="value" @update:param2="value=$event" &gt;</div>
    <p>comp组件中需要声明属性param，并在适当的时候触发update:param事件并给事件传参</p>
    <vModelWithParam v-model:title="vModelWithParamText"></vModelWithParam>
    <span>输入内容为：{{ vModelWithParamText }}</span>
  </el-card>
  <el-card class="mt20">
    <template #header>
      <div>带修饰符的v-model</div>
    </template>
    <div>使用&lt;comp v-model.mdf="value" /&gt;需要在comp实现时声明属性modelValue、modelModifiers，并声明事件update:modelValue</div>
    <p>使用&lt;comp v-model:param.mdf="value" /&gt;需要在comp实现时声明属性param、paramModifiers，并声明事件update:param</p>
    <vModelWithModifiers v-model:title.capitalize="vModelWithModifiersText"></vModelWithModifiers>
    <span>输入内容为：{{ vModelWithModifiersText }}</span>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 自定义默认的v-model需要声明属性modelValue和事件update:modelValue
const vModel = defineComponent({
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  template: /*html*/`
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  `
})

// 自定义带参数的v-model需要声明属性arg和事件update:arg
const vModelWithParam = defineComponent({
  props: {
    title: String
  },
  emits: ['update:title'],
  template: /*html*/`
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
  `
})

// 自定义v-model的修饰符需要声明属性modelValue、modelModifiers和事件update:modelValue，其中modelModifiers会被vue底层处理成{modifier1: true, modifier2: true}的形式
// 自定义v-model:param的修饰符需要声明属性param、paramModifiers和事件update:param，其中paramModifiers会被vue底层处理成{modifier1: true, modifier2: true}的形式
const vModelWithModifiers = defineComponent({
  props: {
    title: String,
    // 如果传入修饰符，titleModifiers会被vue底层默认处理成{key1: true, key2: true}的形式
    titleModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:title'],
  template: /*html*/`
    <input type="text" :value="title" @input="handleInput">
  `,
  methods: {
    handleInput(event: any) {
      let value = event.target.value
      const modifiers = this.titleModifiers as { capitalize: boolean }
      if (modifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:title', value)
    }
  }
})

export default defineComponent({
  components: { vModel, vModelWithParam, vModelWithModifiers },
  data() {
    return {
      vModelText: '',
      vModelWithParamText: '',
      vModelWithModifiersText: '',
    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
</style>