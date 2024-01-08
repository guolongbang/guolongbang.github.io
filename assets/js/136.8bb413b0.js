(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{463:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"屏幕坐标转标准设备坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕坐标转标准设备坐标"}},[t._v("#")]),t._v(" 屏幕坐标转标准设备坐标")]),t._v(" "),s("p",[t._v("在讲解下节课"),s("strong",[t._v("鼠标点击选中模型")]),t._v("之前，先给大家讲解下"),s("strong",[t._v("坐标系")]),t._v("的问题。")]),t._v(" "),s("h3",{attrs:{id:"获取鼠标事件坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取鼠标事件坐标"}},[t._v("#")]),t._v(" 获取鼠标事件坐标")]),t._v(" "),s("p",[t._v("先来了解一些，普通的web前端相关知识。")]),t._v(" "),s("p",[t._v("鼠标单击HTML元素，通过函数的参数鼠标事件对象"),s("code",[t._v("event")]),t._v("，可以获取一些坐标信息。课件源码中是以threejs的canvas画布为例给大家演示。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event对象有很多鼠标事件相关信息")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("表示鼠标单击位置的坐标，单位是像素px，以点击的HTML元素左上角为坐标原点，水平向右方向为x轴，竖直向下方向为y轴。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("下图灰色区域是一个HTML元素。\n"),s("img",{attrs:{src:"/imgthreejs/client%E3%80%81offset%E5%9D%90%E6%A0%87%E7%B3%BB.JPG",alt:""}})]),t._v(" "),s("p",[s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("和"),s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("含义区别在于坐标原点不同，其他一样。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("特殊情况，如果HTML元素CSS布局中，距离顶部、左侧距离为零，"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("和"),s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("是相同的。")]),t._v(" "),s("h3",{attrs:{id:"标准设备坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准设备坐标系"}},[t._v("#")]),t._v(" 标准设备坐标系")]),t._v(" "),s("p",[t._v("Three.js Canvas画布具有一个标准设备坐标系，该坐标系的坐标原点在canvas画布的中间位置，x轴水平向右，y轴竖直向上。")]),t._v(" "),s("p",[t._v("标准设备坐标系的坐标值不是绝对值，是相对值，范围是[-1,1]区间，也是说canvas画布上任何一个位置的坐标，如果用标准设备坐标系去衡量，那么坐标的所有值都在-1到1之间。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/WebGL%E6%A0%87%E5%87%86%E8%AE%BE%E5%A4%87%E5%9D%90%E6%A0%87.JPG",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"屏幕坐标转标准设备坐标-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕坐标转标准设备坐标-2"}},[t._v("#")]),t._v(" 屏幕坐标转标准设备坐标")]),t._v(" "),s("p",[t._v("你可以用"),s("code",[t._v(".offsetX")]),t._v("和"),s("code",[t._v(".offsetY")]),t._v("当做canvas画布的屏幕坐标。")]),t._v(" "),s("p",[t._v("threejs canvas画布上一个点，可以用"),s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("绝对值表示，同样也可以用标准设备坐标系去表达。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/imgthreejs/%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87%E8%BD%AC%E6%A0%87%E5%87%86%E8%AE%BE%E5%A4%87%E5%9D%90%E6%A0%87.JPG",alt:""}})]),t._v(" "),s("p",[t._v("把"),s("code",[t._v(".offsetX")]),t._v("和"),s("code",[t._v(".offsetY")]),t._v("坐标转化为标准设备坐标坐标。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 坐标转化公式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//屏幕坐标px、py转标准设备坐标x、y")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//width、height表示canvas画布宽高度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("canvas画布的宽度是width，"),s("code",[t._v(".offsetX")]),t._v("的范围是0~width,"),s("code",[t._v(".offsetX")]),t._v("除以canvas画布宽度width，就可以从绝对值变成相对值，范围是0~1，相对值乘以2，范围0~2，再减去1，范围是-1~1，刚好和canvas画布标准设备坐标的范围-1~1能够对应起来。")]),t._v(" "),s("p",[t._v("对于"),s("code",[t._v(".offsetY")]),t._v("的转标准设备坐标y，和"),s("code",[t._v(".offsetX")]),t._v("转标准设备坐标x相似，唯一要注意地方就是两个坐标系的y坐标相反，同样计算方式，最后取相反数即可。")]),t._v(" "),s("h3",{attrs:{id:"使用-clientx、-clienty计算canvas画布屏幕坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-clientx、-clienty计算canvas画布屏幕坐标"}},[t._v("#")]),t._v(" 使用"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("计算canvas画布屏幕坐标")]),t._v(" "),s("p",[t._v("用"),s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("可以直接表示canvas画布屏幕坐标，如果用"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("表示，这时候要注意，把"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("转化为以canvas画布左上角为原点的坐标。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏幕坐标转标准设备坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left、top表示canvas画布布局，距离顶部和左侧的距离(px)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//屏幕坐标px、py转标准设备坐标x、y")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//width、height表示canvas画布宽高度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("特殊情况，canvas画布，左上角和网页body右上角重合，比如大部分课程canvas全屏布局的案例。")]),t._v(" "),s("p",[t._v("要注意，把"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("转化为以canvas画布左上角为原点的坐标")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("实际开发的时候，你可以用"),s("code",[t._v(".clientX")]),t._v("、"),s("code",[t._v(".clientY")]),t._v("计算标准设备坐标，也可以用"),s("code",[t._v(".offsetX")]),t._v("、"),s("code",[t._v(".offsetY")]),t._v("计算标准设备坐标。")])])}),[],!1,null,null,null);s.default=e.exports}}]);