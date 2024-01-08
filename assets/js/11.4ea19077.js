(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{339:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发和学习环境-引入threejs库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发和学习环境-引入threejs库"}},[t._v("#")]),t._v(" 开发和学习环境，引入threejs库")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284878005&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频讲解"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("本节课主要给大家说下threejs怎么引入的问题。")]),t._v(" "),s("ol",[s("li",[t._v("开发环境：项目开发引入threejs，比如vue或react脚手架引入threejs。")]),t._v(" "),s("li",[t._v("学习环境：入门threejs阶段，.html文件中直接引入threejs")])]),t._v(" "),s("h3",{attrs:{id:"项目的开发环境引入threejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目的开发环境引入threejs"}},[t._v("#")]),t._v(" 项目的开发环境引入threejs")]),t._v(" "),s("p",[t._v("比如你采用的是"),s("strong",[t._v("Vue + threejs")]),t._v("或"),s("strong",[t._v("React + threejs")]),t._v("技术栈，这很简单，threejs就是一个js库，直接通过"),s("strong",[t._v("npm")]),t._v("命令行安装就行。")]),t._v(" "),s("p",[t._v("npm安装特定版本three.js(注意使用哪个版本，查文档就查对应版本)")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如安装148版本")]),t._v("\nnpm install three@"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.148")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),s("h3",{attrs:{id:"npm安装后-如何引入three-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm安装后-如何引入three-js"}},[t._v("#")]),t._v(" npm安装后，如何引入three.js")]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("import * as THREE from 'three';")]),t._v(",ES6语法引入three.js核心。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入three.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果你没有前端ES6基础，可以参考我分享的前端公开课"),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1fB4y127tM/?spm_id_from=333.999.0.0&vd_source=db85d1a9d6de9b2fe41031cf5a653095",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6入门教程"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"npm安装后-如何引入three-js其他扩展库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm安装后-如何引入three-js其他扩展库"}},[t._v("#")]),t._v(" npm安装后，如何引入three.js其他扩展库")]),t._v(" "),s("p",[t._v("除了three.js核心库以外，在threejs文件包中"),s("strong",[t._v("examples/jsm")]),t._v("目录下，你还可以看到各种不同功能的扩展库。")]),t._v(" "),s("p",[t._v("一般来说，你项目用到那个扩展库，就引入那个，用不到就不需要引入。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入扩展库OrbitControls.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrbitControls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/addons/controls/OrbitControls.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入扩展库GLTFLoader.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GLTFLoader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/addons/loaders/GLTFLoader.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展库引入——旧版本，比如122, 新版本路径addons替换了examples/jsm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrbitControls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/examples/jsm/controls/OrbitControls.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"学习环境-html文件中直接引入threejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习环境-html文件中直接引入threejs"}},[t._v("#")]),t._v(" 学习环境：.html文件中直接引入threejs")]),t._v(" "),s("p",[t._v("如果不是正式开发Web3D项目，只是学习threejs功能，完全没必要用webpack或vite搭建一个开发环境。")]),t._v(" "),s("p",[t._v("学习使用的环境，只要创建一个.html文件，编写threejs代码，最后通过"),s("strong",[t._v("本地静态服务")]),t._v("打开.html文件就行。")]),t._v(" "),s("h3",{attrs:{id:"script标签方式引入three-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script标签方式引入three-js"}},[t._v("#")]),t._v(" script标签方式引入three.js")]),t._v(" "),s("p",[t._v("你可以像平时开发web前端项目一样，通过script标签把three.js当做一个js库引入你的项目。")]),t._v(" "),s("p",[t._v("three.js库可以在threejs官方文件包下面的"),s("strong",[t._v("build")]),t._v("目录获取到。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./build/three.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//随便输入一个API，测试下是否已经正常引入three.js")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("h3",{attrs:{id:"es6-import方式引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-import方式引入"}},[t._v("#")]),t._v(" ES6 import方式引入")]),t._v(" "),s("p",[t._v("给script标签设置"),s("code",[t._v('type="module"')]),t._v(",也可以在.html文件中使用"),s("code",[t._v("import")]),t._v("方式引入three.js。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现在浏览器支持ES6语法，自然包括import方式引入js文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./build/three.module.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"type-importmap-配置路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-importmap-配置路径"}},[t._v("#")]),t._v(' type="importmap"配置路径')]),t._v(" "),s("p",[t._v("学习环境中，.html文件引入three.js，最好的方式就是参考threejs官方案例，通过配置"),s("code",[t._v('<script type="importmap">')]),t._v(",实现学习环境.html文件和vue或reaact脚手架开发环境一样的写法。这样你实际项目的开发环境复制课程源码，不用改变threejs引入代码。")]),t._v(" "),s("p",[t._v("下面配置的"),s("code",[t._v('type="importmap"')]),t._v("代码具体写法不用掌握记忆，复制粘贴后，能修改目录就行，你可以去电子书课件或者课件源码中复制。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体路径配置，你根据自己文件目录设置，我的是课件中源码形式 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("importmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"imports"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"three"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../../three.js/build/three.module.js"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- 配置type="importmap",.html文件也能和项目开发环境一样方式引入threejs --\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器控制台测试，是否引入成功")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"type-importmap-配置-扩展库引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-importmap-配置-扩展库引入"}},[t._v("#")]),t._v(' type="importmap"配置——扩展库引入')]),t._v(" "),s("p",[t._v("通过配置"),s("code",[t._v('<script type="importmap">')]),t._v("，让学习环境.html文件，也能和vue或react开发环境中一样方式方式引入threejs扩展库。")]),t._v(" "),s("p",[t._v("配置"),s("code",[t._v("addons/")]),t._v("等价于"),s("code",[t._v("examples/jsm/")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("importmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"imports"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"three"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./three.js/build/three.module.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"three/addons/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./three.js/examples/jsm/"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// three/addons/路径之后对应的是three.js官方文件包`/examples/jsm/`中的js库")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展库OrbitControls.js")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrbitControls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/addons/controls/OrbitControls.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展库GLTFLoader.js")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GLTFLoader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three/addons/loaders/GLTFLoader.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OrbitControls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GLTFLoader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);