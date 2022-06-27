import { Command } from 'commander'
import * as inquirer from 'inquirer'
// 创建命令对象
const cmd = new Command()

const CREATE_TYPES = ['component', 'lib-entry']

// 注册一个命令、参数、以及用户传入之后的回调函数
// $ tsnd ./src/index.ts create -- type component
cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type, <type> 表明为必选参数
  .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
  // 注册回调函数
  .action(async args => {
    // 容错，判断用户是否输入 type
    let { type } = args
    // 未输入，提示用户重新输入选项
    if (!type) {
      const result = await inquirer.prompt([
        {
          // 获取输入后的属性名
          name: 'type',
          // 交互方式为列表
          type: 'list',
          // 提示信息
          message: '（必填）请选择创建类型：',
          // 选项列表
          choices: CREATE_TYPES,
          // 默认选项
          default: 0
        }
      ])
      type = result.type
    }
    // 另一个错误，用户输入了信息，但是输入错误，要求用户重新选择
    // if (!CREATE_TYPES.includes(type)) {
    //   //
    // }
  })
// 执行命令行的参数解析才能生效
cmd.parse()
