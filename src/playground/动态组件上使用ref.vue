<template>
  <el-radio-group v-model="curCompName" @change="handleCompChange">
    <el-radio label="d1">动态组件1</el-radio>
    <el-radio label="d2">动态组件2</el-radio>
  </el-radio-group>
  <div>
    <keep-alive>
      <component ref="dynamicCompRefs" :is="curComp"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import D1 from '@/components/DynamicComp1.vue';
import D2 from '@/components/DynamicComp2.vue';

const curCompName = ref('d1');
const dynamicCompRefs = ref<any>(null);
const curComp = computed(() => {
  if (curCompName.value === 'd1') {
    return D1;
  } else if (curCompName.value === 'd2') {
    return D2;
  }
});
function handleCompChange() {
  console.log(dynamicCompRefs.value!.d1);
}
</script>

<style lang="scss" scoped></style>
