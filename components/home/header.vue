<template>
	<header class="v-header clearfix">
		<div id="index-header" class="fixedTop">
			<div :class="`index-header-box${isWhite?' white':''} `" @mouseover="menuShow()" @mouseout="menuShowOff()">
				<nuxt-link to="/">
					<img class="h-t-logo" src="~/assets/images/index/logo1.png" alt="酷动">
				</nuxt-link>
				<div class="i-h-nav">
					<ul class="h-nav-list">
						<li 
						:class="`${isBottomLine===1?'bottom-line':''}`"
						@mouseover="bottomHover(1)"
						>
							<nuxt-link class="titleLink" to="/">首页</nuxt-link>
						</li>
						<li :class="`${isBottomLine===2?'bottom-line':''}`" @mouseover="menuShow(1,2)" @mouseout="menuShowOff(1)">
							<nuxt-link class="titleLink" to="/brand">购买渠道</nuxt-link>
							<!-- <div v-show="channelFlag" class="suspension-menu">
								<div class="menu">线上购买</div>
								<div class="menu">线下门店</div>
							</div> -->
						</li>
						<li @mouseover="bottomHover(3)" :class="`${isBottomLine===3?'bottom-line':''}`">
							<a class="titleLink" href="https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr">产品与优惠</a>
						</li>
						<li :class="`${isBottomLine===4?'bottom-line':''}`" @mouseover="menuShow(2,4)" @mouseout="menuShowOff(2)">
							<!-- <nuxt-link class="titleLink" to="/experice">服务与支持</nuxt-link> -->
							<a class="titleLink" href="">服务与支持</a>
						</li>
						<li :class="`${isBottomLine===5?'bottom-line':''}`" @mouseover="menuShow(3,5)" @mouseout="menuShowOff(3)">
							<nuxt-link class="titleLink" to="/about">关于我们</nuxt-link>
						</li>
					</ul>		
				</div>
			</div>
		</div>
		<div class="child" v-show="channelFlag" @mouseover="menuShow(1)" @mouseout="menuShowOff(1)">
			<div class="second-child">
				<div class="second-title">线上购买</div>
				<a class="third-child" href="https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr">线上商城</a>
				<!-- <div class="third-child" @click="linkTo('/home/onlineShop')">线上商城</div> -->
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title">线下门店</div>
				<!-- <div class="third-child">华南大区</div>
				<div class="third-child">华东大区</div>
				<div class="third-child">华北大区</div> -->
				<!-- <div class="third-child" @click="toShopList(item,1)" v-for="(item,index) in shopType" :key="index">
					{{item.showName}}
				</div> -->

				<nuxt-link v-for="(item,index) in shopType" :key="index" class="third-child" :to="{ path: `/brand?id=${item.id}` }">{{item.showName}}</nuxt-link>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title">热门城市</div>
				<div class="second-body">
					<nuxt-link class="third-child" :to="{ path: '/brand?city=深圳' }" :key="'a'">深圳</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=厦门' }" :key="'b'">厦门</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=杭州' }" :key="'c'">杭州</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=郑州' }" :key="'d'">郑州</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=西安' }" :key="'e'">西安</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=武汉' }" :key="'f'">武汉</nuxt-link>
					<nuxt-link class="third-child" :to="{ path: '/brand?city=长沙' }" :key="'g'">长沙</nuxt-link>

					<!-- <div class="third-child" @click="toShopList('厦门',2)">厦门</div>
					<div class="third-child" @click="toShopList('杭州',2)">杭州</div>
					<div class="third-child" @click="toShopList('郑州',2)">郑州</div>
					<div class="third-child" @click="toShopList('西安',2)">西安</div>
					<div class="third-child" @click="toShopList('武汉',2)">武汉</div>
					<div class="third-child" @click="toShopList('长沙',2)">长沙</div> -->
				</div>
				
			</div>
		</div>

		<div class="child" v-show="serviceFlag"  @mouseover="menuShow(2)" @mouseout="menuShowOff(2)">
			<div class="second-child">
				<div class="second-title">产品支持</div>
				<div class="supplement">技术问题解答</div>
				<div class="third-child" @click="linkTo(`/experice/productSupport?id=${item.id}`)" v-for="(item,index) in supportList" :key="index">
					{{item.supportName}}
				</div>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title" >维修支持</div>
				<div class="supplement">售后服务与维修</div>
				<div class="third-child" @click="linkTo('/experice/repair')">预约维修</div>
				<div class="third-child" @click="linkTo('/experice/repair')">到店维修</div>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title">增值服务</div>
				<div class="supplement">全面保障，安心使用</div>
				<div class="third-child">
					<a target="_blank" href="https://download.china-dt.com/wapApp/? storeId=weixin&packageName=com.coodoo. mycoach">在线约课</a>
				</div>
				<div class="third-child">
					<a target="_blank" href="http://kfb.coofans.com/Commodity/QueryKfb">酷粉保服务</a>
				</div>
				<div class="third-child">
					<a target="_blank" href="https://sor.china-dt.com/IPhoneReplacementService/index.html?hqId=265264">iPhone值享焕新</a>
				</div>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title">更多支持</div>
				<div class="supplement">更多酷享服务</div>
				<div class="third-child" @click="linkTo('/experice/download')">酷动APP下载</div>
			</div>
		</div>

		<div class="child about" v-show="aboutFlag" @mouseover="menuShow(3)" @mouseout="menuShowOff(3)">
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">关于酷动</div>
			</div>
			<!-- <div class="line"></div>
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">发展历程</div>
			</div> -->
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">联系酷动</div>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">商务合作</div>
			</div>
			<div class="line"></div>
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">加入我们</div>
			</div>
			<!-- <div class="line"></div>
			<div class="second-child">
				<div class="second-title" @click="linkTo('/about')">隐私政策</div>
			</div> -->
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		name: 'VHeader',
		data (){
			return {
				headFixed:false,
				maxClientWidth: 980,
				isShowCode: false,
				channelFlag:false,
				serviceFlag:false,
				aboutFlag:false,
				isWhite:false,
				isBottomLine:0,
			}
		},
		computed: {
			...mapState(['supportList','shopType'])
		},
		mounted (){
			
			//监听滚动条
			window.addEventListener('scroll',this.handleScroll);
		},
		methods: {
			handleScroll (){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('.h-nav-list').offsetTop;
				if (scrollTop > offsetTop) {
					this.headFixed = true;
				} else {
					this.headFixed = false;
				}
			},
			showCode (){
				this.isShowCode = !this.isShowCode
			},
			linkTo(url){
				this.$router.push(url)
				// let el = document.getElementById(`product${index}`)
				// if(el){
				// 	document.documentElement.scrollTop = el.offsetTop - 80
				// }else{
				// 	this.$router.push('/')
				// 	setTimeout(()=>{
				// 		let el = document.getElementById(`product${index}`)
				// 		document.documentElement.scrollTop = el.offsetTop - 80
				// 	},500)
				// }
			},
			linkToShop(){
				window.open('https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr')
			},
			toShopList(params,type){
				console.log(params)
				if(type === 1){
					localStorage.setItem('shopType',JSON.stringify({
						id:params.id,
						showName:''
					}))
					this.$router.push({ name: 'brand',params:{id:params.id}})
				}else if(type === 2){
					localStorage.setItem('shopType',JSON.stringify({
						id:'',
						showName:params
					}))
					this.$router.push('/brand')
				}
			},
			bottomHover(num){
				this.isBottomLine = num
			},
			menuShow(type,num){
				this.isWhite = true
				if(num){
					this.isBottomLine = num
				}
				switch(type){
					case 1:
						this.channelFlag = true
					break
					case 2:
						this.serviceFlag = true
					break
					case 3:
						this.aboutFlag = true
					break
					default:
					break
				}				
			},
			menuShowOff(type){
				this.isWhite = false
				this.channelFlag = false
				this.serviceFlag = false
				this.aboutFlag = false
			}
		},
		destroyed (){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style scoped>
	#index-header {
	    width:  100%;
	    background: #f6f6f6;
		background: rgba(0,0,0,0);	
	    z-index: 666;
		border-bottom: solid 2px #f6f6f6;
	}

	.fixedTop{
	    /* position:  fixed; */
	    /* top: -100px; */
	    /* left: 0; */
	}

	.index-header-box {
	    position:  relative;
	    width:  100%;
	    height:  80px;
	    /* background: #fff; */
	    /* border-bottom: 2px solid #d5d5d8; */
	    box-sizing:  border-box;
	}
	.white{
		background: #fff;
	}
	.menuBar{
		width: 100%;
		/* height:100px; */
		padding:10px 0;
		background: #fff;
		position:  fixed;
		top:80px;
		z-index: 666;
		display: flex;
		justify-content: center;
	}
	.menuBar .menu{
		margin:0 20px;
		cursor: pointer;
	}
	.menuBar .menu .menu-name{
		text-align: center;
		margin:10px 0;
		color:#6d6d6d;
	}
	.menuBar .menu>img{
		width: 150px;
		height: 100px;
	}

	.h-t-logo {
	    position:  absolute;
		left:210px;
		top:0px;
		height:80px;
	}

	.i-h-nav {
	    width:  1200px;
	    height:  80px;
	    margin:  0 auto;
	    /* padding-top: 15px; */
	    font-size:  18px;
	    line-height: 80px;
	    text-align:  right;
	}

	ul.h-nav-list {
	    display:  block;
	    width:  100%;
	    height:  100%;
	}

	.h-nav-list>li {
	    position: relative;
	    display:  inline-block;
	    padding: 0 23px;
		box-sizing: border-box;
	}
	/* .h-nav-list>li:hover{
		border-bottom: solid 2px #000 ;
	} */
	.bottom-line{
		border-bottom: solid 2px #000
	}
	.suspension-menu{
		z-index:999;
		position:absolute;
		top:80px;
		left:0;
		width:100%;
		background: #fff;
		font-size: 14px;
		text-align: center;
		cursor: pointer;
	}
	.suspension-menu .menu{
		height:40px;
		line-height: 40px;
		color:#303233;
	}
	.suspension-menu .menu:hover{
		background: #ebeff2;
	}
	.h-nav-list .titleLink:hover{
		/* color:rgb(245, 237, 223); */
	}

	.h-nav-list>li>a {
	    display:  block;
	    width:  100%;
	    height:  100%;
	    /* padding-bottom:  6px; */
	    color: #aaa;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    -webkit-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	}

	.h-nav-list>li .nuxt-link-exact-active{
		color: #000!important;
		font-weight: 900;
	}
	.h-nav-list-child li a.nuxt-link-exact-active{
		border: none;
	}
	ul.h-nav-list-child {
	    display:  none;
	    position:  absolute;
	    top: 62px;
	    left: 50%;
	    overflow: hidden;
	    width: 100px;
	    height:  0;
	    margin-left: -50px;
	    background: #f2f3f4;
	    opacity: 0;
	    filter: alpha(opacity=0);
	    z-index: 999;
	}

	.h-nav-list>li:hover .h-nav-list-child {
	    display:  block;
	    height: auto;
	    -webkit-transition: all 1s ease;
	    -o-transition: all 1s ease;
	    transition: all 1s ease;
	    opacity: 100;
	    filter: alpha(opacity=1);
	}

	ul.h-nav-list-child>li {
	    width:  100%;
	    height: 30px;
	    font-size:  14px;
	    text-align:  center;
	    line-height: 30px;
	}

	ul.h-nav-list-child li a {
	    display: block;
	    overflow:  hidden;
	    width:  100%;
	    height:  100%;
	    color: #6d6d6d;
	    border: none;
	}

	ul.h-nav-list-child li a:hover{
	    color: #22202b;
	}

	 ul.h-nav-list-child.h-nav-list-childProd {
	    left: 0;
	    margin-left: 0;
	    width: 600px;
	    padding: 15px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li {
	    overflow: hidden;
	    height:  auto;
	    line-height: 40px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:first-child {
	    float:  left;
	    width: 100px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:nth-child(2) {
	    float:  left;
	    width: 50px;
	    font-weight:  bold;
	}

	ul.nav-childProd {
	    float:  left;
	    width: 450px;
	    min-height: 30px;
	    border-bottom: 1px dotted #ccc;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li:last-child .nav-childProd {
	    border-bottom:  none;
	}

	ul.nav-childProd>li {
	    float:  left;
	    width: auto;
	}

	ul.nav-childProd>li>a {
	    padding: 0 10px;
	} 
	
	ul.h-nav-list-child.h-nav-list-childProd .nuxt-link-active {
	    color: #6d6d6d;
	    border-bottom:  transparent;
	}

	ul.h-nav-list-child.h-nav-list-childProd li a:hover {
	    color: #22202b;
	}

	.h-nav-list-childNews li a.nuxt-link-active {
	    color: #6d6d6d;
	    border: none;
	}
	.child{
		display: flex;
		justify-content: center;
		background: #fff;
		/* border-top: solid 2px #f6f6f6; */
		padding:24px 0;
		position: absolute;
		top:82px;
		z-index: 999;
		width: 100vw;
	}
	.child .second-title{
		color: #3b3e40;
		font-size: 16px;
		/* line-height: 24px; */
		display: block;
		margin-bottom: 8px;
		font-weight: 900;
		font-family: "Open Sans","PingFang SC","Microsoft YaHei","Helvetica Neue","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,sans-serif!important;


		/* margin: 10px 0; */
	}
	.supplement{
		color: #989ea2;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		margin-bottom: 16px;
		font-family: "Open Sans","PingFang SC","Microsoft YaHei","Helvetica Neue","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,sans-serif!important;
	}
	.about{
		padding-left:2vw;
		padding-right:2vw;
		box-sizing: border-box;
	}
	.about .second-child{
		margin-bottom: 0px;
	}
	.about .second-title{
		margin-bottom: 0px;
		cursor: pointer;
	}
	.child .second-body{
		display: flex;
		flex-direction:column;
		flex-wrap:wrap;
		max-height: 100px;
	}
	.second-child{
		/* text-align: center; */
		width: 20vw;
		display: inline-block;
		color: #303233;
		font-size: 14px;
		line-height: 24px;
		margin-bottom: 8px;
		
	}
	.line{
		position: relative;
		margin-right: 24px;
	}
	.line::before{
		content: " ";
		position: absolute;
		left: 50%;
		top: 0;
		height: 100%;
		border-left: 1px solid #f0f1f2;
		transform: translateX(-50%);
		width: 2px;
	}
	.third-child{
		display: block;
		color: #303233;
		margin:5px 0;
		cursor: pointer;
	}
	.third-child>a{
		color: #303233;
	}
	.third-child:hover{
		text-decoration:underline;
	}
	.vertical-divider {
		position: relative;
		overflow: hidden;
		vertical-align: baseline;
		height: 100%;
	}
</style>