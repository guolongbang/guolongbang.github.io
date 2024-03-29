(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{443:function(a,t,s){"use strict";s.r(t);var n=s(7),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"阴影范围-shadow-camera"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阴影范围-shadow-camera"}},[a._v("#")]),a._v(" 阴影范围"),t("code",[a._v(".shadow.camera")])]),a._v(" "),t("p",[a._v("上节课"),t("strong",[a._v("2.平行光阴影计算")]),a._v("讲解过，通过光源的阴影相机属性"),t("code",[a._v(".shadow.camera")]),a._v(",来控制阴影的渲染范围，本节课继续"),t("code",[a._v(".shadow.camera")]),a._v("的讲解。")]),a._v(" "),t("h3",{attrs:{id:"平行光阴影相机属性-shadow-camera回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平行光阴影相机属性-shadow-camera回顾"}},[a._v("#")]),a._v(" 平行光阴影相机属性"),t("code",[a._v(".shadow.camera")]),a._v("回顾")]),a._v(" "),t("ul",[t("li",[a._v("平行光"),t("code",[a._v("DirectionalLight")]),a._v("的"),t("code",[a._v(".shadow")]),a._v("属性是"),t("strong",[a._v("平行光阴影对象")]),t("code",[a._v("DirectionalLightShadow")])]),a._v(" "),t("li",[a._v("平行光阴影对象"),t("code",[a._v("DirectionalLightShadow")]),a._v("有一个相机属性"),t("code",[a._v(".camera")])]),a._v(" "),t("li",[t("code",[a._v(".shadow.camera")]),a._v("属性值(正投影相机"),t("code",[a._v("OrthographicCamera")]),a._v(")")])]),a._v(" "),t("h3",{attrs:{id:"camerahelper可视化-shadow-camera"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#camerahelper可视化-shadow-camera"}},[a._v("#")]),a._v(" "),t("code",[a._v("CameraHelper")]),a._v("可视化"),t("code",[a._v(".shadow.camera")])]),a._v(" "),t("p",[a._v("为了方便观察阴影渲染的范围，需要把平行光对应的阴影相机"),t("code",[a._v(".shadow.camera")]),a._v("可视化显示。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CameraHelper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"参数测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数测试"}},[a._v("#")]),a._v(" 参数测试")]),a._v(" "),t("p",[a._v("下面先在上节课代码基础上给大家改参数体验下相机渲染范围参数对阴影的影响。")]),a._v(" "),t("p",[a._v("课件演示文件中，提供了批量创建了多个长方体，用于阴影范围设置测试。")]),a._v(" "),t("h3",{attrs:{id:"设置相机-shadow-camera长方体范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置相机-shadow-camera长方体范围"}},[a._v("#")]),a._v(" 设置相机"),t("code",[a._v(".shadow.camera")]),a._v("长方体范围")]),a._v(" "),t("p",[a._v("根据3D场景渲染范围，去设置"),t("code",[a._v(".shadow.camera")]),a._v("长方体尺寸参数，一般比你要渲染的范围稍微大一些即可，过小阴影不显示或显示不完整，过大很多可能阴影偏模糊，你可以比较下面两个参数的阴影渲染差异。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"/imgthreejs/%E6%AD%A3%E6%8A%95%E5%BD%B1%E5%8F%AF%E8%A7%86%E7%A9%BA%E9%97%B4.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"调节光源位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调节光源位置"}},[a._v("#")]),a._v(" 调节光源位置")]),a._v(" "),t("p",[a._v("光源位置影响平行光阴影相机"),t("code",[a._v(".shadow.camera")]),a._v("的位置，所以要根据渲染范围调整光源的位置。")]),a._v(" "),t("p",[a._v("你可以比较测试两个不同的光源位置，对应阴影渲染效果。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"确定阴影计算范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定阴影计算范围"}},[a._v("#")]),a._v(" 确定阴影计算范围")]),a._v(" "),t("p",[a._v("其实平行光阴影范围的设置，你可以类比以前正投影机位置、长方体可视化空间的设置。")]),a._v(" "),t("ul",[t("li",[a._v("1.先大概确定下3D场景中需要阴影计算范围，不用精确，有一个数量级就行，比如几百、几千。")]),a._v(" "),t("li",[a._v("2."),t("code",[a._v(".shadow.camera")]),a._v("的"),t("code",[a._v(".left")]),a._v("、"),t("code",[a._v(".right")]),a._v("、"),t("code",[a._v(".top")]),a._v("、"),t("code",[a._v(".bottom")]),a._v("、"),t("code",[a._v(".near")]),a._v("、"),t("code",[a._v(".far")]),a._v("属性定义的长方体空间")]),a._v(" "),t("li",[a._v("3."),t("code",[a._v(".shadow.camera")]),a._v("的位置(光源位置影响"),t("code",[a._v(".shadow.camera")]),a._v("的位置)")])]),a._v(" "),t("p",[a._v("需要阴影范围数量级：z方向尺寸1000左右，xy方向100左右。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" mesh2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置产生投影的网格模型")]),a._v("\n    mesh2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("castShadow "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    mesh2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mesh2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"根据尺寸数量级设置阴影渲染范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据尺寸数量级设置阴影渲染范围"}},[a._v("#")]),a._v(" 根据尺寸数量级设置阴影渲染范围")]),a._v(" "),t("p",[a._v("比如光线是从斜上方照射下来，模型y方向高度100左右，这时候y可以设置为100左右，xz也可以根据渲染范围先给个大概尺寸。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 平行光默认从.position指向坐标原点")]),a._v("\n")])])]),t("p",[a._v("光线方向，你可以改变xz坐标来调整")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("directionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("渲染范围可以都先给个几百量级的值，不用精准，先设置，在微调。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置三维场景计算阴影的范围")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("top "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bottom "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("near "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndirectionalLight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shadow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("far "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);