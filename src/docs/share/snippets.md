---
title: 常用代码片段
date: 2022-07-21
---

> 超详细 vscode 代码片段配置 <https://blog.csdn.net/maokelong95/article/details/54379046/>

## vscode 代码片段

文件 -> 首选项 -> 配置用户代码片段
1. <预设变量: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables>
### vue
```json
// vue.json文件
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div>",
      "    $1",
      "  </div>",
      "</template>",
      "<script>",
      "//import  from ",
      "export default {",
      "  components: {},",
      "  props: {},",
      "  computed: {},",
      "  data() {",
      "    return {",
      "      ",
      "    }",
      "  },",
      "  created() {},",
      "  created() {},",
      "  methods: {},",
      "}",
      "</script>",
      "<style lang='less' scoped>",
      "",
      "</style>"
    ],
    "description": ""
  }
}
```
### markdown
```json
{
  "title": {
		"prefix": "title",
		"body": [
			"---",
			"title: $1",
			"date: $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
			"---"
		],
	},
}
```
## css 代码片段

- 文字超出可视区域显示省略号

```css
.hidden-text {
  word-wrap: break-word; /*解决数字不显示省略号问题 但会导致数字不换行，需要在父级加上 word-break:break-all; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /*下面三条缺一不可 可以生成 '...' 主要针对谷歌浏览器 */
  -webkit-line-clamp: 2; /*表示行数*/
  -webkit-box-orient: vertical; /*表示纵向*/
}
pointer-events: none; /*禁用事件*/
cursor: pointer; /*手型*/

/* 图片自适应 */
object-fit: cover;
```

- 常用转义符
  换行：&#10;

## js 常用场景

```javascript
// 获取验证码
function getCaptcha(api, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${baseUrl}${api}`,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'blob', // 响应类型为blob
      data,
    })
      .then((res) => {
        let url = window.URL.createObjectURL(res.data);
        resolve(url);
      })
      .catch((e) => {
        reject(e.message);
        Message.error(e.message);
      });
  });
}
```

## element-UI 常用场景

```javascript
// form表单只需要星号样式
<el-form-item label="xxxx" class="is-required">

```
