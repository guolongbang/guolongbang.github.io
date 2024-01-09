(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{564:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"顶点颜色varying插值计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶点颜色varying插值计算"}},[t._v("#")]),t._v(" 顶点颜色"),s("code",[t._v("varying")]),t._v("插值计算")]),t._v(" "),s("p",[t._v("本节课结合顶点着色器、片元着色器代码，给家讲解下"),s("strong",[t._v("顶点颜色")]),t._v("的"),s("strong",[t._v("插值计算")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E4%B8%89%E8%A7%92%E5%BD%A2%E9%A1%B6%E7%82%B9%E9%A2%9C%E8%89%B2%E6%8F%92%E5%80%BC.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"知识回顾-几何体顶点颜色geometry-attributes-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识回顾-几何体顶点颜色geometry-attributes-color"}},[t._v("#")]),t._v(" 知识回顾：几何体顶点颜色"),s("code",[t._v("geometry.attributes.color")])]),t._v(" "),s("p",[t._v("知识回顾："),s("a",{attrs:{href:"http://www.webgl3d.cn/pages/92ea15/",target:"_blank",rel:"noopener noreferrer"}},[t._v("9.18 顶点颜色插值"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("比如一条直线，你把直线几何体两个端点，分别设置一个颜色，threejs会根据两端的颜色，在两点之间，按照距离远近插入不同颜色，就是所谓的颜色插值计算，距离某个点越近受某个点颜色影响越大。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E9%A2%9C%E8%89%B2%E6%8F%92%E5%80%BC.png",alt:""}})]),t._v(" "),s("p",[t._v("对于网格的三角形也是类似，三角形内部一个点的颜色，同时收到三个点的颜色影响，距离某个点越近，受影响越大。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E4%B8%89%E8%A7%92%E5%BD%A2%E9%A1%B6%E7%82%B9%E9%A2%9C%E8%89%B2%E6%8F%92%E5%80%BC.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"设置顶点颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置顶点颜色"}},[t._v("#")]),t._v(" 设置顶点颜色")]),t._v(" "),s("p",[t._v("课件演示文件，"),s("code",[t._v("ShaderMaterial")]),t._v("对应的几何体已经提前给大家设置了一个三角形对应的三个顶点数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个几何体对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Float32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类型数组创建顶点数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1坐标")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2坐标")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("ShaderMaterial")]),t._v("对应的几何体设置顶点颜色数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" colors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Float32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1颜色 ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2颜色")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3颜色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("h3",{attrs:{id:"允许用顶点颜色渲染vertexcolors-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许用顶点颜色渲染vertexcolors-true"}},[t._v("#")]),t._v(" 允许用顶点颜色渲染"),s("code",[t._v("vertexColors:true,")])]),t._v(" "),s("p",[s("code",[t._v("ShaderMaterial")]),t._v("和原来的网格材质一样，设置"),s("code",[t._v("vertexColors:true,")]),t._v("，允许设置使用顶点颜色渲染")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShaderMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vertexShader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vertexShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fragmentShader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fragmentShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vertexColors")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许设置使用顶点颜色渲染")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"内置变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[t._v("#")]),t._v(" 内置变量")]),t._v(" "),s("p",[t._v("前面给大家讲过，"),s("code",[t._v("ShaderMaterial")]),t._v("默认提供了一个内置变量"),s("code",[t._v("position")]),t._v(",表示顶点的位置坐标，数据来自几何体顶点位置数据"),s("code",[t._v("geometry.attributes.position")]),t._v("。")]),t._v(" "),s("p",[t._v("除此外，"),s("code",[t._v("ShaderMaterial")]),t._v("还有一个内置变量"),s("code",[t._v("color")]),t._v(",表示顶点的颜色数据，数据来自你定义的几何体顶点颜色属性"),s("code",[t._v("geometry.attributes.color")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点着色器代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n// attribute vec3 color;//ShaderMaterial默认提供不用手写\nvoid main(){\n  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("h3",{attrs:{id:"顶点颜色插值计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶点颜色插值计算"}},[t._v("#")]),t._v(" 顶点颜色插值计算")]),t._v(" "),s("p",[s("code",[t._v("color")]),t._v("变量表示插值之前的顶点颜色数据，"),s("code",[t._v("varying")]),t._v("关键字声明一个插值计算后的顶点颜色变量"),s("code",[t._v("vColor")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点着色器代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n// attribute vec3 color;//默认提供不用手写\nvarying vec3 vColor;// varying关键字声明一个变量表示顶点颜色插值后的结果\nvoid main(){\n  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[t._v("顶点数据插值计算语法：在顶点着色器主函数main里面，把顶点数据赋值给另一个varying声明的变量即可。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点着色器代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n// attribute vec3 color;//默认提供不用手写\nvarying vec3 vColor;// varying关键字声明一个变量表示顶点颜色插值后的结果\nvoid main(){\n  vColor = color;// 顶点颜色数据进行插值计算\n  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[t._v("如果你想在片元着色器中获取顶点着色器中顶点颜色数据插值计算的结果"),s("code",[t._v("vColor")]),t._v(",非常简单，用关键字varying声明一个与同名变量"),s("code",[t._v("vColor")]),t._v("就行。")]),t._v(" "),s("p",[t._v("这里注意，你可能会好奇，通过"),s("code",[t._v("color")]),t._v("的顶点会插值得到多少个新的颜色"),s("code",[t._v("vColor")]),t._v(",很简单，与片元的数量一样。")]),t._v(" "),s("p",[t._v("换句话说就是每个片元都有一个对应的"),s("code",[t._v("vColor")]),t._v("颜色数据，你可以把"),s("code",[t._v("vColor")]),t._v("赋值给"),s("code",[t._v("gl_FragColor")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E5%9B%BE%E5%85%83%E8%A3%85%E9%85%8D%E5%85%89%E6%A0%85%E5%8C%96.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片元着色器代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragmentShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nvarying vec3 vColor;// 顶点片元化后有多少个片元,顶点颜色插值后就有多少个颜色数据\nvoid main() {\n    gl_FragColor = vec4(vColor,1.0);\n}\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);