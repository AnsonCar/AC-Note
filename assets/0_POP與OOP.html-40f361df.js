import{_ as e,p as n,q as i,a1 as s}from"./framework-5866ffd3.js";const d={},a=s(`<h1 id="pop-與-oop" tabindex="-1"><a class="header-anchor" href="#pop-與-oop" aria-hidden="true">#</a> POP 與 OOP</h1><blockquote><p>POP 和 OOP 都是一種 <strong>編程思維</strong>，一種<strong>解決問題的方法</strong>。</p></blockquote><h2 id="介紹-pop-與-oop" tabindex="-1"><a class="header-anchor" href="#介紹-pop-與-oop" aria-hidden="true">#</a> 介紹 POP 與 OOP</h2><p>OOP 全稱為 Object-oriented programming，中文為 面向對像編程。<br> 本意是想把 各種零散的數據，可以有一個整合的地方，方便<strong>管理</strong>及<strong>理解</strong>。</p><p>與其相反的理念，為 POP 全稱為 Procedure Oriented programming，中文為 面向過程編程。<br> 是編程一開始的編程方式。</p><p>例子，現在我要用Java 儲存兩個 學生 的 姓名(name) 、性別(sex) 及 年級(year)，最後輸出學生資料。</p><p>如果我使用POP是這樣的：（sem1做法）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class POP {
    public static void main(String s[]) {
        // 第一個學生
        String stdName = &quot;Anson&quot;;
        int stdSex = 1;
        int stdYear = 1;
        System.out.printf(&quot;Name: %s , Sex: %d, Year: %d \\n&quot;, stdName, stdSex, stdYear);

        // 第二個學生
        String stdName2 = &quot;AnsonTsang&quot;;
        int stdSex2 = 0;
        int stdYear2 = 2;
        System.out.printf(&quot;Name: %s , Sex: %d, Year: %d \\n&quot;, stdName2, stdSex2, stdYear2);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我使用OOP是這樣的：（sem2做法，Java真正用法~）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Student {
    // Data member
    private String name;
    private int sex;
    private int year;

    // Constructor
    public Student(String name, int sex, int year) {
        setName(name);
        setSex(sex);
        setYear(year);
    }

    // Method
    // Name
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // Sex
    public void setSex(int sex) {
        this.sex = sex;
    }

    public int getSex() {
        return sex;
    }

    // Year
    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }

    // toString
    public String toString() {
        return &quot;Name: &quot; + getName() + &quot;, Sex: &quot; + getSex() + &quot;, Year: &quot; + getYear();
    }
}

public class OOP {
    public static void main(String s[]) {
        // 學生
        Student[] std = new Student[2];
        std[0] = new Student(&quot;Anson&quot;, 1, 1);
        std[1] = new Student(&quot;AnsonTsang&quot;, 0, 2);

        for (int i = 0; i &lt; std.length; i++) {
            System.out.println(std[i].toString());
        }
        // for(Student student:std){
        // System.out.println(student.toString());
        // }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<strong>OOP</strong>相對<strong>POP</strong>更加複雜，<br> 但是OOP的重用性更高，所以於 大型開發中 需要大量使用OOP，<br> 特別在遊戲制作領域（每個角色都是一個對像(object)）。</p><h3 id="介紹java-oop的特點" tabindex="-1"><a class="header-anchor" href="#介紹java-oop的特點" aria-hidden="true">#</a> 介紹Java OOP的特點</h3><p>從上面例子可以得知，JavaOOP有四個主要特點。</p><ol><li>class 類</li><li>data member / attribute 數據成員 / 屬性</li><li>constructor 構成器</li><li>method 方法</li></ol><p>data member / attribute 可以當作成 對像的<strong>資料</strong>（變量），<br> 通常 attribute 我們都會設計為 <strong>private</strong>，<br> 意思是 不對外公開 我的內部資料。</p><p>為何要這樣做？<br> 試想想，你的社交帳號，會對所有人公開你的所有資料嗎？相信你不會的，嗯，我相信。</p><blockquote><p>如果有人想<strong>知道</strong>你的資料，自然就會<strong>問</strong>你，然後你再<strong>回答</strong>他。</p></blockquote><p>OOP 也是這樣</p><blockquote><p>如果有人 <strong>取得</strong> 我的數據，自然就會<strong>訪問</strong> Method，然後Method再<strong>return</strong>他。</p></blockquote><p>所以，Method 通常會設計為 <strong>public</strong> 用於 <strong>取得</strong>及<strong>設置</strong>數據 (getter, setter)。</p><p>同理，Method 作為 <strong>統一</strong>設置數據的地方，更可以在引入外來數據時，去檢查外來數據的可用性，再設定自身數據為外來數據，保障了數據可靠性。 例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 設定 年級 時， 如果 year 小於 1， year 設定為 1
public void setYear(int year) {

    // this.year = year &lt; 1 ? 1 : year;

    if (year &lt; 1) {
        this.year = 1;
    } else {
        this.year = year;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>順便解釋下，為何我們需要使用 <code>this</code> 這個 keyword，<code>this</code> 是 指向自己 的意思， <code>this.year</code> 可以理解 為 <code>我的年級</code>， 上述例子 因為 在 （） 中引入了 一個叫<code>year</code> 的變量（稱為<code>引入年級</code>）， 跟 <code>我的年級</code> 變量名相撞， 當 不使用this時，也就是 <code>yaer = yaer;</code> ， 因為 {} 作用域 的關係，會當成 <code>引入年級 = 引入年級;</code>， 為了可以順利改變 <code>我的年級</code>，就加了 <strong>this</strong> 這個keyword。</p><p>其實我們只要作小修改，就可以不使用 <strong>this</strong>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void setYear(int y) {
    // 不撞 變量名
    year = y &lt; 1 ? 1 : y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後，constructor 不使用 <code>this .XxxX = XxxX</code> 這個引入數據的方法，而是 <code>setXxxX( XxxX )</code> 的原因跟上述內容相關。 因為 我們 需要利用 Method 去檢查外來數據的<strong>可用性</strong>。</p>`,26),r=[a];function l(t,v){return n(),i("div",null,r)}const o=e(d,[["render",l],["__file","0_POP與OOP.html.vue"]]);export{o as default};
