(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{340:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一个3d案例-透视投影相机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个3d案例-透视投影相机"}},[t._v("#")]),t._v(" 第一个3D案例—透视投影相机")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284870072&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频讲解地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Threejs如果想把三维场景"),a("code",[t._v("Scene")]),t._v("渲染到web网页上，还需要定义一个"),a("strong",[t._v("虚拟相机")]),a("code",[t._v("Camera")]),t._v("，就像你生活中想获得一张照片，需要一台用来拍照的相机。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E5%9C%BA%E6%99%AF%E7%9B%B8%E6%9C%BA%E6%B8%B2%E6%9F%93%E5%99%A8.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"透视投影相机perspectivecamera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透视投影相机perspectivecamera"}},[t._v("#")]),t._v(" 透视投影相机"),a("code",[t._v("PerspectiveCamera")])]),t._v(" "),a("p",[t._v("Threejs提供了正投影相机"),a("a",{attrs:{href:"https://threejs.org/docs/index.html?q=Camera#api/zh/cameras/OrthographicCamera",target:"_blank",rel:"noopener noreferrer"}},[t._v("OrthographicCamera"),a("OutboundLink")],1),t._v("和透视投影相机"),a("a",{attrs:{href:"https://threejs.org/docs/index.html?q=PerspectiveCamera#api/zh/cameras/PerspectiveCamera",target:"_blank",rel:"noopener noreferrer"}},[t._v("PerspectiveCamera"),a("OutboundLink")],1),t._v("。本节课先给大家比较常用的透视投影相机"),a("code",[t._v("PerspectiveCamera")]),t._v("。")]),t._v(" "),a("p",[t._v("透视投影相机"),a("code",[t._v("PerspectiveCamera")]),t._v("本质上就是在模拟人眼观察这个世界的规律。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化一个透视投影相机对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"相机位置-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机位置-position"}},[t._v("#")]),t._v(" 相机位置"),a("code",[t._v(".position")])]),t._v(" "),a("p",[t._v("生活中用相机拍照，你相机位置不同，拍照结果也不同，threejs中虚拟相机同样如此。")]),t._v(" "),a("p",[t._v("比如有一间房子，你拿着相机站在房间里面，看到的是房间内部，站在房子外面看到的是房子外面效果。")]),t._v(" "),a("p",[t._v("相机对象"),a("code",[t._v("Camera")]),t._v("具有位置属性"),a("code",[t._v(".position")]),t._v("，通过位置属性"),a("code",[t._v(".position")]),t._v("可以设置相机的位置。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机在Three.js三维坐标系中的位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据需要设置相机位置具体值")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h3",{attrs:{id:"相机观察目标-lookat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机观察目标-lookat"}},[t._v("#")]),t._v(" 相机观察目标"),a("code",[t._v(".lookAt()")])]),t._v(" "),a("p",[t._v("你用相机拍照你需要控制相机的"),a("strong",[t._v("拍照目标")]),t._v("，具体说相机镜头对准哪个物体或说哪个坐标。对于threejs相机而言，就是设置"),a("code",[t._v(".lookAt()")]),t._v("方法的参数，指定一个3D坐标。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机观察目标指向Threejs 3D空间中某个位置")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//坐标原点")]),t._v("\n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//y轴上位置10")]),t._v("\n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向mesh对应的位置")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/imgthreejs/%E7%9B%B8%E6%9C%BA%E4%BD%8D%E7%BD%AE%E5%92%8C%E7%9B%AE%E6%A0%87.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"判断相机相对三维场景中长方体位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断相机相对三维场景中长方体位置"}},[t._v("#")]),t._v(" 判断相机相对三维场景中长方体位置")]),t._v(" "),a("p",[t._v("你可以把三维场景中长方体"),a("code",[t._v("mesh")]),t._v("想象为一个房间，然后根据相机位置和长方体位置尺寸对比，判断两者相对位置。你可以发现设置相机坐标(200, 200, 200)，位于长方体外面一处位置。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 长方体尺寸100, 100, 100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geometry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BoxGeometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网格模型位置xyz坐标：0,10,0")]),t._v("\nmesh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相机位置xyz坐标：200, 200, 200")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[a("img",{attrs:{src:"/imgthreejs/%E7%9B%B8%E6%9C%BA%E4%BD%8D%E7%BD%AE%E5%92%8C%E7%9B%AE%E6%A0%87.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"定义相机渲染输出的画布尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义相机渲染输出的画布尺寸"}},[t._v("#")]),t._v(" 定义相机渲染输出的画布尺寸")]),t._v(" "),a("p",[t._v("你生活中相机拍照的照片是有大小的，对于threejs而言一样，需要定义相机在网页上输出的"),a("strong",[t._v("Canvas画布")]),t._v("(照片)尺寸，大小可以根据需要定义，这里先随机定义一个尺寸。")]),t._v(" "),a("p",[a("strong",[t._v("Canvas画布")]),t._v("：课程中会把threejs虚拟相机渲染三维场景在浏览器网页上呈现的结果称为"),a("strong",[t._v("Canvas画布")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义相机输出画布的尺寸(单位:像素px)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//高度")]),t._v("\n")])])]),a("h3",{attrs:{id:"透视投影相机perspectivecamera-视锥体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透视投影相机perspectivecamera-视锥体"}},[t._v("#")]),t._v(" 透视投影相机"),a("code",[t._v("PerspectiveCamera")]),t._v("：视锥体")]),t._v(" "),a("p",[t._v("透视投影相机的四个参数"),a("code",[t._v("fov, aspect, near, far")]),t._v("构成一个"),a("strong",[t._v("四棱台")]),t._v("3D空间，被称为"),a("strong",[t._v("视锥体")]),t._v("，只有视锥体之内的物体，才会渲染出来，视锥体范围之外的物体不会显示在Canvas画布上。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/threejs/%E8%A7%86%E9%94%A5%E4%BD%93.png",alt:"视锥体"}})]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//高度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("PerspectiveCamera")]),t._v("参数介绍：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PerspectiveCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" fov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("fov")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相机视锥体竖直方向视野角度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("50")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("aspect")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相机视锥体水平方向和竖直方向长度比，一般设置为Canvas画布宽高比width / height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("near")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相机视锥体近裁截面相对相机距离")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("far")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("相机视锥体远裁截面相对相机距离，far-near构成了视锥体高度方向")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);