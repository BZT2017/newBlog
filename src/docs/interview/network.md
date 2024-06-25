---
title: 计算机网络
date: 2023-06-13
---

## GET与POST请求
### 使用场景
  GET：
  - 地址栏输入url
  - 点击a链接
  - link引入
  - script引入
  - video与Audio引入
  - img引入
  - form标签的method为get
  - ajax中的get
  POST：
  - form标签的method为post
  - ajax中的post
  
### 区别
  1. 作用：get主要用来获取数据，post主要用来提交数据
  2. 参数：get的参数在url后，以键值对的形式；post参数在请求体中
  3. 安全性：get参数会暴露在url中，post相对安全
  4. get请求有大小限制：2K，post没有

## 如何保证同时请求 5 个接口的结果按顺序输出？

使用 promise.all()
