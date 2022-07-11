import { computed, defineComponent, toRefs } from 'vue'
import { IconProps, iconProps } from './svg-type'

export default defineComponent({
  name: 'Icon',
  props: iconProps,
  setup(props: IconProps) {
    const { iconClass, className } = toRefs(props)

    const iconName = computed(() => {
      if (iconClass?.value?.indexOf('#') !== -1) return iconClass?.value
      return `#icon-${iconClass.value}`
    })
    const svgClass = computed(() => {
      if (className.value) {
        return `svg-icon ${className.value}`
      }
      return 'svg-icon'
    })
    return () => {
      return (
        <svg aria-hidden="true" class={svgClass.value}>
          <use xlinkHref={iconName.value}></use>
        </svg>
      )
    }
  }
})
