---
title: npm与nrm
date: 2022-06-21
---

## 通识

- -S：安装生产环境依赖 ==* 默认选项==
- -D: 安装开发环境依赖
- -g: 全局安装

::: tip
-S与-D都会安装到项目的==node_modiles文件夹==中

-g会安装到npm安装目录（默认安装在：C:\Program Files\nodejs\node_modules）
:::

## nrm
nrm可以管理npm的镜像
### 全局安装
```sh
npm install -g nrm
```
### 查看所有镜像
```sh
nrm ls
```
### 配置镜像
```sh
# registry：别名，url：镜像地址
nrm add <registry> <url>
```
### 切换镜像
```sh
nrm use taobao
```
### 删除镜像
```sh
nrm del <registry>
```
### 测试响应时间
```sh
nrm test <registry>
```

## 常用命令行
### 查看全局安装包的位置
```sh
npm root -g
```

### 查看已安装的依赖包 全局
```sh
npm list -g --depth 0
```

### 安装指定版本依赖包
```sh
npm install npm@8.12.1
```

### 安装淘宝镜像源

```sh
npm config set registry https://registry.npmmirror.com
```

### 升级最新 npm 版本

```sh
npm install -g npm-windows-upgrade
```

### 移除指定依赖包
```sh
npm r <xxxx>
```

### 清除缓存

```sh
npm cache clear --force
```

## 发布npm包
==注意包名不要带test等名词，npm有检测，可能会将包定义为垃圾包==

### 创建与发布
1. 新建文件夹，创建index.js，编写代码，用module.exports暴露
   ```js
   function add(params) {

   }
   module.exports = {
    add
   }
   ```
2. 用==npm init==初始化，填写package.json信息
3. 注册账号 [https://www.npmjs.com/signup](https://www.npmjs.com/signup)
4. 激活账号（一定要激活）
5. 修改为官方镜像（nrm use npm）
6. 命令行执行 ==npm login== 填写相关信息
7. 命令行执行 ==npm publish== 提交包

### 更新包
1. 修改代码
2. 测试代码
3. 修改 ==package.json== 中的版本号
4. 发布更新
   ```sh
   npm publish
   ```
### 删除包
```sh
npm unpubilsh
```
::: tip
删除包需要满足以下条件，[https://docs.npmjs.com/policies/unpublish](https://docs.npmjs.com/policies/unpublish)
- 你是作者
- 发布小于24小时
- 大于24小时后，没有其他包依赖，且每周下载量小于300，且只有一个维护者
:::