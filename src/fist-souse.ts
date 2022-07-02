// 批量导出 components 下的所有的组件

import type { App, Plugin } from 'vue'
import * as components from './components'

const FistSouse = {
  install(app: App) {
    Object.keys(components).forEach(key => {
      console.log(components[key as keyof typeof components] as Plugin)
      app.use(components[key as keyof typeof components] as Plugin)
    })
  }
}

export default FistSouse
