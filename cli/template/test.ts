import { upperFist } from './utils'
// 创建组件单元测试文件模板
export default function genTestTemplate (name: string) {
  const compName = 'S' + upperFist(name)
  return `\
import { render } from '@testing-library/vue'
import ${compName} from '../src/${name}'

test('${name} init render', () => {
  const { getByText } = render(${compName})
  getByText('${name}')
})
`
}