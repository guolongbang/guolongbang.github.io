(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{586:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"three-js模拟显示屏模型播放视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-js模拟显示屏模型播放视频"}},[t._v("#")]),t._v(" three.js模拟显示屏模型播放视频")]),t._v(" "),s("p",[t._v("需求：在有些Web3D项目中，有一个虚拟屏幕网格模型，你希望屏幕网格模型能模拟播放视频。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img_posts/%E5%B1%8F%E5%B9%95%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91.jpg",alt:""}})]),t._v(" "),s("p",[t._v("思路非常简单，你可以获取"),s("strong",[t._v("图片")]),t._v("创建"),s("strong",[t._v("纹理对象")]),t._v("Texture，作为材质"),s("code",[t._v(".map")]),t._v("的纹理贴图。同样方式，你也可以获取"),s("strong",[t._v("视频")]),t._v("创建纹理对象，作为"),s("code",[t._v(".map")]),t._v("属性的值。")]),t._v(" "),s("h3",{attrs:{id:"_1-建模软件设置好uv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-建模软件设置好uv"}},[t._v("#")]),t._v(" 1. 建模软件设置好UV")]),t._v(" "),s("p",[t._v("使用三维软件建模的过程中，比如使用Blender时候，要把表示虚拟屏幕的Mesh，UV设置好，这样方便代码中添加纹理贴图。可以让美术在建模软件中，先随机设置一张图片作为纹理，验证UV是否设置好。")]),t._v(" "),s("p",[t._v("比如咱们这节课中模型，创建显示屏模型的时候，单独一个矩形平面Mesh表示显示屏，用来添加视频纹理。")]),t._v(" "),s("h3",{attrs:{id:"_2-video元素加载纹理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-video元素加载纹理"}},[t._v("#")]),t._v(" 2. video元素加载纹理")]),t._v(" "),s("p",[t._v("video是html5的一个元素，可以用来加载播放视频，如果不熟悉，可以去补充下相关的前端知识点。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./医院宣传.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-视频创建纹理videotexture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-视频创建纹理videotexture"}},[t._v("#")]),t._v(" 3. 视频创建纹理"),s("code",[t._v("VideoTexture")])]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("VideoTexture")]),t._v("可以把video生成一个纹理，给材质map属性赋值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./医院宣传.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 视频生成纹理对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" texture "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VideoTexture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取矩形平面Mesh(显示屏)设置map")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'电视'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" texture\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-播放视频video-play"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-播放视频video-play"}},[t._v("#")]),t._v(" 4. 播放视频"),s("code",[t._v("video.play()")])]),t._v(" "),s("p",[t._v("视频纹理起作用，非常简单，直接播放视频"),s("code",[t._v("video")]),t._v("即可，视频的每一帧图像数据会在材质"),s("code",[t._v(".map")]),t._v("上更新。整个原理非常简单，就是视频在播放的过程中，threejs会获取视频当前时间对应的一帧图像作为纹理。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("现在很多浏览器不允许视频加载的时候，默认播放，这一点要注意。比如你可以在某个鼠标或键盘事件触发视频的播放。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousedown'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"注意-gltf加载的模型-纹理-flipy、颜色空间问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-gltf加载的模型-纹理-flipy、颜色空间问题"}},[t._v("#")]),t._v(" 注意：gltf加载的模型，纹理"),s("code",[t._v(".flipY")]),t._v("、颜色空间问题")]),t._v(" "),s("p",[t._v("如果你是给gltf模型里面屏幕Mesh设置纹理贴图，纹理贴图方向错误(注意UV坐标正确的情况下)，注意"),s("code",[t._v(".flipY")]),t._v("属性的设置。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flipY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("还有颜色空间的问题，如果颜色空间设置不对，可能会出现纹理颜色与正常颜色不一致的问题。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("colorSpace  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SRGBColorSpace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//新版本")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("texture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encoding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sRGBEncoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//旧版本")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);