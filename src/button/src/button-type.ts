import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'warning'
  | 'info'
  | 'success'
  | 'danger'
export type IButtonSize = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'small'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  // 决定渲染按钮的是什么元素，不指定则渲染 button 元素
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  },
  // 块级按钮，独占一行
  block: {
    type: Boolean,
    default: false
  }
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
