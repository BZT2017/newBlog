---
title: vue3
date: 2023-05-19
---
## setup()与 &lt;script setup>
- &lt;script setup>
  
  推荐在[单文件组件](./vue.html#什么是单文件组件)中使用，即常用的.vue文件

- setup()
  
  通常用于在选项式api代码中集成组合式api代码中使用


## vue3 的生命周期
- onBeforeMount(): 在组件被挂载之前被调用。
- onMounted(): 在组件挂载完成后执行。
- onBeforeUpdate(): 在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
- onUpdated(): 在组件因为响应式状态变更而更新其 DOM 树之后调用。==钩子会在组件的任意 DOM 更新后被调用==
- onBeforeUnmount(): 在组件实例被卸载之前调用。
- onUnmounted(): 在组件实例被卸载之后调用。

## 自定义指令
自定义指令可以直接在 &lt;script setup>中声明，命名规范：==vNameOfDirective==
```js
<script setup>
// 
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

## 组件
### 组件引入
在 &lt;script setup> 中不需要声明，直接引入就可以使用

==强烈建议使用 PascalCase 格式==

```js
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```
### 命名空间组件
可以使用带 . 的组件标签，例如 &lt;Foo.Bar> 来引用嵌套在对象属性中的组件。

这在需要从单个文件中导入多个组件的时候非常有用：
```js {6-8}
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```

## 虚拟 DOM 与 diff 算法

虚拟 dom 就是通过 js 生成 ATS（抽象语法树）节点树，在很多需要转换的场景都会使用，例如 ts 转 js 等

还有一点是操作虚拟 dom 能提高性能

1. 增删改时，重绘与重排减少
2. 使用 ref 查询时，减少了查询范围，提高查询性能

diff 算法分两种情况

> **1. 未定义 key 时：新虚拟 dom 与旧虚拟 dom 从头部开始比较，**

> **2. 定义了 key：**
