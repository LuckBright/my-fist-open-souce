<script setup lang="ts">
import { ref } from 'vue'
import Test from './test.tsx'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Test/>
</template>


<style scoped>

</style>
