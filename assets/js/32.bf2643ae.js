(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{359:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"【选修】vue-three-js开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【选修】vue-three-js开发环境"}},[t._v("#")]),t._v(" 【选修】Vue+Three.js开发环境")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1285305485&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频讲解"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("Vue开发环境引入threejs")]),t._v(" "),s("li",[t._v("提醒：如果你不怎么熟悉"),s("strong",[t._v("Vue")]),t._v("，那么本节课你完全不用学习，直接跳过去就行")]),t._v(" "),s("li",[t._v("本节课是"),s("strong",[t._v("选修内容")]),t._v("，即便不学习本节课，也不影响你学习threejs后面的知识点。")])]),t._v(" "),s("p",[t._v("如果你想了解更多Vue+Threejs结合开发的详细知识点，可以参考"),s("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=1212760820&share=2&shareId=400000000594054",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统课程"),s("OutboundLink")],1),t._v("后面Vue+Threejs实战案例或课件里面Vue+Threejs案例模板。")]),t._v(" "),s("h3",{attrs:{id:"threejs与前端框架结合问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threejs与前端框架结合问题"}},[t._v("#")]),t._v(" threejs与前端框架结合问题")]),t._v(" "),s("p",[t._v("有些同学是前端转来过来的，受到平时开发习惯影响，第一反应可能是threejs能不能与vue或react结合。")]),t._v(" "),s("p",[t._v("其实threejs知识点相对普通web前端是比较独立的，threejs的用法，你直接用.html文件写，还是结合vue或React框架写，API语法都是一样的。")]),t._v(" "),s("p",[t._v("所以你学习threejs的重点不是考虑前端框架问题，而是threejs本身，掌握了threejs，剩下的事情就很简单了。")]),t._v(" "),s("h3",{attrs:{id:"vue与threejs结合思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue与threejs结合思路"}},[t._v("#")]),t._v(" Vue与threejs结合思路")]),t._v(" "),s("p",[t._v("回顾下前面"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/b483f0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.6. 第一个3D案例"),s("OutboundLink")],1),t._v("知识点")]),t._v(" "),s("p",[t._v("three.js执行渲染方法"),s("code",[t._v(".render();")]),t._v("会输出一个canvas画布"),s("code",[t._v("renderer.domElement")]),t._v("，这个Canvas画布本质上就是一个HTML元素。")]),t._v(" "),s("p",[t._v("threejs与Vue结合的时候，你只需要把Canvas画布"),s("code",[t._v("renderer.domElement")]),t._v("插入到你的Vue页面上就行，插入任何一个div或其它元素中，或者放到某个Vue组件中都行。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WebGL渲染器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//three.js执行渲染命令会输出一个canvas画布(HTML元素)")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("接下来，你写的threejs代码结构，并不一定就要和我下面视频完全一致，你可以根据你自己项目情况，自由调整。")]),t._v(" "),s("h3",{attrs:{id:"脚手架vite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚手架vite"}},[t._v("#")]),t._v(" 脚手架"),s("code",[t._v("Vite")])]),t._v(" "),s("p",[t._v("使用脚手架"),s("strong",[t._v("Vite")]),t._v("快速创建一个vue工程文件，具体跟着视频可操作即可")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm create  vite@latest\n")])])]),s("p",[t._v("执行命令"),s("code",[t._v("npm create vite@latest")]),t._v("，然后选择你想要的开发环境即可。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cn.vitejs.dev/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite使用文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("第一步是选择你的前端框架，第二步是选择是否支持TS。")]),t._v(" "),s("p",[t._v("注意：安装使用Vite之前，确保你电脑已经安装"),s("a",{attrs:{href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),s("OutboundLink")],1),t._v("了，尽量用最新版本的。")]),t._v(" "),s("h3",{attrs:{id:"预览vite项目默认效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览vite项目默认效果"}},[t._v("#")]),t._v(" 预览vite项目默认效果")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("命令行执行"),s("code",[t._v("npm i")]),t._v("，安装所有默认依赖")])]),t._v(" "),s("li",[s("p",[t._v("命令行执行"),s("code",[t._v("npm run dev")]),t._v("，查看vite里面Vue代码默认渲染效果。")])])]),t._v(" "),s("p",[t._v("现在你可以把默认的HTML和CSS代码删掉，然后在引入threejs代码。")]),t._v(" "),s("h3",{attrs:{id:"npm安装threejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm安装threejs"}},[t._v("#")]),t._v(" npm安装threejs")]),t._v(" "),s("p",[t._v("安装threesjs时候，你可以指定你想要的版本。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如安装157版本")]),t._v("\nnpm install three@"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.157")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v("\n")])])]),s("h3",{attrs:{id:"vue中引入threejs代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue中引入threejs代码"}},[t._v("#")]),t._v(" Vue中引入threejs代码")]),t._v(" "),s("p",[t._v("新建"),s("code",[t._v("index.js")]),t._v("文件,把threejs代码写在index.js里面。")]),t._v(" "),s("p",[s("code",[t._v("index.js")]),t._v("文件引入three.js。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("复制前面课程"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/b483f0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一个3D案例"),s("OutboundLink")],1),t._v("的代码，粘贴到"),s("code",[t._v("index.js")]),t._v("文件。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 三维场景")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scene "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BoxGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000ff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AxesHelper：辅助观察的坐标系")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axesHelper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AxesHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axesHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//高度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("292")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("223")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("185")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WebGL渲染器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//three.js执行渲染命令会输出一个canvas画布(HTML元素)，你可以插入到web页面中")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("然后把threejs对应的"),s("code",[t._v("index.js")]),t._v("文件引入到vue的"),s("code",[t._v("main.js")]),t._v("文件中。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.js'")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行threejs代码")]),t._v("\n")])])]),s("p",[t._v("当然你也可以根据需要，在其它Vue组件中调用执行threejs代码。")]),t._v(" "),s("h3",{attrs:{id:"设置canvas画布全屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置canvas画布全屏"}},[t._v("#")]),t._v(" 设置canvas画布全屏")]),t._v(" "),s("p",[t._v("上面画布设置了固定宽高度，下面改成文档区域宽高度，也就是所谓canvas画布全屏")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以放到vite项目style.css文件中")]),t._v("\nbody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把canvas画布与body区域边距设置为0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"引入扩展库orbitcontrols"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入扩展库orbitcontrols"}},[t._v("#")]),t._v(" 引入扩展库"),s("code",[t._v("OrbitControls")])]),t._v(" "),s("p",[t._v("查看文件"),s("strong",[t._v("node_modules")]),t._v("，在目录"),s("code",[t._v("three/examples/jsm")]),t._v("中，你可以看到threejs的很多扩展库。")]),t._v(" "),s("p",[t._v("对于这些扩展库，不会一次都引入，一般你用到那个，单独引入即可，下面以"),s("code",[t._v("OrbitControls")]),t._v("为例给大家展示。")]),t._v(" "),s("p",[s("code",[t._v("OrbitControls")]),t._v("功能就是旋转缩放平移，在1.9小节有具体讲解："),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/837374/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.9. 相机控件OrbitControls"),s("OutboundLink")],1),t._v("，如果还没学习，可以提前看下。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrbitControls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/examples/jsm/controls/OrbitControls.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("复制"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/837374/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.9. 相机控件OrbitControls"),s("OutboundLink")],1),t._v("里面关于相机控件的代码。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置相机控件轨道控制器OrbitControls")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" controls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrbitControls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景")]),t._v("\ncontrols"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行渲染操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听鼠标、键盘事件")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);