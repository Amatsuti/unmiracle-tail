(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{305:function(n,t,a){"use strict";a(166),a(306),a(65);var e=a(307),s=a.n(e);t.a={props:{options:Object,pt1:Array,pt2:Array},computed:{allCharacter:function(){return s.a.concat(this.pt1,this.pt2)}},filters:{whoIdIs:function(n,t){return s.a.find(n,{id:t})},name:function(n){return n.name},icon:function(n){return n.icon}}}},327:function(n,t,a){},362:function(n,t,a){"use strict";a(327)},420:function(n,t,a){"use strict";a.r(t);var e={name:"heal",extends:a(305).a,computed:{damageClass:function(){return this.options.heal<10?"s-damage":this.options.heal<100?"m-damage":"l-damage"}}},s=(a(362),a(42)),i=Object(s.a)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"damage"},[n._v("\n    "+n._s(n._f("name")(n._f("whoIdIs")(n.allCharacter,n.options.player)))+" のHPが\n    "),a("b",{class:n.damageClass},[n._v("\n      "+n._s(n.options.heal)+"\n    ")]),n._v("\n    回復！\n  ")])])}),[],!1,null,"bfaf1b2e",null);t.default=i.exports}}]);