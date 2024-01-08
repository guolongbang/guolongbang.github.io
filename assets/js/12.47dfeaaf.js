(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{338:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第一个3d案例-创建3d场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个3d案例-创建3d场景"}},[t._v("#")]),t._v(" 第一个3D案例—创建3D场景")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284867057&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易云付费系统课程"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV14r4y1G7h4/?share_source=copy_web&vd_source=87fd4ba12cc3bed7aed51c523b6749af",target:"_blank",rel:"noopener noreferrer"}},[t._v("b站免费入门视频"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("入门Three.js的第一步，就是认识"),s("strong",[t._v("场景Scene")]),t._v("、"),s("strong",[t._v("相机Camera")]),t._v("、"),s("strong",[t._v("渲染器Renderer")]),t._v("三个基本概念，接下来，咱们通过三小节课，大家演示“第一个3D案例”完成实现过程。")]),t._v(" "),s("p",[t._v("学习建议：只要你能把"),s("strong",[t._v("第一个3D案例")]),t._v("搞明白，后面学习就会非常顺利了。")]),t._v(" "),s("p",[t._v("本节课先完成第一个3D案例的一部分，也就是3D场景"),s("strong",[t._v("Scene")]),t._v("的创建。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E5%9C%BA%E6%99%AF%E7%9B%B8%E6%9C%BA%E6%B8%B2%E6%9F%93%E5%99%A8.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"三维场景scene"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三维场景scene"}},[t._v("#")]),t._v(" 三维场景"),s("code",[t._v("Scene")])]),t._v(" "),s("p",[t._v("你可以把三维场景"),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=sc#api/zh/scenes/Scene",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scene"),s("OutboundLink")],1),t._v("对象理解为虚拟的3D场景，用来表示模拟生活中的真实三维场景,或者说三维世界。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建3D场景对象Scene")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scene "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"物体形状-几何体geometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物体形状-几何体geometry"}},[t._v("#")]),t._v(" 物体形状：几何体"),s("code",[t._v("Geometry")])]),t._v(" "),s("p",[t._v("Three.js提供了各种各样的几何体API，用来表示三维物体的几何形状。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E5%87%A0%E4%BD%95%E4%BD%93Geometry.svg",alt:""}})]),t._v(" "),s("p",[t._v("文档搜索关键词"),s("code",[t._v("geometry")]),t._v("你可以看到threejs提供各种几何体相关API，具体使用方法，也可以参考文档。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个长方体几何对象Geometry")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BoxGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("h3",{attrs:{id:"物体外观-材质material"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物体外观-材质material"}},[t._v("#")]),t._v(" 物体外观：材质"),s("code",[t._v("Material")])]),t._v(" "),s("p",[t._v("如果你想定义物体的外观效果，比如颜色，就需要通过材质"),s("code",[t._v("Material")]),t._v("相关的API实现。")]),t._v(" "),s("p",[t._v("threejs不同材质渲染效果不同，下面就以threejs最简单的"),s("strong",[t._v("网格基础材质")]),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=MeshBasicMaterial#api/zh/materials/MeshBasicMaterial",target:"_blank",rel:"noopener noreferrer"}},[t._v("MeshBasicMaterial"),s("OutboundLink")],1),t._v("为例给大家实现一个红色材质效果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E6%9D%90%E8%B4%A8Material.svg",alt:""}})]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个材质对象Material")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0xff0000设置材质颜色为红色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("h3",{attrs:{id:"物体-网格模型mesh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物体-网格模型mesh"}},[t._v("#")]),t._v(" 物体：网格模型"),s("code",[t._v("Mesh")])]),t._v(" "),s("p",[t._v("实际生活中有各种各样的物体，在threejs中可以通过"),s("strong",[t._v("网格模型")]),s("a",{attrs:{href:"https://threejs.org/docs/index.html?q=mesh#api/zh/objects/Mesh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mesh"),s("OutboundLink")],1),t._v("表示一个虚拟的物体，比如一个箱子、一个鼠标。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两个参数分别为几何体geometry、材质material")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网格模型对象Mesh")]),t._v("\n")])])]),s("h3",{attrs:{id:"模型位置-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型位置-position"}},[t._v("#")]),t._v(" 模型位置"),s("code",[t._v(".position")])]),t._v(" "),s("p",[t._v("实际生活中，一个物体往往是有位置的，对于threejs而言也是一样的，你可以通过位置属性"),s("code",[t._v(".position")]),t._v("定义网格模型"),s("code",[t._v("Mesh")]),t._v("在三维场景"),s("code",[t._v("Scene")]),t._v("中的位置。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网格模型对象Mesh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置网格模型在三维空间中的位置坐标，默认是坐标原点")]),t._v("\nmesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"add-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-方法"}},[t._v("#")]),t._v(" "),s("code",[t._v(".add()")]),t._v("方法")]),t._v(" "),s("p",[t._v("在threejs中你创建了一个表示物体的虚拟对象Mesh，需要通过"),s("code",[t._v(".add()")]),t._v("方法，把网格模型"),s("code",[t._v("mesh")]),t._v("添加到三维场景"),s("code",[t._v("scene")]),t._v("中。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),s("h3",{attrs:{id:"后续内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续内容"}},[t._v("#")]),t._v(" 后续内容")]),t._v(" "),s("p",[t._v("写到这里，我知道你已经迫不及待想执行代码看看渲染效果了，那么你需要看看后面两节课关于"),s("strong",[t._v("相机Camera")]),t._v("和"),s("strong",[t._v("渲染器Renderer")]),t._v("的介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.webgl3d.cn/pages/b563a7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("本站内容转载和引用声明"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);