(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{386:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"uv动画-偏移属性-offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uv动画-偏移属性-offset"}},[t._v("#")]),t._v(" UV动画(偏移属性"),s("code",[t._v(".offset")]),t._v(")")]),t._v(" "),s("p",[t._v("本节课通过纹理对象的偏移属性"),s("code",[t._v(".offset")]),t._v("给大家实现一个UV动画效果。")]),t._v(" "),s("h3",{attrs:{id:"纹理对象-offset属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理对象-offset属性"}},[t._v("#")]),t._v(" 纹理对象"),s("code",[t._v(".offset")]),t._v("属性")]),t._v(" "),s("p",[t._v("纹理对象Texture的"),s("code",[t._v(".offset")]),t._v("的功能是偏移贴图在Mesh上位置，本质上相当于修改了UV顶点坐标。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理U方向偏移")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理V方向偏移")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/imgthreejs/UV%E5%9D%90%E6%A0%87.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"纹理对象-wraps或-wrapt与-offset组合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理对象-wraps或-wrapt与-offset组合使用"}},[t._v("#")]),t._v(" 纹理对象"),s("code",[t._v(".wrapS")]),t._v("或"),s("code",[t._v(".wrapT")]),t._v("与"),s("code",[t._v(".offset")]),t._v("组合使用")]),t._v(" "),s("p",[t._v("你可以对比，当你通过"),s("code",[t._v(".offset")]),t._v("设置了纹理映射偏移后，是否把"),s("code",[t._v(".wrapS")]),t._v("或"),s("code",[t._v(".wrapT")]),t._v("设置为重复映射模式"),s("code",[t._v("THREE.RepeatWrapping")]),t._v("，两种情况的渲染效果差异。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理U方向偏移")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置.wrapS也就是U方向，纹理映射模式(包裹模式)")]),t._v("\ntexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RepeatWrapping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对应offste.x偏移")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理V方向偏移")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置.wrapT也就是V方向，纹理映射模式")]),t._v("\ntexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RepeatWrapping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对应offste.y偏移")]),t._v("\n")])])]),s("h3",{attrs:{id:"纹理uv动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理uv动画"}},[t._v("#")]),t._v(" 纹理UV动画")]),t._v(" "),s("p",[t._v("纹理对象Texture的"),s("code",[t._v(".offset")]),t._v("的功能是偏移贴图在Mesh上位置。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染循环")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置纹理动画：偏移量根据纹理和动画需要，设置合适的值")]),t._v("\n    renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"纹理贴图阵列-uv动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理贴图阵列-uv动画"}},[t._v("#")]),t._v(" 纹理贴图阵列 + UV动画")]),t._v(" "),s("p",[t._v("通过阵列纹理贴图设置"),s("code",[t._v(".map")]),t._v(",这样的话贴图像素可以更小一些。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置U方向阵列模式")]),t._v("\ntexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RepeatWrapping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// uv两个方向纹理重复数量")]),t._v("\ntexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意选择合适的阵列数量")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染循环")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置纹理动画：偏移量根据纹理和动画需要，设置合适的值")]),t._v("\n    renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);