<template>
  <el-button @click="show = true">Show modal</el-button>
  <teleport to="body">
    <div v-if="show">this is a modal</div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
});
</script>