import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as t}from"./app-I6Ars0sj.js";const p={},e=t(`<h2 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块"><span>__path 路径模块</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fs-文件模块" tabindex="-1"><a class="header-anchor" href="#fs-文件模块"><span>__fs 文件模块</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当需要<mark>持久化保存数据</mark>时，应当想到写入数据</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// __dirName:当前文件的文件夹名</span>
<span class="token keyword">const</span> filePath <span class="token operator">=</span> __dirName <span class="token operator">+</span> <span class="token string">&#39;xxxx.txt&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&#39;我的文件内容...&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 写入操作 *filePath没有该文件，则会新建文件</span>
<span class="token comment">// 异步写入</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 回调函数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 同步写入，会阻塞进程</span>
fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 流写入，可多次调用，内容会追加，适合大文件</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;第一段&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;第二段&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;第三段&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取操作 *file为buffer</span>
<span class="token comment">// 异步读取</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 注意：返回的data是buffer，如果是字符，可以用toString()转义</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 同步读取</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 流读取，性能开销小，理想状态下读取时只需占用64KB内存空间，一般写入时间比读取时间长</span>
<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;daat&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 绑定data事件 *每当读取64KB后执行回调</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chunk<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 64KB</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取完毕的回调</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 重命名与移动文件</span>
<span class="token comment">// 删除文件</span>

<span class="token comment">// 文件COPY，使用流读取后交给管道（pipe）使用流写入</span>
<span class="token comment">//</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 文件夹操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-网络模块" tabindex="-1"><a class="header-anchor" href="#http-网络模块"><span>__http 网络模块</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>）
<span class="token comment">// 监听端口，启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务已启动...&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应设置" tabindex="-1"><a class="header-anchor" href="#响应设置"><span>响应设置</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 设置响应码</span>
  response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. 响应状态的描述</span>
  response<span class="token punctuation">.</span>statusMessage <span class="token operator">=</span> <span class="token string">&#39;xxxxxx&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// 3. 响应头设置</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;myHeader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test test test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// *也可以自定义响应头</span>
  <span class="token comment">// 4. 响应体设置</span>
  response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;xxxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// write可多次调用，响应体会拼接</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// end只能调用一次，多次调用会报错</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务已启动...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mime-类型" tabindex="-1"><a class="header-anchor" href="#mime-类型"><span>MIME 类型</span></a></h2><p>MIME 类型结构：[ type ]/[ subType ]</p><p>例如： text/html text/css image/jpeg image/png application/json</p><p>http 服务可以通过设置响应头 Content-Type 来表明 MIME 类型</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于未知的资源类型，我们可以选择 <mark>application/octet-stream</mark> 类型。浏览器遇到该类型会下载。</p><p>服务端设置的字符集编码（charset）权重更高，</p><p>一般静态资源不需要修改字符集，它会被调用它的<mark>html</mark>文档的 <mark>&lt;meta&gt;</mark> 标签设置的字符集解析</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 动态设置不同文件的MIME响应头类型</span>
<span class="token comment">// 1.获取文件后缀名</span>
<span class="token keyword">const</span> mimes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jpeg</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> type <span class="token operator">=</span> mimes<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span> type <span class="token operator">+</span> <span class="token string">&#39;;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应错误处理" tabindex="-1"><a class="header-anchor" href="#响应错误处理"><span>响应错误处理</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> filePath <span class="token operator">=</span> __dirName <span class="token operator">+</span> <span class="token string">&#39;xxxx.txt&#39;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">requset<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// 1.假设读取文件错误</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;ENOENT&#39;</span><span class="token operator">:</span> <span class="token comment">// 判断错误码（错误码可以在NodeJs的文档中查找，错误类）</span>
          response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span> <span class="token comment">// 设置响应码,</span>
          response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;404 Not Found&lt;h1&gt;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token string">&#39;EPERM&#39;</span><span class="token operator">:</span>
          response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">403</span> <span class="token comment">// 资源无权限</span>
          response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;403 Forbidden&lt;h1&gt;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span>
          response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span>
          response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;Internal Sever Error&lt;h1&gt;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 2.拦截非get请求</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>requset<span class="token punctuation">.</span>method <span class="token operator">!==</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">405</span> <span class="token comment">// 设置响应码</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;405 Method Not Allowed&lt;h1&gt;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化"><span>模块化</span></a></h2><p>优点：高复用性，高维护性</p><p>使用<mark>commonjs</mark>来进行模块化处理</p><h3 id="导入与导出" tabindex="-1"><a class="header-anchor" href="#导入与导出"><span>导入与导出</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="index.js"><pre class="language-javascript"><code><span class="token comment">// 导入</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>test1<span class="token punctuation">,</span>test2<span class="token punctuation">}</span> <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>test<span class="token punctuation">.</span>js<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="test.js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;测试1...&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;测试2...&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导出方式1-对象</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  test1<span class="token punctuation">,</span>
  test2<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 导出方式2-对象</span>
exports<span class="token punctuation">.</span>test1 <span class="token operator">=</span> test1<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>test2 <span class="token operator">=</span> test2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入注意事项" tabindex="-1"><a class="header-anchor" href="#导入注意事项"><span>导入注意事项</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>require 时的路径建议使用相对路径</p><p>js 与 json 文件导入时不用加后缀</p><p>如果导入的是<mark>文件夹：</mark></p><p><mark>首先</mark>，检测文件夹下的<mark>package.json</mark>文件中的<span style="background:#c8e2f5;"><span style="color:#ff9456;">main</span>属性对应的文件</span>，如果存在则导入，不存在报错</p><p><mark>然后</mark>，如果<mark>main</mark>属性不存在，或者<mark>package.json</mark>不存在，则会尝试导入文件夹下的<mark>index.js</mark>或者<mark>index.json</mark>，还没找到则报错</p><p>内置模块无需加路径，直接导入模块名即可</p></div><h3 id="模块导入基本流程" tabindex="-1"><a class="header-anchor" href="#模块导入基本流程"><span>模块导入基本流程</span></a></h3><ol><li>将相对路径转为绝对路径，定位目标文件</li><li>缓存检测</li><li>读取目标文件代码</li><li>包裹为一个自执行函数并执行，通过 <mark>arguments.callee.toString()</mark> 查看自执行函数</li><li>缓存模块的值</li><li>返回<mark>module.exports</mark></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 伪代码</span>
<span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 将相对路径转为绝对路径，定位目标文件</span>
  <span class="token keyword">let</span> absolutePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. 缓存检测</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 3. 读取目标文件代码</span>
  <span class="token keyword">let</span> code <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>absolutePath<span class="token punctuation">)</span><span class="token punctuation">.</span>toString<span class="token punctuation">;</span>
  <span class="token comment">// 4. 包裹为一个自执行函数并执行，通过arguments.callee.toString()查看自执行函数</span>
  <span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> exports <span class="token operator">=</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>
    <span class="token parameter">exports<span class="token punctuation">,</span>
    require<span class="token punctuation">,</span>
    module<span class="token punctuation">,</span>
    __filename<span class="token punctuation">,</span>
    __dirname</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> test<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">,</span> __filename<span class="token punctuation">,</span> __dirname<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 5. 缓存模块的值</span>
  caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span> <span class="token operator">=</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
  <span class="token comment">// 6. 返回module.exports</span>
  <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[e];function c(i,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","nodejs.html.vue"]]),d=JSON.parse(`{"path":"/docs/interview/nodejs.html","title":"NodeJs","lang":"zh-CN","frontmatter":{"title":"NodeJs","date":"2022-06-21T00:00:00.000Z","description":"__path 路径模块 __fs 文件模块 提示 当需要持久化保存数据时，应当想到写入数据 __http 网络模块 响应设置 MIME 类型 MIME 类型结构：[ type ]/[ subType ] 例如： text/html text/css image/jpeg image/png application/json http 服务可以通过设置响...","head":[["meta",{"property":"og:url","content":"https://bzt2017.github.io/docs/interview/nodejs.html"}],["meta",{"property":"og:site_name","content":"Tiger"}],["meta",{"property":"og:title","content":"NodeJs"}],["meta",{"property":"og:description","content":"__path 路径模块 __fs 文件模块 提示 当需要持久化保存数据时，应当想到写入数据 __http 网络模块 响应设置 MIME 类型 MIME 类型结构：[ type ]/[ subType ] 例如： text/html text/css image/jpeg image/png application/json http 服务可以通过设置响..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T10:59:50.000Z"}],["meta",{"property":"article:author","content":"Tiger"}],["meta",{"property":"article:published_time","content":"2022-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-08T10:59:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeJs\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-08T10:59:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiger\\",\\"url\\":\\"https://bzt2017.github.io/myBlog/\\"}]}"]]},"headers":[{"level":2,"title":"__path 路径模块","slug":"path-路径模块","link":"#path-路径模块","children":[]},{"level":2,"title":"__fs 文件模块","slug":"fs-文件模块","link":"#fs-文件模块","children":[]},{"level":2,"title":"__http 网络模块","slug":"http-网络模块","link":"#http-网络模块","children":[{"level":3,"title":"响应设置","slug":"响应设置","link":"#响应设置","children":[]}]},{"level":2,"title":"MIME 类型","slug":"mime-类型","link":"#mime-类型","children":[]},{"level":2,"title":"响应错误处理","slug":"响应错误处理","link":"#响应错误处理","children":[]},{"level":2,"title":"模块化","slug":"模块化","link":"#模块化","children":[{"level":3,"title":"导入与导出","slug":"导入与导出","link":"#导入与导出","children":[]},{"level":3,"title":"导入注意事项","slug":"导入注意事项","link":"#导入注意事项","children":[]},{"level":3,"title":"模块导入基本流程","slug":"模块导入基本流程","link":"#模块导入基本流程","children":[]}]}],"git":{"createdTime":1715939602000,"updatedTime":1720436390000,"contributors":[{"name":"tiger-github","email":"634513456@qq.com","commits":2},{"name":"Tiger","email":"oncwnuO8Y28Ru5uEp_1PhIsFU2Rg@git.weixin.qq.com","commits":1}]},"readingTime":{"minutes":4,"words":1201},"filePathRelative":"docs/interview/nodejs.md","localizedDate":"2022年6月21日","excerpt":"<h2>__path 路径模块</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> path <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'path'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};