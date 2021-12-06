<template>
  <input @change="handleChange" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["modelValue", "modelModifiers", "title", "titleModifiers"],
  created() {
    console.log("modelModifiers", this.modelModifiers);
    console.log("titleModifiers", this.titleModifiers);
  },
  methods: {
    handleChange(event: Record<string, object>) {
      console.log(event);
    },
  },
});
</script>