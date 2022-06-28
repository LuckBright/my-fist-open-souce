// 创建组件类型声明文件模板
export default function genStyleTemplate (name: string) {
  return `\
.s-${name} {
  /* your component style */
}
`
}