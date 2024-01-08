(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{433:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正投影相机orthographiccamera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正投影相机orthographiccamera"}},[t._v("#")]),t._v(" 正投影相机"),a("code",[t._v("OrthographicCamera")])]),t._v(" "),a("p",[t._v("在入门阶段给大家介绍过比较常用的透视投影相机"),a("code",[t._v("PerspectiveCamera")]),t._v("，下面给大家介绍另外一个相机对象正投影相机"),a("code",[t._v("OrthographicCamera")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E7%9B%B8%E6%9C%BA.svg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"正投影长方体可视空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正投影长方体可视空间"}},[t._v("#")]),t._v(" 正投影长方体可视空间")]),t._v(" "),a("p",[t._v("正投影相机的"),a("strong",[t._v("长方体可视化空间")]),t._v("和透视投影"),a("code",[t._v("PerspectiveCamera")]),a("strong",[t._v("视锥体")]),t._v("相似，只是形状不同。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E6%AD%A3%E6%8A%95%E5%BD%B1%E5%8F%AF%E8%A7%86%E7%A9%BA%E9%97%B4.png",alt:""}})]),t._v(" "),a("p",[t._v("正投影相机")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数格式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数(属性)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("left")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染空间的左边界")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染空间的右边界")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("top")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染空间的上边界")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bottom")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("渲染空间的下边界")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("near")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("near属性表示的是从距离相机多远的位置开始渲染，一般情况会设置一个很小的值。 默认值0.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("far")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("far属性表示的是距离相机多远的位置截止渲染，如果设置的值偏小小，会有部分场景看不到。 默认值2000")])])])]),t._v(" "),a("h3",{attrs:{id:"渲染范围设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染范围设置"}},[t._v("#")]),t._v(" 渲染范围设置")]),t._v(" "),a("p",[t._v("设置正投影相机长方体可视化空间的渲染范围")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正投影相机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//canvas画布宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//canvas画布高度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//canvas画布宽高比")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//控制left, right, top, bottom范围大小")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camera "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"相机位置和观察目标设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机位置和观察目标设置"}},[t._v("#")]),t._v(" 相机位置和观察目标设置")]),t._v(" "),a("p",[t._v("相当于相机放在y轴上，向下观察地面上阵列的长方体。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机放在了y轴上")]),t._v("\ncamera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向坐标原点")]),t._v("\n")])])]),a("p",[t._v("注意"),a("code",[t._v(".position")]),t._v("位置和"),a("code",[t._v("far")]),t._v("参数的设置，确保你想看到的物体能够包含在far之内，超出far的不会渲染。")]),t._v(" "),a("p",[t._v("测试："),a("code",[t._v("far")]),t._v("减小,物体不在可视化空间之内，看不到")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrthographicCamera")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("测试："),a("code",[t._v(".position.y")]),t._v("增大,物体不在可视化空间之内，看不到")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"调整left-right-top-bottom范围大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调整left-right-top-bottom范围大小"}},[t._v("#")]),t._v(" 调整left, right, top, bottom范围大小")]),t._v(" "),a("p",[t._v("如果你想整体预览全部立方体，就需要调整相机的渲染范围，比如设置上下左右的范围。")]),t._v(" "),a("p",[t._v("s设置为2000，上下方向"),a("code",[t._v("top, bottom")]),t._v("渲染范围大概4000左右，三维场景中的立方体分布范围也是大约4000左右，沿着y轴观察，刚好近似可以看到全部长方体。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"改变位置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变位置参数"}},[t._v("#")]),t._v(" 改变位置参数")]),t._v(" "),a("p",[t._v("改变位置参数，改变了观察视角，渲染效果也跟着改变。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面位置你会发现部分立方体会被剪裁掉，其实很简单，有些物体在相机的后面，相机自然看不到，你可以改变相机参数渲染全部立方体。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"改变观察目标-lookat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变观察目标-lookat"}},[t._v("#")]),t._v(" 改变观察目标"),a("code",[t._v(".lookAt()")])]),t._v(" "),a("p",[t._v("指向坐标原点，坐标原点出现在canvas画布中间")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("指向坐标"),a("code",[t._v("(2000, 0, 2000)")]),t._v("，"),a("code",[t._v("(2000, 0, 2000)")]),t._v("对应的场景中位置出现在canvas画布中间。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"正投影相机和透视投影相机区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正投影相机和透视投影相机区别"}},[t._v("#")]),t._v(" 正投影相机和透视投影相机区别")]),t._v(" "),a("p",[t._v("一句话描述，正投影相机"),a("code",[t._v("OrthographicCamera")]),t._v("和透视投影相机"),a("code",[t._v("PerspectiveCamera")]),t._v("的区别就是，透视投影可以模拟人眼观察世界的视觉效果，正投影相机不会。")]),t._v(" "),a("h3",{attrs:{id:"对比透视投影和正投影预览工厂视觉差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比透视投影和正投影预览工厂视觉差异"}},[t._v("#")]),t._v(" 对比透视投影和正投影预览工厂视觉差异")]),t._v(" "),a("p",[t._v("比如前面工厂的gltf模型加载案例，就是用"),a("strong",[t._v("透视投影")]),t._v("相机模拟人在空中俯视地面的效果，如果使用"),a("strong",[t._v("正投影")]),t._v("相机渲染效果就不太自然。")]),t._v(" "),a("h3",{attrs:{id:"相机选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机选择"}},[t._v("#")]),t._v(" 相机选择")]),t._v(" "),a("p",[t._v("对于大部分需要模拟人眼观察效果的场景，需要使用透视投影相机，比如人在场景中"),a("strong",[t._v("漫游")]),t._v("，或是在高处"),a("strong",[t._v("俯瞰")]),t._v("整个园区或工厂。")]),t._v(" "),a("p",[t._v("正投影没有透视效果,也就是不会模拟人眼观察世界的效果。在一些不需要透视的场景你可以选择使用正投影相机，比如整体预览一个中国地图的效果，或者一个2D可视化的效果。")])])}),[],!1,null,null,null);a.default=e.exports}}]);