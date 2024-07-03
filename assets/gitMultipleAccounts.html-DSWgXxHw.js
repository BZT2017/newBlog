import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,b as t}from"./app-D0fcLRg9.js";const n={},i=t(`<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h2><p>在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用gitee或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>通过配置多个ssh秘钥对不同类型的账号进行管理</p><h2 id="方法步骤" tabindex="-1"><a class="header-anchor" href="#方法步骤"><span>方法步骤</span></a></h2><p>比如公司用gitlab账号，自己使用gitee账号</p><ol><li><p>清理全局账号配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> user.name 
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入C盘的用户文件夹内的.ssh文件夹，删除其中的文件，如果没有.ssh文件夹就新建一个</p></li><li><p>在.ssh内打开终端，执行以下命令(另一账号同此步骤)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;你的邮箱地址&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后会提示要求输入生成的文件名，可以以下划线做区分，如id_rsa_gitlab，接着一路回车，等到执行完，专属于gitlab的公钥密钥对就生成完毕了</p></li><li><p>在相应的网站上设置你的公钥并保存</p></li><li><p>回到.ssh文件夹，新增config(无后缀)文件并配置两个账号</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># gitlab
Host gitlab.com
HostName gitlab.com
User youName
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitlab

# gitee
Host gitee.com
HostName gitee.com
User Tiger
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行下面命令,关联config文件并测试是否设置成功</p><div class="language-ssh line-numbers-mode" data-ext="ssh" data-title="ssh"><pre class="language-ssh"><code>ssh -T git@gitlab.com
ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拉取项目代码并在目录中打开终端</p></li><li><p>在相应的项目中配置你的local环境账号名与e-mail</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&quot;xxxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&quot;xxxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>配置公司内网的gitlab时，需要将 <strong>Host</strong>、 <strong>HostName</strong> 配置成相应的ip</p><p>配置也需要换成 ssh -T git@xxxxxx</p><p>有端口的话配置文件需要添加 <strong>PORT xx</strong> (默认22)</p></div>`,8),l=[i];function r(c,p){return s(),a("div",null,l)}const g=e(n,[["render",r],["__file","gitMultipleAccounts.html.vue"]]),u=JSON.parse('{"path":"/docs/share/gitMultipleAccounts.html","title":"git多账号配置","lang":"zh-CN","frontmatter":{"title":"git多账号配置","date":"2022-07-19T00:00:00.000Z","description":"场景 在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用gitee或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了 解决方案 通过配置多个ssh秘钥对不同类型的账号进行管理 方法步骤 比如公司用gitlab账号，自己使用gitee账号 清理全局账号配置 进入C盘的用户文件夹内的.ssh文...","head":[["meta",{"property":"og:url","content":"https://bzt2017.github.io/docs/share/gitMultipleAccounts.html"}],["meta",{"property":"og:site_name","content":"Tiger"}],["meta",{"property":"og:title","content":"git多账号配置"}],["meta",{"property":"og:description","content":"场景 在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用gitee或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了 解决方案 通过配置多个ssh秘钥对不同类型的账号进行管理 方法步骤 比如公司用gitlab账号，自己使用gitee账号 清理全局账号配置 进入C盘的用户文件夹内的.ssh文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-25T10:55:16.000Z"}],["meta",{"property":"article:author","content":"Tiger"}],["meta",{"property":"article:published_time","content":"2022-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-25T10:55:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git多账号配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-25T10:55:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiger\\",\\"url\\":\\"https://bzt2017.github.io/myBlog/\\"}]}"]]},"headers":[{"level":2,"title":"场景","slug":"场景","link":"#场景","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"方法步骤","slug":"方法步骤","link":"#方法步骤","children":[]}],"git":{"createdTime":1715939602000,"updatedTime":1719312916000,"contributors":[{"name":"tiger-github","email":"634513456@qq.com","commits":1}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"docs/share/gitMultipleAccounts.md","localizedDate":"2022年7月19日","excerpt":"<h2>场景</h2>\\n<p>在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用gitee或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了</p>\\n<h2>解决方案</h2>\\n<p>通过配置多个ssh秘钥对不同类型的账号进行管理</p>\\n<h2>方法步骤</h2>\\n<p>比如公司用gitlab账号，自己使用gitee账号</p>\\n<ol>\\n<li>\\n<p>清理全局账号配置</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> user.name \\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> user.email\\n</code></pre></div></li>\\n<li>\\n<p>进入C盘的用户文件夹内的.ssh文件夹，删除其中的文件，如果没有.ssh文件夹就新建一个</p>\\n</li>\\n<li>\\n<p>在.ssh内打开终端，执行以下命令(另一账号同此步骤)</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ssh-keygen <span class=\\"token parameter variable\\">-t</span> rsa <span class=\\"token parameter variable\\">-C</span> <span class=\\"token string\\">\\"你的邮箱地址\\"</span>\\n</code></pre></div><p>之后会提示要求输入生成的文件名，可以以下划线做区分，如id_rsa_gitlab，接着一路回车，等到执行完，专属于gitlab的公钥密钥对就生成完毕了</p>\\n</li>\\n<li>\\n<p>在相应的网站上设置你的公钥并保存</p>\\n</li>\\n<li>\\n<p>回到.ssh文件夹，新增config(无后缀)文件并配置两个账号</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># gitlab\\nHost gitlab.com\\nHostName gitlab.com\\nUser youName\\nPreferredAuthentications publickey\\nIdentityFile ~/.ssh/id_rsa_gitlab\\n\\n# gitee\\nHost gitee.com\\nHostName gitee.com\\nUser Tiger\\nPreferredAuthentications publickey\\nIdentityFile ~/.ssh/id_rsa_gitee\\n</code></pre></div></li>\\n<li>\\n<p>执行下面命令,关联config文件并测试是否设置成功</p>\\n<div class=\\"language-ssh\\" data-ext=\\"ssh\\" data-title=\\"ssh\\"><pre class=\\"language-ssh\\"><code>ssh -T git@gitlab.com\\nssh -T git@github.com\\n</code></pre></div></li>\\n<li>\\n<p>拉取项目代码并在目录中打开终端</p>\\n</li>\\n<li>\\n<p>在相应的项目中配置你的local环境账号名与e-mail</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--local</span> user.name <span class=\\"token string\\">\\"xxxx\\"</span>\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--local</span> user.email <span class=\\"token string\\">\\"xxxx\\"</span>\\n</code></pre></div></li>\\n</ol>","autoDesc":true}');export{g as comp,u as data};
