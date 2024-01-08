(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{619:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"web3d可视化面试题和模板-webgl-three-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web3d可视化面试题和模板-webgl-three-js"}},[t._v("#")]),t._v(" Web3D可视化面试题和模板(WebGL/Three.js)")]),t._v(" "),e("p",[t._v("下面给大家简单介绍下Web3D可视化面试(WebGL、Three.js)中可能会遇到的问题。")]),t._v(" "),e("p",[t._v("不过有一点要提前声明下，Web3D可视化起步发展中，并不像普通前端有那么多固定的面试模板或留言，面试形式五花八门，也不一定就是面试具体知识点。大家不用刻意去记忆下面的面试题，面试时根据自己掌握的知识，结合项目，随机应变回答即可。")]),t._v(" "),e("p",[t._v("大家要做的是，根据我写的面试题，判断下，你自身的水平，查漏补缺，慢慢提升自身水平即可。")]),t._v(" "),e("h2",{attrs:{id:"面试大方向指导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试大方向指导"}},[t._v("#")]),t._v(" 面试大方向指导")]),t._v(" "),e("p",[t._v("不同公司面试方式五花八门，不过大体上分为两大类。")]),t._v(" "),e("p",[t._v("如果中小公司，刚刚接触这块，公司没人了解，一般倾向于让你展示作品或履历，而不是具体问题，毕竟他们也不会。")]),t._v(" "),e("p",[t._v("如果对方公司有完整WebGL程序员团队，一般会问具体threejs、webgl、Cesium等具体知识点，如果是实习生，一般要求低点，如果是中高级程序员，除了简单threejs知识点，还会问数学几何计算、shader、WebGL等底层知识点。")]),t._v(" "),e("p",[t._v("还有一些公司会给你一个模型场景，让你回去，自由发挥实现一个特定效果。")]),t._v(" "),e("h2",{attrs:{id:"作品问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作品问题"}},[t._v("#")]),t._v(" 作品问题")]),t._v(" "),e("p",[t._v("你可以在我系统课程中一些案例基础上，丰富下，自己实现一些效果，或者放在个人博客上。(有一点，如果你的面试官刚好接触过我课程，你需要想好怎么回复，比如直接说明学过我课程，自己增加了点功能即可)。")]),t._v(" "),e("p",[t._v("去"),e("a",{attrs:{href:"https://www.cgmodel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("模型网"),e("OutboundLink")],1),t._v("等任何网站购买一些原创模型，然后自己写代码，这样就省去建模时间，然后直接套用课程用功能代码就行，模型虽然不同，但是代码没什么区别。")]),t._v(" "),e("p",[t._v("当然了如果你有公司履历就用不着这样了，直接展示公司做的案例即可。")]),t._v(" "),e("h2",{attrs:{id:"前端问题面试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端问题面试"}},[t._v("#")]),t._v(" 前端问题面试")]),t._v(" "),e("p",[t._v("一般前端问题面试，相比普通前端，会问的少点，毕竟主要还是面试3d这块。")]),t._v(" "),e("p",[t._v("如果你原来就是前端，那么和以前面试一样就行。")]),t._v(" "),e("p",[t._v("如果你是非前端转过来的，那么对你普通前端技术栈可能没有那么熟悉，但是也尽量去了解熟悉下。如果问到某块知识点你熟悉吗，如果不熟悉，直接回答否就行或者说知道点，但是很少用，这样面试官也不会深入问了。这样面试官就会重点面试web3d这块。")]),t._v(" "),e("h2",{attrs:{id:"threejs基础问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs基础问题"}},[t._v("#")]),t._v(" threejs基础问题")]),t._v(" "),e("p",[t._v("一般会问提一些web3d可视化开发常见的基础问题，比如three.js、模型软件之类的。")]),t._v(" "),e("h3",{attrs:{id:"你都了解什么建模软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你都了解什么建模软件"}},[t._v("#")]),t._v(" 你都了解什么建模软件")]),t._v(" "),e("p",[t._v("下面我写的非常多，但是你不用去记忆，其实能知道常用的Blender就行了，或者多说点美术常用的3dmax、c4d之类的")]),t._v(" "),e("p",[t._v("美术相关：blender、3dmax、c4d、maya\n机械相关：SolidWorks、CATIA、AutoCAD、UG\n建筑相关：Revit、SketchUp\n工业设计相关：Rhino")]),t._v(" "),e("h3",{attrs:{id:"介绍下模型几何体的position、uv、index、normal等属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍下模型几何体的position、uv、index、normal等属性"}},[t._v("#")]),t._v(" 介绍下模型几何体的position、uv、index、normal等属性")]),t._v(" "),e("ol",[e("li",[t._v("position：顶点位置坐标，描述模型的几何形状")]),t._v(" "),e("li",[t._v("uv：顶点UV纹理坐标，与顶点位置一一对应，用来表示贴图与模型的映射关系")]),t._v(" "),e("li",[t._v("index：几何体顶点索引")]),t._v(" "),e("li",[t._v("normal：几何体顶点法线")])]),t._v(" "),e("p",[t._v("更具体学习参考threejs中文网电子书"),e("a",{attrs:{href:"http://www.webgl3d.cn/pages/f84ca8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("章节2"),e("OutboundLink")],1),t._v("和"),e("a",{attrs:{href:"http://www.webgl3d.cn/pages/71e307/",target:"_blank",rel:"noopener noreferrer"}},[t._v("章节5"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"渲染循环问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染循环问题"}},[t._v("#")]),t._v(" 渲染循环问题")]),t._v(" "),e("p",[t._v("具体问题：three.js动画渲染循环中，一般需要执行WebGL渲染器那个方法")]),t._v(" "),e("p",[t._v("答案：一般需要执行WebGL渲染器"),e("code",[t._v("WebGLRenderer")]),t._v("的"),e("code",[t._v(".render()")]),t._v("渲染方法")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"group和object3d区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group和object3d区别"}},[t._v("#")]),t._v(" Group和Object3D区别")]),t._v(" "),e("p",[t._v("在threejs的语法中"),e("code",[t._v("Object3D")]),t._v("是的"),e("code",[t._v("Group")]),t._v("父类,但是具体使用，都差不多，"),e("code",[t._v("Group")]),t._v("更语义化一些，可以用来表示一个组对象，可以包含mesh、group、line等子对象，构成层级模型。")]),t._v(" "),e("h3",{attrs:{id:"你了解threejs哪些材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你了解threejs哪些材质"}},[t._v("#")]),t._v(" 你了解threejs哪些材质")]),t._v(" "),e("p",[t._v("整体来说，有点材质、精灵材质、线材质、网格材质等等，这些材质分别和点模型"),e("code",[t._v("Points")]),t._v("、精灵模型"),e("code",[t._v("Sprite")]),t._v("、线模型"),e("code",[t._v("Line")]),t._v("、网格模型"),e("code",[t._v("Mesh")]),t._v("相对应。")]),t._v(" "),e("p",[t._v("其中网格材质比较丰富，比较常用，比如不受光照影响的基础网格模型"),e("code",[t._v("MeshBasicMaterial")]),t._v("，受到光照影响的漫反射网格材质"),e("code",[t._v("MeshLambertMaterial")]),t._v("、高光网格材质"),e("code",[t._v("MeshPhongMaterial")]),t._v("、PBR相关材质"),e("code",[t._v("MeshStandardMaterial")]),t._v("和"),e("code",[t._v("MeshPhysicalMaterial")])]),t._v(" "),e("p",[t._v("相关链接：\nhttp://www.webgl3d.cn/pages/2da02c/\nhttp://www.webgl3d.cn/pages/24c407/\nhttp://www.webgl3d.cn/pages/56b66b/")]),t._v(" "),e("h3",{attrs:{id:"你了解tween-js库吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你了解tween-js库吗"}},[t._v("#")]),t._v(" 你了解tween.js库吗")]),t._v(" "),e("p",[e("code",[t._v("tween.js")]),t._v("是"),e("code",[t._v("JavaScript")]),t._v("动画库，主要用于补间动画。在threejs项目中，也可以借助"),e("code",[t._v("tween.js")]),t._v("辅助threejs实现动画效果。")]),t._v(" "),e("h3",{attrs:{id:"怎么获取本地坐标和世界坐标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么获取本地坐标和世界坐标"}},[t._v("#")]),t._v(" 怎么获取本地坐标和世界坐标")]),t._v(" "),e("p",[t._v("模型本地坐标："),e("code",[t._v(".position")]),t._v("属性")]),t._v(" "),e("p",[t._v("模型世界坐标："),e("code",[t._v(".getWorldPosition()")]),t._v("方法")]),t._v(" "),e("p",[t._v("参考：http://www.webgl3d.cn/pages/00ddfa/")]),t._v(" "),e("h3",{attrs:{id:"了解gltf文件格式吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解gltf文件格式吗"}},[t._v("#")]),t._v(" 了解gltf文件格式吗")]),t._v(" "),e("p",[t._v("gltf是Web3D可视化开发中，非常常用的一种三维模型文件格式，就像图像常用的jpg或png格式一样。")]),t._v(" "),e("p",[t._v("一般实际开发，通过Blender构建三维模型，然后导出gltf文件，threejs在通过代码加载gltf模型。")]),t._v(" "),e("p",[t._v(".glb文件是gltf格式的二进制文件。")]),t._v(" "),e("p",[t._v("相关内容参考threejs中文网电子书章节6：http://www.webgl3d.cn/pages/f24993/")]),t._v(" "),e("h3",{attrs:{id:"threejs后处理你都了解什么内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs后处理你都了解什么内容"}},[t._v("#")]),t._v(" threejs后处理你都了解什么内容")]),t._v(" "),e("p",[t._v("具体参考：http://www.webgl3d.cn/pages/e1e75d/")]),t._v(" "),e("p",[t._v("实际回复，你可以把你大概熟悉的说下，比如outline高亮发光描边，比如bloom发光、比如抗锯齿的相关后处理、比如gama矫正的相关后处理。")]),t._v(" "),e("h3",{attrs:{id:"一个三维场景有哪些标注标签方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个三维场景有哪些标注标签方式"}},[t._v("#")]),t._v(" 一个三维场景有哪些标注标签方式")]),t._v(" "),e("ol",[e("li",[t._v("threejs自身的模型对象，比如精灵模型"),e("code",[t._v("Sprite")])]),t._v(" "),e("li",[t._v("CSS2和CSS3渲染器，渲染HTML标签标注三维场景")])]),t._v(" "),e("p",[t._v("参考：http://www.webgl3d.cn/pages/428714/")]),t._v(" "),e("h3",{attrs:{id:"怎么通过threejs代码设置三维场景的阴影"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么通过threejs代码设置三维场景的阴影"}},[t._v("#")]),t._v(" 怎么通过threejs代码设置三维场景的阴影")]),t._v(" "),e("p",[t._v("记不太清，可以大概描述即可，一般就是递归遍历整个三维场景，设置所有模型可以"),e("strong",[t._v("产生阴影")]),t._v("和"),e("strong",[t._v("接收阴影")]),t._v("效果。")]),t._v(" "),e("p",[t._v("然后通过阴影属性"),e("code",[t._v(".shadow.camera")]),t._v("，设置好阴影渲染范围。")]),t._v(" "),e("p",[t._v("最后不要忘了，渲染器允许阴影渲染、光源允许阴影计算。")]),t._v(" "),e("p",[t._v("具体参考：http://www.webgl3d.cn/pages/1dbe9d/")]),t._v(" "),e("p",[t._v("1."),e("code",[t._v(".castShadow")]),t._v("设置产生阴影的模型对象\n2."),e("code",[t._v(".castShadow")]),t._v("设置产生阴影的光源对象\n3."),e("code",[t._v(".receiveShadow")]),t._v("设置接收阴影效果的模型\n4."),e("code",[t._v(".shadowMap.enabledWebGl")]),t._v("渲染器允许阴影渲染\n5."),e("code",[t._v(".shadow.camera")]),t._v("设置光源阴影渲染范围")]),t._v(" "),e("h3",{attrs:{id:"你知道怎么鼠标单击拾取选中模型吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你知道怎么鼠标单击拾取选中模型吗"}},[t._v("#")]),t._v(" 你知道怎么鼠标单击拾取选中模型吗？")]),t._v(" "),e("p",[t._v("一般就是借助射线拾取API "),e("code",[t._v("Raycaster")]),t._v("实现。")]),t._v(" "),e("ol",[e("li",[t._v("根据鼠标点击事件对象，获得鼠标在canvas画布上的屏幕坐标(单位像素px)")]),t._v(" "),e("li",[t._v("把屏幕坐标转化为WebGL标准设备坐标")]),t._v(" "),e("li",[e("code",[t._v(".setFromCamera()")]),t._v("根据标准设备坐标和相机参数计算射线")]),t._v(" "),e("li",[t._v("最后通过Raycaster实现射线拾取模型计算")])]),t._v(" "),e("p",[t._v("具体流程：http://www.webgl3d.cn/pages/f96af1/")]),t._v(" "),e("h3",{attrs:{id:"你大概知道threejs什么光源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你大概知道threejs什么光源"}},[t._v("#")]),t._v(" 你大概知道threejs什么光源")]),t._v(" "),e("p",[t._v("点光源、聚光源、平行光、环境光...，根据你了解说下就行")]),t._v(" "),e("h3",{attrs:{id:"threejs怎么调节光圈明暗程度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs怎么调节光圈明暗程度"}},[t._v("#")]),t._v(" threejs怎么调节光圈明暗程度")]),t._v(" "),e("p",[t._v("threejs光源对象具有光照强度属性，可以调节光源的明暗程度。")]),t._v(" "),e("h2",{attrs:{id:"数学几何计算问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数学几何计算问题"}},[t._v("#")]),t._v(" 数学几何计算问题")]),t._v(" "),e("p",[t._v("一般长期做这块，一些基本的数学几何计算还是要了解，更多内容，可以查看threejs中文网电子书或系统课程介绍。")]),t._v(" "),e("h3",{attrs:{id:"图形学方面-你了解哪些常用几何变换的矩阵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图形学方面-你了解哪些常用几何变换的矩阵"}},[t._v("#")]),t._v(" 图形学方面，你了解哪些常用几何变换的矩阵")]),t._v(" "),e("p",[e("code",[t._v("模型矩阵")]),t._v("："),e("code",[t._v("旋转矩阵")]),t._v("、"),e("code",[t._v("缩放矩阵")]),t._v("、"),e("code",[t._v("平移矩阵")])]),t._v(" "),e("p",[t._v("相机相关的"),e("code",[t._v("视图矩阵")]),t._v("、"),e("code",[t._v("投影矩阵")])]),t._v(" "),e("h3",{attrs:{id:"threejs控制模型姿态的方式有哪些-简单说说"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs控制模型姿态的方式有哪些-简单说说"}},[t._v("#")]),t._v(" threejs控制模型姿态的方式有哪些，简单说说")]),t._v(" "),e("ol",[e("li",[t._v("角度属性"),e("code",[t._v(".rotation")]),t._v("(欧拉角)")]),t._v(" "),e("li",[t._v("四元数属性"),e("code",[t._v(".quaternion")])]),t._v(" "),e("li",[t._v("rotateX、rotateY、rotateZ等旋转方法，可以改变角度属性"),e("code",[t._v(".rotation")])]),t._v(" "),e("li",[t._v("旋转矩阵")])]),t._v(" "),e("h3",{attrs:{id:"四元数和欧拉角有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四元数和欧拉角有什么区别"}},[t._v("#")]),t._v(" 四元数和欧拉角有什么区别")]),t._v(" "),e("p",[t._v("四元数和欧拉角，都可以控制物体的姿态角度变化。")]),t._v(" "),e("p",[t._v("欧拉角存在自锁现象，四元数不存在自锁现象。")]),t._v(" "),e("h3",{attrs:{id:"向量点乘几何含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向量点乘几何含义"}},[t._v("#")]),t._v(" 向量点乘几何含义")]),t._v(" "),e("p",[t._v("简单回复就是"),e("strong",[t._v("两个向量长度乘以夹角余弦值")]),t._v("，更具体参考：http://www.webgl3d.cn/pages/44b0ba/")]),t._v(" "),e("h3",{attrs:{id:"怎么计算两个向量的夹角"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么计算两个向量的夹角"}},[t._v("#")]),t._v(" 怎么计算两个向量的夹角")]),t._v(" "),e("p",[t._v("两个向量归一化，然后dot点乘即可")]),t._v(" "),e("h3",{attrs:{id:"向量叉乘几何含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向量叉乘几何含义"}},[t._v("#")]),t._v(" 向量叉乘几何含义")]),t._v(" "),e("ol",[e("li",[t._v("两个向量叉乘，得到的新向量垂直于两个向量")]),t._v(" "),e("li",[t._v("相乘结果向量长度是：两个向量长度乘以夹角正弦值")])]),t._v(" "),e("p",[t._v("更多代码参考：http://www.webgl3d.cn/pages/4558d6/")]),t._v(" "),e("h3",{attrs:{id:"怎么计算一个三角形平面的法线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么计算一个三角形平面的法线"}},[t._v("#")]),t._v(" 怎么计算一个三角形平面的法线")]),t._v(" "),e("p",[t._v("三角形随便选择两条边，生成两个向量。")]),t._v(" "),e("p",[t._v("两个向量叉乘，得到一个垂直于三角形向量，结果向量归一化，就是三角形法线方向。")]),t._v(" "),e("h3",{attrs:{id:"判断点是否在扇形区域内"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断点是否在扇形区域内"}},[t._v("#")]),t._v(" 判断点是否在扇形区域内")]),t._v(" "),e("p",[t._v("一般一些游戏相关功能，可能会问到。")]),t._v(" "),e("p",[t._v("简单回复就是，利用向量点乘，判断点是否在扇形区域内。利用向量点乘计算夹角，与扇形角度比较，然后计算点与扇形圆形距离与扇形半径比较即可。")]),t._v(" "),e("p",[t._v("更多代码参考：http://www.webgl3d.cn/pages/feb38e/")]),t._v(" "),e("h2",{attrs:{id:"底层webgl或threejs-shader问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#底层webgl或threejs-shader问题"}},[t._v("#")]),t._v(" 底层webgl或threejs shader问题")]),t._v(" "),e("p",[t._v("一般有webgl专门团队公司，在北上广深一线城市，20k朝上webgl程序员，一般还是要求shader这块的，除非特殊情况，对方公司没人懂，招聘前端，懂threjs优先，可能不要求shader。")]),t._v(" "),e("h3",{attrs:{id:"介绍下渲染管线的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍下渲染管线的原理"}},[t._v("#")]),t._v(" 介绍下渲染管线的原理")]),t._v(" "),e("p",[t._v("形象点说，WebGL"),e("strong",[t._v("渲染管线")]),t._v("就像工厂的"),e("strong",[t._v("流水线")]),t._v("一样，提供了不同的功能单元，比如"),e("strong",[t._v("顶点着色器")]),t._v("、图元装配、光栅器、"),e("strong",[t._v("片元着色器")]),t._v("、深度测试、模板测试等不同功能单元，渲染管线通过这些功能单元，可以处理三维场景的顶点、光源、纹理图像等数据，渲染三维场景，在Canvas画布上输出渲染结果。")]),t._v(" "),e("ol",[e("li",[t._v("顶点着色器：执行顶点着色器代码")]),t._v(" "),e("li",[t._v("片元着色器：执行片元着色器代码")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img_posts/webgl25a.png",alt:"渲染管线示意图"}})]),t._v(" "),e("p",[t._v("更多关于webgl渲染管线详细的介绍，可以参考"),e("a",{attrs:{href:"http://www.webgl3d.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("threejs中文网"),e("OutboundLink")],1),t._v("WebGL入门讲解即可。")]),t._v(" "),e("h3",{attrs:{id:"原生webgl你怎么创建一个矩形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生webgl你怎么创建一个矩形"}},[t._v("#")]),t._v(" 原生WebGL你怎么创建一个矩形")]),t._v(" "),e("p",[t._v("可以用两个三角形拼接出来一个矩形，三个顶点表示一个三角形，两个三角形需要6个顶点坐标。")]),t._v(" "),e("p",[t._v("两个三角形有个两个顶点坐标是共享的，也可以借助顶点索引，这样创建一个顶点坐标，然后利用索引重复利用其中两个顶点即可。")]),t._v(" "),e("p",[t._v("参考：http://www.webgl3d.cn/WebGL/")]),t._v(" "),e("p",[t._v("http://www.webgl3d.cn/WebGL/")]),t._v(" "),e("h3",{attrs:{id:"了解webgpu吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解webgpu吗"}},[t._v("#")]),t._v(" 了解webgpu吗")]),t._v(" "),e("p",[t._v("根据自身情况具体说明就行")]),t._v(" "),e("p",[t._v("webgpu类似webgl的一种新一代图形技术，谷歌浏览器2023年刚刚开始支持。如果你学习过系统课程里面入门webpgu，就说只是入门即可，如果没学习过WebGPU，直接回复不熟悉也没什么，公司只是考察下，你对这个行业的了解情况。")]),t._v(" "),e("h3",{attrs:{id:"你写过webgl或threejs的shader吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你写过webgl或threejs的shader吗"}},[t._v("#")]),t._v(" 你写过webgl或threejs的shader吗")]),t._v(" "),e("p",[t._v("根据自身情况回复，如果写过具体的说明，如果没写过的复杂案例，可以回复大概入门，能写一些简单。")]),t._v(" "),e("p",[t._v("学习的话，参考系统课程里面threejs shader或原生webgl或原生webpgu的讲解。")]),t._v(" "),e("h3",{attrs:{id:"通过threejs材质那个方法可以修改已有材质的shader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过threejs材质那个方法可以修改已有材质的shader"}},[t._v("#")]),t._v(" 通过threejs材质那个方法可以修改已有材质的shader")]),t._v(" "),e("p",[t._v("所有threejs材质有一个父类Material，Material具有"),e("code",[t._v(".onBeforeCompile()")]),t._v("方法，通过"),e("code",[t._v(".onBeforeCompile()")]),t._v("方法可以修改、增删threejs材质默认的shader，比如你可以修改Lambert网格材质的着色器代码，可以修改PBR材质的着色器代码。")]),t._v(" "),e("p",[t._v("具体参考系统课程中threejs shader部分的讲解")]),t._v(" "),e("h3",{attrs:{id:"threejs-shader实现飞线动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs-shader实现飞线动画"}},[t._v("#")]),t._v(" threejs shader实现飞线动画")]),t._v(" "),e("p",[t._v("飞线轨迹是通过线条几何体的顶点坐标构成，可以使用点模型Points渲染飞线轨迹，然后通过顶点着色器"),e("code",[t._v("gl_PointSize")]),t._v("控制飞线点的像素大小，按照飞线顶点顺序，控制点像素大小渐变即可。")]),t._v(" "),e("p",[t._v("具体在地球飞线案例中有讲解")]),t._v(" "),e("h3",{attrs:{id:"threejs-shader设置模型颜色渐变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs-shader设置模型颜色渐变"}},[t._v("#")]),t._v(" threejs shader设置模型颜色渐变")]),t._v(" "),e("p",[t._v("在片元着色器GLSL代码中，通过片元坐标vPosition控制颜色值，比如让片元的颜色值"),e("code",[t._v("gl_FragColor")]),t._v("与"),e("code",[t._v("vPosition")]),t._v("的z坐标相关。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("vec3 gradient "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vPosition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("550.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutgoingLight "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outgoingLight"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gradient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl_FragColor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" outgoingLight"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diffuseColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"threejs-shader实现直线扫光效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs-shader实现直线扫光效果"}},[t._v("#")]),t._v(" threejs shader实现直线扫光效果")]),t._v(" "),e("p",[e("code",[t._v(".onBeforeCompile()")]),t._v("批量修改场景中所有模型的材质shader。")]),t._v(" "),e("p",[t._v("比如通过vPosition的x坐标分量，在x1~x2范围内，控制顶点颜色值，实现直线扫光效果。如果希望扫光运动起来，可以加入一个uniform时间变量t，控制x1~x2范围随时间变化，实现直线扫光动画效果。")]),t._v(" "),e("h3",{attrs:{id:"threejs-shader实现直线波动光圈扫光效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threejs-shader实现直线波动光圈扫光效果"}},[t._v("#")]),t._v(" threejs shader实现直线波动光圈扫光效果")]),t._v(" "),e("p",[t._v("比如通过vPosition的x、y坐标分量控制，计算三角函数计算x、y坐标与某个圆心的半径长度，设置半径r1~r2范围，控制顶点颜色值，比如设置白色。如果希望扫光运动起来，可以加入一个uniform时间变量t，控制r1~r2范围随时间变化，实现直线光圈动画效果。")]),t._v(" "),e("h3",{attrs:{id:"更多补充中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多补充中"}},[t._v("#")]),t._v(" 更多补充中")]),t._v(" "),e("p",[t._v("如果你遇到面试问题，可以也可以私信我留言，我会整理好统一，分享大家")]),t._v(" "),e("p",[t._v("交流群在threejs中文网的首页。")])])}),[],!1,null,null,null);e.default=r.exports}}]);