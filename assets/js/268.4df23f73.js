(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{597:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"创建顶点缓冲区、渲染管线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建顶点缓冲区、渲染管线"}},[t._v("#")]),t._v(" 创建顶点缓冲区、渲染管线")]),t._v(" "),a("p",[t._v("如果你想渲染一个物体，需要先通过顶点坐标来定义该物体的几何形状，本节课就给大家讲解，怎么通过WebGPU的顶点缓冲区来创建顶点数据。")]),t._v(" "),a("h3",{attrs:{id:"webgpu坐标系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webgpu坐标系"}},[t._v("#")]),t._v(" WebGPU坐标系")]),t._v(" "),a("p",[t._v("WebGPU坐标系在Canvas画布上的"),a("strong",[t._v("坐标原点")]),t._v("是Canvas画布的中间位置，"),a("strong",[t._v("x轴")]),t._v("水平向"),a("strong",[t._v("右")]),t._v("，"),a("strong",[t._v("y轴")]),t._v("竖直向"),a("strong",[t._v("上")]),t._v("，"),a("strong",[t._v("z轴")]),t._v("垂直与Canvas画布，朝向屏幕内。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwegpu/canvas%E7%94%BB%E5%B8%83xy%E5%9D%90%E6%A0%87%E7%B3%BB.png",alt:""}})]),t._v(" "),a("p",[t._v("前端开发时候，HTML元素的宽高很多时候是选择以像素为基准定义，比如宽度500px。WebGPU中顶点坐标的表示值采用的是相对值,比如x和y的坐标范围都是[-1,1]，z坐标的范围是[0,1]。")]),t._v(" "),a("p",[t._v("在咱们入门的第一个案例中，先不深入谈WebGPU坐标系，你能先用x、y两个分量绘制一个2D平面图就行，后面涉及到3D效果的时候，再详细展开讲解z坐标、投影矩阵、视图矩阵、模型矩阵等深入概念。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwegpu/WebGPU%E5%9D%90%E6%A0%87%E7%B3%BB.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"javascript类型化数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript类型化数组"}},[t._v("#")]),t._v(" JavaScript类型化数组")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays",target:"_blank",rel:"noopener noreferrer"}},[t._v("类型化数组"),a("OutboundLink")],1),t._v("文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays")]),t._v(" "),a("p",[t._v("JavaScript类型化数组不同于普通的数组，类型化数组，就是数组的元素可以设置数字的类型，比如浮点数、无符号整数....")]),t._v(" "),a("p",[t._v("实际开发顶点数据往往都比多，在WebGL、WebGPU、threejs等代码中，会用类型化数组"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays",target:"_blank",rel:"noopener noreferrer"}},[t._v("类型化数组"),a("OutboundLink")],1),t._v("表示定义顶点数据。")]),t._v(" "),a("h3",{attrs:{id:"类型化数组float32array表示顶点坐标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型化数组float32array表示顶点坐标"}},[t._v("#")]),t._v(" 类型化数组"),a("code",[t._v("Float32Array")]),t._v("表示顶点坐标")]),t._v(" "),a("p",[t._v("一般来说通过WebGPU绘制一个几何图形的时候，比如一个三角形、一个矩形、一个立方体...需要使用顶点先表示几何体的形状。")]),t._v(" "),a("p",[t._v("刚入门，先定义一个简单的几何图形，比如我使用三个顶点的xyz坐标表示一个三角形。实际开发的时候，你可以根据需要，创建任意个顶点坐标数据，来表达一个复杂的几何图案。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays",target:"_blank",rel:"noopener noreferrer"}},[t._v("类型化数组"),a("OutboundLink")],1),a("code",[t._v("Float32Array")]),t._v("参数数组里面的元素三个为一组表示顶点的xyz坐标。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Float32Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 三角形三个顶点坐标的x、y、z值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/imgwegpu/WebGPU%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"创建顶点缓冲区-createbuffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建顶点缓冲区-createbuffer"}},[t._v("#")]),t._v(" 创建顶点缓冲区"),a("code",[t._v(".createBuffer()")])]),t._v(" "),a("p",[t._v("通过GPU设备对象的"),a("a",{attrs:{href:"https://www.w3.org/TR/webgpu/#dom-gpudevice-createbuffer",target:"_blank",rel:"noopener noreferrer"}},[t._v(".createBuffer()"),a("OutboundLink")],1),t._v("方法可以创建一个顶点缓冲区。")]),t._v(" "),a("p",[t._v("关于顶点缓冲区，给大家简单解释下。大家都知道数据，会占用电脑的内存，对于顶点数据而言，同样需要占用电脑内存空间，你可以这么理解，当"),a("code",[t._v("device.createBuffer()")]),t._v("执行的时候，会在你的电脑显卡GPU的内存(显存)中开辟一片存储空间，用来存存储顶点数据，你可以把这个开辟的存储空间，称为"),a("strong",[t._v("顶点缓冲区")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"缓冲区存储字节长度设置size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区存储字节长度设置size"}},[t._v("#")]),t._v(" 缓冲区存储字节长度设置"),a("code",[t._v("size")])]),t._v(" "),a("p",[t._v("设置存储空间的size属性，表示存储空间的大小size。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vertexArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据字节长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类型化数组Float32Array一个数字元素，占用存储空间4字节，9个浮点数，数据字节长度9*4")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'类型化数组数据字节长度'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vertexArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"缓冲区用途定义usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区用途定义usage"}},[t._v("#")]),t._v(" 缓冲区用途定义"),a("code",[t._v("usage")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/webgpu/#typedefdef-gpubufferusageflags",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage"),a("OutboundLink")],1),t._v("的属性值其他属性值参考文档:https://www.w3.org/TR/webgpu/#typedefdef-gpubufferusageflags")]),t._v(" "),a("p",[t._v("入门案例顶点缓冲区可以像下面一样设置，usage以后还会遇到其他的写法，遇到在专门讲解。")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("usage")]),t._v("属性的值为"),a("code",[t._v("GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST")]),t._v(","),a("code",[t._v("|")]),t._v("是JavaScript"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("位运算符"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("GPUBufferUsage.VERTEX")]),t._v("表示用于该缓冲区是顶点缓冲区，就是存储顶点数据的缓冲区。")]),t._v(" "),a("p",[a("code",[t._v("GPUBufferUsage.COPY_DST")]),t._v("的"),a("code",[t._v("COPY")]),t._v("是复制英文单词，DST是目的地单词destination的缩写，简单说该缓冲区可以写入顶点数据，作为复制顶点数据的目的地。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vertexArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点数据的字节长度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//usage设置该缓冲区的用途(作为顶点缓冲区|可以写入顶点数据)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GPUBufferUsage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERTEX")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GPUBufferUsage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("COPY_DST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"顶点数据写入顶点缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶点数据写入顶点缓冲区"}},[t._v("#")]),t._v(" 顶点数据写入顶点缓冲区")]),t._v(" "),a("p",[t._v("GPU设备对象"),a("code",[t._v("device")]),t._v("队列属性"),a("code",[t._v(".queue")]),t._v("的有一个方法"),a("a",{attrs:{href:"https://www.w3.org/TR/webgpu/#dom-gpuqueue-writebuffer",target:"_blank",rel:"noopener noreferrer"}},[t._v(".writeBuffer()"),a("OutboundLink")],1),t._v("，功能是吧类型化数组中的数据写入"),a("code",[t._v(".createBuffer()")]),t._v("创建的顶点缓冲区中。")]),t._v(" "),a("p",[a("code",[t._v(".writeBuffer(vertexBuffer, 0, vertexArray)")]),t._v("表示把vertexArray里面的顶点数据写入到vertexBuffer对应的GPU显存缓冲区中，参数2表示从vertexArray获取顶点数据的偏移量(单位字节)，0表示从vertexArray的数据开头读取数据。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把vertexArray里面的顶点数据写入到vertexBuffer对应的GPU显存缓冲区中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参数2的0表示从vertexArray的数据开头读取数据。")]),t._v("\ndevice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexBuffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"createrenderpipeline-创建渲染管线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createrenderpipeline-创建渲染管线"}},[t._v("#")]),t._v(" "),a("code",[t._v(".createRenderPipeline()")]),t._v("创建渲染管线")]),t._v(" "),a("p",[t._v("通过GPU设备对象的方法"),a("code",[t._v(".createRenderPipeline()")]),t._v("可以创建一个WebGPU渲染管线。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个WebGPU渲染管线对象pipeline")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pipeline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderPipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("渲染管线你可以类比生活中的工厂流水线来理解，流水线上不同的功能单元，完成不同的零部件生产，对WebGPU渲染管线类似，WebGPU渲染管线上也提供用于3D渲染的不同功能单元，后面会一一讲解。")]),t._v(" "),a("p",[t._v("你可以把显卡比作一个工厂，工厂里面，你可以开设流水线，同样的道理，你也可以在显卡GPU上开设创建渲染管线，借助GPU设备对象的方法"),a("code",[t._v(".createRenderPipeline()")]),t._v("即可创建WebGPU的渲染管线，你可以根据需要创建多个渲染管线，当然咱们课程入门部分，只需要创建一个用来学习即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgwegpu/%E6%B8%B2%E6%9F%93%E7%AE%A1%E7%BA%BF%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E5%9B%BE%E6%A1%88.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"createrenderpipeline-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createrenderpipeline-参数"}},[t._v("#")]),t._v(" "),a("code",[t._v(".createRenderPipeline()")]),t._v("参数")]),t._v(" "),a("p",[t._v("渲染管线方法"),a("code",[t._v(".createRenderPipeline()")]),t._v("的参数是一个对象，对象具有"),a("code",[t._v("layout")]),t._v("、"),a("code",[t._v("vertex")]),t._v("、"),a("code",[t._v("fragment")]),t._v("、"),a("code",[t._v("primitive")]),t._v("等属性，这些属性对应了渲染管线上的不同功能单元。这些属性你现在还不理解，也没有关系，后面会给打逐步讲解。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pipeline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderPipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("layout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vertex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点着色器")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShaderModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vertex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fragment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片元着色器")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShaderModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fragment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryPoint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("primitive")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("topology")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"triangle-list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//三角形绘制顶点数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"vertex-buffers配置顶点缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertex-buffers配置顶点缓冲区"}},[t._v("#")]),t._v(" "),a("code",[t._v("vertex.buffers")]),t._v("配置顶点缓冲区")]),t._v(" "),a("p",[t._v("顶点缓冲区负责渲染管线提供顶点数据，所以所以需要通过渲染管线参数的"),a("code",[t._v("vertex.buffers")]),t._v("属性配置，渲染管线如何获取顶点缓冲区中的顶点数据。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pipeline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderPipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vertex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点相关配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点所有的缓冲区模块设置")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//其中一个顶点缓冲区设置")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("arrayStride")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一个顶点数据占用的字节长度，该缓冲区一个顶点包含xyz三个分量，每个数字是4字节浮点数，3*4字节长度")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attributes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点缓冲区属性")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("shaderLocation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//GPU显存上顶点缓冲区标记存储位置")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"float32x3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//格式：loat32x3表示一个顶点数据包含3个32位浮点数")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("offset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//arrayStride表示每组顶点数据间隔字节数，offset表示读取改组的偏差字节数，没特殊需要一般设置0")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);