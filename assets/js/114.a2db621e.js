(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{440:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"orbitcontrols旋转缩放限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orbitcontrols旋转缩放限制"}},[t._v("#")]),t._v(" OrbitControls旋转缩放限制")]),t._v(" "),a("p",[t._v("课程中经常会用到相机控件"),a("code",[t._v("OrbitControls")]),t._v("的不同功能,本节课就会大家补充新的知识点，比如控制缩放的最大最小范围，比如限制旋转的角度范围，比如禁止平移。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/837374/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.9. 相机控件OrbitControls"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.webgl3d.cn/pages/ed32ac/",target:"_blank",rel:"noopener noreferrer"}},[t._v("6.4. OrbitControls辅助设置相机参数"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"禁止右键平移-enablepan属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止右键平移-enablepan属性"}},[t._v("#")]),t._v(" 禁止右键平移"),a("code",[t._v(".enablePan")]),t._v("属性")]),t._v(" "),a("p",[t._v("比如一个展示一个三维场景，你不希望鼠标右键拖动会产生一个平移效果。可以通过设置相机空间对象OrbitControls的"),a("code",[t._v(".enablePan")]),t._v("属性，查看OrbitControls源码可以看到"),a("code",[t._v(".enablePan")]),t._v("属性的默认值是true。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enablePan "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止右键拖拽")]),t._v("\n")])])]),a("h3",{attrs:{id:"禁止缩放或旋转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止缩放或旋转"}},[t._v("#")]),t._v(" 禁止缩放或旋转")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v(".enableZoom")]),t._v("属性可以控制是否允许鼠标中键缩放场景，"),a("code",[t._v(".enableZoom")]),t._v("属性默认值true。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止缩放")]),t._v("\n")])])]),a("p",[t._v("通过"),a("code",[t._v(".enableRotate")]),t._v("属性可以控制是否允许鼠标左键旋转场景，"),a("code",[t._v(".enableRotate")]),t._v("属性默认值true。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableRotate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止旋转")]),t._v("\n")])])]),a("h3",{attrs:{id:"orbitcontrols-target属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orbitcontrols-target属性"}},[t._v("#")]),t._v(" OrbitControls"),a("code",[t._v(".target")]),t._v("属性")]),t._v(" "),a("p",[t._v("相机控件OrbitControls"),a("code",[t._v(".target")]),t._v("属性对应的就是相机的"),a("code",[t._v(".lookAt()")]),t._v("观察目标。")]),t._v(" "),a("p",[t._v("执行"),a("code",[t._v("controls.update();")]),t._v(",相机控件内部会执行"),a("code",[t._v("camera.lookAt(controls.target)")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// controls.target默认值是坐标原点")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//update()函数内会执行camera.lookAt(x, y, z)")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h3",{attrs:{id:"透视投影相机缩放范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透视投影相机缩放范围"}},[t._v("#")]),t._v(" 透视投影相机缩放范围")]),t._v(" "),a("p",[t._v("在实际应用中，透视投影相机的规则是远小近大，相机距离目标观察点距离越远，目标模型显示越小，距离越近显示越大")]),t._v(" "),a("p",[t._v("前面给大家讲解过，对于透视投影相机而言，"),a("code",[t._v("OrbitControls")]),t._v("缩放，本质上就是改变相机的位置属性"),a("code",[t._v(".position")]),t._v("。")]),t._v(" "),a("p",[t._v("这就是说如果你想控制缩放范围，就是约束相机位置"),a("code",[t._v(".position")]),t._v("的变化范围，"),a("code",[t._v("OrbitControls")]),t._v("提供了两个属性"),a("code",[t._v(".minDistance")]),t._v("和"),a("code",[t._v(".maxDistance")]),t._v("可以帮助你实现。")]),t._v(" "),a("p",[a("code",[t._v(".minDistance")]),t._v("表示相机位置"),a("code",[t._v(".position")]),t._v("和相机目标观察点"),a("code",[t._v("controls.target")]),t._v("的最小距离。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机位置与观察目标点最小值")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDistance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v(".maxDistance")]),t._v("表示相机位置"),a("code",[t._v(".position")]),t._v("和相机目标观察点"),a("code",[t._v("controls.target")]),t._v("的最大距离。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机位置与观察目标点最大值")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxDistance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"正投影缩放范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正投影缩放范围"}},[t._v("#")]),t._v(" 正投影缩放范围")]),t._v(" "),a("p",[t._v("对于正投影相机对象"),a("code",[t._v("OrthographicCamera")]),t._v("，可以通过相机控件OrbitControls的"),a("code",[t._v(".minZoom")]),t._v("和"),a("code",[t._v(".maxZoom")]),t._v("属性实现")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放范围")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"相机位置与目标观察点距离-getdistance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机位置与目标观察点距离-getdistance"}},[t._v("#")]),t._v(" 相机位置与目标观察点距离"),a("code",[t._v(".getDistance()")])]),t._v(" "),a("p",[a("code",[t._v("controls.getDistance()")]),t._v("可以计算出来相机位置"),a("code",[t._v(".position")]),t._v("和相机目标观察点"),a("code",[t._v("controls.target")]),t._v("的距离。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机位置与目标观察点距离")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dis "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDistance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"可视化设置相机缩放范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可视化设置相机缩放范围"}},[t._v("#")]),t._v(" 可视化设置相机缩放范围")]),t._v(" "),a("p",[t._v("如果你直接凭感觉设置"),a("code",[t._v("minDistance")]),t._v("和"),a("code",[t._v("maxDistance")]),t._v("，不太好把握具体范围，这时候通过"),a("code",[t._v(".getDistance()")]),t._v("辅助解决。")]),t._v(" "),a("p",[t._v("在canvas画布上，你用鼠标缩放三维场景，这时候会改变透视投影相机位置，那么相机与目标观察点的距离也会改变，这时候可以通过"),a("code",[t._v(".getDistance()")]),t._v("计算出来此刻相机与目标观察点的距离，用于设置"),a("code",[t._v("minDistance")]),t._v("和"),a("code",[t._v("maxDistance")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相机位置与目标观察点距离")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dis "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDistance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置旋转范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置旋转范围"}},[t._v("#")]),t._v(" 设置旋转范围")]),t._v(" "),a("p",[t._v("展示一个三维场景，你想控制360度旋转范围，比如一个工厂，你不希望用户看到工厂的底部，你可以通过设置相机的旋转范围属性来实现。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v(".minPolarAngle")]),t._v("和"),a("code",[t._v(".maxPolarAngle")]),t._v("属性控制上下的旋转范围，默认从0到180度，默认情况下0度，XOZ平面平行canvas画布，y轴垂直指向屏幕外，90度时候，渲染结果y轴竖直向上，180度，XOZ平面平行canvas画布，y轴垂直指向屏幕内。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上下旋转范围")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minPolarAngle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认值0")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxPolarAngle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认值Math.PI")]),t._v("\n")])])]),a("p",[a("code",[t._v(".maxPolarAngle")]),t._v("属性设置为90度，这样不能看到工厂模型底部")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxPolarAngle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("通过"),a("code",[t._v(".minAzimuthAngle")]),t._v("和"),a("code",[t._v(".maxAzimuthAngle")]),t._v("属性控制左右的旋转范围。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左右旋转范围")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minAzimuthAngle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxAzimuthAngle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);