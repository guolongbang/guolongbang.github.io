(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{352:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webgl渲染器基础设置-锯齿模糊、背景颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgl渲染器基础设置-锯齿模糊、背景颜色"}},[t._v("#")]),t._v(" WebGL渲染器基础设置(锯齿模糊、背景颜色)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284871304&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频讲解"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("一般实际开发，threejs的WebGL渲染器需要进行一些通用的基础配置，本节课给大家简单介绍下,比如渲染模糊或锯齿问题。")]),t._v(" "),a("h3",{attrs:{id:"渲染器锯齿属性-antialias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染器锯齿属性-antialias"}},[t._v("#")]),t._v(" 渲染器锯齿属性"),a("code",[t._v(".antialias")])]),t._v(" "),a("p",[t._v("设置渲染器锯齿属性"),a("code",[t._v(".antialias")]),t._v("的值可以直接在参数中设置，也可通过渲染器对象属性设置。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("antialias")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("或")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("antialias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"设备像素比window-devicepixelratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备像素比window-devicepixelratio"}},[t._v("#")]),t._v(" 设备像素比"),a("code",[t._v("window.devicePixelRatio")])]),t._v(" "),a("p",[t._v("如果你有web前端基础，应该了解"),a("code",[t._v("window")]),t._v("对象，"),a("strong",[t._v("设备像素比")]),a("code",[t._v(".devicePixelRatio")]),t._v("是window对象的一个属性，该属性的值和你的硬件设备"),a("strong",[t._v("屏幕")]),t._v("相关，不同硬件设备的屏幕"),a("code",[t._v("window.devicePixelRatio")]),t._v("的值可能不同，可能就是1、1.5、2.0等其它值。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不同硬件设备的屏幕的设备像素比window.devicePixelRatio值可能不同")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'查看当前屏幕设备像素比'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置设备像素比-setpixelratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置设备像素比-setpixelratio"}},[t._v("#")]),t._v(" 设置设备像素比"),a("code",[t._v(".setPixelRatio()")])]),t._v(" "),a("p",[t._v("如果你遇到你的canvas画布输出模糊问题，注意设置"),a("code",[t._v("renderer.setPixelRatio(window.devicePixelRatio)")]),t._v("。")]),t._v(" "),a("p",[t._v("注意：注意你的硬件设备设备像素比"),a("code",[t._v("window.devicePixelRatio")]),t._v("刚好是1，那么是否执行"),a("code",[t._v(".setPixelRatio()")]),t._v("不会有明显差异，不过为了适应不同的硬件设备屏幕，通常需要执行该方法。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题")]),t._v("\nrenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPixelRatio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置背景颜色-setclearcolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置背景颜色-setclearcolor"}},[t._v("#")]),t._v(" 设置背景颜色"),a("code",[t._v(".setClearColor()")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setClearColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x444444")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置背景颜色")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);