import { defineComponent, toRefs } from 'vue'
import { useTree } from './componsables/use-tree'
import { treeProps, TreeProps } from './tree-type'
export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)

    // 节点宽度
    const NODE_INDENT = 24

    // 节点高度
    const NODE_HEIGHT = 28

    const { expandedTree, toggleNode, getChildren } = useTree(data)
    return () => {
      return (
        <div class="s-tree">
          {expandedTree.value.map(treeNode => {
            const { level, isLeaf, expanded } = treeNode
            return (
              <div
                class="s-tree-node hover:bg-slate-300 relative leading-7"
                style={{
                  paddingLeft: `${NODE_INDENT * (level - 1)}px`
                }}
              >
                {/** 连接线 */}
                {!isLeaf && expanded && (
                  <span
                    class="s-tree-node__vline absolute w-px bg-slate-300"
                    style={{
                      height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
                      left: `${NODE_INDENT * (level - 1) + 8}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}
                {/** 折叠图标 */}
                {/** 判断当前节点是否为叶子节点 */}
                {isLeaf ? (
                  <span
                    style={{ display: 'inline-block', width: '25px' }}
                  ></span>
                ) : (
                  <svg
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    ></path>
                  </svg>
                )}
                {/** 标签 */}
                {treeNode.label}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
