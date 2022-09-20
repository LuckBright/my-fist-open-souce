import { defineComponent, toRefs, inject } from 'vue'
import { treeNodeProps, TreeNodeProps } from './tree-node-type'

// 节点宽度
const NODE_INDENT = 24

// 节点高度
const NODE_HEIGHT = 28

export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { checkable, treeNode, lineable } = toRefs(props)
    const { level, isLeaf, expanded } = treeNode.value

    const { toggleCheckNode, getChildrenExpanded } = inject('TREE_UTILS') as any
    return () => (
      <div
        class="s-tree-node hover:bg-slate-300 relative leading-7 flex items-center"
        style={{
          paddingLeft: `${NODE_INDENT * (level - 1)}px`
        }}
      >
        {/** 连接线 */}
        {!isLeaf && expanded && lineable.value && (
          <span
            class="s-tree-node__vine absolute w-px bg-slate-300"
            style={{
              height: `${
                NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
              }px`,
              left: `${NODE_INDENT * (level - 1) + 8}px`,
              top: `${NODE_HEIGHT}px`
            }}
          ></span>
        )}
        {/** 折叠图标 */}
        {/** 判断当前节点是否为叶子节点 */}
        {isLeaf ? (
          <span style={{ display: 'inline-block', width: '25px' }}></span>
        ) : slots.icon ? (
          slots.icon({ nodeData: treeNode.value, toggleNode })
        ) : (
          <svg
            onClick={() => toggleNode(treeNode.value)}
            style={{
              cursor: 'pointer',
              width: '18px',
              height: '18px',
              display: 'inline-block',
              transform: expanded ? 'rotate(90deg)' : ''
            }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
          </svg>
        )}
        {/** 复选框 */}
        {checkable.value && (
          <input
            type="checkbox"
            style={{ marginRight: '8px' }}
            v-model={treeNode.value.checked}
            onClick={() => toggleCheckNode(treeNode.value)}
          ></input>
        )}
        {/** 标签 */}
        {slots.content ? slots.content(treeNode.value) : treeNode.value.label}
      </div>
    )
  }
})
