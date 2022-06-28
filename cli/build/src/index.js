"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var create_1 = require("../command/create");
// 创建命令对象
var cmd = new commander_1.Command();
// 注册一个命令、参数、以及用户传入之后的回调函数
cmd
    .command('create')
    .description('创建一个组件模板或配置文件')
    // 添加命令参数 -t | --type, <type> 表明为必选参数
    .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
    // 注册回调函数
    .action(create_1.onCreate);
// 执行命令行的参数解析才能生效
cmd.parse();
