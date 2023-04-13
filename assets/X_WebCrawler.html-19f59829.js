import{_ as p,M as o,p as i,q as l,Q as c,R as n,t as a,N as t,a1 as e}from"./framework-5866ffd3.js";const u={},r=e(`<h1 id="靜態爬蟲" tabindex="-1"><a class="header-anchor" href="#靜態爬蟲" aria-hidden="true">#</a> 靜態爬蟲</h1><hr><p>本Code為靜態爬蟲，<br> 只用 BeautifulSoup4。</p><p>本次爬蟲的網頁： <u> https://www.primeproperty.com.hk/property/hong-kong-office/central/21261/10-glenealy </u><br> 爬取資料：商廈資料</p><h2 id="_1-引入庫" tabindex="-1"><a class="header-anchor" href="#_1-引入庫" aria-hidden="true">#</a> 1. 引入庫</h2><hr><h4 id="安裝庫" tabindex="-1"><a class="header-anchor" href="#安裝庫" aria-hidden="true">#</a> 安裝庫：</h4><ul><li>pip install pandas</li><li>pip install requests</li><li>pip install beautifulsoup4</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基本準備" tabindex="-1"><a class="header-anchor" href="#_2-基本準備" aria-hidden="true">#</a> 2. 基本準備</h2><hr><p>先定義好需要輸出的列(column)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
TS = Total Size     = 總面積
NF = No of Floor    = 樓層數目
YB = Year Built     = 落成年份
FS = Floor System   = 地台
CH = Ceiling Height = 天花高度
&#39;&#39;&#39;</span>
<span class="token comment"># 定義 list</span>
TS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
NF <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
YB <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
FS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
CH <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-訪問網站" tabindex="-1"><a class="header-anchor" href="#_3-訪問網站" aria-hidden="true">#</a> 3. 訪問網站</h2><hr><p>用 BeautifulSoup 爬取 網頁的 HTML</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&quot;https://www.primeproperty.com.hk/property/hong-kong-office/central/21261/10-glenealy&quot;</span>
data <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
data<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span>
html <span class="token operator">=</span> data<span class="token punctuation">.</span>text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-爬蟲" tabindex="-1"><a class="header-anchor" href="#_4-爬蟲" aria-hidden="true">#</a> 4. 爬蟲</h2><hr><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&quot;html.parser&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 目標資料</span>
info <span class="token operator">=</span> soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>class_ <span class="token operator">=</span> <span class="token string">&quot;card-body tab-pane fade active show&quot;</span><span class="token punctuation">)</span> 
info2 <span class="token operator">=</span> info<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>class_<span class="token operator">=</span> <span class="token string">&quot;col-12 col-sm-6 col-lg-4 mb-3&quot;</span><span class="token punctuation">)</span>
info3 <span class="token operator">=</span> info<span class="token punctuation">.</span>find_all_next<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;font-weight-bold&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-整理資料" tabindex="-1"><a class="header-anchor" href="#_5-整理資料" aria-hidden="true">#</a> 5.整理資料</h2><hr><p>目標資料已經成功爬到手，恭喜恭喜。<br> 但資料還有HTMl碼存在，所以我們需要整再作進一步處理。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">[</span> x<span class="token punctuation">.</span>text <span class="token keyword">for</span> x <span class="token keyword">in</span> info3 <span class="token punctuation">]</span>
output <span class="token operator">=</span> <span class="token punctuation">[</span> data<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>
output2 <span class="token operator">=</span> <span class="token punctuation">[</span> x<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> output <span class="token punctuation">]</span>
TS<span class="token punctuation">.</span>append<span class="token punctuation">(</span>output2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
NF<span class="token punctuation">.</span>append<span class="token punctuation">(</span>output2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
YB<span class="token punctuation">.</span>append<span class="token punctuation">(</span>output2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
FS<span class="token punctuation">.</span>append<span class="token punctuation">(</span>output2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
CH<span class="token punctuation">.</span>append<span class="token punctuation">(</span>output2<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-輸出數據" tabindex="-1"><a class="header-anchor" href="#_6-輸出數據" aria-hidden="true">#</a> 6. 輸出數據</h2><hr><p>再一次恭喜你，成功爬取目標資料，<br> 最後，我們要把這些資料 輸出成 csv檔，方便日後使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Table <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token string">&quot;總面積&quot;</span><span class="token punctuation">:</span>TS<span class="token punctuation">,</span> <span class="token string">&quot;樓層數目&quot;</span><span class="token punctuation">:</span>NF<span class="token punctuation">,</span> <span class="token string">&quot;落成年份&quot;</span><span class="token punctuation">:</span>YB<span class="token punctuation">,</span> <span class="token string">&quot;地台&quot;</span><span class="token punctuation">:</span>FS<span class="token punctuation">,</span><span class="token string">&quot;天花高度&quot;</span><span class="token punctuation">:</span>CH<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 用字典格式告知 pandas 要做成 DataFrame 的數據</span>
Table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),d=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Table<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string">&quot;BuildingInfo.csv&quot;</span><span class="token punctuation">,</span> index <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># index可加，可不加 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2><hr>`,3),k={href:"https://www.osgeo.cn/beautifulsoup/#",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ithelp.ithome.com.tw/articles/10186119",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,[a("更新於 27-10-2022"),n("br"),a(" by 重韻")],-1);function m(b,g){const s=o("ExternalLinkIcon");return i(),l("div",null,[r,c(` \`\`\`
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>總面積</th>
      <th>樓層數目</th>
      <th>落成年份</th>
      <th>地台</th>
      <th>天花高度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>N/A</td>
      <td>7</td>
      <td>1960</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
</div>
\`\`\` `),d,n("ul",null,[n("li",null,[n("a",k,[a("https://www.osgeo.cn/beautifulsoup/#"),t(s)])]),n("li",null,[n("a",h,[a("https://ithelp.ithome.com.tw/articles/10186119"),t(s)])])]),v])}const f=p(u,[["render",m],["__file","X_WebCrawler.html.vue"]]);export{f as default};
