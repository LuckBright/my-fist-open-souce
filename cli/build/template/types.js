"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件类型声明文件模板
function genTypesTemplate(name) {
    // 属性类型声明和属性类型
    var propsTypeName = (0, utils_1.upperFist)(name) + 'Props';
    var propsName = name + 'Props';
    return "import { ExtractPropTypes, PropType } from 'vue'\n\nexport const ".concat(propsName, " = {} as const\n\nexport type ").concat(propsTypeName, " = ExtractPropTypes<typeof ").concat(propsName, ">\n");
}
exports["default"] = genTypesTemplate;
