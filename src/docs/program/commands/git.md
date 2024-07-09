---
title: git常用命令行
date: 2022-06-21
---

```sh
# 摘选提交的代码
git cherry-pick <你的提交SHA码>


```

### 配置代理
开启vpn提交代码会报错，这时候需要配置代理

```sh
# 配置全局代理
git config --global http.proxy 'http://127.0.0.1:<你的代理端口号>'
git config --global https.proxy 'http://127.0.0.1:<你的代理端口号>'
# 查看全局代理
git config --global --get http.proxy
git config --global --get https.proxy
# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```
::: tip
针对docker容器的代理配置：

在创建(run)容器的时候，加上 --net=host 这个选项，就可以实现容器内外共享网络，然后再在容器内部配置git，就可以实现容器内代理了
:::

