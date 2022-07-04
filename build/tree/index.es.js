import { ref, unref, computed, defineComponent, toRefs, createVNode } from "vue";
function generateInnerTree(tree, level = 0, parentNode = {}) {
  level++;
  return tree.reduce((prev, cur) => {
    const o = { ...cur };
    o.level = level;
    if (level > 1 && parentNode) {
      o.parentId = parentNode.id;
    }
    if (o.children) {
      const children = generateInnerTree(o.children, level, o);
      delete o.children;
      return prev.concat(o, children);
    } else {
      o.isLeaf = true;
      return prev.concat(o);
    }
  }, []);
}
function useTree(node) {
  const innerData = ref(generateInnerTree(unref(node)));
  const toggleNode = (node2) => {
    const cur = innerData.value.find((item) => item.id === node2.id);
    if (cur) {
      cur.expanded = !cur.expanded;
    }
  };
  const expandedTree = computed(() => {
    let excludedNodes = [];
    const result = [];
    for (const item of innerData.value) {
      if (excludedNodes.includes(item)) {
        continue;
      }
      if (item.expanded !== true) {
        excludedNodes = getChildren(item);
      }
      result.push(item);
    }
    return result;
  });
  const getChildren = (node2) => {
    const result = [];
    const startIndex = innerData.value.findIndex((item) => item.id === node2.id);
    for (let i = startIndex + 1; i < innerData.value.length && node2.level < innerData.value[i].level; i++) {
      result.push(innerData.value[i]);
    }
    return result;
  };
  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren
  };
}
const treeProps = {
  data: {
    type: Object,
    required: true
  }
};
var Tree = defineComponent({
  name: "Tree",
  props: treeProps,
  setup(props, {
    slots
  }) {
    const {
      data
    } = toRefs(props);
    const {
      expandedTree,
      toggleNode
    } = useTree(data);
    return () => {
      return createVNode("div", {
        "class": "s-tree"
      }, [expandedTree.value.map((treeNode) => {
        const {
          level,
          isLeaf,
          expanded
        } = treeNode;
        return createVNode("div", {
          "class": "s-tree-node hover:bg-slate-600",
          "style": {
            paddingLeft: `${24 * (level - 1)}px`
          }
        }, [isLeaf ? createVNode("span", {
          "style": {
            display: "inline-block",
            width: "25px"
          }
        }, null) : createVNode("svg", {
          "onClick": () => toggleNode(treeNode),
          "style": {
            width: "18px",
            height: "18px",
            display: "inline-block",
            transform: expanded ? "rotate(90deg)" : ""
          },
          "viewBox": "0 0 1024 1024",
          "xmlns": "http://www.w3.org/2000/svg"
        }, [createVNode("path", {
          "fill": "currentColor",
          "d": "M384 192v640l384-320.064z"
        }, null)]), treeNode.label]);
      })]);
    };
  }
});
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
function installComponent(app, component, options) {
  const componentPrefix = getComponentPrefix(options);
  const registered = app.component(componentPrefix + component.name);
  if (!registered) {
    setGlobalConfig(app, options);
    app.component(componentPrefix + component.name, component);
  }
}
var index = {
  install(app, options) {
    installComponent(app, Tree, options);
  }
};
export { Tree, index as default };
