<template>动态组件1</template>

<script setup lang="ts">
function d1() {
  console.log('d1');
}

defineExpose({
  d1,
});
</script>

<style lang="scss" scoped></style>
