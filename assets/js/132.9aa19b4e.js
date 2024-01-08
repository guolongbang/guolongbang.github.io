(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{458:function(a,s,t){"use strict";t.r(s);var r=t(7),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gltf后处理颜色异常-伽马校正"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gltf后处理颜色异常-伽马校正"}},[a._v("#")]),a._v(" gltf后处理颜色异常(伽马校正)")]),a._v(" "),s("p",[a._v("你打开上节课代码，可以发现，加载gltf模型，如果使用EffectComposer添加后处理功能，模型颜色可能会出现异常，对于这种情况，首先要先分析产生颜色偏差原因。")]),a._v(" "),s("h3",{attrs:{id:"颜色偏差的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#颜色偏差的原因"}},[a._v("#")]),a._v(" 颜色偏差的原因")]),a._v(" "),s("p",[a._v("首先你可以回顾6.3和6.9节内容，加载gltf模型如果出现颜色偏差，需要设置"),s("code",[a._v("renderer.outputEncoding")]),a._v("解决。")]),a._v(" "),s("p",[a._v("如果你使用threejs后处理功能EffectComposer，"),s("code",[a._v("renderer.outputEncoding")]),a._v("会无效，自然会出现颜色偏差。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("outputEncoding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sRGBEncoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"引入gammacorrectionshader-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入gammacorrectionshader-js"}},[a._v("#")]),a._v(" 引入"),s("code",[a._v("GammaCorrectionShader.js")])]),a._v(" "),s("p",[a._v("GammaCorrectionShader.js扩展库的目录："),s("code",[a._v("examples/jsm/shaders/")])]),a._v(" "),s("p",[s("code",[a._v("examples/jsm/shaders/")]),a._v("目录下有很多不同功能的shader文件,GammaCorrectionShader.js的功能就是进行伽马校正，具体点说就是可以用来解决gltf模型后处理时候，颜色偏差的问题。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 伽马校正后处理Shader")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("GammaCorrectionShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'three/addons/shaders/GammaCorrectionShader.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"引入shaderpass-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入shaderpass-js"}},[a._v("#")]),a._v(" 引入"),s("code",[a._v("ShaderPass.js")])]),a._v(" "),s("p",[a._v("ShaderPass.js扩展库目录："),s("code",[a._v("examples/jsm/postprocessing/")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ShaderPass功能：使用后处理Shader创建后处理通道")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("ShaderPass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'three/addons/postprocessing/ShaderPass.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"创建伽马校正后处理通道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建伽马校正后处理通道"}},[a._v("#")]),a._v(" 创建伽马校正后处理通道")]),a._v(" "),s("p",[a._v("threejs并没有直接提供伽马校正的后处理通道，提供了一个伽马校正的Shader对象GammaCorrectionShader，这时候可以把Shader对象作为ShaderPass的参数创建一个通道。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 创建伽马校正通道")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" gammaPass"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShaderPass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("GammaCorrectionShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncomposer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addPass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gammaPass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);