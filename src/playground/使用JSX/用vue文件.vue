<script lang="tsx">
import { ElCard } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <ElCard>
        将Vue单文件组件的script部分lang声明为tsx，就可以使用jsx语法
      </ElCard>
    );
  },
});
</script>
