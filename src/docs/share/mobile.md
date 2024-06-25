---
title: 移动端
date: 2022-12-09
---

- 适配方案
  1. 安装依赖
  ```shell
  yarn add lib-flexible
  yarn add postcss-pxtorem
  ```

  2. 在main.js入口文件引入
  ```js
  import 'lib-flexible'

  ```

  3. 新增配置文件 postcss.config.js
  ```js
  module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue ({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75
        },
        propList: ['*']
      }
    }
  }

  ```
  :::warning
    - 可能会有版本不兼容的报错
    - 可能需要安装postcss、postcss-loader解析器
    - less-loader与postcss-loader的版本要相互匹配，版本相差不能太大
  :::

- 引入ui组件

vant组件