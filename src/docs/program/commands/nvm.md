---
title: nvm
date: 2022-06-21
---

## 简介

nvm 是 nodejs 的版本管理工具，解决开发人员需要频繁切换 node 版本的场景

## 常用指令

```sh
# 显示已安装版本
nvm ls
# 显示所有node可安装版本
nvm ls available
# 安装某node版本
nvm install x.x.x
# 卸载某node版本
nvm uninstall x.x.x
# 切换至已安装的node版本
nvm use x.x.x
# 切换国内镜像源
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

## 镜像配置

找到之前安装 nvm 的文件夹目录，打开 settings.txt 文件，输入以下配置

node_mirror: https://npmmirror.com/mirrors/npm/

npm_mirror: https://npmmirror.com/mirrors/node/

或者

```sh
nvm node_mirror https://npmmirror.com/mirrors/npm/
nvm npm_mirror https://npmmirror.com/mirrors/node/
```

## 注意事项

1. npm 命令报警告

```sh
  npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
```

原因：==由于 node 版本（版本过高）与 npm 版本不匹配导致==

<!-- 安装npm-windows-upgrade插件

npm install -g npm-windows-upgrade

终端中执行npm-windows-upgrade 命令，然后指定npm的版本 -->

打开 nodejs 安装位置的文件夹。并打开两个文件 npm.cmd 和 npm

找到那 2 个文件里面的 prefix -g 替换为 prefix --location=global

2. vscode 终端内切换显示乱码

可能是 vscode 未获取管理员权限，在图标上右击 --> 属性 --> 兼容性 --> 勾选以管理员身份运行 --> 应用
