"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件单元测试文件模板
function genTestTemplate(name) {
    var compName = 'S' + (0, utils_1.upperFist)(name);
    return "import { render } from '@testing-library/vue'\nimport ".concat(compName, " from '../src/").concat(name, "'\n\ntest('").concat(name, " init render', () => {\n  const { getByText } = render(").concat(compName, ")\n  getByText('").concat(name, "')\n})\n");
}
exports["default"] = genTestTemplate;
