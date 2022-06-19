import Theme from 'vitepress/theme'
import InputDemo from '../../../src/components/InputDemo.vue'
import Test from '../../../src/components/test.jsx'

import 'vitepress-theme-demoblock/theme/styles/index.css'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'

export default {
  ...Theme,
  // 扩展应用实例
  enhanceApp({ app }) {
    app.component('InputDemo', InputDemo)
    app.component('Test', Test)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}