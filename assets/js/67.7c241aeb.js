(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{395:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"外部模型材质是否共享的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部模型材质是否共享的问题"}},[t._v("#")]),t._v(" 外部模型材质是否共享的问题")]),t._v(" "),s("p",[t._v("美术通过三维建模软件，比如Blender绘制好一个三维场景以后，一些外观一样的Mesh，可能会共享一个材质对象。")]),t._v(" "),s("h3",{attrs:{id:"改变一个模型颜色其它模型跟着变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变一个模型颜色其它模型跟着变化"}},[t._v("#")]),t._v(" 改变一个模型颜色其它模型跟着变化")]),t._v(" "),s("p",[t._v("由于楼房的Mesh共享了1号楼Mesh的材质，当你通过mesh1.material改变mesh1材质，本质上是改变所有楼Mesh的材质。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gltf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号楼"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 改变1号楼Mesh材质颜色")]),t._v("\nmesh1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"name标记材质-判断两个mesh是否共享材质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name标记材质-判断两个mesh是否共享材质"}},[t._v("#")]),t._v(" "),s("code",[t._v(".name")]),t._v("标记材质，判断两个mesh是否共享材质")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v(".name")]),t._v("标记材质，测试mesh1和mesh2是否共享了材质")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gltf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号楼"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmesh1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'楼房材质'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过name标记mesh1对应材质")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mesh2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gltf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2号楼"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过name相同，可以判断mesh1.material和mesh2.material共享了同一个材质对象")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mesh2.material.name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mesh2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"解决问题方向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决问题方向"}},[t._v("#")]),t._v(" 解决问题方向")]),t._v(" "),s("p",[t._v("改变一个模型颜色其它模型跟着变化，是因为多个模型对象共享了材质，如果单独改变一个模型的材质，比如颜色，下面两个方案，可以任选其一。")]),t._v(" "),s("ol",[s("li",[t._v("三维建模软件中设置，需要代码改变材质的Mesh不要共享材质，要独享材质。")]),t._v(" "),s("li",[t._v("代码批量更改：克隆材质对象，重新赋值给mesh的材质属性")])]),t._v(" "),s("h3",{attrs:{id:"代码方式解决多个mesh共享材质的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码方式解决多个mesh共享材质的问题"}},[t._v("#")]),t._v(" 代码方式解决多个mesh共享材质的问题")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用代码方式解决mesh共享材质问题")]),t._v("\ngltf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小区房子"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .material.clone()返回一个新材质对象，和原来一样，重新赋值给.material属性")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmesh1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xffff00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmesh2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);