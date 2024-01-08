(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{605:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"顶点着色器矩阵变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶点着色器矩阵变换"}},[t._v("#")]),t._v(" 顶点着色器矩阵变换")]),t._v(" "),s("p",[t._v("先回顾下"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/55f573/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.5节"),s("OutboundLink")],1),t._v("关于WebGPU渲染管线顶点着色器功能单元的讲解。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E6%B8%B2%E6%9F%93%E7%AE%A1%E7%BA%BF%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E5%9B%BE%E6%A1%88.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E9%A1%B6%E7%82%B9%E7%9D%80%E8%89%B2%E5%99%A8%E5%8A%9F%E8%83%BD.png",alt:""}})]),t._v(" "),s("p",[t._v("下面就给大家演示一个案例，通过顶点着色器对所有的顶点位置坐标，进行缩放变换。")]),t._v(" "),s("h3",{attrs:{id:"wgsl矩阵语法-矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wgsl矩阵语法-矩阵"}},[t._v("#")]),t._v(" WGSL矩阵语法：矩阵")]),t._v(" "),s("p",[t._v("写WebGPU案例之前，先来熟悉一个WGSL相关的语法，就是特殊数据类型"),s("strong",[t._v("矩阵")]),t._v("，矩阵的语法可以参考，前面"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/d5968c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.4.WGSL语法"),s("OutboundLink")],1),t._v("关于向量"),s("code",[t._v("vec3")]),t._v("或"),s("code",[t._v("vec4")]),t._v("的讲解，基本相似。")]),t._v(" "),s("p",[t._v("2x2矩阵：mat2x2"),s("f32")],1),t._v(" "),s("p",[t._v("3x3矩阵：mat3x3"),s("f32")],1),t._v(" "),s("p",[t._v("4x4矩阵：mat4x4"),s("f32")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个2乘2矩阵")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a  b  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//c  d")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 矩阵元素一列一列输入mat2x2<f32>()")]),t._v("\nmat2x2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"wgslmat4x4-f32-表示缩放矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wgslmat4x4-f32-表示缩放矩阵"}},[t._v("#")]),t._v(" WGSL"),s("code",[t._v("mat4x4<f32>()")]),t._v("表示缩放矩阵")]),t._v(" "),s("p",[s("code",[t._v("mat4x4<f32>()")]),t._v("创建一个4x4缩放矩阵(沿着x、y分别缩放0.5倍)。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个缩放矩阵(沿着x、y分别缩放0.5倍)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0.5  0    0    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0.5  0    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0    1    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0    0    1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 矩阵元素一列一列输入mat4x4<f32>()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat4x4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"顶点着色器缩放矩阵缩放顶点坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶点着色器缩放矩阵缩放顶点坐标"}},[t._v("#")]),t._v(" 顶点着色器缩放矩阵缩放顶点坐标")]),t._v(" "),s("p",[t._v("WGSL顶点着色器中，4x4缩放矩阵mat4x4"),s("f32",[t._v("对顶点坐标缩放变换。")])],1),t._v(" "),s("p",[t._v("在WebGPU渲染管线上，所有的顶点坐标，都会被缩放矩阵改变。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个缩放矩阵(沿着x、y分别缩放0.5倍)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0.5  0    0    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0.5  0    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0    1    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0    0    0    1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 矩阵元素一列一列输入mat4x4<f32>()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat4x4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pos2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//pos转齐次坐标")]),t._v("\n    pos2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pos2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缩放矩阵对顶点缩放变换")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("不声明变量pos2，直接执行"),s("code",[t._v("return S * vec4<f32>(pos,1.0);")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个缩放矩阵(沿着x、y分别缩放0.5倍)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat4x4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缩放矩阵对顶点缩放变换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"平移矩阵平移顶点坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平移矩阵平移顶点坐标"}},[t._v("#")]),t._v(" 平移矩阵平移顶点坐标")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("@vertex\nfn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vec3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builtin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个平移矩阵(沿着x、y轴分别平移-1、-1)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1   0   0    -1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   1   0    -1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   0   1    0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   0   0    1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 矩阵元素一列一列输入mat4x4<f32>()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat4x4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//平移矩阵对顶点平移变换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"平移和缩放复合变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平移和缩放复合变换"}},[t._v("#")]),t._v(" 平移和缩放复合变换")]),t._v(" "),s("p",[t._v("写下面代码之前，先回顾下"),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/47d092/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.2小节"),s("OutboundLink")],1),t._v("模型矩阵中，关于几何变换顺序对结果的影响。")]),t._v(" "),s("p",[t._v("先平移、后缩放")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先平移、后缩放(矩阵顺序从右往左)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("先缩放、后平移")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先缩放、后平移(矩阵顺序从右往左)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" vec4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("注意矩阵顺序，影响实际变换结果，你可以通过WebGPU的案例代码测试对比。")])])}),[],!1,null,null,null);s.default=r.exports}}]);