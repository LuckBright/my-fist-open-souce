import { defineComponent, ref, withModifiers } from 'vue'
import inputDemo from './InputDemo.vue'

export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  components: {
    inputDemo
  },
  setup(props, { slots }) {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    const list = ref<string[]>(['a', 'b', 'c'])
    return () => {
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test：{count.value}
          <inputDemo></inputDemo>
          {list.value.map(str => (
            <div>{str}</div>
          ))}
          <div>{slots.default ? slots.default() : 'not default content'}</div>
          <div>{slots.title ? slots.title() : ''}</div>
          <input type="text" v-focus v-model={count.value} />
        </div>
      )
    }
  }
})
