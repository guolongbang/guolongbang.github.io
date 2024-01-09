(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{528:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"视图矩阵、投影矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图矩阵、投影矩阵"}},[t._v("#")]),t._v(" 视图矩阵、投影矩阵")]),t._v(" "),a("p",[t._v("这节课给大家介绍Three.js相机对象"),a("code",[t._v("Camera")]),t._v("的两个属性"),a("strong",[t._v("视图矩阵")]),a("code",[t._v(".matrixWorldInverse")]),t._v("和"),a("strong",[t._v("投影矩阵")]),a("code",[t._v(".projectionMatrix")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你有图形学基础，我提到视图矩阵或投影矩阵，你基本上都有概念，那么本节课，你可以快进学习，如果你没有相关的基础，就跟着视频通过具体theeejs代码，来认识相机矩阵相关的抽象概念。")]),t._v(" "),a("h3",{attrs:{id:"模型矩阵知识点回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型矩阵知识点回顾"}},[t._v("#")]),t._v(" 模型矩阵知识点回顾")]),t._v(" "),a("p",[t._v("上节课给大家讲解过，Three.js内部渲染的时候，会把置"),a("code",[t._v(".position")]),t._v("、缩放"),a("code",[t._v(".scale")]),t._v("或角度"),a("code",[t._v(".rotation")]),t._v("("),a("code",[t._v(".quaternion")]),t._v(")属性的值转为自己模型矩阵(本地矩阵"),a("code",[t._v(".matrix")]),t._v("、世界矩阵"),a("code",[t._v(".matrixWorld")]),t._v(")。")]),t._v(" "),a("p",[t._v("Three.js内部会通过模型的矩阵"),a("code",[t._v(".matrixWorld")]),t._v("旋转、缩放、平移模型自身。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E6%9C%AC%E5%9C%B0%E7%9F%A9%E9%98%B5%E4%B8%8E%E5%B9%B3%E7%A7%BB%E6%97%8B%E8%BD%AC%E7%BC%A9%E6%94%BE%E5%85%B3%E7%B3%BB.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E4%B8%96%E7%95%8C%E7%9F%A9%E9%98%B5%E4%B8%8E%E6%9C%AC%E5%9C%B0%E7%9F%A9%E9%98%B5%E5%85%B3%E7%B3%BB.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"相机知识点回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机知识点回顾"}},[t._v("#")]),t._v(" 相机知识点回顾")]),t._v(" "),a("p",[t._v("学习本节课内容之前，你可以先把以前学习的相机知识点，回顾一遍。")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/c0b143/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.5 透视投影相机"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 透视投影相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" fov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/1c3a1a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("10.1正投影相机"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正投影相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/ca57bd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("相机动画(.position和.lookAt())"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/3153bf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("不同方向的投影视图"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/3bcff1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("旋转渲染结果(.up相机上方向)"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("292")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("223")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("185")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"两种旋转三维场景方式对比测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种旋转三维场景方式对比测试"}},[t._v("#")]),t._v(" 两种旋转三维场景方式对比测试")]),t._v(" "),a("p",[t._v("改变模型或者场景自身的角度属性，旋转三维场景。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染循环")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// model.rotation.y+=0.01;")]),t._v("\n    scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("改变相机位置属性"),a("code",[t._v(".position")]),t._v("让相机绕场景中心旋转，和上面代码效果相似，都是旋转整个三维场景。")]),t._v(" "),a("p",[t._v("你把相机的位置改变，绕着目标观察点做圆周运动，你会发现threejs场景中的模型进行了旋转，其实在threejs内部渲染过程中，threejs会获取相机参数，生成相关矩阵，对场景模型进行了旋转变换。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染循环")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" angle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于圆周运动计算的角度值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("260")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机圆周运动的半径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    angle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相机y坐标不变，在XOZ平面上做圆周运动")]),t._v("\n    camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("angle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("angle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相机圆周运动过程，如果希望视线始终指向圆心，位置改变后必须重新执行lookAt指向圆心")]),t._v("\n    camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"两种缩放三维场景方式对比测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种缩放三维场景方式对比测试"}},[t._v("#")]),t._v(" 两种缩放三维场景方式对比测试")]),t._v(" "),a("p",[t._v("你想缩放整个三维场景，可以直接通过模型"),a("code",[t._v(".scale")]),t._v("属性控制")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放大工厂模型(换句话说，能观察的范围更小了，工厂周边东西不能看到那么多了)")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("另一方面，以透视投影相机为例，你如果改变相机的位置距离目标观察点更近，你会发现能够看到目标观察点周围的范围更小，其实本质上相当于threejs渲染时候，内部通过相机参数，生成对应矩阵，对场景进行了缩放。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放大工厂模型(换句话说，能观察的范围更小了，工厂周边东西不能看到那么多了)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// model.scale.set(2,2,2);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// camera.position.set(202, 123, 125);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相机距离目标观察点更近(能观察到范围变小，在画布上工厂放大了)")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"测试总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试总结"}},[t._v("#")]),t._v(" 测试总结")]),t._v(" "),a("p",[t._v("通过改变Three.js相机的参数对三维场景进行旋转、缩放或平移变换，threejs内部会获取相机参数，生成相关矩阵，对场景物体进行旋转缩放平移变换，就像"),a("strong",[t._v("模型矩阵")]),t._v("对模型的旋转缩放平移变换。")]),t._v(" "),a("p",[t._v("咱们上面的测试，目的就是为了让大家通过具体代码测试，知道threejs相机参数的变化，本质上就是通过相机参数生成的矩阵，对场景模型进行旋转、缩放、平移。至于具体影响，下面会给大家说明。")]),t._v(" "),a("h3",{attrs:{id:"相机视图矩阵-matrixworldinverse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机视图矩阵-matrixworldinverse"}},[t._v("#")]),t._v(" 相机视图矩阵"),a("code",[t._v(".matrixWorldInverse")])]),t._v(" "),a("p",[t._v("在three.js内部，threejs会把相机的位置"),a("code",[t._v(".position")]),t._v("、"),a("code",[t._v("lookAt")]),t._v("指向"),a("strong",[t._v("目标观察点")]),t._v("、上方向"),a("code",[t._v(".up")]),t._v("，生成一个视图矩阵"),a("code",[t._v(".matrixWorldInverse")]),t._v(",在threejs渲染的时候，生成的视图矩阵会被用来对模型顶点进行几何变换。")]),t._v(" "),a("h3",{attrs:{id:"相机投影矩阵-projectionmatrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机投影矩阵-projectionmatrix"}},[t._v("#")]),t._v(" 相机投影矩阵"),a("code",[t._v(".projectionMatrix")])]),t._v(" "),a("p",[t._v("影响透视投影相机投影矩阵属性的参数"),a("code",[t._v("( fov, aspect, near, far )")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 透视投影相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" fov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("影响正投影相机投影矩阵属性的参数"),a("code",[t._v("( left, right, top, bottom, near, far )")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正投影相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"更新透视投影矩阵-updateprojectionmatrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新透视投影矩阵-updateprojectionmatrix"}},[t._v("#")]),t._v(" 更新透视投影矩阵"),a("code",[t._v(".updateProjectionMatrix()")])]),t._v(" "),a("p",[t._v("在Three.js内部，渲染期间，透视投影矩阵threejs并不会始终读取相机的参数，计算，这样太浪费CPU计算资源了，为了性能考虑，threejs默认就是计算一次生成投影矩阵的值，所以如果你因为某种需要，改变了相机的相关参数，就要执行"),a("code",[t._v(".updateProjectionMatrix()")]),t._v("告诉threejs重新合成透视投影矩阵的值"),a("code",[t._v(".projectionMatrix")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// onresize 事件会在窗口被调整大小时发生")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onresize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置渲染器输出画布canvas尺寸")]),t._v("\n    renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全屏情况下：设置观察范围长宽比aspect为窗口宽高比")]),t._v("\n    camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateProjectionMatrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"扩展-矩阵对顶点变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-矩阵对顶点变换"}},[t._v("#")]),t._v(" 扩展：矩阵对顶点变换")]),t._v(" "),a("p",[t._v("大家都知道模型本质上都是由几何体的顶点构成的，threejs渲染的时候，内部会读取模型和相机的矩阵属性，对顶点进行几何变换，具体应用案例咱们在后面shader课程中给大家讲解。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("投影矩阵 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 视图矩阵 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 模型矩阵 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 模型顶点坐标\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);