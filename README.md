# huobantong-fe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 色系说明

> /assets/scss/base.scss

> $themeColor:#ff5e5e;//主色系,用户重要标题、信息背景色、按钮等

> $assistColor:#9bd9fd;//辅色系，能链接的文字，icon

> $fontColor:#333333;//重要文字，标题，大部分文字

> $contentFontColor:#666666;//正文内容文字

> $tipsFontColor:#999999;// 提示说明文字

> $assistFontColor:#cccccc;//辅助文字，描边色

> $splitColor:#e0e0e0;//分割线颜色，按钮描边色

> $backgroundColor:#f5f5f5;//灰色背景

> $fs-32:32px;//店铺名称

> $fs-20:20px;//商品价格，商品标题

> $fs-18:18px;//少数主要按钮文字

> $fs-16:16px;//导航，标题

> $fs-14:14px;//正文,菜单，标题

> $fs-12:12px;//正文，辅助文字，按钮文字

> $w-1200:1200px;//正文内容宽度

---
title: 海拍客前端分析
tags: 海拍客,web前端,dot.js,js模板引擎
---
2018年08月23日 
作者:陈章维

### DNS Prefetch
> DNS Prefetch，即DNS预获取，是前端优化的一部分。一般来说，在前端优化中与 DNS 有关的有两点： 一个是减少DNS的请求次数，另一个就是进行DNS预获取 。

> DNS 作为互联网的基础协议，其解析的速度似乎很容易被网站优化人员忽视。现在大多数新浏览器已经针对DNS解析进行了优化，典型的一次DNS解析需要耗费 20-120 毫秒，减少DNS解析时间和次数是个很好的优化方式。DNS Prefetching 是让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入是串行的网络操作，所以这个方式能 减少用户的等待时间，提升用户体验 。

> 默认情况下浏览器会对页面中和当前域名（正在浏览网页的域名）不在同一个域的域名进行预获取，并且缓存结果，这就是隐式的 DNS Prefetch。如果想对页面中没有出现的域进行预获取，那么就要使用显示的 DNS Prefetch 了。

> 目前大多数浏览器已经支持此属性，支持版本如下：
> – Safari: 5+

> – Chrome: All

> – Firefox: 3.5+

> – Opera: Unknown

> – IE: 9+ (called “Pre-resolution” on blogs.msdn.com)

> 其中 Chrome 和 Firefox 3.5+ 内置了 DNS Prefetching 技术并对DNS预解析做了相应优化设置。所以 即使不设置此属性，Chrome 和 Firefox 3.5+ 也能自动在后台进行预解析 。

目前很多大型站点也应用了这一优化，例如：

淘宝：
![enter description here](http://img2.tuicool.com/auyeumm.png%21web)

支付宝：
![enter description here](http://img1.tuicool.com/3E77zui.png%21web)

海拍客:

``` xml
    <link rel="dns-prefetch" href="//mall.hipac.cn"/>
    <link rel="dns-prefetch" href="//ytstatic.hipac.cn"/>
    <link rel="dns-prefetch" href="//staticonline.hipac.cn"/>
    <link rel="dns-prefetch" href="//img.hicdn.cn"/>
```
> DNS Prefetch 应该尽量的放在网页的前面，推荐放在 `<meta charset="UTF-8">` 后面。
### 图片处理

#### 1.海拍客页面中所有的商品图片的文件格式为.jpg@.webp

> WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器宽带资源和数据空间。Facebook Ebay等知名网站已经开始测试并使用WebP格式。它的优点就是同等画面质量下，体积比jpg、png这些少了25%以上。
但WebP是一种有损压缩。

#### 2.图片CDN加速
//img.hicdn.cn/banner/201708/08090946383919.jpg@.webp

### javascript延迟加载及异步(defer和async)
> defer和async的比较

> 相同点：  

> 加载文件时不阻塞页面渲染；

> 对于inline的script无效；

> 使用这两个属性的脚本中不能调用document.write方法；

> 有脚本的onload的事件回调；

> 允许不定义属性值，仅仅使用属性名；

>  不同点：

>  html的版本html4.0中定义了defer；html5.0中定义了async；这将造成由于浏览器版本的不同而对其支持的程度不同；

>  执行时刻：每一个async属性的脚本都在它下载结束之后立刻执行，同时会在window的load事件之前执行。所以就有可能出现脚本执行顺序被打乱 的情况；每一个defer属性的脚本都是在页面解析完毕之后，按照原本的顺序执行，同时会在document的DOMContentLoaded之前执行。

> 这两个属性会有三种可能的组合：

> 如果async为true，那么脚本在下载完成后异步执行。

> 如果async为false，defer为true，那么脚本会在页面解析完毕之后执行。

> 如果async和defer都为false，那么脚本会在页面解析中，停止页面解析，立刻下载并且执行。

> 海拍客客服组件异步下载执行，不影响主线程渲染:

<script src="//qiyukf.com/script/441b93a43541bf6927981133b31d5089.js" defer="defer" async charset="utf-8"></script>

### 数据加载（减少http请求发送数量）

> 1.海拍客首页渲染需要很多数据，但是只发送了两个ajax 请求，这两个ajax 请求中返回了所有首页需要渲染的商品信息。

> 2.海拍客商品展示采用了分类显示（浏览器无限滚动的方式），当用户滚动条将要移动到底部的时候，发送商品分页请求，渲染新的商品数据，拼接在网页末端。

### 模板渲染（dot.js）

> 海拍客前端数据渲染使用了dot.js 模板引擎。

> 前端开发工程师对主流模板引擎的渲染测试对比:

https://www.cnblogs.com/guohu/p/3870677.html

> ![enter description here](http://thyrsi.com/t6/361/1535091701x1822611401.png)

### css、js 压缩
