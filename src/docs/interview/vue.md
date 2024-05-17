---
title: vue2面试点
date: 2022-06-21
---

## v-model 的原理是什么？

Vue 的双向数据绑定是由数据劫持结合发布者订阅者实现的。

数据劫持是通过 Object.defineProperty()来劫持对象数据的 setter 和 getter 操作。在数据变动时作你想做的事

- 原理：

  - 通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化->视图更新

  - 在初始化 vue 实例时，遍历 data 这个对象，给每一个键值对利用 Object.definedProperty 对 data 的键值对新增 get 和 set 方法

  - 利用了事件监听 DOM 的机制，让视图去改变数据

## vue 生命周期

- **beforeCreate：** vue 实例的挂载元素 el 和数据对象 data 都是 undefined，还没有初始化。

- **created：** vue 实例的数据对象 data 有了，可以访问里面的数据和方法，未挂载到 DOM，el 还没有

- **beforeMount：** vue 实例的 el 和 data 都初始化了，但是挂载之前为虚拟的 dom 节点

- **mounted：** vue 实例挂载到真实 DOM 上，就可以通过 DOM 获取 DOM 节点

- **beforeUpdate：** 响应式数据更新时调用，发生在虚拟 DOM 打补丁之前，适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器

- **updated：** 虚拟 DOM 重新渲染和打补丁之后调用，组成新的 DOM 已经更新，避免在这个钩子函数中操作数据，防止死循环

- **beforeDestroy：** 实例销毁前调用，实例还可以用，this 能获取到实例，常用于销毁定时器，解绑事件

- **destroyed：** 实例销毁后调用，调用后所有事件监听器会被移除，所有的子实例都会被销毁

## vue 路由的两种模式

- hash：即地址栏 URL 中的#符号（此 hsah 不是密码学里的散列运算）
  - 改变 hash 不会重新加载页面，hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响。
- history：利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法
  - 这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

## v-for 中的 key 有什么作用

## vue 的自定义指令怎么渲染的
