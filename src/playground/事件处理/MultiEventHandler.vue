<template>
  <button @click="func1, func2('hello'), func3($event)">Click me</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    func1() {
      console.log("you can not see me in console");
    },
    func2(param: string) {
      console.log("func2 has a custom param", param);
    },
    func3(event: object) {
      console.log('func3 has a $event param', event);
    }
  },
});
</script>