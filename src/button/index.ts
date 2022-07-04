import { App } from 'vue'
import Button from './src/button'
import type { SheepUIOptions } from '../_utils/global-config'
import { installComponent } from '../install'

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Button, options)
  }
}
