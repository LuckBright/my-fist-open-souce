import { upperFist } from "./utils"

// 创建组件核心文件模板
export default function genCoreTemplate (name: string) {
  const compName = 'S' + upperFist(name)
  const propsTypeName = upperFist(name) + 'Props'
  const propsName = name + 'Props'
  const className = 's-' + name
  const propsFileName = name + '-type'

  return `
import { computed, defineComponent, toRefs } from 'vue'
import { ${propsName}, ${propsTypeName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}, { slots }) {

    return () => {
      const defaultSlot = slots.default ? slots.default() : '${name}'
      return (
        <div class="${className}">
          {defaultSlot}
        </div>
      )
    }
  }
})  
`
}