<script setup lang="ts">
import { ref } from 'vue'
import Test from './test'
const buttonClick = () => {
  console.log('按钮点击')
}
</script>

<template>
  <div class="text-3xl font-bold">随便写一个</div>
  <Test>
    我是通过slot渲染的
    <template #title>
      <h2 class="font-bold">我是通过title 插槽渲染的</h2>
    </template>
  </Test>
  <SButton @click="buttonClick">我是按钮</SButton>
</template>
