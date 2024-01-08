(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{547:function(t,s,n){"use strict";n.r(s);var a=n(7),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"物理引擎cannonjs简介和引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物理引擎cannonjs简介和引入"}},[t._v("#")]),t._v(" 物理引擎CannonJS简介和引入")]),t._v(" "),s("p",[t._v("JavaScript物理模拟引擎还是比较多的，比如Ammo.js、Physi.js、Cannon.js，这些引擎虽然语法细节有差异，但是在3D应用中开发思路是相似的。")]),t._v(" "),s("p",[t._v("本课程就以Cannon.js为例给大家讲解"),s("strong",[t._v("three.js")]),t._v("和"),s("strong",[t._v("物理引擎")]),t._v("的结合。")]),t._v(" "),s("h3",{attrs:{id:"github资源cannon-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github资源cannon-js"}},[t._v("#")]),t._v(" github资源cannon.js")]),t._v(" "),s("p",[t._v("github资源"),s("a",{attrs:{href:"https://github.com/schteppe/cannon.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("cannon.js"),s("OutboundLink")],1),t._v("：https://github.com/schteppe/cannon.js")]),t._v(" "),s("p",[t._v("cannon.js"),s("strong",[t._v("文档")]),t._v("：可以在本地静态服务器打开"),s("code",[t._v("cannon.js\\docs\\index.html")]),t._v("预览Canonjs引擎的文档。")]),t._v(" "),s("p",[t._v("cannon.js"),s("strong",[t._v("案例")]),t._v("："),s("code",[t._v("cannon.js\\examples\\")]),t._v("和"),s("code",[t._v("\\demos\\")]),t._v("目录下可以看到一些cannonjs和three.js结合的一些小例子。")]),t._v(" "),s("h3",{attrs:{id:"github资源cannon-es"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github资源cannon-es"}},[t._v("#")]),t._v(" github资源cannon-es")]),t._v(" "),s("p",[s("strong",[t._v("cannon-es")]),t._v("对"),s("strong",[t._v("cannon.js")]),t._v("进行了重写，补充支持了ES6和Typescript语法。")]),t._v(" "),s("p",[t._v("不过除了es语法版本问题，也要注意一点就是"),s("strong",[t._v("cannon-es")]),t._v("也改变了"),s("strong",[t._v("cannon.js")]),t._v("部分API写法，这一点提醒大家，你查看别人文档或代码一定注意，别人用的"),s("strong",[t._v("cannon.js")]),t._v("还是"),s("strong",[t._v("cannon-es")]),t._v("。")]),t._v(" "),s("p",[t._v("github资源"),s("a",{attrs:{href:"https://github.com/dreammonkey/cannon-es",target:"_blank",rel:"noopener noreferrer"}},[t._v("cannon-es"),s("OutboundLink")],1),t._v("：https://github.com/dreammonkey/cannon-es")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pmndrs.github.io/cannon-es/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cannon-es在线文档"),s("OutboundLink")],1),t._v("：https://pmndrs.github.io/cannon-es/docs/index.html")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pmndrs.github.io/cannon-es/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cannon-es在线案例"),s("OutboundLink")],1),t._v("：https://pmndrs.github.io/cannon-es/")]),t._v(" "),s("p",[t._v("cannon-es"),s("strong",[t._v("案例")]),t._v("："),s("code",[t._v("cannon-es\\examples\\")]),t._v("目录下可以看到一些cannonjs和three.js结合的一些小例子。")]),t._v(" "),s("p",[t._v("本课程使用"),s("strong",[t._v("cannon-es")]),t._v("给大家讲解CannonJS的使用。")]),t._v(" "),s("h3",{attrs:{id:"cannon-es安装和引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cannon-es安装和引入"}},[t._v("#")]),t._v(" cannon-es安装和引入")]),t._v(" "),s("p",[t._v("在工程化开发的时候可以通过npm命令行安装cannon.js模块。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save cannon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("es\n")])])]),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 某个API")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("World"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vec3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cannon-es"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全部API一次性引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CANNON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cannon-es"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("咱们课件中是在"),s("code",[t._v(".html")]),t._v("文件中直接引入的cannon-es，实际开发，用上面npm安装方式引入即可。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("importmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"imports"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \t\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"cannon-es"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../cannon-es/dist/cannon-es.js"')]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CANNON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cannon-es'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试是否引入成功")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CANNON'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CANNON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("World"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" World "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cannon-es'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" World"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);