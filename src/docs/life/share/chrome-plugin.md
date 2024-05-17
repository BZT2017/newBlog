---
title: chrome插件开发
date: 2022-07-19
---

今天给大家分享一下chrome插件的开发
:::tip
在开发插件前，你需要html、css、js的基础知识
:::

## 插件目录结构
myPlugin

|---js

|---

|---
1. manifest.json文件
2. popup.html文件
3. popup.js文件

## manifest文件
manifest文件是用来描述插件的一个json文件
它有几个重要的参数
```json
{
    "name": "我的第一个扩展程序",
    "version": "1.0",
    // 浏览器默认属性，必须为2
    "manifest_version": 2,
    "description": "第一个由我开发的扩展",
    // 打开插件后弹出的页面
    "browser_action": {
      "default_icon": "icon.png",
      "default_popup": "popup.html"
    },
    // 指定浏览器放开的权限列表
    "permissions": [
      "notifications",
      // 调用存储功能
      "storage",
      // 还可以指定对页面拥有操作权限
      "https://*.baidu.com",
      // 所有页面都有权限操作
      "<all_urls>"
    ],
    "options_page":"options.html",
    // 代码注入
    "content_scripts":[
      {
        // 需要像那些页面注入（可以使用正则匹配）
        "matches":["xxxxxx"],
        "js": ["jquery.mini.js","js/content.js"]
      }
    ],

    "background": {
        "script": ["background.js"]
    }
}
```
## content.js文件
```javascript
// 发送消息
chrome.runtime.sendMessage({
  todo: "showPageAction"
})
```


## 安装
打开chrome浏览器，打开扩展程序，开启开发者模式，点击加载已解压的chrome插件，选择你开发好的插件文件夹


## 实战：dino小恐龙游戏插件开发

```javascript
function config(valW=0,valH=0) {
    let canvas = document.querySelector('.runner-canvas')
    let context = canvas.getContext('2d')
    let checkPoint = {
        x: canvas.width * valW,
        y: canvas.height * valH,
    }
    return {
        canvas,
        context,
        checkPoint,
    }
}

function pixelData(checkPoint) {
    let data = config().context.getImageData(checkPoint.x, checkPoint.y, 1, 1)
    return {
        r: data.data[0],
        g: data.data[1],
        b: data.data[2],
    }
}

function isObstruction(pixelData) {
    let {r, g, b} = pixelData
    console.log(r+g+b)
    if (r === 83 && g === 83 && b === 83) {
        return true
    } else {
        return false
    }
}

function isObstructionComing() {
    let check = isObstruction(pixelData(config(0.2,0.8).checkPoint)) || isObstruction(pixelData(config(0.3,0.5).checkPoint))
    return check
}

function keyEvent(type, keyCode) {
    let event = document.createEvent('Events')
    event.initEvent(type, true, true)
    event.keyCode = keyCode
    event.which = keyCode
    document.dispatchEvent(event)
}

function jump() {
    keyEvent('keydown', 32)
}

function check() {
    if (isObstructionComing()) {
        jump()
    }
}

function __main() {
    setInterval(check, 1)
}
__main()
```