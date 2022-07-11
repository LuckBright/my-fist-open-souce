/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      // 执行icon name的格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
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
