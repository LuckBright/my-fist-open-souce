import { App } from 'vue'
import Tree from './src/tree'
import type { SheepUIOptions } from '../_utils/global-config'
import { installComponent } from '../install'

// 具名导出
export { Tree }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Tree, options)
  }
}
