<!--
 * @Author: zhangsheng@youlu.com
 * @Date: 2022-06-20 10:49:24
 * @Desc: Do not edit
 * @LastEditTime: 2022-06-20 15:27:15
 * @LastEditors: zhangsheng@youlu.com
-->
<script setup lang="ts">
import { ref } from 'vue'
import Test from './test.tsx'
</script>

<template>
  <div class="text-3xl font-bold">随便写一个</div>
  <Test>
    我是通过slot渲染的
    <template #title>
      <h2 class="font-bold">我是通过title 插槽渲染的</h2>
    </template>
  </Test>
</template>
