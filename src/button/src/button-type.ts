import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text' | 'warning'
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
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  }
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
