(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{359:function(t,n,o){},394:function(t,n,o){"use strict";o(359)},450:function(t,n,o){"use strict";o.r(n);o(94),o(95);var s={props:{options:Object},computed:{diceTotal:function(){var t=0;return this.options.dice.forEach((function(n){t+=n})),t}}},i=(o(394),o(43)),a=Object(i.a)(s,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"content"},[t._v("\n  【"+t._s(t.options.name)+"のダイスロール！\n    "),t._l(t.options.dice,(function(n,s){return o("span",{key:s},[1===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-one"}})],1):2===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-two"}})],1):3===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-three"}})],1):4===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-four"}})],1):5===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-five"}})],1):6===n?o("span",[o("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-six"}})],1):t._e()])})),t._v(" "),t.options.ext>0?o("span",[t._v("＋"+t._s(t.options.ext))]):t._e(),t._v("\n    ⇒ "+t._s(t.options.ext+t.diceTotal)+" / "+t._s(t.options.target)+"\n    "),t.options.ext+t.diceTotal>=t.options.target?o("span",[t._v("成功！")]):o("span",[t._v("失敗！")]),t._v("\n  】\n")],2)}),[],!1,null,"60c695fc",null);n.default=a.exports}}]);