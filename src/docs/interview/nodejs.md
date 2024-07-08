---
title: NodeJs
date: 2022-06-21
---

## \_\_path 路径模块

```js
const path = require('path');
```

## \_\_fs 文件模块

::: tip
当需要==持久化保存数据==时，应当想到写入数据
:::

```js
const fs = require('fs');
// __dirName:当前文件的文件夹名
const filePath = __dirName + 'xxxx.txt';
const data = '我的文件内容...';
// 写入操作 *filePath没有该文件，则会新建文件
// 异步写入
fs.writeFile(filePath, data, (err) => {
  // 回调函数
});
// 同步写入，会阻塞进程
fs.writeFileSync(filePath, data);
// 流写入，可多次调用，内容会追加，适合大文件
const ws = fs.createWriteStream(filePath, data);
ws.write('第一段');
ws.write('第二段');
ws.write('第三段');
ws.close();

// 读取操作 *file为buffer
// 异步读取
fs.readFile(filePath, (err, data) => {
  // 注意：返回的data是buffer，如果是字符，可以用toString()转义
});
// 同步读取
const data = fs.readFileSync(filePath);
// 流读取，性能开销小，理想状态下读取时只需占用64KB内存空间，一般写入时间比读取时间长
const rs = fs.createReadStream(filePath);
rs.on('daat', (chunk) => {
  // 绑定data事件 *每当读取64KB后执行回调
  console.log(chunk.length); // 64KB
});
rs.on('end', () => {
  // 读取完毕的回调
});
// 重命名与移动文件
// 删除文件

// 文件COPY，使用流读取后交给管道（pipe）使用流写入
//
const ws = fs.createWriteStream(filePath);
const rs = fs.createReadStream(filePath);
rs.on('data', (chunk) => {
  ws.write(chunk);
});
// 文件夹操作
```

## \_\_http 网络模块

```js
// 引入模块
const http = require('http')
// 创建服务对象
const server = http.createServer((request,response)=>{}）
// 监听端口，启动服务
server.listen(9000,()=>{
  console.log('服务已启动...')
})
```

### 响应设置

```js
const http = require('http');
const server = http.createServer((request, response) => {
  // 1. 设置响应码
  response.statusCode = 404;
  // 2. 响应状态的描述
  response.statusMessage = 'xxxxxx';
  // 3. 响应头设置
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.setHeader('myHeader', 'test test test'); // *也可以自定义响应头
  // 4. 响应体设置
  response.write('xxxxx'); // write可多次调用，响应体会拼接
  response.end('xxxx'); // end只能调用一次，多次调用会报错
});
server.listen(9000, () => {
  console.log('服务已启动...');
});
```

## MIME 类型

MIME 类型结构：[ type ]/[ subType ]

例如： text/html text/css image/jpeg image/png application/json

http 服务可以通过设置响应头 Content-Type 来表明 MIME 类型

::: tip
对于未知的资源类型，我们可以选择 ==application/octet-stream== 类型。浏览器遇到该类型会下载。

服务端设置的字符集编码（charset）权重更高，

一般静态资源不需要修改字符集，它会被调用它的==html==文档的 ==&lt;meta>== 标签设置的字符集解析
:::

```js
// 动态设置不同文件的MIME响应头类型
// 1.获取文件后缀名
const mimes = {
  html: 'text/html',
  css: 'text/css',
  jpeg: 'image/jpeg',
  png: 'image/png',
  json: 'application/json',
};
const type = mimes[type];
response.setHeader('content-type', type + ';charset=utf-8');
```

## 响应错误处理

```js
const filePath = __dirName + 'xxxx.txt'
const server = http.createServer((requset,response)=>{
  // 1.假设读取文件错误
  const file = fs.readFile(filePath,(err,data)=>{
    if(err){
      switch (err.code) {
        case 'ENOENT': // 判断错误码（错误码可以在NodeJs的文档中查找，错误类）
          response.statusCode = 404 // 设置响应码,
          response.end('<h1>404 Not Found<h1>')
        case 'EPERM':
          response.statusCode = 403 // 资源无权限
          response.end('<h1>403 Forbidden<h1>')
        default
          response.statusCode = 500
          response.end('<h1>Internal Sever Error<h1>')
      }
    }
  })
  // 2.拦截非get请求
  if(requset.method !== 'get'){
    response.statusCode = 405 // 设置响应码
    response.end('<h1>405 Method Not Allowed<h1>')
  }
})

```

## 模块化

优点：高复用性，高维护性

使用==commonjs==来进行模块化处理

### 导入与导出

```js title="index.js"
// 导入
const {test1,test2} =require(./test.js)

```

```js title="test.js"
function test1(params) {
  return '测试1...';
}

function test2(params) {
  return '测试2...';
}

// 导出方式1-对象
module.exports = {
  test1,
  test2,
};

// 导出方式2-对象
exports.test1 = test1;
exports.test2 = test2;
```

### 导入注意事项

::: tip
require 时的路径建议使用相对路径

js 与 json 文件导入时不用加后缀

如果导入的是==文件夹：==

==首先==，检测文件夹下的==package.json==文件中的<span style='background:#c8e2f5;'><span style='color:#ff9456;'>main</span>属性对应的文件</span>，如果存在则导入，不存在报错

==然后==，如果==main==属性不存在，或者==package.json==不存在，则会尝试导入文件夹下的==index.js==或者==index.json==，还没找到则报错

内置模块无需加路径，直接导入模块名即可
:::

### 模块导入基本流程

1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个自执行函数并执行，通过 ==arguments.callee.toString()== 查看自执行函数
5. 缓存模块的值
6. 返回==module.exports==

```js
// 伪代码
function require(filePath) {
  // 1. 将相对路径转为绝对路径，定位目标文件
  let absolutePath = path.resolve(__dirname, filePath);
  // 2. 缓存检测
  if (caches[absolutePath]) {
    return caches[absolutePath];
  }
  // 3. 读取目标文件代码
  let code = fs.readFileSync(absolutePath).toString;
  // 4. 包裹为一个自执行函数并执行，通过arguments.callee.toString()查看自执行函数
  let module = {};
  let exports = (module.exports = {}(function (
    exports,
    require,
    module,
    __filename,
    __dirname
  ) {
    const test = {
      name: 'test',
    };
    module.exports = test;
  })(exports, require, module, __filename, __dirname));
  // 5. 缓存模块的值
  caches[absolutePath] = module.exports;
  // 6. 返回module.exports
  return module.exports;
}
```
