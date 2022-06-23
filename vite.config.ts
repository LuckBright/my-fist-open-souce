/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  test: {
    globals: true,
    // 模拟 dom 环境
    environment: 'happy-dom',
    // 支持 tsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
