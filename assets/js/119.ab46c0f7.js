(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{446:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"阴影-mapsize和-radius"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阴影-mapsize和-radius"}},[a._v("#")]),a._v(" 阴影.mapSize和.radius")]),a._v(" "),s("p",[a._v("接着上节课阴影范围讲解，本节课给大家介绍阴影渲染质量的问题")]),a._v(" "),s("p",[a._v("前面给大家介绍过"),s("strong",[a._v("平行光阴影对象")]),s("code",[a._v("DirectionalLightShadow")]),a._v("的阴影相机属性"),s("code",[a._v(".camera")]),a._v("，本节课为大家介绍该阴影对象的阴影贴图尺寸"),s("code",[a._v(".mapSize")]),a._v("属性和阴影半径"),s("code",[a._v(".radius")]),a._v("属性。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("light.shadow.mapSize")]),a._v("阴影贴图尺寸属性(提升边缘渲染效果)")]),a._v(" "),s("li",[s("code",[a._v("light.shadow.radius")]),a._v("弱化模糊阴影边缘")])]),a._v(" "),s("h3",{attrs:{id:"light-shadow-mapsize阴影贴图尺寸属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#light-shadow-mapsize阴影贴图尺寸属性"}},[a._v("#")]),a._v(" "),s("code",[a._v("light.shadow.mapSize")]),a._v("阴影贴图尺寸属性")]),a._v(" "),s("p",[a._v("你可以把threejs生成的光源阴影类比为前面学习过的颜色贴图"),s("code",[a._v(".map")]),a._v("，阴影投射到其它物体上，可以理解为阴影就像贴图一样映射到Mesh上。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// mapSize属性默认512x512")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'阴影默认像素'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("directionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("你可以尝试把"),s("code",[a._v(".mapSize")]),a._v("设置为比较小的值(尺寸一般2的n次方)，查看阴影渲染质量。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("directionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("你可以尝试把阴影相机"),s("code",[a._v(".shadow.camera")]),a._v("的范围扩大多倍，查看阴影渲染质量变化。你可以发现渲染范围越大，阴影渲染效果越差。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("directionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("如果你的阴影边缘不够清晰，有模糊感、锯齿感，可以适当提升"),s("code",[a._v(".mapSize")]),a._v("属性值。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 如果阴影边缘锯齿感的时候，可以适当提升像素")]),a._v("\ndirectionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"shadow-mapsize和-shadow-camera总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shadow-mapsize和-shadow-camera总结"}},[a._v("#")]),a._v(" "),s("code",[a._v(".shadow.mapSize")]),a._v("和"),s("code",[a._v(".shadow.camera")]),a._v("总结")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("在能覆盖包含阴影渲染范围的情况下，"),s("code",[a._v(".shadow.camera")]),a._v("的尺寸尽量小。")])]),a._v(" "),s("li",[s("p",[a._v("如果你增加"),s("code",[a._v(".shadow.camera")]),a._v("长方体尺寸范围，阴影模糊锯齿感，可以适当提升"),s("code",[a._v(".shadow.mapSize")]),a._v("的大小。")])])]),a._v(" "),s("h3",{attrs:{id:"阴影半径-shadow-radius属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阴影半径-shadow-radius属性"}},[a._v("#")]),a._v(" 阴影半径"),s("code",[a._v(".shadow.radius")]),a._v("属性")]),a._v(" "),s("p",[a._v("如果你在项目中，希望阴影的边缘弱化或者说模糊化,可以通过阴影半径"),s("code",[a._v(".shadow.radius")]),a._v("属性设置")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 模糊弱化阴影边缘")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.shadow.radius'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("directionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("适当提升"),s("code",[a._v(".shadow.radius")]),a._v(",你可以感到阴影边缘与非阴影区域是渐变过渡，或者说阴影边缘逐渐弱化或模糊化，没有很明显的边界感。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("directionalLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("radius "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);