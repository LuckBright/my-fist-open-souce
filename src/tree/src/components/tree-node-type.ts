import { ExtractPropTypes, PropType } from 'vue'
import { ITreeNode, treeProps } from '../tree-type'

export const treeNodeProps = {
  ...treeProps,
  treeNode: {
    type: Object as PropType<ITreeNode>,
    required: true
  }
} as const

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>
