---
title: 常见算法使用的API
date: 2024/04/16 11:30:37
---

## 字符类
1. 大小写转换：
    1. charCodeAt()：获取字符的code，判断字符是大写还是小写
    2. toUpperCase(): 将字符转换为大写
    3. toLowerCase(): 将字符转换为小写
2. 分割字符
    1. slice(start(不写默认为0),end):将字符串的start到end之间的字符提取，并返回新字符串
    2. split(string,count):将字符串中的string截断，返回count个片段组成的数组
        :::tip
        也可接受一个对象{[symbol.split]( str,count ){}}
        ::: 
2. 
## 数组类
1. 分割数组
    1. slice(start,end):从start开始，到end结束，截取数组，返回新数组
    2. splice(start,deletCount,item1,item2...):从start开始，删除deleteCount个元素，并用item替换
2. 插入与合并
    - 插入：
        1. push: 从最后插入
        2. unshift: 从最前面插入
3. 功能类：
    1. 排序：
        sort((a,b)=>{})
    2. 过滤：
        filter((item)=>{})
    3. 判断条件
        - some():只要有一个为true，就返回true
        - every():只要有一个为false，就返回false
