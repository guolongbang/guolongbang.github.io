(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{468:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"html标签遮挡canvas画布事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html标签遮挡canvas画布事件"}},[s._v("#")]),s._v(" HTML标签遮挡Canvas画布事件")]),s._v(" "),t("p",[s._v("HTML元素标签"),t("code",[s._v('<div id="tag"></div>')]),s._v("外面div父元素遮挡了Canvas画布鼠标事件，会造成相机控件"),t("code",[s._v("OrbitControls")]),s._v("的旋转、缩放等操作无效，也有可能会影响你的射线拾取,等等任何与canvas画布有关的鼠标事件都有可能收到影响，不过这算是普通web前端内容，选择前端方式解决即可。")]),s._v(" "),t("h3",{attrs:{id:"style-pointerevents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style-pointerevents"}},[s._v("#")]),s._v(" "),t("code",[s._v(".style.pointerEvents")])]),s._v(" "),t("p",[s._v("设置"),t("code",[s._v(".style.pointerEvents = none")]),s._v("，就可以解决HTML元素标签对threejs canvas画布鼠标事件的遮挡。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("css2Renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pointerEvents "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("这时候你在测试threejs代码执行效果，你会发现"),t("code",[s._v("OrbitControls")]),s._v("旋转缩放是正常的、射线也能正常拾取模型。")]),s._v(" "),t("h3",{attrs:{id:"css属性z-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css属性z-index"}},[s._v("#")]),s._v(" CSS属性"),t("code",[s._v("z-index")])]),s._v(" "),t("p",[s._v("说到模型标签"),t("code",[s._v("CSS2DRenderer.domElement")]),s._v("遮挡canvas画布的问题，有必要给大家提一下CSS属性"),t("code",[s._v("z-index")]),s._v("，简单说就是HTML元素位置重合的时候，谁在上，谁在下的问题。如果你不熟悉CSS属性"),t("code",[s._v("z-index")]),s._v("熟悉，可以百度了解下，下面主要给大家说下该属性对threejs HTML标签的影响。")]),s._v(" "),t("p",[s._v("在实际开发中，有时候可能会出现threejs canvas画布遮挡标签HTML元素的问题，这种现象可能出现，也可能不出现，具体和你的前端代码有关。如果你的代码中HTML元素标签被canvas画布挡住了，这时候你可以调整CSS布局代码，或者直接修改"),t("code",[s._v("z-index")]),s._v("的值。")]),s._v(" "),t("p",[s._v("本节课和上节课案例，threejs标签默认是叠加在canvas画布上，下面就通过强制修改"),t("code",[s._v("z-index")]),s._v("值给大家演示下。")]),s._v(" "),t("p",[s._v("css2Renderer.domElement在下，threejs canvas画布在上，标签被canvas画布遮挡，看不到标签。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncss2Renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("css2Renderer.domElement在上，threejs canvas画布在下，可以看到标签")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncss2Renderer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);