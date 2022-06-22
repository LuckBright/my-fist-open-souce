import { getCurrentInstance } from 'vue'

const CLASS_PREFIX = 's'
const GLOBAL_CONFIG_NAME = '_sheep'
const COMPONENT_PREFIX = 'S'

// 获取组件 class
export const getComponentCls = (componentName?: string): string => {
  // 获取组件实例
  const instance = getCurrentInstance()
  // TODO 后期需要配合config-provider组件来获取全局prefixCls ,优先级 config.classPrefix  > options.classPrefix > CLASS_PREFIX
  const prefix =
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ?? CLASS_PREFIX
  if (componentName) {
    return `${prefix}-${componentName}`
  }
  return prefix
}
