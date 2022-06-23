/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig, build } = require('vite')
const path = require('path')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const fsExtra = require('fs-extra')

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')

// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// rollup 配置
const rollupOptions = {
  external: ['vue', 'vue-router'], // 外置
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 生成 package.json
const createPackageJson = () => {
  const fileStr = `{
    "name": "sheep-ui",
    "version": "0.0.0",
    "main": "sheep-ui.umd.js",
    "module": "sheep-ui.es.js",
    "author": "LuckBright",
    "github": "",
    "description": "my fist open souse",
    "repository": {
      "type": "git",
      "url": "https://github.com/LuckBright/my-fist-open-souce.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/LuckBright/my-fist-open-souce/issues"
    }
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}

// 全量打包
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'sheep-ui',
          fileName: 'sheep-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

const buildLib = async () => {
  await buildAll()

  // 创建 package.json
  createPackageJson()
}

buildLib()
