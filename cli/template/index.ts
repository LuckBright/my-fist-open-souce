import { upperFist } from './utils'
// 创建组件单元测试文件模板
export default function genIndexTemplate (name: string) {
  const compName = upperFist(name)
  return `\
import { App } from 'vue'
import ${compName} from './src/${name}'
import type { SheepUIOptions } from '../_utils/global-config'
import { installComponent } from '../install'

// 具名导出
export { ${compName} }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, ${compName}, options)
  }
}
`
}