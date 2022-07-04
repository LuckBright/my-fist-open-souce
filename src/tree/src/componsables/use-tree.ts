import { computed, ref, Ref, unref } from 'vue'
import { IInnerTreeNode, ITreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }
  // 获取那些展开的节点列表
  const expandedTree = computed(() => {
    let excludedNodes: IInnerTreeNode[] = []
    const result = []

    // 循环列表，找出那些 非 !expanded
    for (const item of innerData.value) {
      // 如果遍历节点在排除列表中，直接跳出本次循环
      if (excludedNodes.includes(item)) {
        continue
      }
      // 当前节点处于折叠状态，它的子节点应该被排除
      if (item.expanded !== true) {
        excludedNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  const getChildren = (node: IInnerTreeNode) => {
    const result = []
    // 找到node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（level 比当前节点大）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      result.push(innerData.value[i])
    }
    return result
  }
  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren
  }
}
