---
title: Express框架
date: 2024/06/21 15:16:17
---

## 安装 or 使用
```sh
npm i express
```
```js
// 导入
const express = require('express')
// 创建应用对象
const app = express()

// 启动服务
app.listen(3000,()=>{
  console.log('服务已启动，端口 3000...')
})
```
## 路由
```js
// 根据路由返回相应数据
app.get('/',(req,res)=>{
  res.send('<h1>Home</h1>')
})

app.get('/home',(req,res)=>{
  res.send('<h1>Hello express</h1>')
})

app.post('/login',(req,res)=>{
  res.send('<h1>登录</h1>')
})
// 所有方法，使用通配符*兜底没匹配到路由的情况
app.all('*',(req,res)=>{
  res.send('<h1>404</h1>')
})
```

## 获取请求报文参数
```js
app.get('/request',(req,res)=>{
  // 获取请求路径
  req.path
  // 获取查询参数 
  req.query
  // 获取 ip
  req.ip
  // 获取指定的请求头信息
  req.get('xxx')
})
```

## 获取路由参数
例如，请求 http://<域名>/1.html
```json  audio.json
[
  {
    "name":"杰伦",
    "id":"1",
  },
  {
    "name":"紫琪",
    "id":"2",
  },
]
```

```js
// 注意，引入json时会在最外层加文件名，需要结构一层
const {audio} = require('./audio.json')
// : 是占位符
app.get('/:id',(req,res)=>{
  // 获取 URL 路由参数
  const id = req.params.id

  const res =audio.filter((i)=>i.id==id)
  // 根据路由返回相应数据
  if(res){
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  姓名：${res.name}
</body>
</html>
  `)
  }else{
    res.send('404')
  }
})
```

## 响应设置
```js
app.get('/',(req,res)=>{
  // 响应码
  res.status(500)
  // 响应头
  res.set('aaa','bbb')
  // 响应体
  res.send('你好 Express')
  // 可链式调用
  res.status(500).res.set('aaa','bbb').res.send('你好 Express')

  // 其他响应
  // 重定向
  res.redirect('http://xxxxxxx')
  // 下载
  res.download(__dirname + '文件名.json')
  // 响应json
  res.json({
    name: '杰伦'
  })
  // 响应文件内容
  res.sendFile(__dirname + 'filePath.text')
})
app.listen(3000,()=>{
  console.log('服务已启动，端口 3000...')
})
```

## 中间件
本质是一个回调函数，可以封装公共操作，简化代码

可以访问 ==请求对象== 和 ==响应对象==


### 全局中间件
访问日志：记录每个请求的时间、ip与url
```js
const express = require('express')
const Date = require('Date')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const app = exports()
// 新建全局中间件函数
function recordMiddleware(req,res,next) {
  let currentTime = moment().form('YYYY-MM-DD HH:mm:ss')
  let {ip,url} = req
  // 将日志信息写入指定的文件中
  fs.appendFileSync(path.resovle(__dirname,'./access.log', `${currentTime}  ${url}  ${ip}\r\n`))
  // 调用next
  next()
}
// 注册
app.use(recordMiddleware)
```
### 路由中间件
针对 /admin /setting 的请求，要求 url 携带 code=521 参数，如未携带，提示【暗号错误】
```js
const express = require('express')
const app = exports()
// 新建路由中间件函数
function checkCodeMiddleware(req,res,next) {
  // 如果满足，调用next
  if(req.query.code == '521'){
    next()
  } else {
    res.send('暗号错误')
  }
}
// 配置
app.get('/admin', checkCodeMiddleware, (req,res)=>{
  res.send('后台管理')
})
app.get('/setting', checkCodeMiddleware, (req,res)=>{
  res.send('设置页面')
})
```
### 静态资源中间件
```js
// 设置后可直接在浏览器访问
// 例如获取public/css/index.css文件： http://xxxxxx:3000/css/index.css
// 并且会设置响应头的content-type为对应的类型
app.use(express.static(__dirname + './public'))
```
::: tip
1. ==index.html==文件为==默认==打开的资源
2. 如果静态资源中间件与路由规则==同时匹配==，谁先匹配谁就响应（==代码运行顺序==）
3. ==一般情况==，路由响应动态资源，静态资源中间件响应静态资源
:::