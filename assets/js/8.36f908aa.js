(window.webpackJsonp=window.webpackJsonp||[]).push([[8,43],{312:function(t,e,s){},347:function(t,e,s){"use strict";s(312)},400:function(t,e,s){},405:function(t,e,s){"use strict";s.r(e);var a={props:{white:{type:Boolean,default:!0}},computed:{},mixins:[]},i=(s(347),s(42)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{home:!0,white:this.white}},[e("div",{staticClass:"bg"},[e("div",{staticClass:"header-blank"}),this._v(" "),this._t("default"),this._v(" "),e("div",{staticClass:"footer-blank"})],2)])}),[],!1,null,"0a78121b",null);e.default=n.exports},463:function(t,e,s){"use strict";s(400)},470:function(t,e,s){"use strict";s.r(e);var a=s(467),i=[{profile:{name:"AAA"},skill:[{Cmd:"test-cmd/smash",Arg:{Lv:1},RID:"S1"}],ability:[{Cmd:"test-cmd/soul",Arg:{Lv:1},RID:"A1"}],ai:[{"@call":"test-cmd/smash.ai",arguments:{rid:"S1",player:{"@arg":"player"}}}]}],n=[{profile:{name:"BBB"},skill:[{Cmd:"test-cmd/fire",Arg:{Lv:1},RID:"S1"}],ability:[{Cmd:"test-cmd/soul",Arg:{Lv:1},RID:"A1"}],ai:[{"@call":"test-cmd/fire.ai",arguments:{rid:"S1",player:{"@arg":"player"}}}]}],l=[{Cmd:"test-cmd/normal-attack",Arg:{Lv:1},RID:"normal-attack"},{Cmd:"test-cmd/wait",Arg:{Lv:1},RID:"wait"}],o=s(405),r={name:"test",data:function(){return{log:[],pt1:[],pt2:[],pt1json:JSON.stringify(i,null,2),pt2json:JSON.stringify(n,null,2),defSkill:JSON.stringify(l,null,2)}},components:{BattleNote:a.default,WhitePage:o.default},methods:{simu:function(){var t=this;this.log=Unmiracle.simu(JSON.parse(this.pt1json),JSON.parse(this.pt2json),JSON.parse(this.defSkill),(function(e,s,a){t.log=e,t.pt1=s,t.pt2=a}))}}},c=(s(463),s(42)),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("white-page",[s("div",{staticClass:"member"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pt1json,expression:"pt1json"}],attrs:{rows:"30"},domProps:{value:t.pt1json},on:{input:function(e){e.target.composing||(t.pt1json=e.target.value)}}}),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pt2json,expression:"pt2json"}],attrs:{rows:"30"},domProps:{value:t.pt2json},on:{input:function(e){e.target.composing||(t.pt2json=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"rule"},[s("button",{on:{click:t.simu}},[t._v("シミュレーション")])]),t._v(" "),s("battle-note",{attrs:{code:t.log,pt1:t.pt1,pt2:t.pt2}})],1)}),[],!1,null,"38551c58",null);e.default=u.exports}}]);