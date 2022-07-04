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
const COMPONENT_PREFIX = "S";
const setGlobalConfig = (app, options = { classPrefix: CLASS_PREFIX }) => {
  var _a;
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {},
    classPrefix: options.classPrefix
  };
};
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
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
  name: "Button",
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
function installComponent(app, component, options) {
  const componentPrefix = getComponentPrefix(options);
  const registered = app.component(componentPrefix + component.name);
  if (!registered) {
    setGlobalConfig(app, options);
    app.component(componentPrefix + component.name, component);
  }
}
var ButtonPlugin = {
  install(app, options) {
    installComponent(app, Button, options);
  }
};
const installPlugins = [ButtonPlugin];
var entry = {
  install(app) {
    installPlugins.forEach((p) => app.use(p));
  }
};
export { Button, entry as default };
