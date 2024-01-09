(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{341:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"threejs三维坐标系-加强三维空间认识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threejs三维坐标系-加强三维空间认识"}},[s._v("#")]),s._v(" threejs三维坐标系—加强三维空间认识")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284880055&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频讲解"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("本节课的目的就是为了加强大家对threejs三维空间的认识。")]),s._v(" "),t("h3",{attrs:{id:"辅助观察坐标系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#辅助观察坐标系"}},[s._v("#")]),s._v(" 辅助观察坐标系")]),s._v(" "),t("p",[t("code",[s._v("THREE.AxesHelper()")]),s._v("的参数表示坐标系坐标轴线段尺寸大小，你可以根据需要改变尺寸。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AxesHelper：辅助观察的坐标系")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" axesHelper "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AxesHelper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nscene"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("axesHelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"材质半透明设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#材质半透明设置"}},[s._v("#")]),s._v(" 材质半透明设置")]),s._v(" "),t("p",[s._v("设置材质半透明,这样可以看到坐标系的坐标原点。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" material "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MeshBasicMaterial")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x0000ff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置材质颜色")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("transparent")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开启透明")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("opacity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置透明度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"axeshelper的xyz轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axeshelper的xyz轴"}},[s._v("#")]),s._v(" "),t("code",[s._v("AxesHelper")]),s._v("的xyz轴")]),s._v(" "),t("p",[s._v("three.js坐标轴颜色红"),t("strong",[s._v("R")]),s._v("、绿"),t("strong",[s._v("G")]),s._v("、蓝"),t("strong",[s._v("B")]),s._v("分别对应坐标系的"),t("strong",[s._v("x")]),s._v("、"),t("strong",[s._v("y")]),s._v("、"),t("strong",[s._v("z")]),s._v("轴，对于three.js的3D坐标系默认"),t("strong",[s._v("y轴朝上")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"设置模型在坐标系中的位置或尺寸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置模型在坐标系中的位置或尺寸"}},[s._v("#")]),s._v(" 设置模型在坐标系中的位置或尺寸")]),s._v(" "),t("p",[s._v("通过模型的位置、尺寸设置，加深3D坐标系的概念。")]),s._v(" "),t("p",[s._v("测试：设置长方体xyz不同方向尺寸")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置几何体长宽高，也就是x、y、z三个方向的尺寸")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对比三个参数分别对应xyz轴哪个方向")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BoxGeometry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("测试：改变位置")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置模型mesh的xyz坐标")]),s._v("\nmesh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"改变相机参数-预览新的渲染效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变相机参数-预览新的渲染效果"}},[s._v("#")]),s._v(" 改变相机参数——预览新的渲染效果")]),s._v(" "),t("p",[s._v("你可以尝试源码中改变相机的参数，看看场景中的物体渲染效果怎么变化。")]),s._v(" "),t("p",[s._v("相机放在x轴负半轴，目标观察点是坐标原点，这样相当于相机的视线是沿着x轴正方向，只能看到长方体的一个矩形平面。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncamera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lookAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相机视线沿着x轴负半轴，mesh位于相机后面，自然看不到")]),s._v("\ncamera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncamera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lookAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("相机far偏小，mesh位于far之外，物体不会显示在画布上。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你可以进行下面测试，改变相机参数，把mesh放在视锥体之外，看看是否显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3000改为300，使mesh位于far之外，mesh不在视锥体内，被剪裁掉")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" camera "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PerspectiveCamera")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" width "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"/threejs/%E8%A7%86%E9%94%A5%E4%BD%93.png",alt:"视锥体"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);