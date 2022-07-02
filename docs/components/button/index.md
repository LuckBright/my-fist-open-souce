# 按钮 button
:::demo 这是组件引用的demo
  ```vue
    <template>
      <s-button @click="buttonClick"></s-button>
    </template>
    <script setup>
      const buttonClick = () => {
        console.log('执行了')
      }
    </script>
  ```
:::