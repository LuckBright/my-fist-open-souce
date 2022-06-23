import { getCurrentInstance, defineComponent, toRefs, computed, createVNode, isVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "small"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "button"
  },
  block: {
    type: Boolean,
    default: false
  }
};
const CLASS_PREFIX = "s";
const GLOBAL_CONFIG_NAME = "_sheep";
const getComponentCls = (componentName) => {
  var _a, _b;
  const instance = getCurrentInstance();
  const prefix = (_b = (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _b : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Button = defineComponent({
  name: "SButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type,
      size,
      disabled,
      loading,
      block
    } = toRefs(props);
    const prefixCls = getComponentCls("btn");
    const classes = computed(() => [prefixCls, `${prefixCls}--${type.value}`, `${prefixCls}--${size.value}`, `${block.value ? "s-btn--block" : ""}`]);
    return () => {
      const {
        tag: Component
      } = props;
      const defaultSlot = slots.default ? slots.default() : "\u6309\u94AE";
      return createVNode(Component, {
        "class": classes.value,
        "disabled": disabled.value
      }, _isSlot(defaultSlot) ? defaultSlot : {
        default: () => [defaultSlot]
      });
    };
  }
});
var ButtonPlugin = {
  install(app) {
    app.component(Button.name, Button);
  }
};
const installPlugins = [ButtonPlugin];
var entry = {
  install(app) {
    installPlugins.forEach((p) => app.use(p));
  }
};
export { Button, entry as default };
