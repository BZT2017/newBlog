import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,b as l}from"./app-CM1x2HIZ.js";const a={},n=l('<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念"><span>基础概念</span></a></h2><ul><li><p>主包： 小程序的启动包</p><p>大小限制最多2.5M</p></li><li><p>副包： 功能模块的集合</p><p>可调用主包的共用方法，但各副包之间的组件无法共用</p></li><li><p>环境</p><ol><li>dev环境：扫描开发工具的预览图可以打开</li><li>体验环境： test环境，点击开发者工具的上传按钮，可切换体验版本</li><li>生产环境： 需要提交审核，在小程序版本管理页面，使用体验版发布，需要截屏10张小程序图片+录屏小程序操作</li></ol></li></ul><h2 id="主包优化体积" tabindex="-1"><a class="header-anchor" href="#主包优化体积"><span>主包优化体积</span></a></h2><ol><li>图片资源使用图库，icon使用iconfont调用</li><li>各功能模块之间使用分包策略，不占用主包体积</li><li>注意插件包体积</li></ol><h2 id="数据流" tabindex="-1"><a class="header-anchor" href="#数据流"><span>数据流</span></a></h2><ul><li>父传子</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul><li>子传父</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件"><span>自定义组件</span></a></h2><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改"><span>修改</span></a></h2><h2 id="审核不通过情况" tabindex="-1"><a class="header-anchor" href="#审核不通过情况"><span>审核不通过情况</span></a></h2><ul><li>登录页问题 微信审核人员你好，我们这款小程序是针对特定企业内部员工进行培训的，目前不开放注册。我们已在登录页说明“仅针对特定人员使用”符合微信小程序要求。如果有其他不规范内容请告知我们，谢谢</li></ul>',13),r=[n];function o(s,p){return i(),t("div",null,r)}const h=e(a,[["render",o],["__file","wxApp.html.vue"]]),m=JSON.parse('{"path":"/docs/interview/wxApp.html","title":"微信小程序","lang":"zh-CN","frontmatter":{"title":"微信小程序","date":"2022-06-21T00:00:00.000Z","description":"基础概念 主包： 小程序的启动包 大小限制最多2.5M 副包： 功能模块的集合 可调用主包的共用方法，但各副包之间的组件无法共用 环境 dev环境：扫描开发工具的预览图可以打开 体验环境： test环境，点击开发者工具的上传按钮，可切换体验版本 生产环境： 需要提交审核，在小程序版本管理页面，使用体验版发布，需要截屏10张小程序图片+录屏小程序操作","head":[["meta",{"property":"og:url","content":"https://bzt2017.github.io/newBlog/docs/interview/wxApp.html"}],["meta",{"property":"og:site_name","content":"Tiger"}],["meta",{"property":"og:title","content":"微信小程序"}],["meta",{"property":"og:description","content":"基础概念 主包： 小程序的启动包 大小限制最多2.5M 副包： 功能模块的集合 可调用主包的共用方法，但各副包之间的组件无法共用 环境 dev环境：扫描开发工具的预览图可以打开 体验环境： test环境，点击开发者工具的上传按钮，可切换体验版本 生产环境： 需要提交审核，在小程序版本管理页面，使用体验版发布，需要截屏10张小程序图片+录屏小程序操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-17T09:53:22.000Z"}],["meta",{"property":"article:author","content":"Tiger"}],["meta",{"property":"article:published_time","content":"2022-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-17T09:53:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微信小程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-17T09:53:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiger\\",\\"url\\":\\"https://bzt2017.github.io/myBlog/\\"}]}"]]},"headers":[{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":2,"title":"主包优化体积","slug":"主包优化体积","link":"#主包优化体积","children":[]},{"level":2,"title":"数据流","slug":"数据流","link":"#数据流","children":[]},{"level":2,"title":"自定义组件","slug":"自定义组件","link":"#自定义组件","children":[]},{"level":2,"title":"修改","slug":"修改","link":"#修改","children":[]},{"level":2,"title":"审核不通过情况","slug":"审核不通过情况","link":"#审核不通过情况","children":[]}],"git":{"createdTime":1715939602000,"updatedTime":1715939602000,"contributors":[{"name":"tiger-github","email":"634513456@qq.com","commits":1}]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"docs/interview/wxApp.md","localizedDate":"2022年6月21日","excerpt":"<h2>基础概念</h2>\\n<ul>\\n<li>\\n<p>主包：\\n小程序的启动包</p>\\n<p>大小限制最多2.5M</p>\\n</li>\\n<li>\\n<p>副包：\\n功能模块的集合</p>\\n<p>可调用主包的共用方法，但各副包之间的组件无法共用</p>\\n</li>\\n<li>\\n<p>环境</p>\\n<ol>\\n<li>dev环境：扫描开发工具的预览图可以打开</li>\\n<li>体验环境： test环境，点击开发者工具的上传按钮，可切换体验版本</li>\\n<li>生产环境： 需要提交审核，在小程序版本管理页面，使用体验版发布，需要截屏10张小程序图片+录屏小程序操作</li>\\n</ol>\\n</li>\\n</ul>","autoDesc":true}');export{h as comp,m as data};
