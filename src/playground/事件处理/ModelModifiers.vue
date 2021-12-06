<template>
  <model-modifiers
    v-model.trim="value"
    v-model:title.trim="title"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModelModifiers from "@/components/ModelModifiers.vue";

export default defineComponent({
  components: { ModelModifiers },
  data() {
    return {
      value: "",
      title: "",
    };
  },
});
</script>