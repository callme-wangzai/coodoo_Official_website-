webpackJsonp([8],{Bud1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},t._l(t.fileList,function(e,a){return n("img",{key:a,attrs:{src:t.$store.state.aiuSRC+e.filePath,alt:""}})}),0)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};e.a=r},FrFn:function(t,e){},GAqi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("fpt7"),r=n("Bud1"),i=!1;var s=function(t){i||n("FrFn")},u=n("VU/8")(a.a,r.a,!1,s,"data-v-58a24c8b",null);u.options.__file="pages/home/meituan/index.vue",e.default=u.exports},fpt7:function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),u=n("mtWM"),c=n.n(u);e.a={data:function(){return{}},head:function(){return{title:"美团",meta:[{name:"keywords",hid:"keywords",content:"美团"},{name:"description",hid:"description",content:"美团"}]}},asyncData:function(){var t=s()(r.a.mark(function t(e){e.params;var n,a=e.store;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post(a.state.aiuAPI+"/rest/api/display/v1/find-by-keys",["meituan_shop"]);case 2:return n=t.sent,t.abrupt("return",{fileList:n.data.data.meituan_shop.pictures});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),components:{},mounted:function(){}}}});