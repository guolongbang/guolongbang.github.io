(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{362:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"线模型line渲染顶点数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线模型line渲染顶点数据"}},[t._v("#")]),t._v(" 线模型"),s("code",[t._v("Line")]),t._v("渲染顶点数据")]),t._v(" "),s("p",[t._v("下面代码是把几何体作为线模型"),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=line#api/zh/objects/Line",target:"_blank",rel:"noopener noreferrer"}},[t._v("Line"),s("OutboundLink")],1),t._v("的参数，你会发现渲染效果是从第一个点开始到最后一个点，依次连成线。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 线材质对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LineBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//线条颜色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建线模型对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"线模型lineloop、linesegments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线模型lineloop、linesegments"}},[t._v("#")]),t._v(" 线模型"),s("code",[t._v("LineLoop")]),t._v("、"),s("code",[t._v("LineSegments")])]),t._v(" "),s("p",[t._v("threejs线模型除了Line，还提供了"),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=line#api/zh/objects/LineLoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("LineLoop"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=line#api/zh/objects/LineSegments",target:"_blank",rel:"noopener noreferrer"}},[t._v("LineSegments"),s("OutboundLink")],1),t._v("，区别在于绘制线条的规则不同。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 闭合线条")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LineLoop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非连续的线条")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LineSegments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);