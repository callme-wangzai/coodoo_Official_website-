webpackJsonp([18],{0:function(t,e){},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},1:function(t,e){},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},EDs6:function(t,e){},F88d:function(t,e,n){"use strict";var r=n("vnm/"),a=n("P+aQ"),o=!1;var i=function(t){o||n("lRkB")},u=n("VU/8")(r.a,a.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-loading.vue",e.a=u.exports},Fjlz:function(t,e,n){"use strict";var r=n("/5sW"),a=(n("4CPX"),n("w2uo"));r.default.use(a)},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,i=e.props;o.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;o.nuxtChildDepth=f;var p=s[f]||c,d={};r.forEach(function(t){void 0!==p[t]&&(d[t]=p[t])});var l={};a.forEach(function(t){"function"==typeof p[t]&&(l[t]=p[t].bind(u))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var m=[t("router-view",o)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:l},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},J1QK:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[404===this.error.statusCode?e("div",{staticClass:"page"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"http://img.binlive.cn/upload/1525013647902",alt:""}})])],1):e("div",{staticClass:"page"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"http://img.binlive.cn/upload/1525016935287",alt:""}})])],1)])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("woOf"),a=n.n(r),o=n("BO1k"),i=n.n(o),u=n("/5sW"),s=n("NYxO");u.default.use(s.default);var c=n("QA5y"),f=c.keys(),p={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(p=_(d)),"function"!=typeof p){p.modules||(p.modules={});var l=!0,h=!1,m=void 0;try{for(var v,x=i()(f);!(l=(v=x.next()).done);l=!0){var y=v.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var w=b.split(/\//);(t=C(p,w))[b=w.pop()]=_(y),t[b].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!l&&x.return&&x.return()}finally{if(h)throw m}}}var g=p instanceof Function?p:function(){return new s.default.Store(a()({strict:!1},p,{state:p.state instanceof Function?p.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},LeqR:function(t,e){},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="QA5y"},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),a=n.n(r),o=n("//Fk"),i=n.n(o),u=n("Xxa5"),s=n.n(u),c=n("mvHQ"),f=n.n(c),p=n("exGp"),d=n.n(p),l=n("fZjL"),h=n.n(l),m=n("woOf"),v=n.n(m),x=n("/5sW"),y=n("unZF"),b=n("qcny"),w=n("YLfZ"),g=function(){var t=d()(s.a.mark(function t(e,n,r){var a,o,i=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=f()(e.query)!==f()(n.query),this._diffQuery=this._queryChanged?Object(w.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(w.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),_=function(){var t=d()(s.a.mark(function t(e,n,r){var a,o,u,c,f,p,d,l,h=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!a){a=!0;var e=[];k=Object(w.e)(n,e).map(function(t,r){return Object(w.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(w.m)($,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,u=[],(c=Object(w.e)(e,u)).length){t.next=24;break}return t.next=13,S.call(this,c,$.context);case 13:if(!a){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof b.a.layout?b.a.layout($.context):b.a.layout);case 17:return f=t.sent,t.next=20,S.call(this,c,$.context,f);case 20:if(!a){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(c,e,n)),t.prev=26,t.next=29,S.call(this,c,$.context);case 29:if(!a){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(p=c[0].options.layout)&&(p=p($.context)),t.next=37,this.loadLayout(p);case 37:return p=t.sent,t.next=40,S.call(this,c,$.context,p);case 40:if(!a){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,c.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:E}))}),d){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(w.b)(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==k[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,c=o&&s?30:45;if(o){var f=Object(w.j)(t.options.asyncData,$.context).then(function(e){Object(w.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});a.push(f)}if(s){var p=t.options.fetch($.context);p&&(p instanceof i.a||"function"==typeof p.then)||(p=i.a.resolve(p)),p.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),a.push(p)}return i.a.all(a)}));case 51:a||(this.$loading.finish&&this.$loading.finish(),k=c.map(function(t,n){return Object(w.b)(e.matched[u[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),k=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(l=b.a.layout)&&(l=l($.context)),t.next=63,this.loadLayout(l);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(){var t=d()(s.a.mark(function t(e){var n,r,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,j=e.router,E=e.store,t.next=5,i.a.all(O(j));case 5:return n=t.sent,r=new x.default($),a=R.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),x.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,j.currentRoute)),k=j.currentRoute.matched.map(function(t){return Object(w.b)(t.path)(j.currentRoute.params)})),r.$loading={},R.error&&r.error(R.error),j.beforeEach(g.bind(r)),j.beforeEach(_.bind(r)),j.afterEach(q),j.afterEach(M.bind(r)),!R.serverRendered){t.next=23;break}return o(),t.abrupt("return");case 23:_.call(r,j.currentRoute,j.currentRoute,function(t){if(!t)return q(j.currentRoute,j.currentRoute),L.call(r,j.currentRoute),void o();j.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=[],$=void 0,j=void 0,E=void 0,R=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=v()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);h()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function T(t,e){return R.serverRendered&&e&&Object(w.a)(t,e),t._Ctor=t,t}function O(t){var e=this,n=Object(w.d)(t.options.base,t.options.mode);return Object(w.c)(t.match(n),function(){var t=d()(s.a.mark(function t(n,r,a,o,i){var u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return u=T(Object(w.l)(n),R.data?R.data[i]:null),a.components[o]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,a,o){return t.apply(this,arguments)}}())}function S(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!o)return Object(w.i)(a,e)}function q(t,e){Object(w.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":a()(t))||t.options||((t=x.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?b.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function M(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.default.nextTick(function(){Object(w.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&k[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}}),L.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),j.afterEach(function(e,n){x.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(b.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("xBph"),a=n("J1QK"),o=!1;var i=function(t){o||n("LeqR")},u=n("VU/8")(r.a,a.a,!1,i,"data-v-d5ea9138",null);u.options.__file="layouts/error.vue",e.a=u.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=w,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=g,e.k=_,n.d(e,"h",function(){return C}),n.d(e,"m",function(){return k}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return $(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=$,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},u=r||{},s=u.pretty?E:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var p,d=i[f.name||"pathMatch"];if(null==d){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+a()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<d.length;l++){if(p=s(d[l]),!e[c].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+a()(p)+"`");o+=(0===l?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?R(d):s(d),!e[c].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');o+=f.prefix+p}}else o+=f}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var s=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+s.length,c)i+=c[1];else{var p=t[o],d=n[2],l=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=p&&p!==d,b="+"===v||"*"===v,w="?"===v||"*"===v,g=n[2]||u,_=h||m;r.push({name:l||a++,prefix:d||"",delimiter:g,optional:w,repeat:b,partial:y,asterisk:!!x,pattern:_?T(_):x?".*":"[^"+A(g)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),u=n("Xxa5"),s=n.n(u),c=n("exGp"),f=n.n(c),p=n("//Fk"),d=n.n(p),l=n("fZjL"),h=n.n(l),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function g(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e=this;return d.a.all(g(t,function(){var t=f()(s.a.mark(function t(n,r,a,o){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",a.components[o]=b(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,a){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=f()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",v()({},e,{meta:w(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=f()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!1,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=O(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,C(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,C(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function $(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function E(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function O(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),i=(n?n+"://":"//")+o.shift(),u=o.filter(Boolean).join("/"),s=void 0;return 2===(o=u.split("#")).length&&(u=o[0],s=o[1]),i+=u?"/"+u:"",e&&"{}"!==a()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},g3Gj:function(t,e){},lRkB:function(t,e){},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:k,routes:[{path:"/about",component:u,name:"about"},{path:"/brand",component:s,name:"brand"},{path:"/experice",component:c,name:"experice"},{path:"/leader",component:f,name:"leader"},{path:"/about/contact",component:p,name:"about-contact"},{path:"/about/cooperation",component:d,name:"about-cooperation"},{path:"/about/history",component:l,name:"about-history"},{path:"/about/joinUs",component:h,name:"about-joinUs"},{path:"/about/joinUs.vue",component:m,name:"about-joinUs.vue"},{path:"/experice/download",component:v,name:"experice-download"},{path:"/experice/increment",component:x,name:"experice-increment"},{path:"/experice/productSupport",component:y,name:"experice-productSupport"},{path:"/experice/repair",component:b,name:"experice-repair"},{path:"/home/activities",component:w,name:"home-activities"},{path:"/home/meituan",component:g,name:"home-meituan"},{path:"/home/onlineShop",component:_,name:"home-onlineShop"},{path:"/",component:C,name:"index"}],fallback:!1})};var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("/ocq");o.default.use(i.default);var u=function(){return n.e(6).then(n.bind(null,"yPeL")).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,"ZDha")).then(function(t){return t.default||t})},c=function(){return n.e(12).then(n.bind(null,"Ip+Q")).then(function(t){return t.default||t})},f=function(){return n.e(4).then(n.bind(null,"dSai")).then(function(t){return t.default||t})},p=function(){return n.e(16).then(n.bind(null,"lk3s")).then(function(t){return t.default||t})},d=function(){return n.e(15).then(n.bind(null,"pva/")).then(function(t){return t.default||t})},l=function(){return n.e(14).then(n.bind(null,"D/pg")).then(function(t){return t.default||t})},h=function(){return n.e(0).then(n.bind(null,"nrdH")).then(function(t){return t.default||t})},m=function(){return n.e(0).then(n.bind(null,"nrdH")).then(function(t){return t.default||t})},v=function(){return n.e(5).then(n.bind(null,"yRn0")).then(function(t){return t.default||t})},x=function(){return n.e(13).then(n.bind(null,"RaSH")).then(function(t){return t.default||t})},y=function(){return n.e(11).then(n.bind(null,"2RdU")).then(function(t){return t.default||t})},b=function(){return n.e(10).then(n.bind(null,"68Tb")).then(function(t){return t.default||t})},w=function(){return n.e(9).then(n.bind(null,"Oso8")).then(function(t){return t.default||t})},g=function(){return n.e(8).then(n.bind(null,"GAqi")).then(function(t){return t.default||t})},_=function(){return n.e(7).then(n.bind(null,"/KMF")).then(function(t){return t.default||t})},C=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var k=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new a.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return O});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),f=n("Dd8w"),p=n.n(f),d=n("exGp"),l=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),y=n("mtxM"),b=n("0F0d"),w=n("HBB+"),g=n("WRRc"),_=n("To1F"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),j=n("J2Ti"),E=n("sQWu"),R=n("vfPB"),A=n("Fjlz"),T=n("t9HB");n.d(e,"a",function(){return _.a});var O=function(){var t=l()(a.a.mark(function t(e){var n,r,o,i,s,f,d;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(j.a)(e)).$router=n,o=p()({router:n,store:r,nuxt:{defaultTransition:S,transitions:[S],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},S,{name:t}):c()({},S,t):S}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=o,i=e?e.next:function(t){return o.router.push(t)},s=void 0,e?s=n.resolve(e.url).route:(f=Object($.d)(n.options.base),s=n.resolve(f).route),t.next=10,Object($.m)(o,{route:s,next:i,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof E.default){t.next=16;break}return t.next=16,Object(E.default)(o.context,d);case 16:if("function"!=typeof R.default){t.next=19;break}return t.next=19,Object(R.default)(o.context,d);case 19:if("function"!=typeof A.default){t.next=22;break}return t.next=22,Object(A.default)(o.context,d);case 22:if("function"!=typeof T.default){t.next=25;break}return t.next=25,Object(T.default)(o.context,d);case 25:t.next=28;break;case 28:return t.abrupt("return",{app:o,router:n,store:r});case 29:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(g.a.name,g.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var S={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sQWu:function(t,e,n){"use strict";var r=n("/5sW"),a=n("AXdl");r.default.use(a.a,{preLoad:1.33,error:"",loading:"",attempt:2,throttleWait:500})},t9HB:function(t,e,n){"use strict";var r=n("/5sW"),a=n("zL8q"),o=n.n(a);r.default.use(o.a)},tvR6:function(t,e){},unZF:function(t,e,n){"use strict";var r=n("BO1k"),a=n.n(r),o=n("4Atj"),i=o.keys();function u(t){var e=o(t);return e.default?e.default:e}var s={},c=!0,f=!1,p=void 0;try{for(var d,l=a()(i);!(c=(d=l.next()).done);c=!0){var h=d.value;s[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(h)}}catch(t){f=!0,p=t}finally{try{!c&&l.return&&l.return()}finally{if(f)throw p}}e.a=s},v2ns:function(t,e){},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),i=n.n(o),u=n("/5sW"),s=n("NYxO"),c=n("mtWM"),f=n.n(c);u.default.use(s.default);var p={aiuAPI:"http://47.106.86.150:8092",aiuSRC:"http://47.106.86.150:8083",headProdNav:{},headNewsNav:{},headJobNav:{},indexLinksData:null},d={setProductList:function(t,e){t.productList=e},setShopList:function(t,e){t.shopList=e},setShopType:function(t,e){t.shopType=e},setSubject:function(t,e){t.subject=e}},l={},h={nuxtServerInit:function(){var t=i()(a.a.mark(function t(e){var n,r,o,i,u=e.commit,s=e.state;e.req;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post(s.aiuAPI+"/rest/api/product/v1/query/list",{asc:!0,sortName:"sortForHome"});case 2:return n=t.sent,u("setProductList",n.data.data.list),t.next=6,f.a.post(s.aiuAPI+"/rest/api/shop/v1/query/list",{request:{sortIndex:1}});case 6:return r=t.sent,u("setShopList",r.data.data.list),t.next=10,f.a.post(s.aiuAPI+"/rest/api/shop-type/v1/query/list-all",{asc:!0,sortName:"sortIndex"});case 10:return o=t.sent,u("setShopType",o.data.data),t.next=14,f.a.post(s.aiuAPI+"/rest/api/subject/v1/query/list-all",{});case 14:i=t.sent,u("setSubject",i.data.data);case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};e.default=function(){return new s.default.Store({state:p,getters:l,mutations:d,actions:h})}},vfPB:function(t,e,n){"use strict";var r=n("/5sW"),a=n("v2ns"),o=(n.n(a),n("Z5iE"));r.default.use(o)},"vnm/":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},xBph:function(t,e,n){"use strict";e.a={props:["error"],layout:"blog"}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),u=n("EDs6"),s=(n.n(u),n("g3Gj")),c=(n.n(s),n("tvR6")),f=(n.n(c),{_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),p={};e.a={head:{title:"aiu",meta:[{name:"renderer",content:"webkit"},{name:"force-rendering",content:"webkit"},{"http-equiv":"X-UA-Compatible",content:"IE=Edge,chrome=1"},{name:"baidu-site-verification",content:"mREHhDF8nW"},{charset:"utf-8"},{hid:"description",name:"description",content:"爱柚"},{name:"format-detection",content:"telephone=no"},{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"},{name:"360-site-verification",content:"850970beabd63bd397272b6dd73a1aba"},{name:"sogou_site_verification",content:"y3fi8ttkxP"},{name:"shenma-site-verification",content:"15230d9dfb2e66bfecf2408862f2462c_1537497601"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB"},{type:"text/javascript",src:"https://webapi.amap.com/maps?v=1.4.15&key=915cb730fc97606e9f375b013229c45f&plugin=AMap.MouseTool,AMap.PolyEditor,AMap.LabelMarker,AMap.Autocomplete,AMap.ToolBar,AMap.PlaceSearch,AMap.Heatmap,AMap.Geocoder"}],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&p["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=p[e],this.layout},loadLayout:function(t){var e=this;t&&(f["_"+t]||p["_"+t])||(t="default");var n="_"+t;return p[n]?a.a.resolve(p[n]):f[n]().then(function(t){return p[n]=t,delete f[n],p[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);