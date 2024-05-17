---
title: 数据结构 & 算法
date: 2022-06-21
---

## 逻辑结构
- 线性结构：是一个有序数据元素的集合。 其中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的。

常用的线性结构有: 栈，队列，链表，线性表。

- 非线性结构：各个数据元素不再保持在一个线性序列中，每个数据元素可能与零个或者多个其他数据元素发生联系。

常见的非线性结构有 二维数组，树等。

## 存储结构
逻辑结构指的是数据间的关系，而存储结构是逻辑结构用计算机语言的实现。常见的存储结构有顺序存储、链式存储、索引存储以及散列存储。

## 常见算法使用的API
### 字符大小写转换类：
1. charCodeAt()：获取字符的code，判断字符是大写还是小写
2. 
### 数组类


## 冒泡算法

## 入门题

### (1) 输入处理（重要）：HJ5.进制转换

写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

输入描述：
输入一个十六进制的数值字符串。

输出描述：
输出该数值的十进制字符串。不同组的测试用例用\n 隔开。

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const tokens = line.split(' ');
  console.log(parseInt(line));
});
```

### (2) 排列组合：NC61.两数之和

给出一个整数数组，请在数组中找出两个加起来等于目标值的数，你给出的函数 twoSum 需要返回这两个数字的下标（index1，index2），需要满足 index1 小于 index2
注意：下标是从 1 开始的,假设给出的数组中只存在唯一解

给出的数组为 {2, 7, 11, 15},目标值为 9
输出 index1=1, index2=2

```javascript
function twoSum(numbers, target) {
  const map = {};
  for (let index = 0; index < numbers.length; index++) {
    let dif = target - numbers[index];
    if (map[dif] !== undefined) {
      return [map[dif] + 1, index + 1];
    }
    map[numbers[index]] = index;
}
// 自测通过：运行时间60ms占用内存7816KB

function twoSum(numbers, target) {
  const map = {};
  let input = [];
  numbers.some((value, index) => {
    let dif = target - numbers[index];
    if (map[dif] !== undefined) {
      input = [map[dif] + 1, index + 1];
      return true;
    }
    map[numbers[index]] = index;
  });
  return input;
}
// 自测通过：运行时间52ms占用内存7652KB
```

### (3) 快速排序：HJ3.明明的随机数

明明生成了 N 个 1 到 500 之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。

输入描述：
第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。
输出描述：
输出多行，表示输入数据处理后的结果

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
let cont = 0;
let num = 0;
rl.on('line', function (line) {
  const tokens = line.split(' ');
  if (cont <= 0) {
    num = line;
  } else {
    arr.push(line);
  }
  if (cont == num) {
    let set = new Set(arr);
    let input = [];
    set.forEach((v) => {
      input.push(v);
    });
    input.sort((a, b) => a - b);
    input.forEach((v) => {
      console.log(v);
    });
  }
  cont++;
});
```

### (4) 哈希表：HJ10.字符个数统计

编写一个函数，计算字符串中含有的不同字符的个数。字符在 ASCII 码范围内( 0~127 ，包括 0 和 127 )，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次

例如，对于字符串 abaca 而言，有 a、b、c 三种不同的字符，因此输出 3 。

输入描述：
输入一行没有空格的字符串。

输出描述：
输出 输入字符串 中范围在(0~127，包括 0 和 127)字符的种数。

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const tokens = [];
  for (let a = 0; a < line.length; a++) {
    tokens.push(line.charAt(a));
  }

  let set = new Set(tokens);
  let arr = [];
  set.forEach((v) => {
    arr.push(v);
  });
  console.log(arr.length);
});
```

### (5) 动态规划：NC68.跳台阶

**动态规划：用上一步的结果来快速计算，得到下一步的结果**

一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

输入：2

返回值：2

说明：
青蛙要跳上两级台阶有两种跳法，分别是：先跳一级，再跳一级或者直接跳两级。因此答案为 2

```javascript
export function jumpFloor(number: number): number {
  let arr = [1, 2]; // 先算出第一阶与第二阶
  for (let i = 2; i < number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[number - 1];
}
```

## 字符串操作（6 题）

### (1) HJ17.坐标移动

开发一个坐标计算工具， A 表示向左移动，D 表示向右移动，W 表示向上移动，S 表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

输入：

合法坐标为 A(或者 D 或者 W 或者 S) + 数字（两位以内）

坐标之间以;分隔。

非法坐标点需要进行丢弃。如 AA10; A1A; $%$; YAD; 等。

下面是一个简单的例子 如：

A10;S20;W10;D30;X;A1A;B10A11;;A10;

处理过程：

起点（0,0）

\+ A10 = （-10,0）

\+ S20 = (-10,-20)

\+ W10 = (-10,-10)

\+ D30 = (20,-10)

\+ x = 无效

\+ A1A = 无效

\+ B10A11 = 无效

\+ 一个空 不影响

\+ A10 = (10,-10)

结果 （10， -10）

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const tokens = line.split(';');
  let map = {
    A: [0, '-'],
    D: [0, ''],
    W: [1, ''],
    S: [1, '-'],
  };
  let arr = [0, 0];
  tokens.forEach((e) => {
    if (e.length >= 2 && e.length <= 3) {
      let mapV = map[e.slice(0, 1)];
      if (mapV === undefined) return;
      let v = e.slice(1, e.length);
      if (!isNaN(Number(v))) {
        arr[mapV[0]] = Number(mapV[1] + v) + arr[mapV[0]];
      }
    }
  });
  console.log(arr.toString());
});
```

### (2) HJ20.密码验证合格程序

密码要求:

1.长度超过 8 位

2.包括大小写字母.数字.其它符号,以上四种至少三种

3.不能有长度大于 2 的包含公共元素的子串重复 （注：其他符号不含空格或换行）

输入描述：

一组字符串。

输出描述：

如果符合要求输出：OK，否则输出 NG

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  if (line.length <= 8) return console.log('NG');
  let a = /[0-9]/.test(line) ? 1 : 0;
  let b = /[A-Z]/.test(line) ? 1 : 0;
  let c = /[a-z]/.test(line) ? 1 : 0;
  let d = /[^0-9A-z]/.test(line) ? 1 : 0;
  if (a + b + c + d < 3) {
    return console.log('NG');
  }
  let arr = [];
  for (let i = 2; i < line.length; i++) {
    if (arr[line[i] + line[i - 1] + line[i - 2]]) {
      return console.log('NG');
    } else {
      arr[line[i] + line[i - 1] + line[i - 2]] =
        line[i] + line[i - 1] + line[i - 2];
    }
  }
  console.log('OK');
});
```

### (3) \*HJ23.删除字符串中出现次数最少的字符

实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。

输入描述：
字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于 20 个字节。

输出描述：
删除字符串中出现次数最少的字符后的字符串。

输入：aabcddd

输出：aaddd

```javascript
let map = {};
for (let i = 0; i < line.length; i++) {
  if (map[line.charAt(i)]) {
    map[line.charAt(i)] = (map[line.charAt(i)] || 0) + 1;
  } else {
    map[line.charAt(i)] = 1;
  }
}
let min = Math.min(...Object.values(map));
let res = line;
for (key in map) {
  if (map[key] === min) {
    res = res.split(key).join('');
  }
}
console.log(res);
```

### (4) \*HJ33.整数与 IP 地址间的转换

原理：ip 地址的每段可以看成是一个 0-255 的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
一个长整数。
举例：一个 ip 地址为 10.0.3.193

每段数字 相对应的二进制数

10 00001010

0 00000000

3 00000011

193 11000001

组合起来即为：00001010 00000000 00000011 11000001,转换为 10 进制数就是：167773121，即该 IP 地址转换后的数字就是它了。

数据范围：保证输入的是合法的 IP 序列

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split('.');
    let maxl = Number(255).toString(2).length;
    if (tokens.length > 1) {
      let num = '';
      tokens.forEach((v) => {
        let value = Number(v).toString(2);
        if (maxl - value.length > 0) {
          value = value.padStart(maxl, '0');
        }
        num = num + value;
      });
      console.log(parseInt(num, 2));
    } else {
      let x = Number(line).toString(2);
      if (maxl * 4 - x.length > 0) {
        x = x.padStart(maxl * 4, '0');
      }
      let arr = [];
      for (let i = 0; i < 4; i++) {
        let s = x.slice((x.length / 4) * i, (x.length / 4) * (i + 1));
        arr.push(parseInt(s, 2));
      }
      console.log(arr.join('.'));
    }
  }
})();
```

### (5) HJ101.输入整型数组和排序标识

输入整型数组和排序标识，对其元素按照升序或降序进行排序

输入描述：

第一行输入数组元素个数

第二行输入待排序的数组，每个数用空格隔开

第三行输入一个整数 0 或 1。0 代表升序排序，1 代表降序排序

输出描述：

输出排好序的数字

示例 1

输入：

8

1 2 4 9 3 55 64 25

0

输出：

1 2 3 4 9 25 55 64

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let res = [];
let cont = 0;
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    if (cont === 0) {
      cont++;
    } else if (cont === 1) {
      res = line.split(' ');
      cont++;
    } else {
      line == 0 ? res.sort((a, b) => a - b) : (res = res.sort((a, b) => b - a));
      cont = 0;
      console.log(res.join(' '));
    }
  }
})();
```

### (6) \*HJ106.字符串逆序

将一个字符串 str 的内容颠倒过来，并输出。

输入描述：

输入一个字符串，可以有空格

输出描述：

输出逆序的字符串

示例 1

输入：

I am a student

输出：

tneduts a ma I

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let arr = [];
    for (let i = 0; i < line.length; i++) {
      arr.unshift(line.charAt(i));
    }
    console.log(arr.join(''));
  }
})();
```

### (7) \*HJ106.字符串分割与大小写切换

给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母；反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换。

输入描述:

输入为两行，第一行为参数K，第二行为字符串S。

输出描述:

输出转换后的字符串。

示例1

输入

3

12abc-abCABc-4aB@

输出

12abc-abc-ABC-4aB-@

说明

子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每3个字符一组为abC、ABc、4aB、@，abC中小写字母较多，转换为abc，ABc中大写字母较多，转换为ABC，4aB中大小写字母都为1个，不做转换，@中没有字母，连起来即12abc-abc-ABC-4aB-@

示例2

输入

12

12abc-abCABc-4aB@

输出

12abc-abCABc4aB@

说明

子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每12个字符一组为abCABc4aB@，这个子串中大小写字母都为4个，不做转换，连起来即12abc-abCABc4aB@

```javascript
function fn(k,s) {
   let arr = s.split('-')
    let arr_0 = arr[0]
    arr[0] = null
    let srt = arr.join('')
   let subArr=[]
       for (let index = 0; index <srt.length; index+=k) {
            subArr.push(pd(srt.slice(index,index+k)))
       }
    subArr.unshift(arr_0)
    console.log(subArr.join('-'))
}

function pd(srt) {
    let arr = [...srt]
    let max = 0
    let min = 0
    arr.forEach(s=>{
        if (s.charCodeAt()>=97 && s.charCodeAt()<=122) {
            min++
        }
        if (s.charCodeAt()>=65 && s.charCodeAt()<=90) {
            max++
        }
    })
    if(max==min) return srt
    if (max>min) {
        return srt.toUpperCase()
    } else {
        return srt.toLowerCase()
    }
}
fn(3,'12abc-abCABc-4aB@')
```

## 排序（5 题）

### (1) HJ8.合并表记录

数据表记录包含表索引 index 和数值 value（int 范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照 index 值升序进行输出。

提示:

0 <= index <= 11111111

1 <= value <= 100000

输入描述：

先输入键值对的个数 n（1 <= n <= 500）

接下来 n 行每行输入成对的 index 和 value 值，以空格隔开

输出描述：

输出合并后的键值对（多行）

示例 1

输入：

4

0 1

0 2

1 2

3 4

输出：

0 3

1 2

3 4

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let cont = 0;
let num = 0;
let arr = [];
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    if (cont == 0) {
      num = Number(line);
    } else {
      const tokens = line.split(' ');
      if (arr[tokens[0]]) {
        arr[tokens[0]] = Number(tokens[1]) + Number(arr[tokens[0]]);
      } else {
        arr[tokens[0]] = tokens[1];
      }
    }
    cont++;
    if (cont - 1 === num) {
      cont = 0;
      arr.forEach((v, i) => {
        console.log(`${i} ${v}`);
      });
    }
  }
})();
```

### (2) \*HJ14.字符串排序

给定 n 个字符串，请对 n 个字符串按照字典序排列。
输入描述：

输入第一行为一个正整数 n(1≤n≤1000),下面 n 行为 n 个字符串(字符串长度 ≤100),字符串中只含有大小写字母。

输出描述：

数据输出 n 行，输出结果为按照字典序排列的字符串。

示例 1

输入：

9

cap

to

cat

card

two

too

up

boat

boot

输出：

boat

boot

cap

card

cat

to

too

two

up

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let cont = 0;
let num = 0;
let arr = [];
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    if (cont == 0) {
      num = Number(line);
      cont++;
    } else if (cont < num) {
      arr.push(line);
      cont++;
    } else {
      arr.push(line);
      arr.sort();
      arr.forEach((v) => {
        console.log(v);
      });
      cont = 0;
    }
  }
})();
```

### (3) HJ27.查找兄弟单词

定义一个单词的“兄弟单词”为：交换该单词字母顺序（注：可以交换任意次），而不添加、删除、修改原有的字母就能生成的单词。
兄弟单词要求和原来的单词不同。例如： ab 和 ba 是兄弟单词。 ab 和 ab 则不是兄弟单词。
现在给定你 n 个单词，另外再给你一个单词 x ，让你寻找 x 的兄弟单词里，按字典序排列后的第 k 个单词是什么？

注意：字典中可能有重复单词。

输入描述：

输入只有一行。 先输入字典中单词的个数 n，再输入 n 个单词作为字典单词。 然后输入一个单词 x 最后后输入一个整数 k

输出描述：

第一行输出查找到 x 的兄弟单词的个数 m 第二行输出查找到的按照字典顺序排序后的第 k 个兄弟单词，没有符合第 k 个的话则不用输出。

示例 1

输入：

6 cab ad abcd cba abc bca abc 1

输出：

3

bca

说明：

abc 的兄弟单词有 cab cba bca，所以输出 3

经字典序排列后，变为 bca cab cba，所以第 1 个字典序兄弟单词为 bca

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split(' ');
    tokens.shift();
    let num = tokens.pop();
    let srt = tokens.pop();
    let res = [];
    let m = srt.split('').sort().join('');
    tokens.forEach((v, i) => {
      if (v.length === srt.length && v !== srt) {
        if (v.split('').sort().join('') === m) {
          res.push(v);
        }
      }
    });
    res.sort();
    console.log(res.length || 0);
    if (res[num - 1]) console.log(res[num - 1]);
  }
})();
```

### (4) \*NC37.合并区间

给出一组区间，请合并所有重叠的区间。

请保证合并后的区间按区间起点升序排列。

示例 1

输入：

[[10,30],[20,60],[80,100],[150,180]]

返回值：

[[10,60],[80,100],[150,180]]

```javascript
function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => {
    return a.start - b.start;
  });
  let res = [intervals[0]];
  console.log(intervals);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= res[res.length - 1].end) {
      if (intervals[i].end > res[res.length - 1].end) {
        res[res.length - 1].end = intervals[i].end;
      }
    } else {
      res = res.concat([intervals[i]]);
    }
  }
  console.log(res);
  return res;
}
module.exports = {
  merge: merge,
};
```

### (5) \*HJ68.成绩排序

给定一些同学的信息（名字，成绩）序列，请你将他们的信息按照成绩从高到低或从低到高的排列,相同成绩

都按先录入排列在前的规则处理。

例示：

jack 70

peter 96

Tom 70

smith 67

从高到低 成绩

peter 96

jack 70

Tom 70

smith 67

从低到高

smith 67

jack 70

Tom 70
peter 96

注：0 代表从高到低，1 代表从低到高

输入描述：

第一行输入要排序的人的个数 n，第二行输入一个整数表示排序的方式，之后 n 行分别输入他们的名字和成绩，以一个空格隔开

输出描述：

示例 1

输入：
3

0

fang 90

yang 50

ning 70

输出：

fang 90

ning 70

yang 50

按照指定方式输出名字和成绩，名字和成绩之间以一个空格隔开

```javascript
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let cont = 0;
let sortType = 0;
let num = 0;
let arr = [];
void (async function () {
  // Write your code here
  while ((line = await readline())) {
    if (cont === 0) {
      num = Number(line);
      cont++;
    } else if (cont === 1) {
      sortType = line;
      cont++;
    } else {
      let tokens = line.split(' ');
      arr.push({ name: tokens[0], value: Number(tokens[1]) });
      cont++;
      if (cont - 2 == num) {
        cont = 0;
        sortType == 1
          ? arr.sort((a, b) => a.value - b.value)
          : arr.sort((a, b) => b.value - a.value);
        arr.forEach((v) => {
          console.log(`${v.name} ${v.value}`);
        });
      }
    }
  }
})();
```

## 栈（2 题）

### (1) NC52.括号序列

给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列

括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。

示例 1

输入：

"["

返回值：

false

```javascript
function isValid(s) {
  // write code here
  const tokens = s.split('');
  if (tokens.length < 2) return false;

  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let res = [];
  tokens.forEach((v, i) => {
    if (!map[v] && res.length > 0) {
      let a = res[res.length - 1];
      if (map[a] === v) {
        res.pop();
      } else {
        return false;
      }
    } else {
      res.push(v);
    }
  });
  console.log(res);
  return !res.length > 0;
}
module.exports = {
  isValid: isValid,
};
```

### (2) \*leetcode 1614.括号的最大嵌套深度

如果字符串满足以下条件之一，则可以称之为 有效括号字符串（valid parentheses string，可以简写为 VPS）：

- 字符串是一个空字符串 ""，或者是一个不为 "(" 或 ")" 的单字符。

- 字符串可以写为 AB（A 与 B  字符串连接），其中 A 和 B 都是 有效括号字符串 。

- 字符串可以写为 (A)，其中 A 是一个 有效括号字符串 。

类似地，可以定义任何有效括号字符串  S 的 嵌套深度 depth(S)：

depth("") = 0

depth(C) = 0，其中 C 是单个字符的字符串，且该字符不是 "(" 或者 ")"

depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是 有效括号字符串

depth("(" + A + ")") = 1 + depth(A)，其中 A 是一个 有效括号字符串

例如：""、"()()"、"()(()())" 都是 有效括号字符串（嵌套深度分别为 0、1、2），而 ")(" 、"(()" 都不是 有效括号字符串 。

给你一个 有效括号字符串 s，返回该字符串的 s 嵌套深度

示例 1：

输入：s = "(1+(2\*3)+((8)/4))+1"

输出：3

解释：数字 8 在嵌套的 3 层括号中。

```javascript
var maxDepth = function (s) {
  const tokens = s.split('');
  if (tokens.length < 2 || !tokens.includes('(')) {
    return 0;
  }
  let count = 0;
  let nums = [];
  tokens.forEach((v) => {
    if ('(' === v) {
      count++;
      nums.push(count);
    }
    if (')' === v) {
      count--;
      nums.push(count);
    }
  });
  return Math.max(...nums);
};
```

## 排列组合（2 题）

### (1) \*leetcode 面试题 08.08.有重复字符串的排列组合

有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

示例 1:

输入：S = "qqe"

输出：["eqq","qeq","qqe"]

```javascript
var permutation = function (S) {
  console.log(S);
  let arr = [];
  let res = [];
  const tokens = S.split('').sort();

  function backtracking() {
    if (arr.length === S.length) {
      res.push(arr.join(''));
    }
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === null || (i > 0 && tokens[i] === tokens[i + 1]))
        continue;
      let tmp = tokens[i];
      arr.push(tmp);
      tokens[i] = null;
      backtracking();
      arr.pop();
      tokens[i] = tmp;
    }
  }
  backtracking();
  let set = new Set(res);
  return [...set];
};
```

### (2) leetcode 77.组合

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

示例 1：

输入：n = 4, k = 2

输出：
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]

提示：

- 1 <= n <= 20
- 1 <= k <= n

```javascript
var combine = function (n, k) {
  let res = [];
  let arr = [];
  if (k <= 0 || n < k) {
    return res;
  }
  function fn(startIndex) {
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      fn(i);
      arr.pop();
    }
  }
  fn(1);
  return res;
};
```

## 双指针（3 题）

### (1) \*leetcode 674.最长连续递增序列

给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

示例 1：

输入：nums = [1,3,5,4,7]

输出：3

解释：最长连续递增序列是 [1,3,5], 长度为 3。

尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。

```javascript
var findLengthOfLCIS = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let res = [];
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      res.push(arr);
      arr = [nums[i]];
    } else {
      arr.push(nums[i]);
    }
  }
  res.push(arr);
  res.sort((a, b) => {
    return b.length - a.length;
  });
  return res[0].length;
};
```

### (2) NC17.最长回文子串

对于长度为 n 的一个字符串 A（仅包含数字，大小写英文字母），请设计一个高效算法，计算其中最长回文子串的长度。

示例 1

输入：

"ababc"

返回值：

3

说明：

最长的回文子串为"aba"与"bab"，长度都为 3

```javascript
function getLongestPalindrome(A) {
  // write code here
  let arr = A.split('');
  if (arr.length === 1) {
    return 1;
  }
  function fn(n) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - n] === arr[i + n]) {
        count++;
        fn(i);
      } else {
        return;
      }
    }
  }
  fn(1);
}
module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
```

### (3) NC28.最小覆盖子串

```javascript

```

## 深搜（1 题）

### (1) HJ41.称砝码

```javascript

```

## 二叉树（2 题）

### (1) \*leetcode 剑指 offer 32 — II.从上到下打印二叉树 II

```javascript

```

### (2) leetcode 剑指 offer 32 — III.从上到下打印二叉树 III

```javascript

```

## 其他（6 题）

### (1) \*HJ108.求最小公倍数

```javascript

```

### (2) \*HJ28.素数伴侣

```javascript

```

### (3) \*HJ60.查找组成一个偶数最接近的两个素数

```javascript

```

### (4) \*leetcode 994.腐烂的橘子

```javascript

```

### (5) leetcode 204.计数质数

```javascript

```

### (6) HJ25. 数据分类处理

```javascript

```
### 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。  
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。  
你可以按任意顺序返回答案。

 

示例 1：  
输入：nums = [2,7,11,15], target = 9  
输出：[0,1]  
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。  

示例 2：  
输入：nums = [3,2,4], target = 6  
输出：[1,2]  

示例 3：  
输入：nums = [3,3], target = 6  
输出：[0,1]


``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双循环
var twoSum = function(nums, target) {
  for(let x=0;x<nums.length;x++ ){
    for(let y=x+1;y<nums.length;y++ ){
      if( nums[x] + nums[y] === target ){
          return [x,y]
      }
    }
  }
};
// 利用哈希表的键值对
var twoSum = function(nums, target) {
  let has = {}
  for(let x=0;x<nums.length;x++ ){
    if(has[target - nums[x]] !==undefined){
      return [has[target - nums[x]],x]
    }
    has[nums[x]] = x
  }
};

## 应用题

### 星际篮球争霸赛

在星球争霸篮球赛对抗赛中 ，最大的宇宙战队希望每个人 都能拿到 MVP，MVP 的条件是单场最高分得分获得者。 可以并列所以宇宙战队 决定在比赛中 尽可能让更多队员上场， 并且让所有得分的选手得分都相同， 然而比赛过程中的每 1 分钟的得分都只能由某一个人包揽。

输入

输入第一行为一个数字 t，表示为有得分的分钟数 1≤t≤50 第二行为 t 个数字，代表每一分钟的得分 p ， 1≤t≤50

输出

输出有得分的队员都是 MVP 时，最少的 MVP 得分

示例一

输入

9 5 2 1 5 2 1 5 2 1

输出

6

```javascript
function fn(params) {
  let arr = params.split('');
  let time = arr.shift();
  let num = 0;
  arr.forEach((v) => {
    num += Number(v);
  });
  console.log(num);
}
fn('9521521521');
```

### 开心消消乐

给定一个 N 行 M 列的二维矩阵，矩阵中每个位置的数字取值为 0 或 1，矩阵示例如：

1 1 0 0

0 0 0 1

0 0 1 1

1 1 1 1

现需要将矩阵中所有的 1 进行反转为 0，规则如下：

当点击一个 1 时，该 1 被反转为 0，同时相邻的上、下、左、右，以及左上、左下、右上、右下 8 个方向的 1 （如果存在 1）均会自动反转为 0；
进一步地，一个位置上的 1 被反转为 0 时，与其相邻的 8 个方向的 1 （如果存在 1）均会自动反转为 0；
按照上述规则示例中的矩阵只最少需要点击 2 次后，所有均值 0 。请问，给定一个矩阵，最少需要点击几次后，所有数字均为 0？

输入

第一行输入两个整数，分别表示矩阵的行数 N 和列数 M，取值范围均为 [1,100]

接下来 N 行表示矩阵的初始值，每行均为 M 个数，取值范围 [0,1]

输出

输出一个整数，表示最少需要点击的次数

示例一

输入

3 3

1 0 1

0 1 0

1 0 1

输出

1

```javascript
function fn() {
  let count = 0;
  let arr = [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        dfs(arr, i, j);
        count++;
      }
    }
  }
  function dfs(arr, row, col) {
    if (row < 0 || col < 0 || col > arr[0].length - 1 || row > arr.length - 1) {
      return;
    }
    if (arr[row][col] == 1) {
      arr[row][col] = 0;
      dfs(arr, row, col - 1); //上
      dfs(arr, row, col + 1); //下
      dfs(arr, row - 1, col); //左
      dfs(arr, row + 1, col); //右
      dfs(arr, row - 1, col - 1); //左上
      dfs(arr, row + 1, col - 1); //右上
      dfs(arr, row - 1, col + 1); //左下
      dfs(arr, row + 1, col + 1); //右下
    }
  }
  return count;
}
fn();
```

### 射击比赛

给定一个射击比赛成绩单
包含多个选手若干次射击的成绩分数
请对每个选手按其最高三个分数之和进行降序排名
输出降序排名后的选手ID序列
条件如下:

1. 一个选手可以有多个射击成绩的分数 且次序不固定
2. 如果一个选手成绩小于三个 则认为选手的所有成绩无效 排名忽略该选手
3. 如果选手的成绩之和相等,则成绩相等的选手按照其ID降序排列

输入描述

输入第一行:

一个整数 N

表示该场比赛总共进行了N次射击

产生N个成绩分数 2 <= N <= 100

输入第二行 

一个长度为N的整数序列

表示参与本次射击的选手Id

0 <= ID <= 99

输入第三行是长度为N的整数序列

表示参与每次射击的选手对应的成绩

0 <= 成绩 <= 100

输出描述

符合题设条件的降序排名后的选手ID序列

示例一

输入

13

3,3,7,4,4,4,4,7,7,3,5,5,5

53,80,68,24,39,76,66,16,100,55,53,80,55

输出

5,3,7,4

该场射击比赛进行了13次,参赛选手为3 4 5 7

3号选手的成绩为53 80 55最高三个成绩的和为 188

4号选手的成绩为24 39 76 66最高三个和为181

5号选手的成绩为53 80 55 最高三个和为188

7号选手成绩为68 16 100 最高三个和184

比较各个选手最高三个成绩的和

3 = 5 > 7 > 4

由于3和5成绩相等 且5 > 3 所以输出为5,3,7,4

```javascript

function fn(n,ids,res) {
  let obj ={}
  ids.forEach((item,index)=>{  //建立id与结果的关联 id: [结果1，结果2....]
    if(obj[item]===undefined){obj[item] = []}
    obj[item].push(res[index])
  })
  let idsSet = new Set(ids)  // ids 去重
  idsSet.forEach(item=>{     
    if(obj[item].length<3){   // 小于3个结果删除id
      delete obj[item]
      return
    }
    obj[item] = eval(obj[item].sort((a,b)=>b-a).splice(0,3).join('+'))  // 结果按大小排序，取前三个，相加
  })
  let r = []
  let max = 0
  for (let key in obj) {   // 将obj转为数组，添加id与res，方便排序
    let item = {id:Number(key),res:obj[key]}
    r.push(item)
  }
  r.sort((a,b)=>{
    if(a.res!==b.res){  // 结果不相等，先按结果排序
      return b.res-a.res
    }
    return b.id-a.id   // 结果相等，按id排序
  })
  let resArr=[];
  r.forEach((item,index)=>{  // 将id放入Array，输出
    resArr.push(item.id)
  })
  console.log(resArr)
  return resArr
}
fn(13,[3,3,7,4,4,4,4,7,7,3,5,5,5],[53,80,68,24,39,76,66,16,100,55,53,80,55])

```

### 判断是不是子字符串

给定两个字符串 s和 t ，判断 s是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度n ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例一

输入

abc

ahbgdc

输出

true

```javascript
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let inputs = [];

rl.on("line", function (line) {
    inputs.push(line.trim());
    count++;
    if (count >= 2) {
        const s = inputs[0];
        const t = inputs[1];
        fn(s, t);
    }
});

function fn(s, t) {
    let res = true
    let index = 0
    for (let is = 0; is < s.length; is++) {  // 循环子串
        for (let i = index; i < t.length; i++) {  //拿子串与长串的每个值比较
            if (t[i] == s[is]) {   // 如果相等，记录此时的index，跳出循环，下次从这个index接着循环
                index = i
                break
            }
            if(i==t.length-1){   // 循环到最后都没有相等的，说明不是
                res = false
            }
        }
        if(!res) break  // 只要子串的某一项不存在长串中，说明不符合，直接跳出循环
    }
    console.log(res)
}


```

### 数据分类

对一个数据a进行分类，

分类方法是，此数据a(4个字节大小)的4个字节相加对一个给定值b取模，

如果得到的结果小于一个给定的值c则数据a为有效类型，其类型为取模的值。

如果得到的结果大于或者等于c则数据a为无效类型。

比如一个数据a = 0x01010101，b = 3

按照分类方法计算：(0x01 + 0x01 + 0x01 + 0x01) % 3 = 1

所以如果c等于2，则此a就是有效类型，其类型为1

如果c等于1，则此a是无效类型

又比如一个数据a = 0x01010103，b = 3

按分类方法计算：(0x01 + 0x01 + 0x01 + 0x03) % 3 = 0

所以如果c = 2则此a就是有效类型，其类型为0

如果c = 0则此a是无效类型

输入12个数据，

第一个数据为c，第二个数据为b，

剩余10个数据为需要分类的数据

请找到有效类型中包含数据最多的类型，

并输出该类型含有多少个数据

示例一

输入

3 4 256 257 258 259 260 261 262 263 264 265

输出

3

说明：
这10个数据4个字节相加后的结果分别是

1 2 3 4 5 6 7 8 9 10

故对4取模的结果为

1 2 3 0 1 2 3 0 1 2

c是3所以012都是有效类型

类型为1和2的有3个数据

类型为0和3的只有两个

::: warning
< Number >. **toString()** 转16进制的时候一定要是number类型，否则不会转换
:::

```javascript
function fn(srt){
    let a = srt.split(' ')
    let c = a[0]
    let b = a[1]
    let arr = a.slice(2)
    let res = []
    arr.forEach(n=>{
        let list =[]
        let srt = Number(n).toString(16).padStart(8,0) 
        for (let index = 0; index < srt.length; index+=2) {
            list.push(srt.slice(index,index+2))
        }
        let resNum = eval(list.join('+')) % b
        if(resNum<c){
            if(!res[resNum]){
                res[resNum]={key:resNum,val:1}
            } else{
                res[resNum].val+=1
            }
        }
    })
    res.sort((a,b)=>{
        return b.val-a.val
    })
    console.log(res)
    console.log(res[0].val)
}
fn('1 4 256 257 258 259 260 261 262 263 264 265')

```