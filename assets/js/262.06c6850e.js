(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{589:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一个webgl案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个webgl案例"}},[t._v("#")]),t._v(" 第一个WebGL案例")]),t._v(" "),a("p",[t._v("本节课给大家演示一个WebGL案例，就是在web页面上绘制一个方形点，虽然超级简单，但是可以把WebGL整个的代码结构，给你完美展示出来。")]),t._v(" "),a("h3",{attrs:{id:"创建一个canvas画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个canvas画布"}},[t._v("#")]),t._v(" 创建一个Canvas画布")]),t._v(" "),a("p",[t._v("创建一个Canvas画布，用于显示WebGL的渲染结果，canvas元素和div等元素一样是HTML的一个元素，区别地方在于，Canvas画布具有2D和3D绘图功能。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 宽高度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("canvas id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webgl"')]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background: #000;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("创建一个html文件，在里面body中插入一个canvas元素。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用WebGL绘制一个点"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webgl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("500"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("500"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"获取webgl上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取webgl上下文"}},[t._v("#")]),t._v(" 获取webgl上下文")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webgl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("通过"),a("code",[t._v("getElementById()")]),t._v("方法获取canvas画布对象")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webgl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("通过方法"),a("code",[t._v(".getContext()")]),t._v("获取WebGL上下文,然后你就可以通过返回的对象"),a("code",[t._v("gl")]),t._v("调用WebGL API，实现3D绘图。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webgl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("通过gl对象，可以调用各种WebGL API,通过这些WebGL API可以控制显卡GPU绘制3D图案。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webgl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linkProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"渲染管线概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染管线概念"}},[t._v("#")]),t._v(" 渲染管线概念")]),t._v(" "),a("p",[t._v("入门WebGL，比较重要的一点就是建立"),a("strong",[t._v("渲染管线")]),t._v("的概念。")]),t._v(" "),a("p",[t._v("你可以把"),a("strong",[t._v("渲染管线")]),t._v("想象为显卡GPU上的一条流水线，渲染管线上有不同的功能单元。WebGL"),a("strong",[t._v("渲染管线")]),t._v("上的各个功能单元，可以通过刚刚介绍的通过"),a("code",[t._v("WebGL API")]),t._v("进行控制。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwebgl/webgl%E6%B8%B2%E6%9F%93%E7%AE%A1%E7%BA%BF.png",alt:"webgl渲染管线"}})]),t._v(" "),a("p",[t._v("整个"),a("strong",[t._v("渲染管线")]),t._v("，是比较复杂的，本节课只要求知道渲染管线这个概念就行，更多具体细节，在下来WebGL课程中，会一一介绍。")]),t._v(" "),a("h3",{attrs:{id:"顶点着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶点着色器"}},[t._v("#")]),t._v(" 顶点着色器")]),t._v(" "),a("p",[t._v("编写顶点着色器需要用到一门语言，就是前面提到的着色器语言GLSL ES。")]),t._v(" "),a("p",[t._v("在js代码中，着色器GLSL代码，要使用字符串的形式表达。为了方便预览顶点着色器代码，咱们用模板字符串"),a("code",[t._v("``")]),t._v("的形式去写,模板字符串"),a("code",[t._v("``")]),t._v("的按键位于键盘Tab键的上面。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n这里面写着色器GLSL ES代码\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("p",[t._v("按照着色器语言习惯，创建一个名为"),a("code",[t._v("main")]),t._v("的主函数，前面使用关键字"),a("code",[t._v("void")]),t._v("类似C语言的语法，表示没有返回值。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nvoid main(){\n    \n}\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("p",[a("code",[t._v("gl_PointSize")]),t._v("和"),a("code",[t._v("gl_Position")]),t._v("是内置变量，所谓内置变量，就是不用声明就可以使用。")]),t._v(" "),a("p",[a("code",[t._v("gl_PointSize")]),t._v("表示渲染点的像素大小，注意用小数(浮点数)表示。")]),t._v(" "),a("p",[a("code",[t._v("gl_Position")]),t._v("表示顶点的位置，值是四维向量vec4,比如表示"),a("code",[t._v("(x,y,z)")]),t._v("坐标，书写形式是"),a("code",[t._v("vec4(x,y,z,1.0)")]),t._v(",按照语法规定，前面三个参数表示xyz坐标，最后一个参数是1.0。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点着色器源码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nvoid main(){\n    gl_PointSize = 20.0;\n    gl_Position = vec4(0.0,0.0,0.0,1.0);\n}\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("p",[t._v("顶点着色器代码就是在GPU上的"),a("strong",[t._v("顶点着色器")]),t._v("功能单元执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwebgl/webgl%E6%B8%B2%E6%9F%93%E7%AE%A1%E7%BA%BF.png",alt:"webgl渲染管线"}})]),t._v(" "),a("h3",{attrs:{id:"片元着色器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#片元着色器"}},[t._v("#")]),t._v(" 片元着色器")]),t._v(" "),a("p",[t._v("片元着色器代码在GPU上的片元着色器功能单元执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwebgl/webgl%E6%B8%B2%E6%9F%93%E7%AE%A1%E7%BA%BF.png",alt:"webgl渲染管线"}})]),t._v(" "),a("p",[t._v("内置变量"),a("code",[t._v("gl_FragColor")]),t._v("用来设置片元(像素)颜色，以为本节课为例就是方形点的像素值。")]),t._v(" "),a("p",[a("code",[t._v("gl_FragColor")]),t._v("的值是四维向量vec4，前面三个参数是颜色RGB值，第四个参数是透明度值，第一次学习先给一个1.0表示不透明就行。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//片元着色器源码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nvoid main(){\n    // 红色\n    gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n}    \n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("h3",{attrs:{id:"编译着色器-并创建程序对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译着色器-并创建程序对象"}},[t._v("#")]),t._v(" 编译着色器，并创建程序对象")]),t._v(" "),a("p",[t._v("顶点着色器、片元着色器代码如果想在GPU上执行，需要先通过WebGL API进行编译处理，并创建一个程序对象"),a("code",[t._v("program")]),t._v("。")]),t._v(" "),a("p",[t._v("学习建议：对于大部分同学学习的重点是"),a("strong",[t._v("着色器语言GLSL")]),t._v("和"),a("strong",[t._v("渲染管线")]),t._v("。如果你不是直接使用原生WebGL API做项目，或者封装3D引擎，你完全不需要记住这些API，只需要有个印象就行。")]),t._v(" "),a("p",[t._v("对于下面代码，你只需要跟着课程过一遍就行，不要求记住，甚至复制粘贴一遍也无所谓。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建顶点着色器对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERTEX_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建片元着色器对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragmentShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FRAGMENT_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入顶点、片元着色器源代码")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译顶点、片元着色器")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建程序对象program")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//附着顶点着色器和片元着色器到program")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//链接program")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linkProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用program")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"绘制gl-drawarrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制gl-drawarrays"}},[t._v("#")]),t._v(" 绘制"),a("code",[t._v("gl.drawArrays()")])]),t._v(" "),a("p",[t._v("通过程序对象program处理好上面着色器代码，你在网页上还不能看到渲染效果，还需要通过一个绘制的API"),a("code",[t._v("gl.drawArrays()")]),t._v("来执行绘制。")]),t._v(" "),a("p",[a("code",[t._v("gl.drawArrays()")]),t._v("在后面会经常用到，因为本节课例子太过简单，只能简单解释下"),a("code",[t._v("gl.drawArrays()")]),t._v("的参数。")]),t._v(" "),a("p",[t._v("文档"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays",target:"_blank",rel:"noopener noreferrer"}},[t._v("gl.drawArrays()"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("参数1"),a("code",[t._v("mode")]),t._v("表示绘制模式，有多种模式，"),a("code",[t._v("gl.POINTS")]),t._v("表示绘制形式是点，后面还会介绍线和三角形。")]),t._v(" "),a("p",[t._v("参数2"),a("code",[t._v("first")]),t._v("表示从第几个点开始绘制，本节课案例比较简单，只有一个点，设置0即可")]),t._v(" "),a("p",[t._v("参数3"),a("code",[t._v("count")]),t._v("表示总共有多少点，本节课案例只提了一个点的坐标，所以设置为1。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开始绘制，显示器显示结果")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POINTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"封装一个着色器初始化函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装一个着色器初始化函数"}},[t._v("#")]),t._v(" 封装一个着色器初始化函数")]),t._v(" "),a("p",[t._v("初始化着色器的代码，可以封装在一个函数"),a("code",[t._v("initShader")]),t._v("中，因为后面每节课的案例，都会用到这段固定的代码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化着色器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开始绘制，显示器显示结果")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POINTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明初始化着色器函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建顶点着色器对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERTEX_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建片元着色器对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragmentShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FRAGMENT_SHADER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入顶点、片元着色器源代码")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译顶点、片元着色器")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建程序对象program")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//附着顶点着色器和片元着色器到program")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//链接program")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("linkProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用program")]),t._v("\n    gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useProgram")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回程序program对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"练习测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习测试"}},[t._v("#")]),t._v(" 练习测试")]),t._v(" "),a("p",[t._v("你可以通过改变WebGL着色器代码内置变量"),a("code",[t._v("gl_PointSize")]),t._v("、"),a("code",[t._v("gl_Position")]),t._v("、"),a("code",[t._v("gl_FragColor")]),t._v("测试WebGL渲染效果的变化。")]),t._v(" "),a("p",[a("code",[t._v("gl_PointSize=20.0")]),t._v("改为"),a("code",[t._v("gl_PointSize=10.0")]),t._v("，观察canvas画布上点的大小变化")]),t._v(" "),a("p",[a("code",[t._v("gl_Position =vec4(0.0,0.0,0.0,1.0)")]),t._v("改为"),a("code",[t._v("gl_Position =vec4(0.5,0.0,0.0,1.0)")]),t._v("，观察canvas画布上点的位置变化")]),t._v(" "),a("p",[a("code",[t._v("gl_FragColor=vec4(1.0,0.0,0.0,1.0)")]),t._v("更改为"),a("code",[t._v("gl_FragColor = vec4(0.0,0.0,1.0,1.0)")]),t._v("，观察屏幕canvas画布上点的颜色变化")])])}),[],!1,null,null,null);a.default=e.exports}}]);