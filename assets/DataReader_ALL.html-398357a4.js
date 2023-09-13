import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h1 id="datareader-指令大全" tabindex="-1"><a class="header-anchor" href="#datareader-指令大全" aria-hidden="true">#</a> DataReader 指令大全</h1><h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyday <span class="token keyword">import</span> DataReader

<span class="token comment"># 構建實例</span>
dr <span class="token operator">=</span> DataReader<span class="token punctuation">(</span><span class="token punctuation">)</span> 
dr <span class="token operator">=</span> DaatDeader<span class="token punctuation">(</span><span class="token string">&quot;test.csv&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 引入文件</span>
dr<span class="token punctuation">.</span>inFile<span class="token punctuation">(</span><span class="token string">&quot;test.csv&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 查看引入文件目錄</span>
dr<span class="token punctuation">.</span>getPath<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 改變引入文件目錄</span>
dr<span class="token punctuation">.</span>setPath<span class="token punctuation">(</span>path<span class="token punctuation">)</span>  <span class="token comment"># 如果沒有此路徑會自動生成</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="輸出" tabindex="-1"><a class="header-anchor" href="#輸出" aria-hidden="true">#</a> 輸出</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 目前只支持csv, json, xlsx</span>
dr<span class="token punctuation">.</span>toFile<span class="token punctuation">(</span><span class="token string">&quot;test2.csv&quot;</span><span class="token punctuation">)</span>
dr<span class="token punctuation">.</span>toFile<span class="token punctuation">(</span><span class="token string">&quot;test2.json&quot;</span><span class="token punctuation">)</span>
dr<span class="token punctuation">.</span>toFile<span class="token punctuation">(</span><span class="token string">&quot;test2.xlsx&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 如果 格式為 all，會生成 所有支持的格式</span>
dr<span class="token punctuation">.</span>toFile<span class="token punctuation">(</span><span class="token string">&quot;test2.all&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 查看輸出文件目錄</span>
dr<span class="token punctuation">.</span>getToPath<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 改變輸出文件目錄</span>
dr<span class="token punctuation">.</span>setToPath<span class="token punctuation">(</span>path<span class="token punctuation">)</span>  <span class="token comment"># 如果沒有此路徑會自動生成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="檢查文件夾是否存在及生成" tabindex="-1"><a class="header-anchor" href="#檢查文件夾是否存在及生成" aria-hidden="true">#</a> 檢查文件夾是否存在及生成</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 初始化時會使用，如果為jupyter環境不會執行此方法。</span>
dr<span class="token punctuation">.</span>loadDir<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 如果沒有此路徑會自動生成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[i];function p(o,l){return a(),s("div",null,c)}const u=n(t,[["render",p],["__file","DataReader_ALL.html.vue"]]);export{u as default};
