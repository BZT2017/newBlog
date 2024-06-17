---
title: 华为机考题CD卷
date: 2024/05/15 12:25:29
---

(出现频率:<span style='background:red;'>红色(5 次)</span> > <span style='background:cyan;'>蓝色(4 次)</span> > <span style='background:lime;'>绿色(3 次)</span> > <span style='background:yellow;'>黄色(2 次)</span> )

<!-- ### <font color='red'>停车场车辆统计</font> -->
### <span style='background:red;'>停车场车辆统计</span>
#### 题目描述
特定大小的停车场，数组cars[]表示，其中1表示有车，0表示没车。

车辆大小不一，小车占一个车位（长度1），货车占两个车位（长度2），卡车占三个车位（长度3）。

统计停车场最少可以停多少辆车，返回具体的数目。
#### 输入描述
整型字符串数组cars[]，其中1表示有车，0表示没车，数组长度小于1000。
#### 输出描述
整型数字字符串，表示最少停车数目。
#### 用例

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td>输入</td><td>1,0,1</td></tr><tr><td>输出</td><td>2</td></tr><tr><td>说明</td><td> <p>1个小车占第1个车位</p> <p>第二个车位空</p> <p>1个小车占第3个车位</p> <p>最少有两辆车</p> </td></tr></tbody></table>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:117px;">输入</td><td style="width:381px;">1,1,0,0,1,1,1,0,1</td></tr><tr><td style="width:117px;">输出</td><td style="width:381px;">3</td></tr><tr><td style="width:117px;">说明</td><td style="width:381px;"> <p>1个货车占第1、2个车位</p> <p>第3、4个车位空</p> <p>1个卡车占第5、6、7个车位</p> <p>第8个车位空</p> <p>1个小车占第9个车位</p> <p>最少3辆车</p> </td></tr></tbody></table> 

#### 题目解析
这道题的意思应该是：给定了车位占用情况，如 1,1,0,0,1,1,1,0,1，这种车位占用情况，可能停了6辆车，即每个1都停了一个小车，这是最多的情况，但是现在要求最少可能停几辆车。

解题思路也很简单，先把卡车，即111的停车情况先弄出来，再将火车，即11的停车情况弄出来，最后再弄小车1的情况。

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let inputStr = ref('1,1,0,0,1,1,1,0,1')
function fn(inputStr) {
if (inputStr=='') return alert('请输入！')
  // 将所有，去掉
  let cars = inputStr.replaceAll(',','')
  // 顺序很重要。先将所有111替换成3，再将所有11替换成2，在去除所有0，剩下的就是所有车辆
  cars=cars.replaceAll('111','3').replaceAll('11','2').replaceAll('0','')
  res.value = cars.length
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr' />
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
// const readline = require("readline");

// JavaScript Node ACM模式 控制台输入获取
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
// });
```

:::

### <span style='background:red;'>英文输入法</span>
#### 题目描述
主管期望你来实现英文输入法单词联想功能。

需求如下：

- 依据用户输入的单词前缀，从已输入的英文语句中联想出用户想输入的单词，按字典序输出联想到的单词序列
- 如果联想不到，请输出用户输入的单词前缀。

注意：
1. 英文单词联想时，区分大小写
2. 缩略形式如”don’t”，判定为两个单词，”don”和”t”
3. 输出的单词序列，不能有重复单词，且只能是英文单词，不能有标点符号

#### 输入描述
输入为两行。

首行输入一段由英文单词word和标点符号组成的语句str；

接下来一行为一个英文单词前缀pre。

- 0 < word.length() <= 20
- 0 < str.length <= 10000
- 0 < pre <= 20
#### 输出描述
输出符合要求的单词序列或单词前缀，存在多个时，单词之间以单个空格分割
#### 用例

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">I love you<br> He</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">He</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p>从用户已输入英文语句”I love you”中提炼出“I”、“love”、“you”三个单词，接下来用户输入“He”，</p> <p>从已输入信息中无法联想到任何符合要求的单词，因此输出用户输入的单词前缀。</p> </td></tr></tbody></table>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;"> <p>The furthest distance in the world, Is not between life and death, But when I stand in front of you, Yet you don't know that I love you.</p> <p>f</p> </td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">front furthest</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">从用户已输入英文语句”The furthestdistance in the world, Is not between life and death, But when I stand in frontof you, Yet you dont know that I love you.”中提炼出的单词，符合“f”作为前缀的，有“furthest”和“front”，按字典序排序并在单词间添加空格后输出，结果为“front furthest”。</td></tr></tbody></table>

#### 题目解析
简单的逻辑题，应该是主要考察数组去重，数组字典排序，过滤等知识

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let text = ref("The furthest distance in the world, Is not between life and death, But when I stand in front of you, Yet you don't know that I love you.")
let inputStr = ref('')
function fn(text, inputStr) {
  if (inputStr=='') return alert('请输入！')
  // 分割所有的非字母，去重
  let arr = [...new Set(text.split(/[^a-zA-Z]/))]
  // startsWith：是否以inputStr开头的单词
  // 过滤出目标单词，排序
  res.value = arr.filter((i)=>{
    return i.startsWith(inputStr) 
  }).sort().join(' ')
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='text' /><br>
  <input v-model='inputStr' />
  <button @click='fn(text,inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::


### <span style='background:cyan;'>API集群负载统计</span>
#### 题目描述
某个产品的RESTful API集合部署在服务器集群的多个节点上，近期对客户端访问日志进行了采集，需要统计各个API的访问频次，根据热点信息在服务器节点之间做负载均衡，现在需要实现热点信息统计查询功能。

RESTful API是由多个层级构成，层级之间使用 / 连接，如 /A/B/C/D 这个地址，A属于第一级，B属于第二级，C属于第三级，D属于第四级。

现在负载均衡模块需要知道给定层级上某个名字出现的频次，未出现过用0表示，实现这个功能。
#### 输入描述
第一行为N，表示访问历史日志的条数，0 ＜ N ≤ 100。

接下来N行，每一行为一个RESTful API的URL地址，约束地址中仅包含英文字母和连接符 / ，最大层级为10，每层级字符串最大长度为10。

最后一行为层级L和要查询的关键字。
#### 输出描述
输出给定层级上，关键字出现的频次，使用完全匹配方式（大小写敏感）。
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">5<br> /huawei/computing/no/one<br> /huawei/computing<br> /huawei<br> /huawei/cloud/no/one<br> /huawei/wireless/no/one<br> 2 computing</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">2</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">在第二层级上，computing出现了2次，因此输出2</td></tr></tbody></table>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">5<br> /huawei/computing/no/one<br> /huawei/computing<br> /huawei<br> /huawei/cloud/no/one<br> /huawei/wireless/no/one<br> 4 two</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">0</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">存在第四层级的URL上，没有出现two，因此频次是0</td></tr></tbody></table>
#### 题目解析
本题应该就是一个逻辑模拟题，以及考察集合的应用。

本题的难度主要在于数据结构的定义，我们需要按照下图所示方式，对各层级的关键字进行统计

```js
[
  {},                                                                  // 层级0
  {"huawei": 5},                                                // 层级1
  {"computing": 2，"cloud": 1，"wireless": 1}, // 层级2
  {"no": 3},                                                        // 层级3
  {"one": 3}                                                       // 层级4
 ]
```
外层是一个数组（数组索引就是层级号），数组元素是一个map结构（key是关键字，val是关键字在对应层级出现次数）

我们按照这种数据结构收集各条日志URL的组成关键字，就能快速的找到指定层级（通过数组索引）下的指定关键字（通过map结构的key）的出现频次（map结构的val）

更多细节信息，请看代码注释。

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let num = ref('5')
let inputStr = ref('2 computing')
let apis = ref('/huawei/computing/no/one /huawei/computing /huawei /huawei/cloud/no/one /huawei/wireless/no/one')
function fn(num,inputStr,apis) {
if (inputStr=='') return alert('请输入！')
  let level = inputStr.split(' ')[0]
  let match = inputStr.split(' ')[1]
  let networks = apis.split(' ')
  let map = [{}]
  // 遍历日志
  networks.map((i)=>{
    let array = i.split('/')
    // 遍历层级，第0层永远没有，从1开始
    for (let index = 1; index < array.length; index++) {
      const element = array[index];
      if(!map[index]){ // 如果没有层级，创建层级
        map[index] = {[element]:1}
      }else{
        // 如果有层级，判断该层级之前是否创建
        if(map[index][element]) {
          map[index][element]++ // 有层级，值加1
        } else {
          map[index][element] = 1 // 没有，初始化层级
        }
      }
    }
  })
  res.value = map[level][match] || 0
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='num' /><br>
  <input v-model='apis' /><br>
  <input v-model='inputStr' /><br>
  <button @click='fn(num,inputStr,apis)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>提取字符串中的最长合法简单数学表达式</span>
#### 题目描述
提取字符串中的最长合法简单数学表达式，字符串长度最长的，并计算表达式的值。如果没有，则返回 0 。

简单数学表达式只能包含以下内容：

- 0-9数字，符号+-*

说明：

- 所有数字，计算结果都不超过long
- 如果有多个长度一样的，请返回第一个表达式的结果
- 数学表达式，必须是最长的，合法的
- 操作符不能连续出现，如 +--+1 是不合法的
#### 输入描述
字符串
#### 输出描述
表达式值
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:85px;">输入</td><td style="width:413px;">1-2abcd</td></tr><tr><td style="width:85px;">输出</td><td style="width:413px;">-1</td></tr><tr><td style="width:85px;">说明</td><td style="width:413px;">最长合法简单数学表达式是"1-2"，结果是-1</td></tr></tbody></table>

#### 题目解析
注意！！！本题原题描述中没有 / 除号

因此，本题的合法表达式不需要考虑 '/' 号，也就不用考虑除0，以及除法是整除还是小数除的问题。

另外，本题的 +、-号仅作为运算符号，不作为正负号。因此 "+1"，"-1" 这种不能理解为合法的表达式。

---

本题可以分为两步求解：

1. 找出输入串中最长合法的表达式
2. 计算最长合法表达式的结果

---

关于1的求解，有两种思路：

1. 双指针
2. 正则匹配

其中正则匹配实现起来比较简单，用于匹配合法表达式的正则也不是很难写，对应正则解析如下：

```js
((\d+[+*-])*\d+)
```

---

关于2的求解

<span style='color:red;'>对于JS和Python而言，可以使用内置的eval函数计算字符串表达式的结果。</span>

更常规的思路是利用栈结构：

> 找出最长合法表达式子串后，比如 "1-2*3+10+2"，我们需要注意表达式运算符优先级问题，即先乘，后加减，相同优先级的运算从左到右进行。
> 
> 这里我的思路是将 合法表达式串 进行分块，比如上面表达式可以分为：
> 
> - 1
> - -2*3
> - 10
> - 2
> 
> 我们可以发现：
> 
> - +、-运算符前面的操作数都是独立成块，比如上面表达式的操作数1，10
> -  *运算符前面的操作数则需要组合成块，比如上面表达式的操作数2后面是 * 运算符，因此 2 需要和 3 进行组合。
> 
> 分块之后，我们只需要求各块结果之和即可。
> 
> 具体逻辑实现如下：
> 
> - 首先定义一个栈stack，用于保存各个块的结果；
> - 其次定义一个块的值容器numStr，用于临时缓存分块的值；
> - 最后定义一个块的系数变量numCoef，用于临时缓存分块的系数；
> 
> 扫描合法表达式串，如果当前扫描的字符c是：
> 
> - c 是数字，则直接缓存进块的值容器numStr中
> - c 是 + 号，则打断前一个操作数的收集，此时我们应该将前一个操作数计算结果后加入到stack中，操作数 = int(numStr) * numCoef，同时更新numCoef = 1，因为c是+号，所以后一个操作数的系数为1
> - c 是 - 号，则打断前一个操作数的收集，此时我们应该将前一个操作数计算结果后加入到stack中，操作数 = int(numStr) * numCoef，同时更新numCoef = -1，因为c是-号，所以后一个操作数的系数为-1
> - c 是 * 号，则打断前一个操作数的收集，并且 * 前后的两个操作数需要组合，而 * 前面的操作数记录在stack栈顶中，我们可以取出stack栈顶值 记录到 numCoef 中，即 * 前面的操作数，可以当初 * 后面操作数的系数

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let inputStr = ref('1-2abcd')
function fn(inputStr) {
if (inputStr=='') return alert('请输入！')
  const reg = /((\d+[+*-])*\d+)/g;

    let maxLenExp = "";
    let resVal = ''
    // 找到切割的最长算式
    while ((resVal = reg.exec(inputStr)) != null) {
      const exp = resVal[0];

      if (exp.length > maxLenExp.length) {
        maxLenExp = exp;
      }
    }
    // eval函数直接运算
  res.value = eval(maxLenExp)
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr' /><br>
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>开源项目热度榜单</span>
#### 题目描述
某个开源社区希望将最近热度比较高的开源项目出一个榜单，推荐给社区里面的开发者。

对于每个开源项目，开发者可以进行关注（watch）、收藏（star）、fork、提issue、提交合并请求（MR）等。

数据库里面统计了每个开源项目关注、收藏、fork、issue、MR的数量，开源项目的热度根据这5个维度的加权求和进行排序。

> H = W(watch) x #watch + W(star) x #star + W(fork) x #fork + W(issue) x #issue + W(mr) x #mr

- H 表示热度值
- W(watch)、W(star)、W(fork)、W(issue)、W(mr) 分别表示5个统计维度的权重
- #watch、#star、#fork、#issue、#mr 分别表示5个统计维度的统计值

榜单按照热度值降序排序，对于热度值相等的，按照项目名字转换为全小写字母后的字典序排序（'a','b','c',...,'x','y','z'）。

#### 输入描述
第一行输入为N，表示开源项目的个数，0 ＜ N ＜100。

第二行输入为权重值列表，一共 5 个整型值，分别对应关注、收藏、fork、issue、MR的权重，权重取值 0 < W ≤ 50。

第三行开始接下来的 N 行为开源项目的统计维度，每一行的格式为：

> name nr_watch nr_start nr_fork nr_issue nr_mr

其中 name 为开源项目的名字，由英文字母组成，长度 ≤ 50，其余 5 个整型值分别为该开源项目关注、收藏、fork、issue、MR的数量，数量取值 0 < nr ≤ 1000。
#### 输出描述
按照热度降序，输出开源项目的名字，对于热度值相等的，按照项目名字转换为全小写后的字典序排序（'a' > 'b' > 'c' > ... > 'x' > 'y' > 'z'）。
#### 用例

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">4<br> 8 6 2 8 6<br> camila 66 70 46 158 80<br> victoria 94 76 86 189 211<br> anthony 29 17 83 21 48<br> emily 53 97 1 19 218</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">victoria<br> camila<br> emily<br> anthony</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p>排序热度值计算：</p> <p>camila：66*8 + 70*6 + 46*2 + 158*8 + 80*6 = 2784</p> <p>victoria: 94*8 + 76*6 + 86*2 + 189*8 + 211*6 = 4158</p> <p>anthony: 29*8 + 17*6 + 83*2 + 21*8 + 48*6 = 956</p> <p>emily: 53*8 + 97*6 + 1*2 + 19*8 + 218*6 = 2468</p> </td></tr></tbody></table>
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:88px;">输入</td><td style="width:410px;">5<br> 5 6 6 1 2<br> camila 13 88 46 26 169<br> grace 64 38 87 23 103<br> lucas 91 79 98 154 79<br> leo 29 27 36 43 178<br> ava 29 27 36 43 178</td></tr><tr><td style="width:88px;">输出</td><td style="width:410px;">lucas<br> grace<br> camila<br> ava<br> leo</td></tr><tr><td style="width:88px;">说明</td><td style="width:410px;"> <p>排序热度值计算：</p> <p>camila: 13*5 + 88*6 + 46*6 + 26*1 + 169*2 = 1233</p> <p>grace: 64*5 + 38*6 + 87*6 + 23*1 + 103*2 = 1299</p> <p>lucas: 91*5 + 79*6 + 98*6 + 154*1 + 79*2 = 1829</p> <p>leo: 29*5 + 27*6 + 36*6 + 43*1 + 178*2 = 922</p> <p>ava: 29*5 + 27*6 + 36*6 + 43*1 + 178*2 = 922</p> </td></tr></tbody></table>

#### 题目解析
简单的多条件排序题。

具体逻辑请看代码实现。

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref([])
let num = ref('4')
let weights = ref('8 6 2 8 6')
let inputStr1 = ref('camila 66 70 46 158 80')
let inputStr2 = ref('victoria 94 76 86 189 211')
let inputStr3 = ref('anthony 29 17 83 21 48')
let inputStr4 = ref('emily 53 97 1 19 218')
function fn(num,weights,inputStr1,inputStr2,inputStr3,inputStr4) {
  res.value = []
if (!(num&&weights&&inputStr1&&inputStr2&&inputStr3&&inputStr4)) return alert('请输入！')
  const weightArr = weights.split(' ')
  let inputArr = [inputStr1.split(' '),inputStr2.split(' '),inputStr3.split(' '),inputStr4.split(' ')]
  let map = []
  for (let i = 0; i < inputArr.length; i++) {
    map.push({
      name: inputArr[i][0],
      val: eval(weightArr[0] * inputArr[i][1] + weightArr[1] * inputArr[i][2] + weightArr[2] * inputArr[i][3] + weightArr[3] * inputArr[i][4])
    })
  }
  map.sort((a,b)=>{
    if(a.val == b.val) {
      a.name = a.name.toLowerCase()
      b.name = b.name.toLowerCase()
      return a.name == b.name ? 0 : a.name > b.name? 1 : -1
    }
    return b.val - a.val
  })
  map.forEach(element => {
    res.value.push(element.name)
  });
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='num' /><br>
  <input v-model='weights' /><br>
  <input v-model='inputStr1' /><br>
  <input v-model='inputStr2' /><br>
  <input v-model='inputStr3' /><br>
  <input v-model='inputStr4' /><br>
  <button @click='fn(num,weights,inputStr1,inputStr2,inputStr3,inputStr4)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>虚拟理财游戏</span>
#### 题目描述
在一款虚拟游戏中生活，你必须进行投资以增强在虚拟游戏中的资产以免被淘汰出局。

现有一家Bank，它提供有若干理财产品 m 个，风险及投资回报不同，你有 N（元）进行投资，能接收的总风险值为X。

你要在可接受范围内选择最优的投资方式获得最大回报。

备注：

- 在虚拟游戏中，每项投资风险值相加为总风险值；
- 在虚拟游戏中，最多只能投资2个理财产品；
- 在虚拟游戏中，最小单位为整数，不能拆分为小数；
- 投资额*回报率=投资回报

#### 输入描述
第一行：

- 产品数（取值范围[1,20]）
- 总投资额（整数，取值范围[1, 10000]）
- 可接受的总风险（整数，取值范围[1,200]）

第二行：产品投资回报率序列，输入为整数，取值范围[1,60]

第三行：产品风险值序列，输入为整数，取值范围[1, 100]

第四行：最大投资额度序列，输入为整数，取值范围[1, 10000]
#### 输出描述
每个产品的投资额序列
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">5 100 10<br> 10 20 30 40 50<br> 3 4 5 6 10<br> 20 30 20 40 30</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">0 30 0 40 0</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">投资第二项30个单位，第四项40个单位，总的投资风险为两项相加为4+6=10</td></tr></tbody></table>

#### 题目解析

第一眼看这题有点像二维费用背包，但是本题备注中有一个关键限制：

> 在虚拟游戏中，最多只能投资2个理财产品；

那么本题其实就变成了：m个理财产品中选1个或2个，所选产品风险值之和 ≤ x，投资额之和 ≤ n，并且最终所选产品的投资回报之和最大。

由于 m 的数量级不大，取值范围[1,20]，因此可以考虑暴力破解。
::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref([])
let inputStr1 = ref('5 100 10')
let inputStr2 = ref('10 20 30 40 50')
let inputStr3 = ref('3 4 5 6 10')
let inputStr4 = ref('20 30 20 40 30')
function fn(inputStr1,inputStr2,inputStr3,inputStr4) {
  const [num,TZE,FX] = inputStr1.split(' ').map(Number)
  const hbl = inputStr2.split(' ').map(Number)
  const fx = inputStr3.split(' ').map(Number)
  const tze = inputStr4.split(' ').map(Number)
  let max_hb = 0
  if (inputStr1==''||inputStr2==''||inputStr3==''||inputStr4=='') return alert('请输入！')
  for (let index = 0; index < num; index++) {
    // 如果单个产品风险小于最大风险
    if(fx[index]<FX){
      let one_hb = Math.min(tze[index], TZE) * hbl[index]
      if(one_hb>max_hb){
        max_hb = one_hb
        res.value = new Array(num).fill(0)
        res.value[index] = tze[index]
      }
      // 判断两个产品的情况（不考虑相同产品）
      for (let i = index+1; i < num; i++) {
        // 如果两个产品风险小于最大风险
        if(fx[index]+fx[i]<=FX){
          // 回报率高的投资额先拉满，剩下的投资额再分给回报率低的
          let two_hb = Math.min(tze[i], TZE) * hbl[i] + (TZE - Math.min(tze[i], TZE)) * hbl[index]
          if(two_hb>max_hb){
            max_hb = two_hb
            res.value = new Array(num).fill(0)
            res.value[index] = tze[index]
            res.value[i] = tze[i]
          }
        }
      }
    }
  }
  res.value = res.value.join(' ')
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr1' /><br>
  <input v-model='inputStr2' /><br>
  <input v-model='inputStr3' /><br>
  <input v-model='inputStr4' /><br>
  <button @click='fn(inputStr1,inputStr2,inputStr3,inputStr4)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>掌握的单词个数</span>
#### 题目描述
有一个字符串数组 words 和一个字符串 chars。

假如可以用 chars 中的字母拼写出 words 中的某个“单词”（字符串），那么我们就认为你掌握了这个单词。

words 的字符仅由 a-z 英文小写字母组成，例如 "abc"

chars 由 a-z 英文小写字母和 "?" 组成。其中英文 "?" 表示万能字符，能够在拼写时当作任意一个英文字母。例如："?" 可以当作 "a" 等字母。

注意：每次拼写时，chars 中的每个字母和万能字符都只能使用一次。

输出词汇表 words 中你掌握的所有单词的个数。没有掌握任何单词，则输出0。
#### 输入描述
第一行：输入数组 words 的个数，记作N。

第二行 ~ 第N+1行：依次输入数组words的每个字符串元素

第N+2行：输入字符串chars
#### 输出描述
输出一个整数，表示词汇表 words 中你掌握的单词个数

- 1 ≤ words.length ≤ 100
- 1 ≤ words[i].length, chars.length ≤ 100
- 所有字符串中都仅包含小写英文字母、英文问号

#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">4<br> cat<br> bt<br> hat<br> tree<br> atach??</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">3</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">可以拼写字符串"cat"、"bt"和"hat"</td></tr></tbody></table>
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">3<br> hello<br> world<br> cloud<br> welldonehohneyr</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">2</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">可以拼写字符串"hello"和"world"</td></tr></tbody></table>
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">3<br> apple<br> car<br> window<br> welldoneapplec?</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">2</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">可以拼写字符串"apple"和“car”</td></tr></tbody></table>

#### 题目解析
本题可以分别统计出chars和word中各字符的数量，然后遍历word每个字符c，比较word和chars中统计的c字符数量，如果word的c数量超过了chars的c数量，那么就就将超出数量计入diff中。

最终比较diff和chars中万能字符‘?’的数量，如果chars中万能字符‘?’的数量 >= diff，那么说明chars可以使用万能字符补足不同部分，即可以学会word。


::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref(0)
let inputStr1 = ref('cat bt hat tree')
let inputStr2 = ref('atach??')
function fn(inputStr1,inputStr2) {
  res.value = 0
  if (inputStr1==''||inputStr2=='') return alert('请输入！')
  let arr1 = inputStr1.split(' ')
  let strArr = inputStr2.split('')
  let arr2 = []
  let wnzf = 0
  // 分离chars中的万能字符
  strArr.forEach(element => {
    //记录万能字符的个数
    if(element=='?'){
      wnzf++
    }else{
      //保存匹配字符
      arr2.push(element)
    }
  })
  arr1.forEach(element => {
    // 深拷贝
    let fb_arr = arr2.join('').split('')
    let strs = element.split('')
    // 未匹配上的字符个数
    let noStr = strs.length
    // 逐个比较
    strs.forEach((fi,f_index) => {
      for (let c_index = 0; c_index < fb_arr.length; c_index++) {
        const ci = fb_arr[c_index];
        // 如果相等，去除匹配字符中的字符
        if(fi==ci){
          fb_arr.splice(c_index,1)
          // 未匹配的字符数减一
          noStr--
          break
        }
      }
    });
    // 未匹配的字符数是否小于万能字符
    if(noStr<=wnzf) res.value++
  });
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr1' /><br>
  <input v-model='inputStr2' /><br>
  <button @click='fn(inputStr1,inputStr2)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>寻找身高相近的小朋友</span>
#### 题目描述
小明今年升学到了小学1年级来到新班级后，发现其他小朋友身高参差不齐，然后就想基于各小朋友和自己的身高差，对他们进行排序，请帮他实现排序。
#### 输入描述
第一行为正整数 h和n，0<h<200 为小明的身高，0<n<50 为新班级其他小朋友个数。

第二行为n个正整数，h1 ~ hn分别是其他小朋友的身高，取值范围0<hi<200，且n个正整数各不相同。
#### 输出描述
输出排序结果，各正整数以空格分割，

和小明身高差绝对值最小的小朋友排在前面，

和小明身高差绝对值最大的小朋友排在后面，

如果两个小朋友和小明身高差一样，则个子较小的小朋友排在前面。
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">100 10<br> 95 96 97 98 99 101 102 103 104 105</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">99 101 98 102 97 103 96 104 95 105</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">小明身高100，班级学生10个，身高分别为95 96 97 98 99 101 102 103 104 105，按身高差排序后结果为：99 101 98 102 97 103 96 104 95 105。</td></tr></tbody></table>

#### 题目解析
考察多条件排序。

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let inputStr1 = ref('100 10')
let inputStr2 = ref('95 96 97 98 99 101 102 103 104 105')
function fn(inputStr1,inputStr2) {
  if (inputStr1==''||inputStr2=='') return alert('请输入！')
  let [xm,num] = inputStr1.split(' ').map(Number)
  let arr = inputStr2.split(' ').map(Number)
  arr.sort((a,b)=>{
    return Math.abs(a-xm) - Math.abs(b-xm)
  })
  res.value = arr.join(' ')
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr1' /><br>
  <input v-model='inputStr2' /><br>
  <button @click='fn(inputStr1,inputStr2)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### <span style='background:cyan;'>精准核酸检测</span>
#### 题目描述
为了达到新冠疫情精准防控的需要，为了避免全员核酸检测带来的浪费，需要精准圈定可能被感染的人群。

现在根据传染病流调以及大数据分析，得到了每个人之间在时间、空间上是否存在轨迹交叉。

现在给定一组确诊人员编号（X1,X2,X3,...,Xn），在所有人当中，找出哪些人需要进行核酸检测，输出需要进行核酸检测的人数。（注意：确诊病例自身不需要再做核酸检测）

需要进行核酸检测的人，是病毒传播链条上的所有人员，即有可能通过确诊病例所能传播到的所有人。

例如：A是确诊病例，A和B有接触、B和C有接触、C和D有接触、D和E有接触，那么B\C\D\E都是需要进行核酸检测的人。
#### 输入描述
第一行为总人数 N

第二行为确认病例人员编号（确诊病例人员数量 < N），用逗号分割

第三行开始，为一个 N * N 的矩阵，表示每个人员之间是否有接触，0表示没有接触，1表示有接触。
#### 输出描述
整数：需要做核酸检测的人数

- 人员编号从0开始
- 0 < N < 100

#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">5<br> 1,2<br> 1,1,0,1,0<br> 1,1,0,0,0<br> 0,0,1,0,1<br> 1,0,0,1,0<br> 0,0,1,0,1</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">3</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p>编号为1、2号的人员，为确诊病例。</p> <p>1号和0号有接触，0号和3号有接触。</p> <p>2号和4号有接触。</p> <p>所以，需要做核酸检测的人是0号、3号、4号，总计3人需要进行核酸检测。</p> </td></tr></tbody></table>

#### 题目解析
即将有接触的人进行合并操作，纳入到同一个连通分量中。比如matrix[i]][j] == 1，即 i 和 j 就处于同一个连通分量中，需要进行合并。

另外，本题的接触关系矩阵matrix是沿对角线对称的，因此只需要遍历对角线一边即可。

当遍历完所有接触关系后，就可以求解每一个连通分量中的节点数，即每个接触群体的人数，求解原理如下：

> 并查集底层的fa数组，fa数组索引代表每个节点，fa数组元素代表对应索引的节点的根节点，而同一个连通分量中的节点的根都是相同的，因此，我们需要对fa每一个数组索引找一下根，这里可以使用并查集的find操作（递归实现），最后统计同一个根下的节点数量，即为同一个接触群体的人数。

当每个接触群体人数求解出来后，我们只需要统计”确诊病例人员编号“对应的根（连通分量）下的人数即可。

最后的统计的总人数需要减去确诊病例的数量，因为题目说：

> 确诊病例自身不需要再做核酸检测

本题需要注意的是，有可能多个确诊病人在同一个连通分量重，此时需要注意避免重复统计。

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let inputStr = ref('')
function fn(inputStr) {
  if (inputStr=='') return alert('请输入！')

}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr' /><br>
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### 最长子字符串的长度（一）
#### 题目描述
给你一个字符串 s，首尾相连成一个环形，请你在环中找出 'o' 字符出现了偶数次最长子字符串的长度。
#### 输入描述
输入是一个小写字母组成的字符串
#### 输出描述
输出是一个整数
#### 备注
- 1 ≤ s.length ≤ 500000
- s 只包含小写英文字母
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">alolobo</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">6</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">最长子字符串之一是 &#34;alolob&#34;&#xff0c;它包含2个&#39;o&#39;</td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">looxdolx</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">7</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">最长子字符串&#34;oxdolxl&#34;&#xff0c;由于是首尾连接一起的&#xff0c;所以最后一个&#39;x&#39;和开头的&#39;l&#39;是连接在一起的&#xff0c;此字符串包含2个&#39;o&#39;</td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">bcbcbc</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">6</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">这个示例中&#xff0c;字符串&#34;bcbcbc&#34;本身就是最长的&#xff0c;因为&#39;o&#39;都出现了0次。</td></tr></tbody></table> 

#### 题目解析
本题很简单，只要统计出输入字符串s中'o'的个数：
- 如果 'o' 为偶数个，则s本身就是一个含有偶数个'o'的子字符串，结果输出s.length
- 如果 'o' 为奇数个，由于s是环形的，因此只要任选环中任意一个'o'解开（删除），剩下的就是含有偶数个 'o' 的子串，该子串长度为 s.length - 1

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

let res = ref('')
let inputStr = ref('alolobo')
function fn(inputStr) {
if (inputStr=='') return alert('请输入！')
  // inputStr中'o'的个数
  let zeroCount = 0;

  for (let c of inputStr) {
    if (c == "o") zeroCount++;
  }
  if (zeroCount % 2 == 0) {
    res.value= inputStr.length
  } else {
    res.value= inputStr.length - 1
  }
}
// TS输入输出
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();

</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model="inputStr" />
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>

```

:::

### 最长的指定瑕疵度的元音子串
#### 题目描述
开头和结尾都是元音字母（aeiouAEIOU）的字符串为元音字符串，其中混杂的非元音字母数量为其瑕疵度。比如:
1. “a” 、 “aa”是元音字符串，其瑕疵度都为0
2. “aiur”不是元音字符串（结尾不是元音字符）
3. “abira”是元音字符串，其瑕疵度为2

给定一个字符串，请找出指定瑕疵度的最长元音字符子串，并输出其长度，如果找不到满足条件的元音字符子串，输出0。

子串：字符串中任意个连续的字符组成的子序列称为该字符串的子串。
#### 输入描述
首行输入是一个整数，表示预期的瑕疵度flaw，取值范围[0, 65535]。

接下来一行是一个仅由字符a-z和A-Z组成的字符串，字符串长度(0, 65535]。
#### 输出描述
输出为一个整数，代表满足条件的元音字符子串的长度。
#### 用例

<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">0<br /> asdbuiodevauufgh</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">3</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">无</td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">2<br /> aeueo</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">0</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">无</td></tr></tbody></table> 


#### 题目解析


<img alt="" height="799" src="https://img-blog.csdnimg.cn/75a9cd9bc529429498db58f1cc4ef433.png" width="1200" />
瑕疵度计算规则如上图注解所示。

当两指针之间划定的子串的瑕疵度diff  大于  指定的瑕疵度flaw时，则左指针 l++

当两指针之间划定的子串的瑕疵度diff  小于  指定的瑕疵度flaw时，则右指针 r++

当两指针之间划定的子串的瑕疵度diff  等于  指定的瑕疵度flaw时，则记录当前子串长度，并r++

按以上逻辑，直到r指针移动到idxs数组的尾部。

![](https://cdn.staticaly.com/gh/BZT2017/oss-img@main/eb378b5515874c268c7f1fe75ad03674.png)

![](https://cdn.staticaly.com/gh/BZT2017/oss-img@main/75a9cd9bc529429498db58f1cc4ef433.png)


::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let inputStr = ref('0 asdbuiodevauufgh')
function fn(inputStr) {
  if (inputStr=='') return alert('请输入！') 
  let inputStrs = inputStr.split(' ')
  res.value = getResult(inputStrs[0],inputStrs[1])

  function getResult(flaw,str) {
    const set = new Set("aeiouAEIOU");

    const idxs = [];
    for (let i = 0; i < str.length; i++) {
      if (set.has(str[i])) idxs.push(i);
    }

    let ans = 0;
    let n = idxs.length;

    let l = 0;
    let r = 0;

    while (r < n) {
      // 瑕疵度计算
      let diff = idxs[r] - idxs[l] - (r - l);

      if (diff > flaw) {
        l++;
      } else if (diff < flaw) {
        r++;
      } else {
        ans = Math.max(ans, idxs[r] - idxs[l] + 1);
        r++;
      }
    }
    return ans;
  }
}
// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr' />
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>

```

:::

### 最富裕的小家庭
#### 题目描述
在一颗树中，每个节点代表一个家庭成员，节点的数字表示其个人的财富值，一个节点及其直接相连的子节点被定义为一个小家庭。

现给你一颗树，请计算出最富裕的小家庭的财富和。
#### 输入描述
第一行为一个数 N，表示成员总数，成员编号 1~N。1 ≤ N ≤ 1000

第二行为 N 个空格分隔的数，表示编号 1~N 的成员的财富值。0 ≤ 财富值 ≤ 1000000

接下来 N -1 行，每行两个空格分隔的整数（N1, N2），表示 N1 是 N2 的父节点。
#### 输出描述
最富裕的小家庭的财富和
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">4<br /> 100 200 300 500<br /> 1 2<br /> 1 3<br /> 2 4</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">700</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p><img alt="" height="223" src="https://img-blog.csdnimg.cn/d42fa1105adb4ffa9d61f8504727b4a5.png" width="294" /></p> <p>成员1&#xff0c;2&#xff0c;3 组成的小家庭财富值为600</p> <p>成员2&#xff0c;4 组成的小家庭财富值为700</p> </td></tr></tbody></table> 

#### 题目解析
简单的逻辑分析题。

由于题目输入会给出 树形结构 中，父节点->子节点 的信息，比如下面红色部分

>4
>
>100 200 300 500
><font color='red'>1 2<br></font>
><font color='red'>1 3<br></font>
><font color='red'>2 4</font>

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let n = ref('4') // 成员总数
let inputStr = ref('100 200 300 500') // 成员的财富值
let nodeInfo1 = ref('1 2') // 节点信息
let nodeInfo2 = ref('1 3') // 节点信息
let nodeInfo3 = ref('2 4') // 节点信息
function fn(n,inputStr,nodeInfo1,nodeInfo2,nodeInfo3) {
if (inputStr=='') return alert('请输入！')
  // 建立节点与财富值的映射，将0推到最前端，使节点（节点从1开始）与下标对应起来
  let nodes = inputStr.split(' ').map(Number)
  nodes.unshift(0)
  // 初始化父级与财富值映射，方便后续进行计算
  let fa_m = [...nodes]
  // 建立节点信息的数组
  let arr = [nodeInfo1.split(' '),nodeInfo2.split(' '),nodeInfo3.split(' ')]

  for (let index = 0; index < (n-1); index++) {
    // 将子节点的财富与父节点相加
    fa_m[arr[index][0]] += nodes[arr[index][1]]
  }
  res.value=Math.max(...fa_m)
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='n' /><br>
  <input v-model='inputStr' /><br>
  <input v-model='nodeInfo1' /><br>
  <input v-model='nodeInfo2' /><br>
  <input v-model='nodeInfo3' /><br>
  <button @click='fn(n,inputStr,nodeInfo1,nodeInfo2,nodeInfo3)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::

### 最多购买宝石数目
#### 题目描述
橱窗里有一排宝石，不同的宝石对应不同的价格，宝石的价格标记为 gems[i]

0 ≤ i < n
n = gems.length
宝石可同时出售0个或多个，如果同时出售多个，则要求出售的宝石编号连续；

例如客户最大购买宝石个数为m，购买的宝石编号必须为：gems[i]，gems[i+1]，...，gems[i+m-1]

0 ≤ i < n
m ≤ n
假设你当前拥有总面值为 value 的钱，请问最多能购买到多少个宝石，如无法购买宝石，则返回0。
#### 输入描述
第一行输入n，参数类型为int，取值范围：[0,10^6]，表示橱窗中宝石的总数量。

之后 n 行分别表示从第0个到第n-1个宝石的价格，即 gems[0] 到 gems[n-1] 的价格，类型为int，取值范围：(0,1000]。

之后一行输入v，类型为int，取值范围：[0,10^9]，表示你拥有的钱。
#### 输出描述
输出int类型的返回值，表示最大可购买的宝石数量。
#### 用例
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">7<br /> 8<br /> 4<br /> 6<br /> 3<br /> 1<br /> 6<br /> 7<br /> 10</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">3</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;"> <p>gems &#61; [8,4,6,3,1,6,7], value &#61; 10</p> <p>最多购买的宝石为gems[2]至gems[4]或者gems[3]至gems[5]</p> </td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">0<br /> 1</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">0</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">gems &#61; [], value &#61; 1<br /> 因为没有宝石&#xff0c;所以返回0</td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:84px;">输入</td><td style="width:414px;">9<br /> 6<br /> 1<br /> 3<br /> 1<br /> 8<br /> 9<br /> 3<br /> 2<br /> 4<br /> 15</td></tr><tr><td style="width:84px;">输出</td><td style="width:414px;">4</td></tr><tr><td style="width:84px;">说明</td><td style="width:414px;">gems &#61; [6, 1, 3, 1, 8, 9, 3, 2, 4], value &#61; 15<br /> 最多购买的宝石为gems[0]至gems[3]</td></tr></tbody></table> 
<table border="1" cellpadding="1" cellspacing="1" style="width:500px;"><tbody><tr><td style="width:86px;">输入</td><td style="width:412px;">9<br /> 1<br /> 1<br /> 1<br /> 1<br /> 1<br /> 1<br /> 1<br /> 1<br /> 1<br /> 10</td></tr><tr><td style="width:86px;">输出</td><td style="width:412px;">9</td></tr><tr><td style="width:86px;">说明</td><td style="width:412px;">gems &#61; [1, 1, 1, 1, 1, 1, 1, 1, 1], value &#61; 10<br /> 最多购买的宝石为gems[0]至gems[8]&#xff0c;即全部购买</td></tr></tbody></table> 

#### 题目解析

::: sandpack#vue 代码编辑器

@file /src/App.vue

```vue
<script setup>
import { ref } from 'vue';

let res = ref('')
let num = ref('7')
let inputStr = ref('8 4 6 3 1 6 7')
let val = ref('10')
function fn(inputStr) {
if (inputStr=='') return alert('请输入！')
  let arr = inputStr.split(' ')
  let l = 0
  let r = 0
  let resArr = []
  for (let index = 0; index < num-1; index++) {
    if(arr[l]+arr[r]>num) {
      l++,r++
    }
    r++
  }
}
</script>

<template>
  <p>多次输入用空格隔开</p>
  <input v-model='inputStr' />
  <button @click='fn(inputStr)' >点击运行</button>
  <h1>代码运行结果：{{ res }}</h1>
</template>


// TS输入输出
// const rl = require('readline').createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const s = await readline();
// })();
```

:::