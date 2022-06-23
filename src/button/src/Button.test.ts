import SButton from './button'
import { render } from '@testing-library/vue'

// getByRole 获取生成的按钮实例

test('button.tst should work', () => {
  // 渲染组件
  const { getByRole } = render(SButton)
  // 断言输出结果
  // 是否是渲染了 button 按钮
  getByRole('button')
})

// 插槽是否能工作
test('slots should work ', () => {
  const { getByText } = render(SButton, {
    slots: {
      default() {
        return 'i am default'
      }
    }
  })
  getByText('i am default')
})
