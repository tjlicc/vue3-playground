<template>
  <el-card>
    <p>
      vue3的composition
      api机制目的在于将同一个逻辑关注点相关代码收集在一起，增强代码的可读性
    </p>
    <p>
      新的 setup 选项在组件创建之前执行，一旦 props 被解析，就将作为组合式 API
      的入口。在 setup 中应该避免使用 this，因为它不会找到组件实例。setup
      的调用发生在 data property、computed property 或 methods
      被解析之前，所以它们无法在 setup 中被获取。
    </p>
  </el-card>
  <el-card class="mt20">
    <compWithCompositionApi></compWithCompositionApi>
  </el-card>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  provide,
  ref,
  toRef,
  toRefs,
  watch,
} from "vue";

const compWithCompositionApi = defineComponent({
  template: /*html*/ `
    <div>{{counter}} * 2 = {{twiceTheCounter}}</div>
    <!-- setup中ref的返回值在模板中无须通过.value来引用，会自动展开 -->
    <button @click="counter--">-1</button>
    <button @click="counter++" class="ml20">+1</button>
    <button @click="reset" class="ml20">reset</button>
  `,
  setup(props, context) {
    // setup中的内容可以视情况抽取成独立的js文件，只要该js中返回要使用的内容即可。
    // 通过这种方式可以很好的实现逻辑关注点分离

    // props是响应式的，不能使用 ES6 解构，它会消除 prop 的响应性。
    // 要结构，得通过toRefs方法。如果某个属性是可选的，需要使用toRef来结构
    // const { title } = toRefs(props);
    const title = toRef(props, "title");
    console.log(title.value);

    // setup的第二个参数可以获取到一些可能用到的内容
    // Attribute (非响应式对象，等同于 $attrs)
    console.log("attrs", context.attrs);

    // 插槽 (非响应式对象，等同于 $slots)
    console.log("slots", context.slots);

    // 触发事件 (方法，等同于 $emit)
    console.log("emit", context.emit);

    // 暴露公共 property (函数)
    console.log("expose", context.expose);

    // ref函数接收任意类型的参数，会返回一个响应式对象{value: initialValue}，该返回值在任何地方都保持响应性
    const counter = ref(0);

    const reset = () => {
      counter.value = 0;
    };

    // expose暴露的对象，可以通过组件本身的ref中进行访问，方便在父组件中操作
    context.expose({
      reset,
    });

    // setup中可以通过on+声明周期名称的方式来使用声明周期钩子
    onMounted(() => {
      console.log("mounted from setup");
    });

    // setup中可以通过watch函数来监听响应式属性的变更
    watch(counter, () => {
      console.log("The new counter value is: ", counter.value);
    });

    // setup中可以通过computed函数来获取计算属性
    const twiceTheCounter = computed(() => counter.value * 2);

    // setup中可以使用provide和inject
    // 直接传值会失去响应性
    // provide('counter', counter.value)
    // 传递ref值可以保持响应性
    provide("counter", counter);
    // inject('counter')

    // setup中return的数据，可以在组件的其余部分使用（template、methods、computed、watch、生命周期钩子等）
    return { counter, reset, twiceTheCounter };
  },
});

export default defineComponent({
  components: {
    compWithCompositionApi,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss"></style>
