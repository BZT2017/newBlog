---
title: css常见问题
date: 2023-06-13
---

## 如何构建 BFC

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

## 构建 tab 页签效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
      }
      .nav {
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .nav div {
        width: calc(100% / 3);
        height: 100%;
        text-align: center;
        border: 1px solid #000;
        box-sizing: border-box;
        line-height: 30px;
        cursor: pointer;
      }
      .nav div:hover {
        background-color: red;
        color: #fff;
      }
      .current {
        background-color: red;
        color: #fff;
      }
      .content {
        height: calc(100% - 30px);
        overflow: hidden;
        display: flex;
      }
      .content div {
        width: 100vw;
        display: none;
        flex-shrink: 0;
      }
      .content .show {
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="nav">
      <div class="current">tab1</div>
      <div>tab2</div>
      <div>tab3</div>
    </div>
    <div class="content">
      <div class="show">content1</div>
      <div>content2</div>
      <div>content3</div>
    </div>
    <script>
      let navD = document.getElementsByClassName('nav')[0];
      let navChildList = navD.children;
      let contentD = document.getElementsByClassName('content')[0];
      let contentChildList = contentD.children;
      console.log(navChildList);
      for (let i = 0; i < navChildList.length; i++) {
        navChildList[i].setAttribute('index', i);
        navChildList[i].onclick = (current) => {
          let currentIndex = current.target.getAttribute('index');
          for (let x = 0; x < navChildList.length; x++) {
            if (x == currentIndex) {
              navChildList[x].className = 'current';
              contentChildList[x].className = 'show';
            } else {
              navChildList[x].className = '';
              contentChildList[x].className = '';
            }
          }
        };
      }
    </script>
  </body>
</html>
```
