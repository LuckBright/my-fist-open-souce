"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件核心文件模板
function genCoreTemplate(name) {
    var compName = 'S' + (0, utils_1.upperFist)(name);
    var propsTypeName = (0, utils_1.upperFist)(name) + 'Props';
    var propsName = name + 'Props';
    var className = 's-' + name;
    var propsFileName = name + '-type';
    return "\nimport { computed, defineComponent, toRefs } from 'vue'\nimport { ".concat(propsName, ", ").concat(propsTypeName, " } from './").concat(propsFileName, "'\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propsName, ",\n  setup(props: ").concat(propsTypeName, ", { slots }) {\n\n    return () => {\n      const defaultSlot = slots.default ? slots.default() : '").concat(name, "'\n      return (\n        <div class=\"").concat(className, "\">\n          {defaultSlot}\n        </div>\n      )\n    }\n  }\n})  \n");
}
exports["default"] = genCoreTemplate;
