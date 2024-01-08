(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{400:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"环境贴图-envmap-金属效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境贴图-envmap-金属效果"}},[t._v("#")]),t._v(" 环境贴图.envMap(金属效果)")]),t._v(" "),a("p",[t._v("环境贴图对PBR材质渲染效果影响还是比较大，一般渲染PBR材质的模型，最好设置一个合适的环境贴图。")]),t._v(" "),a("h3",{attrs:{id:"立方体纹理加载器cubetextureloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立方体纹理加载器cubetextureloader"}},[t._v("#")]),t._v(" 立方体纹理加载器"),a("code",[t._v("CubeTextureLoader")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TextureLoader")]),t._v("返回"),a("code",[t._v("Texture")])]),t._v(" "),a("li",[a("code",[t._v("CubeTextureLoader")]),t._v("返回"),a("code",[t._v("CubeTexture")])])]),t._v(" "),a("p",[t._v("通过前面学习大家知道，通过纹理贴图加载器"),a("code",[t._v("TextureLoader")]),t._v("的"),a("code",[t._v(".load()")]),t._v("方法加载一张图片可以返回一个纹理对象"),a("code",[t._v("Texture")]),t._v("。")]),t._v(" "),a("p",[t._v("立方体纹理加载器"),a("code",[t._v("CubeTextureLoader")]),t._v("的"),a("code",[t._v(".load()")]),t._v("方法是加载6张图片，返回一个立方体纹理对象"),a("code",[t._v("CubeTexture")]),t._v("。")]),t._v(" "),a("p",[t._v("立方体纹理对象"),a("code",[t._v("CubeTexture")]),t._v("的父类是纹理对象"),a("code",[t._v("Texture")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"cubetextureloader加载环境贴图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cubetextureloader加载环境贴图"}},[t._v("#")]),t._v(" "),a("code",[t._v("CubeTextureLoader")]),t._v("加载环境贴图")]),t._v(" "),a("p",[t._v("所谓"),a("strong",[t._v("环境贴图")]),t._v("，就是一个模型周围的环境的图像，比如一间房子，房子的"),a("strong",[t._v("上下左右前后")]),t._v("分别拍摄一张照片，就是3D空间中6个角度方向的照片。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载环境贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载周围环境6个方向贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上下左右前后6张贴图构成一个立方体空间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'py.jpg', 'ny.jpg'：y轴贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'pz.jpg', 'nz.jpg'：z轴贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textureCube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CubeTextureLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./环境贴图/环境贴图0/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nx.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'py.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ny.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pz.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nz.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CubeTexture表示立方体纹理对象，父类是纹理对象Texture ")]),t._v("\n")])])]),a("h3",{attrs:{id:"meshstandardmaterial环境贴图属性-envmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meshstandardmaterial环境贴图属性-envmap"}},[t._v("#")]),t._v(" "),a("code",[t._v("MeshStandardMaterial")]),t._v("环境贴图属性"),a("code",[t._v(".envMap")])]),t._v(" "),a("p",[t._v("实际生活中，一个物体表面，往往会反射周围的环境。人的眼睛看到的东西，往往反射有周围景物，所以three.js渲染模型，如果想渲染效果更好看，如果想更符合实际生活情况，也需要想办法让模型反射周围景物。")]),t._v(" "),a("p",[t._v("MeshStandardMaterial材质的环境贴图属性是"),a("code",[t._v(".envMap")]),t._v("，通过PBR材质的贴图属性可以实现模型表面反射周围景物，这样渲染效果更好。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载环境贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textureCube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CubeTextureLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./环境贴图/环境贴图0/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nx.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'py.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ny.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pz.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nz.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshStandardMaterial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("metalness")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("roughness")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("envMap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" textureCube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置pbr材质环境贴图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("envMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" textureCube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置环境贴图 ")]),t._v("\n")])])]),a("h3",{attrs:{id:"环境贴图反射率-envmapintensity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境贴图反射率-envmapintensity"}},[t._v("#")]),t._v(" 环境贴图反射率"),a("code",[t._v(".envMapIntensity")])]),t._v(" "),a("p",[a("code",[t._v("MeshStandardMaterial")]),t._v("的"),a("code",[t._v(".envMapIntensity")]),t._v("属性主要用来设置模型表面反射周围环境贴图的能力，或者说环境贴图对模型表面的影响能力。具体说"),a("code",[t._v(".envMapIntensity")]),t._v("相当于环境贴图的系数，环境贴图像素值乘以该系数后，在用于影响模型表面。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// envMapIntensity：控制环境贴图对mesh表面影响程度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认值1, 设置为0.0,相当于没有环境贴图")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("envMapIntensity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"粗糙度roughness为0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粗糙度roughness为0"}},[t._v("#")]),t._v(" "),a("strong",[t._v("粗糙度")]),a("code",[t._v("roughness")]),t._v("为0")]),t._v(" "),a("p",[t._v("你可以尝试把"),a("strong",[t._v("粗糙度")]),a("code",[t._v("roughness")]),t._v("设置为0，看看模型对环境贴图的反射效果。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("roughness "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完全镜面反射，像镜子一样")]),t._v("\n")])])]),a("h3",{attrs:{id:"选择合适的环境贴图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的环境贴图"}},[t._v("#")]),t._v(" 选择合适的环境贴图")]),t._v(" "),a("p",[t._v("不同的明暗或景物的环境贴图对渲染效果的影响是不一样的，所以不仅要设置环境贴图，还要根据需要选择合适的环境贴图，一般实际开发使用美术提供的环境贴图即可。")]),t._v(" "),a("p",[t._v("你可以尝试测试源码中提供多个环境贴图对比渲染效果差异。")]),t._v(" "),a("h3",{attrs:{id:"纹理和渲染器颜色空间一致"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纹理和渲染器颜色空间一致"}},[t._v("#")]),t._v(" 纹理和渲染器颜色空间一致")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果renderer.outputEncoding=THREE.sRGBEncoding;环境贴图需要保持一致")]),t._v("\ntextureCube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encoding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sRGBEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);