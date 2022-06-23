// 入口文件
import type { App } from 'vue'
// 引入组件并进行批量导出
import ButtonPlugin, { Button } from '../src/button'

// 导出这些组件
export { Button }

// 导出这些插件
const installPlugins = [ButtonPlugin]

export default {
  install(app: App) {
    installPlugins.forEach(p => app.use(p))
  }
}
