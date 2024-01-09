(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{612:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webgpu顶点数据插值计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webgpu顶点数据插值计算"}},[t._v("#")]),t._v(" WebGPU顶点数据插值计算")]),t._v(" "),s("p",[t._v("本节课给大家介绍下，在WebGPU比较常用的一个知识点，就是顶点数据的插值计算。")]),t._v(" "),s("h3",{attrs:{id:"结构体方式设置顶点着色器main-返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构体方式设置顶点着色器main-返回值"}},[t._v("#")]),t._v(" 结构体方式设置顶点着色器"),s("code",[t._v("main()")]),t._v("返回值")]),t._v(" "),s("p",[t._v("先学习一个与顶点着色器返回值相关的新语法。")]),t._v(" "),s("p",[t._v("前面课程常用的顶点着色器代码，返回值设置方式"),s("code",[t._v("@builtin(position) vec4<f32>")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("顶点着色器main函数返回值用结构体的方式设置。")]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("var out:Out;")]),t._v("通过结构体Out定义一个变量out，类似JavaScript语言中的类，通过new实例化一个对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("fn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过结构体生成一个变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("struct Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"顶点位置数据插值计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶点位置数据插值计算"}},[t._v("#")]),t._v(" 顶点位置数据插值计算")]),t._v(" "),s("p",[t._v("为了方便理解"),s("strong",[t._v("顶点数据的插值计算")]),t._v("，以片元的坐标计算为例说明，具体就是获取WebGPU 3D标准设备坐标系下，每个片元对应的xyz坐标。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在xyz轴上分别取一个点构成构成一个三角形")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("在WebGPU 3D坐标系下，每个片元都有一个xyz坐标值。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%AD%89%E8%BE%B9%E4%B8%89%E8%A7%92%E5%BD%A23D%E6%8A%95%E5%BD%B1.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E5%9B%BE%E5%85%83%E8%A3%85%E9%85%8D%E5%85%89%E6%A0%85%E5%8C%96.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_1-声明一个变量表示片元xyz坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明一个变量表示片元xyz坐标"}},[t._v("#")]),t._v(" 1. 声明一个变量表示片元xyz坐标")]),t._v(" "),s("p",[t._v("顶点着色器返回的数据结构Out中，声明一个变量"),s("code",[t._v("vPosition:vec3<f32>")]),t._v("表示顶点的xyz坐标，然后使用"),s("code",[t._v("@location(0)")]),t._v("标记，注意这里的"),s("code",[t._v("@location(0)")]),t._v("与main函数参数中的"),s("code",[t._v("@location(0)")]),t._v("不是一回事，也不冲突。一般需要顶点着色器输出的变量，需要使用@location()标记，location的参数可以是0、1、2等，本节课比较简单，只有一个变量，标记为0即可。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("struct Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 位置变量vPosition表示顶点位置坐标插值后的坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过location标记改变量，location的参数可以是0、1、2等")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vPosition可以用来表示每个片元的坐标xyz")]),t._v("\n    @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vPosition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("表示顶点位置数据的变量"),s("code",[t._v("pos")]),t._v("赋值给"),s("code",[t._v("out.vPosition")]),t._v("，这样顶点着色器功能单元默认就会对顶点进行插值计算，所谓插值计算，就是给pos对应的顶点数据，插入更多的顶点坐标，与片元一一对应，表示每个片元的xyz坐标值。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("fn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过结构体生成一个变量")]),t._v("\n    out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vPosition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插值计算，生成的每个片元对应的xyz坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-片元着色器获取插值后的片元坐标xyz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-片元着色器获取插值后的片元坐标xyz"}},[t._v("#")]),t._v(" 2. 片元着色器获取插值后的片元坐标xyz")]),t._v(" "),s("p",[t._v("main参数通过"),s("code",[t._v("@location(0)")]),t._v("声明一个变量，和顶点着色器中vPosition变量关联起来。关联起来的原因就是，两个变量都是通过"),s("code",[t._v("@location(0)")]),t._v("标记的，"),s("code",[t._v("@location()")]),t._v("的参数都是0。")]),t._v(" "),s("p",[s("code",[t._v("vPosition.x")]),t._v("表示片元的x坐标，通过课程代码中三角形三个顶点的坐标可以判断"),s("code",[t._v("vPosition.x")]),t._v("的范围是0~1之间。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("@fragment\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vPosition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据x坐标设置片元颜色")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);