import { ExtractPropTypes } from 'vue'
export const iconProps = {
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
}

// 利用值反推出Button属性类型
export type IconProps = ExtractPropTypes<typeof iconProps>
