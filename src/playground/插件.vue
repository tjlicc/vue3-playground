<template>
  <el-card>
    <p>插件的功能范围没有严格的限制——一般有下面几种：</p>
    <ol>
      <li><p>添加全局方法或者 property；</p></li>
      <li><p>添加全局资源：指令/过渡等；</p></li>
      <li><p>通过全局 mixin来添加一些组件选项；</p></li>
      <li>
        <p>
          添加全局实例方法，通过把它们添加到config.globalProperties 上实现；
        </p>
      </li>
      <li><p>一个库，提供自己的 API，同时提供上面提到的一个或多个功能。</p></li>
    </ol>
    <p>
      冒号后面的文字使用了自定义的全局插件: {{ $translate("greetings.hello") }}
    </p>
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
