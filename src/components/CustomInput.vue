<template>
  <input type="text" placeholder="请输入" :value="modelValue" @input="handleChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    handleChange(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style lang="scss">
</style>