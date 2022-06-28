import { Command } from 'commander'
import { onCreate } from '../command/create'

// 创建命令对象
const cmd = new Command()

// 注册一个命令、参数、以及用户传入之后的回调函数
cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type, <type> 表明为必选参数
  .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
  // 注册回调函数
  .action(onCreate)
// 执行命令行的参数解析才能生效
cmd.parse()
