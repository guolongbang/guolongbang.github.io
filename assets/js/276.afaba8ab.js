(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{605:function(t,E,a){"use strict";a.r(E);var s=a(7),v=Object(s.a)({},(function(){var t=this,E=t._self._c;return E("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[E("h1",{attrs:{id:"模型矩阵"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#模型矩阵"}},[t._v("#")]),t._v(" 模型矩阵")]),t._v(" "),E("p",[t._v("在图形学中经常会提到模型矩阵的概念，其实模型矩阵就是咱们上节课介绍的平移矩阵、旋转矩阵、缩放矩阵的统称，或者说模型矩阵是平移、缩放、旋转矩阵相乘得到的复合矩阵。")]),t._v(" "),E("h3",{attrs:{id:"几何变换顺序对结果的影响"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#几何变换顺序对结果的影响"}},[t._v("#")]),t._v(" 几何变换顺序对结果的影响")]),t._v(" "),E("p",[t._v("假设一个顶点原始坐标(2,0,0)。")]),t._v(" "),E("p",[t._v("先平移2、后缩放10：如果先沿着x轴平移2，变为(4,0,0)，再x轴方向缩放10倍，最终坐标是("),E("strong",[t._v("40,0,0")]),t._v(")。")]),t._v(" "),E("p",[t._v("先缩放10、后平移2：如果先x轴方向缩放10倍，变为(20,0,0)，再沿着x轴平移2，最终坐标是("),E("strong",[t._v("22,0,0")]),t._v(")。")]),t._v(" "),E("p",[t._v("你可以发现上面同样的平移和缩放，顺序不同，变换后的顶点坐标也不相同。")]),t._v(" "),E("h3",{attrs:{id:"矩阵表示-先平移、后缩放"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#矩阵表示-先平移、后缩放"}},[t._v("#")]),t._v(" 矩阵表示(先平移、后缩放)")]),t._v(" "),E("p",[t._v("假设一个顶点原始坐标(2,0,0),先沿着x轴平移2，变为(4,0,0)，再x轴方向缩放10倍，最终坐标是(40,0,0)。这个过程可以用上节课介绍的矩阵乘法运算去表示。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E5%85%88%E5%B9%B3%E7%A7%BB%E5%90%8E%E6%97%8B%E8%BD%AC.jpg",alt:""}})]),t._v(" "),E("p",[t._v("模型矩阵：先计算所有几何变换对应矩阵的乘积，得到一个模型矩阵，再对顶点坐标进行变换。")]),t._v(" "),E("p",[t._v("先把顶点几何变换对应的所有矩阵进行乘法运算，得到一个新的复合矩阵(模型矩阵)，这个模型矩阵可以用来表示顶点坐标所有的几何变换。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E5%85%88%E5%B9%B3%E7%A7%BB%E5%90%8E%E7%BC%A9%E6%94%BE%E7%9A%84%E6%A8%A1%E5%9E%8B%E7%9F%A9%E9%98%B5.jpg",alt:""}})]),t._v(" "),E("p",[t._v("把上面缩放矩阵和平移矩阵的顺序调换，重新计算结果，你会发现，和上面计算的模型矩阵不同，变换后坐标也不是(40,0,0),而是(22,0,0)。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E5%85%88%E7%BC%A9%E6%94%BE%E5%90%8E%E5%B9%B3%E7%A7%BB%E6%A8%A1%E5%9E%8B%E7%9F%A9%E9%98%B5.jpg",alt:""}})]),t._v(" "),E("p",[t._v("这就是告诉大家，矩阵的乘法运算，不满足交换律，矩阵顺序，不能随意设置，先发生的平移矩阵，放在后面，后发生的缩放矩阵放在前面，或者说，先发生的平移矩阵，更靠近顶点的齐次坐标。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E7%BC%A9%E6%94%BE%E7%9F%A9%E9%98%B5x%E5%B9%B3%E7%A7%BB%E7%9F%A9%E9%98%B5x%E9%BD%90%E6%AC%A1%E5%9D%90%E6%A0%87.jpg",alt:""}})]),t._v(" "),E("h3",{attrs:{id:"单位矩阵"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#单位矩阵"}},[t._v("#")]),t._v(" 单位矩阵")]),t._v(" "),E("p",[t._v("单位矩阵就是对角线上都为1，其它为0的矩阵。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E5%8D%95%E4%BD%8D%E7%9F%A9%E9%98%B5.jpg",alt:""}})]),t._v(" "),E("p",[t._v("单位矩阵乘其它矩阵，或者其它矩阵成单位矩阵，新矩阵都和其它矩阵一样，不受范围矩阵影响，单位矩阵有点类似自然数加减乘除的1。")]),t._v(" "),E("p",[E("img",{attrs:{src:"/imgwegpu/%E5%8D%95%E4%BD%8D%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95%E8%BF%90%E7%AE%97.jpg",alt:""}})])])}),[],!1,null,null,null);E.default=v.exports}}]);