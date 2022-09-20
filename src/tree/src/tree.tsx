import { defineComponent, toRefs, provide } from 'vue'
import { useTree } from './componsables/use-tree'
import { IInnerTreeNode, treeProps, TreeProps } from './tree-type'
import STreeNode from './components/tree-node'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps, { context }) {
    const { data, checkable, lineable } = toRefs(props)
    const treeData = useTree(data.value, props, context)
    provide('TREE_UTILS', treeData)

    const TreeNode = (treeNode: IInnerTreeNode) => (
      <STreeNode {...props} treeNode={treeNode}></STreeNode>
    )
    return () => {
      return (
        <div class="s-tree">
          {treeData.expandedTree.value.map(treeNode => TreeNode(treeNode))}
        </div>
      )
    }
  }
})
