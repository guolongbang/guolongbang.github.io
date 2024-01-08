(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{351:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"高光网格材质meshphongmaterial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高光网格材质meshphongmaterial"}},[s._v("#")]),s._v(" 高光网格材质"),a("code",[s._v("MeshPhongMaterial")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://study.163.com/course/courseLearn.htm?courseId=1212760820&share=2&shareId=400000000594054#/learn/video?lessonId=1284868323&courseId=1212760820",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频讲解"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("高光网格材质"),a("code",[s._v("MeshPhongMaterial")]),s._v("和基础网格材质"),a("code",[s._v("MeshBasicMaterial")]),s._v("、漫反射网格材质"),a("code",[s._v("MeshLambertMaterial")]),s._v("一样都是网格模型的"),a("code",[s._v("Mesh")]),s._v("的材质。")]),s._v(" "),a("p",[s._v("高光网格材质MeshPhongMaterial和漫反射网格材质MeshLambertMaterial一样会受到光照的影响。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.svg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"meshphongmaterial对光照反射特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meshphongmaterial对光照反射特点"}},[s._v("#")]),s._v(" "),a("code",[s._v("MeshPhongMaterial")]),s._v("对光照反射特点")]),s._v(" "),a("p",[a("code",[s._v("MeshPhongMaterial")]),s._v("和"),a("code",[s._v("MeshLambertMaterial")]),s._v("都会收到光照的影响区别在于，对光线反射方式有差异。")]),s._v(" "),a("p",[a("code",[s._v("MeshPhongMaterial")]),s._v("可以实现"),a("code",[s._v("MeshLambertMaterial")]),s._v("不能实现的高光反射效果。对于高光效果，你可以想象一下，你在太阳下面观察一辆车，你会发现在特定角度和位置，你可以看到车表面某个局部区域非常高亮。")]),s._v(" "),a("h3",{attrs:{id:"镜面反射与漫反射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜面反射与漫反射"}},[s._v("#")]),s._v(" 镜面反射与漫反射")]),s._v(" "),a("p",[a("code",[s._v("MeshPhongMaterial")]),s._v("可以提供一个镜面反射效果,可以类比你生活中拿一面镜子，放在太阳光下，调整角度，可以把太阳光反射到其它地方，如果反射光对着眼睛，也就是反射光线和视线平行的时候，会非常刺眼。")]),s._v(" "),a("p",[a("code",[s._v("MeshLambertMaterial")]),s._v("对应的Mesh受到光线照射，没有镜面反射的效果，只是一个漫反射，也就是光线向四周反射。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgthreejs/%E6%BC%AB%E5%8F%8D%E5%B0%84.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"高光亮度属性-shininess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高光亮度属性-shininess"}},[s._v("#")]),s._v(" 高光亮度属性"),a("code",[s._v(".shininess")])]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("MeshPhongMaterial")]),s._v("的高光亮度"),a("code",[s._v(".shininess")]),s._v("属性,可以控制高光反射效果。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟镜面反射，产生一个高光效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" material "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MeshPhongMaterial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("shininess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//高光部分的亮度，默认30")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"高光颜色属性-specular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高光颜色属性-specular"}},[s._v("#")]),s._v(" 高光颜色属性"),a("code",[s._v(".specular")])]),s._v(" "),a("p",[s._v("可以给颜色属性"),a("code",[s._v(".specular")]),s._v("设置不同的值，比如"),a("code",[s._v("0x444444")]),s._v("、"),a("code",[s._v("0xfffffff")]),s._v(" 查看渲染效果变化。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模拟镜面反射，产生一个高光效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" material "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MeshPhongMaterial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("shininess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//高光部分的亮度，默认30")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("specular")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x444444")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//高光部分的颜色")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);