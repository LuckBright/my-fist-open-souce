import { App } from 'vue'
import Icon from './src/svg'
import type { SheepUIOptions } from '../_utils/global-config'
import { installComponent } from '../install'

// 具名导出
export { Icon }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Icon, options)
  }
}
