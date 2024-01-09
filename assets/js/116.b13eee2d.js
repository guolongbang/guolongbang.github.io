(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{443:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"聚光源spotlight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚光源spotlight"}},[t._v("#")]),t._v(" 聚光源"),s("code",[t._v("SpotLight")])]),t._v(" "),s("p",[t._v("入门部分给大家介绍过平行光"),s("code",[t._v("DirectionalLight")]),t._v("、点光源"),s("code",[t._v("PointLight")]),t._v("、环境光"),s("code",[t._v("AmbientLight")]),t._v(",下面给大家介绍一个新的光源对象，也就是聚广源"),s("code",[t._v("SpotLight")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.webgl3d.cn/pages/b9504a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.8. 光源对物体表面影响"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.webgl3d.cn/pages/343ae9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.10. 平行光与环境光"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:"/threejs/%E5%85%89%E6%BA%90.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"创建聚广源spotlight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建聚广源spotlight"}},[t._v("#")]),t._v(" 创建聚广源"),s("code",[t._v("SpotLight")])]),t._v(" "),s("p",[t._v("聚光源可以认为是一个沿着特定方会逐渐发散的光源，照射范围在三维空间中构成一个圆锥体。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/threejs/%E5%85%89%E6%BA%90%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚光源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0xffffff:光源颜色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.0：光照强度intensity")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" spotLight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpotLight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xffffff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光源添加到场景中")]),t._v("\n")])])]),s("p",[t._v("光照强度也可以不通过"),s("code",[t._v("THREE.SpotLight")]),t._v("参数2设置，直接通过光照强度属性"),s("code",[t._v(".intensity")]),t._v("设置。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intensity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光照强度")]),t._v("\n")])])]),s("h3",{attrs:{id:"聚光源发散角度-angle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚光源发散角度-angle"}},[t._v("#")]),t._v(" 聚光源发散角度"),s("code",[t._v(".angle")])]),t._v(" "),s("p",[t._v("通过属性"),s("code",[t._v(".angle")]),t._v("可以设置聚光源发散角度，和目标.target两个属性来实现。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置聚光光源发散角度")]),t._v("\nspotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("angle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光锥角度的二分之一")]),t._v("\n")])])]),s("h3",{attrs:{id:"光源衰减"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#光源衰减"}},[t._v("#")]),t._v(" 光源衰减")]),t._v(" "),s("p",[t._v("生活中聚光源，比如台灯、手电筒之类，随机距离的改变，光线会衰减，越来越弱，"),s("code",[t._v(".decay")]),t._v("默认值是2.0，如果你不希望衰减可以设置为"),s("code",[t._v("0.0")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置光源不随距离衰减")]),t._v("\n")])])]),s("p",[t._v("如果使用默认衰减"),s("code",[t._v("2.0")]),t._v("，对于部分threejs新版本，有时候你可能看不到光源效果，这时候可以把光照强度加强,如果你的版本不影响，就不用加强光照强度(根据版本情况灵活对应)。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你可以对比不同光照强度明暗差异(传播同样距离)")]),t._v("\nspotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intensity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光照强度")]),t._v("\nspotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intensity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//光照强度")]),t._v("\n")])])]),s("h3",{attrs:{id:"聚光源位置-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚光源位置-position"}},[t._v("#")]),t._v(" 聚光源位置"),s("code",[t._v(".position")])]),t._v(" "),s("p",[t._v("聚光源"),s("code",[t._v("SpotLight")]),t._v("的父类是"),s("code",[t._v("Light")]),t._v("，"),s("code",[t._v("Light")]),t._v("的父类是"),s("code",[t._v("Object3D")]),t._v("，聚光源"),s("code",[t._v("SpotLight")]),t._v("会继承父类"),s("code",[t._v("Object3D")]),t._v("的位置属性"),s("code",[t._v(".position")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置聚光光源位置")]),t._v("\nspotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"聚广源目标对象-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚广源目标对象-target"}},[t._v("#")]),t._v(" 聚广源目标对象"),s("code",[t._v(".target")])]),t._v(" "),s("p",[t._v("聚广源目标对象"),s("code",[t._v(".target")]),t._v("和光源的位置"),s("code",[t._v(".position")]),t._v("共同确定聚广源照射方向。")]),t._v(" "),s("p",[t._v("浏览器控制台打印聚广源目标对象"),s("code",[t._v(".target")]),t._v("属性，可以看到属性值是一个模型对象"),s("code",[t._v("Object3D")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'聚广源指向目标'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("聚广源目标对象属性的位置通过属性值"),s("code",[t._v("Object3D")]),t._v("的"),s("code",[t._v(".position")]),t._v("属性设置。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// spotLight.target是一个模型对象Object3D，默认在坐标原点")]),t._v("\nspotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//spotLight.target添加到场景中.target.position才会起作用")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"聚光源辅助对象spotlighthelper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚光源辅助对象spotlighthelper"}},[t._v("#")]),t._v(" 聚光源辅助对象"),s("code",[t._v("SpotLightHelper")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚广源辅助对象，可视化聚广源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" spotLightHelper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpotLightHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spotLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xffffff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spotLightHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);