(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{599:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webgpu-3d坐标系-投影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgpu-3d坐标系-投影"}},[s._v("#")]),s._v(" WebGPU 3D坐标系(投影)")]),s._v(" "),t("p",[s._v("经过前面7节课的讲解，完成一个最简单的WebGPU三角形小案例，本节课就在前面基础上，给大家讲解WebGPU的"),t("strong",[s._v("3D坐标系")]),s._v("和"),t("strong",[s._v("投影")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"webgpu标准设备坐标系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgpu标准设备坐标系"}},[s._v("#")]),s._v(" WebGPU标准设备坐标系")]),s._v(" "),t("p",[s._v("在1.3小节，创建顶点缓冲区的时候，简单介绍过WebGPU坐标系知识，咱们先回顾下。")]),s._v(" "),t("p",[s._v("WebGPU坐标系在Canvas画布上的"),t("strong",[s._v("坐标原点")]),s._v("是Canvas画布的中间位置，"),t("strong",[s._v("x轴")]),s._v("水平向"),t("strong",[s._v("右")]),s._v("，"),t("strong",[s._v("y轴")]),s._v("竖直向"),t("strong",[s._v("上")]),s._v("，x和y的坐标范围都是[-1,1]，")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgwegpu/canvas%E7%94%BB%E5%B8%83xy%E5%9D%90%E6%A0%87%E7%B3%BB.png",alt:""}})]),s._v(" "),t("p",[s._v("WebGPU坐标系"),t("strong",[s._v("z轴")]),s._v("与Canvas画布垂直，朝向屏幕，z坐标的范围是[0,1]。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgwegpu/WebGPU%E5%9D%90%E6%A0%87%E7%B3%BB.png",alt:""}})]),s._v(" "),t("p",[s._v("对于这种WebGPU坐标系，在图形学中，有个专门的名，就是标准化设备坐标系，对应英文名Normalized Device Coordinates，简称NDC，因为坐标范围是-1~1或0~1的相对值，你把NDC称为归一化设备坐标系也行。")]),s._v(" "),t("h3",{attrs:{id:"webgpu渲染规则-投影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgpu渲染规则-投影"}},[s._v("#")]),s._v(" WebGPU渲染规则(投影)")]),s._v(" "),t("p",[s._v("在x、y、z轴上各取一个点创建一个等边三角形。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgwegpu/%E7%AD%89%E8%BE%B9%E4%B8%89%E8%A7%92%E5%BD%A23D%E6%8A%95%E5%BD%B1.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertexArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("那么默认情况下，WebGPU会如何渲染上面顶点坐标定义的三角形？")]),s._v(" "),t("p",[s._v("为了大家更好理解，我们假设在WebGPU的3D空间中，存在一束平行光线，沿着z轴照射到XOY平面上，这时候3D空间中的三角形会在XOY平面上产生投影，就像生活中，人在太阳光下，会地面上产生投影。")]),s._v(" "),t("p",[s._v("这时候，z轴上的任何顶点，投影后，其实都在坐标原点，这样上面一个等边三角形，三个点投影后，就是两个点在x和y轴，z轴上的点投影到坐标原点，这样三个点连接起来，渲染的投影结果就是一个直接三角形。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgwegpu/webgpu%E5%9D%90%E6%A0%87%E7%B3%BB%E6%8A%95%E5%BD%B1.png",alt:""}})]),s._v(" "),t("p",[s._v("上面等边三角形顶点坐标和下面三餐性顶点坐标，在WebGPU默认情况下，投影效果其实一样的")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertexArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"测试webgpu-渲染范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试webgpu-渲染范围"}},[s._v("#")]),s._v(" 测试WebGPU 渲染范围")]),s._v(" "),t("p",[s._v("WebGPU坐标系x和y的坐标范围是[-1,1]，z坐标的范围是[0,1]。")]),s._v(" "),t("p",[s._v("WebGPU默认的渲染规律是，如果你的几何图形，超出xyz长方体空间范围的部分会被剪裁掉，不显示。")]),s._v(" "),t("p",[s._v("三个顶点坐标都没有超出范围，可以看到完整三角形，点1的x为z刚好和右侧canvas画布边缘重合，点2y为1，刚好和canvas画布的顶部边缘重合。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertexArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("下面三角形z坐标都是2.0，渲染的时候，在canvas画布上，你可以看不到三角形。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertexArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("顶点1的x坐标超出范围，三角形超出WebGPU渲染范围部分不显示，三角形渲染不完整")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vertexArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float32Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"/imgwegpu/%E8%B6%85%E5%87%BA%E6%B8%B2%E6%9F%93%E8%8C%83%E5%9B%B4.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);