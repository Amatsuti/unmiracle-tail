(window.webpackJsonp=window.webpackJsonp||[]).push([[7,29],{305:function(t,n,s){"use strict";s(166),s(306),s(65);var o=s(307),e=s.n(o);n.a={props:{options:Object,pt1:Array,pt2:Array},computed:{allCharacter:function(){return e.a.concat(this.pt1,this.pt2)}},filters:{whoIdIs:function(t,n){return e.a.find(t,{id:n})},name:function(t){return t.name},icon:function(t){return t.icon}}}},308:function(t,n,s){},310:function(t,n,s){"use strict";s(308)},311:function(t,n,s){"use strict";s.r(n);var o={props:{color:String,type:String,size:{type:String,default:"md"}}},e=(s(310),s(42)),i=Object(e.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"buff-icon "+this.type+"-icon "+this.color+"-icon size-"+this.size})}),[],!1,null,"4b0e7343",null);n.default=i.exports},315:function(t,n,s){},350:function(t,n,s){"use strict";s(315)},408:function(t,n,s){"use strict";s.r(n);var o=s(305),e=s(311),i={name:"add-buff",extends:o.a,components:{BuffIcon:e.default},computed:{damageClass:function(){return this.options.power<=10?"s-add-buff":this.options.power<100?"m-add-buff":"l-add-buff"}}},a=(s(350),s(42)),r=Object(a.a)(i,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("div",{staticClass:"buff-add"},[s("div",{staticClass:"buff-area"},[s("buff-icon",{attrs:{color:t.options.color,type:t.options.type}})],1),t._v("\n    "+t._s(t._f("name")(t._f("whoIdIs")(t.allCharacter,t.options.player)))+" に"+t._s(t.options.name)+"Lv\n    "),s("b",{class:t.damageClass},[t._v("\n      "+t._s(t.options.power)+"\n    ")]),t._v("\n    を付与！\n  ")])])}),[],!1,null,"29f67888",null);n.default=r.exports}}]);