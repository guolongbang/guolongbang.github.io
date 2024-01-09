(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{611:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数学基础-平移、旋转、缩放矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数学基础-平移、旋转、缩放矩阵"}},[t._v("#")]),t._v(" 数学基础(平移、旋转、缩放矩阵)")]),t._v(" "),s("p",[t._v("本下节课给大家介绍下矩阵的概念，以及用于几何变换的矩阵，比如平移矩阵、缩放矩阵、旋转矩阵。")]),t._v(" "),s("p",[t._v("如果你对这些几何变换的矩阵概念比较熟悉，可以跳过本节课。")]),t._v(" "),s("h3",{attrs:{id:"线性代数、图形学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性代数、图形学"}},[t._v("#")]),t._v(" 线性代数、图形学")]),t._v(" "),s("p",[t._v("如果你有《线性代数》、《计算机图形学》基础，更有利于WebGPU的学习。当然了，你没有这些基础，也没关系，咱们课程的特色就是尽量弱化对数学和图形学基础的要求，尽量带你从零入门。")]),t._v(" "),s("p",[t._v("如果你时间比较充足，也有兴趣，可以去翻翻《线性代数》、《计算机图形学》相关的书籍，当然你不去翻，咱们的课程你也能学习。")]),t._v(" "),s("p",[t._v("如果你数学基础不好，工作也不用封装3D引擎或数学库，可以不用学习《线性代数》，直接用下节课介绍的一个数学库即可。")]),t._v(" "),s("h3",{attrs:{id:"本节课针对学员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节课针对学员"}},[t._v("#")]),t._v(" 本节课针对学员")]),t._v(" "),s("ul",[s("li",[t._v("大学学过线性代数的矩阵，但是并不了解用于平移、旋转、缩放的矩阵")]),t._v(" "),s("li",[t._v("没学过线性代数，数学停留在高中水平")])]),t._v(" "),s("h3",{attrs:{id:"矩阵、矩阵运算规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵、矩阵运算规则"}},[t._v("#")]),t._v(" 矩阵、矩阵运算规则")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5/18069?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("矩阵"),s("OutboundLink")],1),t._v("是图形学中一个比较重要的数学工具。")]),t._v(" "),s("p",[t._v("m×n矩阵表示m行n列的矩阵。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%9F%A9%E9%98%B5%E6%A6%82%E5%BF%B5%E5%87%A0%E8%A1%8C%E5%87%A0%E5%88%97.png",alt:""}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95/5446029",target:"_blank",rel:"noopener noreferrer"}},[t._v("矩阵乘法运算规则"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95%E8%BF%90%E7%AE%97.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"平移矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平移矩阵"}},[t._v("#")]),t._v(" 平移矩阵")]),t._v(" "),s("p",[t._v("下面咱们不会严格逻辑推导数学公式，用不严谨的小白方式，给大家介绍下平移矩阵。")]),t._v(" "),s("p",[t._v("一个点的坐标是(x,y,z),假设沿着X、Y、Z轴分别平移Tx、Ty、Tz，毫无疑问平移后的坐标是(x+Tx,y+Ty,z+Tz)。")]),t._v(" "),s("p",[t._v("坐标是(x,y,z)转化为齐次坐标坐标是(x,y,z,1),可以用4x1矩阵表示，这种特殊形式，也可以称为列向量，在webgpu顶点着色器代码中也可以用四维向量"),s("code",[t._v("vec4")]),t._v("表示。")]),t._v(" "),s("p",[t._v("请用矩阵的乘法运算法则验证下面矩阵的等式是否成立?")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E5%B9%B3%E7%A7%BB%E7%9F%A9%E9%98%B5%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"缩放矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩放矩阵"}},[t._v("#")]),t._v(" 缩放矩阵")]),t._v(" "),s("p",[t._v("通过缩放矩阵可以对顶点的齐次坐标进行缩放。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%BC%A9%E6%94%BE%E7%9F%A9%E9%98%B5%E9%AA%8C%E8%AF%81%E8%AE%A1%E7%AE%97.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"旋转矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旋转矩阵"}},[t._v("#")]),t._v(" 旋转矩阵")]),t._v(" "),s("p",[t._v("假设一个点的坐标是(x,y,z),经过旋转变换后的坐标为(X,Y,Z)")]),t._v(" "),s("p",[s("strong",[t._v("绕Z轴旋转γ角度")]),t._v(",z的坐标不变不变，x、y的坐标发生变化，如果你有兴趣，可以用你高中的三角函数知识推理，可以知道旋转后的坐标：X=xcosγ-ysinγ,Y=xsinγ+ycosγ")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%BB%95%E7%9D%80z%E8%BD%B4%E6%97%8B%E8%BD%AC%E5%90%8E%E5%9D%90%E6%A0%87%E8%AE%A1%E7%AE%97.jpg",alt:""}})]),t._v(" "),s("p",[t._v("三角函数计算推理过程")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设旋转前角度A，对应x和y的值")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设旋转了γ度，对应X和Y的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xcosγ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ysinγ\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("γ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xsinγ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("ycosγ\n")])])]),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%BB%95z%E8%BD%B4%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5.jpg",alt:""}})]),t._v(" "),s("p",[t._v("旋转后的坐标：X=xcosγ-ysinγ,Y=xsinγ+ycosγ")]),t._v(" "),s("p",[s("strong",[t._v("绕X轴旋转α角度")])]),t._v(" "),s("p",[t._v("x的坐标不变，y、z的坐标发生变化，Y=ycosα-zsinα,Z=ysinα+zcosα")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%BB%95x%E8%BD%B4%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("绕Y轴旋转β角度")])]),t._v(" "),s("p",[t._v("y的坐标不变，z、x的坐标发生变化，Z=zsinβ+xcosβ,X=zcosβ-xsinβ")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgwegpu/%E7%BB%95y%E8%BD%B4%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);