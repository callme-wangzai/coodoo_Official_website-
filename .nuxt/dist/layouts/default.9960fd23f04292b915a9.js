webpackJsonp([2],{"0RaU":function(t,i){},"773m":function(t,i,e){t.exports=e.p+"img/gongzhonghao.bcc6b25.jpeg"},"F1w/":function(t,i,e){"use strict";var s=e("zKm/"),o=e("IG1D"),n=!1;var a=function(t){n||e("gEnq")},l=e("VU/8")(s.a,o.a,!1,a,"data-v-b78c7540",null);l.options.__file="components/home/footer.vue",i.a=l.exports},IG1D:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("footer",{staticClass:"v-footer"},[i("div",{attrs:{id:"index-footer"}},[i("div",{staticClass:"index-footer-box"},[i("div",{staticClass:"footer-top"}),this._m(0),i("div",{staticClass:"footer-bottom"},[i("p",[this._v("Copyright © 2011 www.COODOO.com.cn All Rights Reserved.Power by COODOO Digital")]),i("p",[this._v("版权所有 © Coodoo 保留所有权利 备案/许可证编号为: "),i("span",{staticClass:"link",on:{click:this.linkToWeb}},[this._v("粤ICP备12064129号")])])])])])])},o=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"code"},[i("div",{staticClass:"gongzhonghao"},[i("img",{staticClass:"img",attrs:{src:e("773m"),alt:""}})]),i("div",{staticClass:"des"},[i("div",{staticClass:"title"},[this._v("Coodoo官方公众号")]),i("div",[this._v("了解Apple产品及周边配件的绝佳场所")])]),i("div",{staticClass:"xiaochengxu"},[i("img",{staticClass:"img",attrs:{src:e("iHlC"),alt:""}})]),i("div",{staticClass:"des"},[i("div",{staticClass:"title"},[this._v("Apple授权专营店")]),i("div",[this._v("在你身边的产品与服务")])])])}];s._withStripped=!0;var n={render:s,staticRenderFns:o};i.a=n},Ma2J:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("S45E"),o=e("R7nB"),n=!1;var a=function(t){n||(e("WhGm"),e("i9NA"),e("0RaU"))},l=e("VU/8")(s.a,o.a,!1,a,"data-v-314f53c6",null);l.options.__file="layouts/default.vue",i.default=l.exports},MiXl:function(t,i,e){t.exports=e.p+"img/logo1.0e73771.png"},OwC8:function(t,i,e){"use strict";var s=e("ZIsi"),o=e("nMnq"),n=!1;var a=function(t){n||e("Xb6k")},l=e("VU/8")(s.a,o.a,!1,a,"data-v-7527ad5c",null);l.options.__file="components/home/header.vue",i.a=l.exports},R7nB:function(t,i,e){"use strict";var s=function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("v-header"),i("main",{ref:"container",staticClass:"content-container",class:1==this.headFixed?"marginTop":""},[i("nuxt")],1),i("v-footer")],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};i.a=o},S45E:function(t,i,e){"use strict";var s=e("OwC8"),o=e("F1w/"),n=e("kb90");i.a={components:{VHeader:s.a,VFooter:o.a},data:function(){return{headFixed:!1,maxClientWidth:980}},mounted:function(){Object(n.a)();!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?02736a493e850835a7c343e9edd17e88";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}()},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=document.querySelector(".h-nav-list").offsetTop;this.headFixed=t>i;var e=t/304>=1?1:t/304;document.getElementById("index-header").style.backgroundColor="rgba(246,246,246,"+e+")";document.getElementsByClassName("titleLink")}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}},WhGm:function(t,i){},Xb6k:function(t,i){},ZIsi:function(t,i,e){"use strict";var s=e("Dd8w"),o=e.n(s),n=e("NYxO");i.a={name:"VHeader",data:function(){return{headFixed:!1,maxClientWidth:980,isShowCode:!1,channelFlag:!1,serviceFlag:!1,aboutFlag:!1,isWhite:!1,isBottomLine:0,mobileShopFlag1:!1,mobileShopFlag2:!1,mobileShopFlag3:!1,mobileProductFlag1:!1,mobileProductFlag2:!1,mobileProductFlag3:!1,mobileProductFlag4:!1,mobileProductFlag5:!1,aboutUsFlag1:!1,aboutUsFlag2:!1,aboutUsFlag3:!1,aboutUsFlag4:!1,aboutUsFlag5:!1,mobileMenu:!1,storeList:["深圳","厦门","杭州","郑州","西安","武汉","长沙"]}},computed:o()({},Object(n.mapState)(["supportList","shopType"])),mounted:function(){},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=document.querySelector(".h-nav-list").offsetTop;this.headFixed=t>i},showCode:function(){this.isShowCode=!this.isShowCode},linkTo:function(t){this.closeMobile(),this.$router.push(t)},linkToOut:function(t){window.open(t),this.closeMobile()},bottomHover:function(t){this.isBottomLine=t},menuShow:function(t,i){switch(this.isWhite=!0,i&&(this.isBottomLine=i),t){case 1:this.channelFlag=!0;break;case 2:this.serviceFlag=!0;break;case 3:this.aboutFlag=!0}},menuShowOff:function(t){this.isWhite=!1,this.channelFlag=!1,this.serviceFlag=!1,this.aboutFlag=!1},changeMenu:function(){this.mobileMenu=!this.mobileMenu,this.mobileMenu?document.body.style.overflow="hidden":document.body.style.overflow="auto"},closeMobile:function(){this.mobileMenu=!1,document.body.style.overflow="auto"}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}},gEnq:function(t,i){},i9NA:function(t,i){},iHlC:function(t,i,e){t.exports=e.p+"img/xiaochengxu.8ebcaff.png"},kb90:function(t,i,e){"use strict";i.a=function(){var t=document.createElement("script");"https"===window.location.protocol.split(":")[0]?t.src="https://zz.bdstatic.com/linksubmit/push.js":t.src="http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)};var s=e("mvHQ");e.n(s)},nMnq:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("header",{staticClass:"v-header clearfix"},[s("div",{staticClass:"fixedTop",attrs:{id:"index-header"}},[s("div",{class:"index-header-box"+(t.isWhite?" white":"")+" ",on:{mouseover:function(i){return t.menuShow()},mouseout:function(i){return t.menuShowOff()}}},[s("nuxt-link",{attrs:{to:"/"}},[s("img",{staticClass:"h-t-logo",attrs:{src:e("MiXl"),alt:"酷动"}})]),s("span",{staticClass:"menu-m"},[s("i",{staticClass:"el-icon-menu",on:{click:t.changeMenu}})]),s("div",{staticClass:"i-h-nav"},[s("ul",{staticClass:"h-nav-list"},[s("li",{class:1===t.isBottomLine?"bottom-line":"",on:{mouseover:function(i){return t.bottomHover(1)}}},[s("nuxt-link",{staticClass:"titleLink",attrs:{to:"/"}},[t._v("首页")])],1),s("li",{class:2===t.isBottomLine?"bottom-line":"",on:{mouseover:function(i){return t.menuShow(1,2)},mouseout:function(i){return t.menuShowOff(1)}}},[s("nuxt-link",{staticClass:"titleLink",attrs:{to:"/brand"}},[t._v("购买渠道")])],1),s("li",{class:3===t.isBottomLine?"bottom-line":"",on:{mouseover:function(i){return t.bottomHover(3)}}},[s("a",{staticClass:"titleLink",attrs:{href:"https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr"}},[t._v("产品与优惠")])]),s("li",{class:4===t.isBottomLine?"bottom-line":"",on:{mouseover:function(i){return t.menuShow(2,4)},mouseout:function(i){return t.menuShowOff(2)}}},[s("a",{staticClass:"titleLink",attrs:{href:""}},[t._v("服务与支持")])]),s("li",{class:5===t.isBottomLine?"bottom-line":"",on:{mouseover:function(i){return t.menuShow(3,5)},mouseout:function(i){return t.menuShowOff(3)}}},[s("nuxt-link",{staticClass:"titleLink",attrs:{to:"/about"}},[t._v("关于我们")])],1)])])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileMenu,expression:"mobileMenu"}],staticClass:"mobile-child",on:{mouseover:function(i){t.mobileMenu=!0},mouseout:function(i){t.mobileMenu=!1}}},[s("div",{staticClass:"mobile-li",on:{click:function(i){return t.linkTo("/")}}},[t._v("\n\t\t\t首页\n\t\t")]),s("div",{staticClass:"mobile-li"},[s("div",{staticClass:"mobile-tips mobile-first-title",on:{click:function(i){t.mobileShopFlag1=!t.mobileShopFlag1}}},[t._v("\n\t\t\t\t购买渠道\n\t\t\t\t"),s("span",{staticClass:"mobile-icon"},[t.mobileShopFlag1?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileShopFlag1,expression:"mobileShopFlag1"}]},[s("div",{staticClass:"mobile-second-title",on:{click:function(i){return t.linkToOut("https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr")}}},[t._v("线上购买")]),s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileShopFlag2=!t.mobileShopFlag2}}},[t._v("\n\t\t\t\t\t线下门店\n\t\t\t\t\t"),s("span",{staticClass:"mobile-icon"},[t.mobileShopFlag2?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileShopFlag2,expression:"mobileShopFlag2"}]},t._l(t.shopType,function(i,e){return s("div",{key:e,staticClass:"mobile-third-title",on:{click:function(e){return t.linkTo("/brand?id="+i.id)}}},[t._v("\n\t\t\t\t\t\t"+t._s(i.showName)+"\n\t\t\t\t\t")])}),0),s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileShopFlag3=!t.mobileShopFlag3}}},[t._v("\n\t\t\t\t\t热门城市\n\t\t\t\t\t"),s("span",{staticClass:"mobile-icon"},[t.mobileShopFlag3?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileShopFlag3,expression:"mobileShopFlag3"}]},t._l(t.storeList,function(i,e){return s("div",{key:e,staticClass:"mobile-third-title",on:{click:function(e){return t.linkTo("/brand?city="+i)}}},[t._v("\n\t\t\t\t\t\t"+t._s(i)+"\n\t\t\t\t\t")])}),0)])]),s("div",{staticClass:"mobile-li",on:{click:function(i){return t.linkToOut("https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr")}}},[t._v("产品与优惠")]),s("div",{staticClass:"mobile-li"},[s("div",{staticClass:"mobile-tips mobile-first-title",on:{click:function(i){t.mobileProductFlag1=!t.mobileProductFlag1}}},[t._v("\n\t\t\t\t服务与支持\n\t\t\t\t"),s("span",{staticClass:"mobile-icon "},[t.mobileProductFlag1?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileProductFlag1,expression:"mobileProductFlag1"}]},[s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileProductFlag2=!t.mobileProductFlag2}}},[t._m(0),s("span",{staticClass:"mobile-icon"},[t.mobileProductFlag2?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileProductFlag2,expression:"mobileProductFlag2"}]},t._l(t.supportList,function(i,e){return s("div",{key:e,staticClass:"mobile-third-title",on:{click:function(e){return t.linkTo("/experice/productSupport?id="+i.id)}}},[t._v("\n\t\t\t\t\t\t"+t._s(i.supportName)+"\n\t\t\t\t\t")])}),0),s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileProductFlag3=!t.mobileProductFlag3}}},[t._m(1),s("span",{staticClass:"mobile-icon"},[t.mobileProductFlag3?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileProductFlag3,expression:"mobileProductFlag3"}]},[s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkTo("/experice/repair")}}},[t._v("预约维修")]),s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkTo("/experice/repair")}}},[t._v("到店维修")])]),s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileProductFlag4=!t.mobileProductFlag4}}},[t._m(2),s("span",{staticClass:"mobile-icon"},[t.mobileProductFlag4?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileProductFlag4,expression:"mobileProductFlag4"}]},[s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkToOut("https://download.china-dt.com/wapApp/? storeId=weixin&packageName=com.coodoo. mycoach")}}},[t._v("在线约课")]),s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkToOut("http://kfb.coofans.com/Commodity/QueryKfb")}}},[t._v("酷粉保服务")]),s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkToOut("https://sor.china-dt.com/IPhoneReplacementService/index.html?hqId=265264")}}},[t._v("iPhone值享焕新")])]),s("div",{staticClass:"mobile-second-title mobile-tips",on:{click:function(i){t.mobileProductFlag5=!t.mobileProductFlag5}}},[t._m(3),s("span",{staticClass:"mobile-icon"},[t.mobileProductFlag5?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobileProductFlag5,expression:"mobileProductFlag5"}]},[s("div",{staticClass:"mobile-third-title",on:{click:function(i){return t.linkTo("/experice/download")}}},[t._v("酷动APP下载")])])])]),s("div",{staticClass:"mobile-li"},[s("div",{staticClass:"mobile-tips mobile-first-title",on:{click:function(i){t.aboutUsFlag1=!t.aboutUsFlag1}}},[t._v("\n\t\t\t\t关于我们\n\t\t\t\t"),s("span",{staticClass:"mobile-icon"},[t.aboutUsFlag1?s("i",{staticClass:"el-icon-arrow-up"}):s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.aboutUsFlag1,expression:"aboutUsFlag1"}]},[s("div",{staticClass:"mobile-second-title",on:{click:function(i){return t.linkTo("/about?tab=1")}}},[t._v("\n\t\t\t\t\t关于酷动\n\t\t\t\t")]),s("div",{staticClass:"mobile-second-title",on:{click:function(i){return t.linkTo("/about?tab=3")}}},[t._v("\n\t\t\t\t\t联系酷动\n\t\t\t\t")]),s("div",{staticClass:"mobile-second-title",on:{click:function(i){return t.linkTo("/about?tab=4")}}},[t._v("\n\t\t\t\t\t商务合作\n\t\t\t\t")]),s("div",{staticClass:"mobile-second-title",on:{click:function(i){return t.linkTo("/about?tab=5")}}},[t._v("\n\t\t\t\t\t加入我们\n\t\t\t\t")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.channelFlag,expression:"channelFlag"}],staticClass:"child",on:{mouseover:function(i){return t.menuShow(1)},mouseout:function(i){return t.menuShowOff(1)}}},[t._m(4),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title"},[t._v("线下门店")]),t._l(t.shopType,function(i,e){return s("nuxt-link",{key:e,staticClass:"third-child",attrs:{to:{path:"/brand?id="+i.id}}},[t._v(t._s(i.showName))])})],2),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title"},[t._v("热门城市")]),s("div",{staticClass:"second-body"},t._l(t.storeList,function(i,e){return s("nuxt-link",{key:e,staticClass:"third-child",attrs:{to:{path:"/brand?city="+i}}},[t._v(t._s(i))])}),1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.serviceFlag,expression:"serviceFlag"}],staticClass:"child",on:{mouseover:function(i){return t.menuShow(2)},mouseout:function(i){return t.menuShowOff(2)}}},[s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title"},[t._v("产品支持")]),s("div",{staticClass:"supplement"},[t._v("技术问题解答")]),t._l(t.supportList,function(i,e){return s("div",{key:e,staticClass:"third-child",on:{click:function(e){return t.linkTo("/experice/productSupport?id="+i.id)}}},[t._v("\n\t\t\t\t"+t._s(i.supportName)+"\n\t\t\t")])})],2),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title"},[t._v("维修支持")]),s("div",{staticClass:"supplement"},[t._v("售后服务与维修")]),s("div",{staticClass:"third-child",on:{click:function(i){return t.linkTo("/experice/repair")}}},[t._v("预约维修")]),s("div",{staticClass:"third-child",on:{click:function(i){return t.linkTo("/experice/repair")}}},[t._v("到店维修")])]),s("div",{staticClass:"line"}),t._m(5),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title"},[t._v("更多支持")]),s("div",{staticClass:"supplement"},[t._v("更多酷享服务")]),s("div",{staticClass:"third-child",on:{click:function(i){return t.linkTo("/experice/download")}}},[t._v("酷动APP下载")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.aboutFlag,expression:"aboutFlag"}],staticClass:"child about",on:{mouseover:function(i){return t.menuShow(3)},mouseout:function(i){return t.menuShowOff(3)}}},[s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title",on:{click:function(i){return t.linkTo("/about?tab=1")}}},[t._v("关于酷动")])]),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title",on:{click:function(i){return t.linkTo("/about?tab=3")}}},[t._v("联系酷动")])]),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title",on:{click:function(i){return t.linkTo("/about?tab=4")}}},[t._v("商务合作")])]),s("div",{staticClass:"line"}),s("div",{staticClass:"second-child"},[s("div",{staticClass:"second-title",on:{click:function(i){return t.linkTo("/about?tab=5")}}},[t._v("加入我们")])])])])};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this._v("\n\t\t\t\t\t\t产品支持\n\t\t\t\t\t\t"),i("div",{staticClass:"mobile-supplement"},[this._v("技术问题解答")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this._v("\n\t\t\t\t\t\t维修支持\n\t\t\t\t\t\t"),i("div",{staticClass:"mobile-supplement"},[this._v("售后服务与维修")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this._v("\n\t\t\t\t\t\t增值服务\n\t\t\t\t\t\t"),i("div",{staticClass:"mobile-supplement"},[this._v("全面保障，安心使用")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this._v("\n\t\t\t\t\t\t更多支持\n\t\t\t\t\t\t"),i("div",{staticClass:"mobile-supplement"},[this._v("更多酷享服务")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"second-child"},[i("div",{staticClass:"second-title"},[this._v("线上购买")]),i("a",{staticClass:"third-child",attrs:{href:"https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr"}},[this._v("线上商城")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"second-child"},[i("div",{staticClass:"second-title"},[this._v("增值服务")]),i("div",{staticClass:"supplement"},[this._v("全面保障，安心使用")]),i("div",{staticClass:"third-child"},[i("a",{attrs:{target:"_blank",href:"https://download.china-dt.com/wapApp/? storeId=weixin&packageName=com.coodoo. mycoach"}},[this._v("在线约课")])]),i("div",{staticClass:"third-child"},[i("a",{attrs:{target:"_blank",href:"http://kfb.coofans.com/Commodity/QueryKfb"}},[this._v("酷粉保服务")])]),i("div",{staticClass:"third-child"},[i("a",{attrs:{target:"_blank",href:"https://sor.china-dt.com/IPhoneReplacementService/index.html?hqId=265264"}},[this._v("iPhone值享焕新")])])])}]};i.a=o},"zKm/":function(t,i,e){"use strict";e("NYxO");i.a={name:"VFooter",components:{},methods:{linkToWeb:function(){window.open("https://beian.miit.gov.cn/")}}}}});