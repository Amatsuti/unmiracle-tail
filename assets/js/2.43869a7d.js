(window.webpackJsonp=window.webpackJsonp||[]).push([[2,34,35,36,37,38,39,40,41,42,43,44],{359:function(t,n,s){},360:function(t,n,s){},361:function(t,n,s){},362:function(t,n,s){},363:function(t,n,s){},364:function(t,n,s){},365:function(t,n,s){},366:function(t,n,s){},367:function(t,n,s){},368:function(t,n,s){},369:function(t,n,s){},394:function(t,n,s){"use strict";s(359)},395:function(t,n,s){"use strict";s(360)},396:function(t,n,s){"use strict";s(361)},397:function(t,n,s){"use strict";s(362)},398:function(t,n,s){"use strict";s(363)},399:function(t,n,s){"use strict";s(364)},400:function(t,n,s){"use strict";s(365)},401:function(t,n,s){"use strict";s(366)},402:function(t,n,s){"use strict";s(367)},403:function(t,n,s){"use strict";s(368)},404:function(t,n,s){"use strict";s(369)},428:function(t,n,s){},450:function(t,n,s){"use strict";s.r(n);s(94),s(95);var o={props:{options:Object},computed:{diceTotal:function(){var t=0;return this.options.dice.forEach((function(n){t+=n})),t}}},e=(s(394),s(43)),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._v("\n  【"+t._s(t.options.name)+"のダイスロール！\n    "),t._l(t.options.dice,(function(n,o){return s("span",{key:o},[1===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-one"}})],1):2===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-two"}})],1):3===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-three"}})],1):4===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-four"}})],1):5===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-five"}})],1):6===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-six"}})],1):t._e()])})),t._v(" "),t.options.ext>0?s("span",[t._v("＋"+t._s(t.options.ext))]):t._e(),t._v("\n    ⇒ "+t._s(t.options.ext+t.diceTotal)+" / "+t._s(t.options.target)+"\n    "),t.options.ext+t.diceTotal>=t.options.target?s("span",[t._v("成功！")]):s("span",[t._v("失敗！")]),t._v("\n  】\n")],2)}),[],!1,null,"60c695fc",null);n.default=i.exports},451:function(t,n,s){"use strict";s.r(n);s(94),s(95);var o={name:"dice-shot",props:{options:Object},computed:{diceTotal1:function(){var t=0;return this.options.dice1.forEach((function(n){t+=n})),t},diceTotal2:function(){var t=0;return this.options.dice2.forEach((function(n){t+=n})),t}}},e=(s(395),s(43)),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("p",[t._v("\n    "+t._s(t.options.name1)+"のダイスショット【\n      "),t._l(t.options.dice1,(function(n,o){return s("span",{key:o},[1===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-one"}})],1):2===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-two"}})],1):3===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-three"}})],1):4===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-four"}})],1):5===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-five"}})],1):6===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-six"}})],1):t._e()])})),t._v(" "),t.options.ext1>0?s("span",[t._v("＋"+t._s(t.options.ext1))]):t._e(),t._v("\n      ⇒ "+t._s(t.options.ext1+t.diceTotal1)+"\n    】\n  ")],2),t._v(" "),s("p",[t._v("\n    "+t._s(t.options.name2)+"のダイスショット【\n      "),t._l(t.options.dice2,(function(n,o){return s("span",{key:o},[1===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-one"}})],1):2===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-two"}})],1):3===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-three"}})],1):4===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-four"}})],1):5===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-five"}})],1):6===n?s("span",[s("font-awesome-icon",{staticClass:"icon fa-1x",attrs:{icon:"dice-six"}})],1):t._e()])})),t._v(" "),t.options.ext2>0?s("span",[t._v("＋"+t._s(t.options.ext2))]):t._e(),t._v("\n      ⇒ "+t._s(t.options.ext2+t.diceTotal2)+"\n    】\n  ")],2),t._v(" "),s("p",[t.options.ext1+t.diceTotal1>t.options.ext2+t.diceTotal2?s("span",[t._v("勝利！")]):s("span",[t._v("敗北…")])])])}),[],!1,null,"cdf854fe",null);n.default=i.exports},452:function(t,n,s){"use strict";s.r(n);var o={props:{options:Object}},e=(s(396),s(43)),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("div",{staticClass:"icon-area"},[s("b-img",{staticClass:"icon",attrs:{src:t.options.icon||"./img/noimage.png",width:"60px",height:"60px"}})],1),t._v(" "),s("div",{staticClass:"remark-area"},[t.options.name?s("div",{staticClass:"name"},[t._v("\n      "+t._s(t.options.name)+"\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"body",domProps:{innerHTML:t._s(t.options.text)}})])])}),[],!1,null,"770b7464",null);n.default=i.exports},453:function(t,n,s){"use strict";s.r(n);var o={props:{options:Object}},e=(s(397),s(43)),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"content",class:{"content-hide":t.options.hide}},[t.options.up?[t._v("\n    "+t._s(t.options.name)+"は"+t._s(t.options.status)+"を"+t._s(t.options.up)+"獲得！\n  ")]:[t._v("\n    "+t._s(t.options.name)+"は何も変わらなかった・・・\n  ")]],2)}),[],!1,null,"29474068",null);n.default=i.exports},454:function(t,n,s){"use strict";s.r(n);var o={name:"text-note",props:{options:Object}},e=(s(398),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.options.text)}})}),[],!1,null,"0354e776",null);n.default=i.exports},455:function(t,n,s){"use strict";s.r(n);var o={name:"message-open",props:{options:Object}},e=(s(399),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"387cd07a",null);n.default=i.exports},456:function(t,n,s){"use strict";s.r(n);var o={name:"set-bg",props:{options:Object}},e=(s(400),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"3b777e24",null);n.default=i.exports},457:function(t,n,s){"use strict";s.r(n);var o={props:{options:Object}},e=(s(401),s(43)),i=Object(e.a)(o,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("b-container",{staticClass:"content"},[s("b-row",[s("b-col",{attrs:{cols:"2"}},[s("b-img",{staticClass:"icon",attrs:{src:t.options.icon||"./img/noimage.png",width:"60px",height:"60px"}})],1),t._v(" "),s("b-col",{attrs:{cols:"10"}},[t.options.eno>0?s("div",{staticClass:"name"},[t._v("\n          ENo."+t._s(t.options.eno)+"："+t._s(t.options.name)+"\n        ")]):t.options.name?s("div",{staticClass:"name"},[t._v("\n          "+t._s(t.options.name)+"\n        ")]):t._e(),t._v(" "),s("div",{staticClass:"body",domProps:{innerHTML:t._s(t.options.note)}})])],1)],1)],1)}),[],!1,null,"68db9c72",null);n.default=i.exports},458:function(t,n,s){"use strict";s.r(n);var o={props:{options:Object}},e=(s(402),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.options.text)}})}),[],!1,null,"2f9b934a",null);n.default=i.exports},459:function(t,n,s){"use strict";s.r(n);var o={name:"heading",props:{options:Object}},e=(s(403),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("h4",{staticClass:"content",domProps:{innerHTML:this._s(this.options.text)}})}),[],!1,null,"22d7f07c",null);n.default=i.exports},460:function(t,n,s){"use strict";s.r(n);var o={name:"link-text",props:{options:Object}},e=(s(404),s(43)),i=Object(e.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content"},[n("router-link",{attrs:{to:this.options.to}},[this._v("\n    "+this._s(this.options.label)+"\n  ")])],1)}),[],!1,null,"075f8684",null);n.default=i.exports},491:function(t,n,s){"use strict";s(428)},497:function(t,n,s){"use strict";s.r(n);var o=s(450),e=s(451),i=s(452),a=s(453),c=s(454),r=s(455),u=s(456),l=s(457),f=s(458),p=s(459),d=s(460),_={components:{dice:o.default,diceShot:e.default,remark:i.default,status:a.default,textNote:c.default,messageOpen:r.default,setBg:u.default,introduction:l.default,"message-close":r.default,"black-out":r.default,"fade-in":r.default,"fade-out":r.default,clear:r.default,weather:r.default,telop:f.default,heading:p.default,linkText:d.default}},v={name:"story-note",props:{code:Array},data:function(){return{innerCode:[]}},created:function(){},watch:{code:function(){}},mixins:[_]},m=(s(491),s(43)),h=Object(m.a)(v,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("transition-group",{attrs:{name:"fade"}},this._l(this.code,(function(t,s){return n(t["@call"].split(".")[1],{key:s+"hoge",tag:"component",attrs:{options:t.arguments}})})),1),this._v(" "),n("div",{ref:"footer"})],1)}),[],!1,null,"558cebb2",null);n.default=h.exports}}]);