import { computed, defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    return () => {
      const defaultSlot = slots.default ? slots.default() : 'tree'
      return <div class="s-tree">{defaultSlot}</div>
    }
  }
})
