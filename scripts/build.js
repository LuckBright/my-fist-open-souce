/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig, build } = require('vite')
const fs = require('fs')
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

// 组件目录
const componentsDir = path.resolve(__dirname, '../src')

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
const createPackageJson = name => {
  const fileStr = `{
    "name": "${name ? name : 'sheep-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index' : 'sheep-ui'}.umd.js",
    "module": "${name ? 'index' : 'sheep-ui'}.es.js",
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
  if (name) {
    // 按需导出 生成对应组件的目录以及对应的 package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // 全量导出
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
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
  // 创建单组件包
  // 获取组件名称组成的数组
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
  // 创建 package.json
  createPackageJson()
}

buildLib()
