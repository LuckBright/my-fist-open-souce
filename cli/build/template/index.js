"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件单元测试文件模板
function genIndexTemplate(name) {
    var compName = (0, utils_1.upperFist)(name);
    return "import { App } from 'vue'\nimport ".concat(compName, " from './src/").concat(name, "'\nimport type { SheepUIOptions } from '../_utils/global-config'\nimport { installComponent } from '../install'\n\n// \u5177\u540D\u5BFC\u51FA\nexport { ").concat(compName, " }\n\n// \u5BFC\u51FA\u63D2\u4EF6\nexport default {\n  install(app: App, options?: SheepUIOptions) {\n    installComponent(app, ").concat(compName, ", options)\n  }\n}\n");
}
exports["default"] = genIndexTemplate;
