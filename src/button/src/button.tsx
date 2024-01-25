import { computed, defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-type'
import { getComponentCls } from '../../_utils/global-config'

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, plain } = toRefs(props)

    const prefixCls = getComponentCls('btn')

    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      `${block.value ? 's-btn--block' : ''}`,
      `${plain.value ? 's-btn--plain' : ''}`
    ])

    return () => {
      const { tag: Component } = props
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <Component class={classes.value} disabled={disabled.value}>
          {defaultSlot}
        </Component>
      )
    }
  }
})
