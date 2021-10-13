<template>
	<footer class="v-footer">
		<div id="index-footer">
			<div class="index-footer-box">
				<div class="footer-top">
					<div class="footer-logo-box clearfix">
						<div class="footer-logo">
							<nuxt-link to="/">
								<!-- <img src="~/assets/images/index/logo2.jpeg"> -->
							</nuxt-link>
						</div>
						<!-- <div class="footer-phone">
							<img src="~/assets/images/index/footer-phone.png">
						</div>
						<div class="footer-pic">
							<img src="~/assets/images/index/footer-pic.png">
						</div> -->
					</div>
					<div class="footer-nav-box">
						<div class="footer-nav">
							<ul class="footer-nav-parent">
								<li class="footer-nav-list">
									<nuxt-link to="/">首页</nuxt-link>
									<ul class="footer-nav-child footer-nav-childNews">
										<li><a target="_blank" href="https://www.baidu.com/">立即选购</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">相关产品</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">酷动门店</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">主题活动</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">附近门店搜索</a></li>
									</ul>
								</li>
								<li class="footer-nav-list">
									<nuxt-link target="_blank" to="/">产品与优惠</nuxt-link>
									<ul class="footer-nav-child footer-nav-childNews">
										<li><a target="_blank" href="https://www.baidu.com/">iphone</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">ipad</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">mac</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">watch</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">airpods</a></li>
									</ul>
								</li>
								<li class="footer-nav-list">
									<nuxt-link target="_blank" to="/brand">服务与支持</nuxt-link>
									<ul class="footer-nav-child footer-nav-childNews">
										<li><a target="_blank" href="https://www.baidu.com/">产品支持</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">维修支持</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">增值服务</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">更多支持</a></li>
									</ul>
								</li>
								<li class="footer-nav-list">
									<nuxt-link to="/experice">关于我们</nuxt-link>
									<ul class="footer-nav-child footer-nav-childNews">
										<li><a target="_blank" href="https://www.baidu.com/">关于酷动</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">发展历史</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">联系酷动</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">商务合作</a></li>
										<li><a target="_blank" href="https://www.baidu.com/">加入我们</a></li>
									</ul>
								</li>
								<!-- <li class="footer-nav-list footer_links" v-show="$route.params.tag === undefined && $route.fullPath === '/'">
									<a href="javascript:void(0)">友情链接</a>
									<ul class="footer-nav-child footer_links_ul">
										<li class="footer-nav-child-list" v-for="(list,index) in indexLinksData" :key="index">
											<a target="_blank" :href="list.link">{{list.linkName}}</a>
										</li>
									</ul>
								</li> -->
							</ul>	
						</div>
						<!-- <div class="footer-code">
							<div class="footer-sina-box">
								<div class="footer-sina-icon"><a target="_blank" rel="nofollow" href="https://weibo.com/visney?is_hot=1"><img src="~/assets/images/index/footer-sina-icon.png"></a></div>
							</div>
							<div class="footer-weixin-box">
								<div class="footer-weixin-icon"><img src="~/assets/images/index/footer-weixin-icon.png"></div>
								<div class="footer-weixin-code code-pic active"><img src="~/assets/images/index/footer-weixin-code.png"></div>
							</div>
							<div class="footer-phone-box">
								<div class="footer-phone-icon"><img src="~/assets/images/index/footer-phone-icon.png"></div>
							</div>
						</div> -->
					</div>
				</div>
				<div class="footer-bottom">
					<p>Copyright © 2021 深圳市爱柚数字智能有限公司</p>
					<p>粤ICP备2021129996号</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	div#index-footer {
	    width:  100%;
	    height:  auto;
	    background: #333333;
	}

	.index-footer-box {
	    width: 1200px;
	    height: auto;
	    margin: 0 auto;
	    /* padding-bottom: 30px; */
	}
	.footer-top{
		display: flex;
		justify-content: space-between;
	}
	.footer-logo-box {
	    position:  relative;
	    /* width:  100%; */
	    height:  84px;
	    /* border-bottom: 2px solid #515256; */
	}

	.footer-logo {
	    float:  left;
	    /* margin-top: 28px; */
	}

	.footer-logo img{
		height: 9rem;
	}

	.footer-phone {
	    float:  right;
	    margin-top:  28px;
	    margin-right: 130px;
	}

	.footer-pic {
	    position:  absolute;
	    top: -77px;
	    right: -15px;
	    overflow:  hidden;
	    width:  129px;
	    height: 161px;
	}

	.footer-nav-box {
	    overflow:  hidden;
	    /* width:  100%; */
	    height:  auto;
	    padding-bottom: 12px;
	    background: #333;
	}

	.footer-nav {
	    float:  left;
	    overflow:  hidden;
	    width:  900px;
	    height:  auto;
	    padding-top:  35px;
	}

	.footer-code {
	    position: relative;
	    float:  right;
	    overflow:  hidden;
	    width:  300px;
	    height:  auto;
	    padding-top:  277px;
	}

	ul.footer-nav-parent {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    text-align: center;
	}

	li.footer-nav-list {
	    display: inline-block;
	    margin-left:  110px;
	}

	.footer-nav-parent .footer-nav-list:first-child {
	    margin-left: 0px;
	}

	li.footer-nav-list>a {
	    display:  block;
	    width:  100%;
	    height: 34px;
	    color: #f9f9fa;
	    font-size:  14px;
	    font-weight:  bold;
	    line-height:  34px;
	    text-align:  center;
	}

	ul.footer-nav-child {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    padding-top: 12px;
	}

	.footer-nav-child li {
	    width:  100%;
	    height:  30px;
	    font-size:  14px;
	    text-align:  center;
	    line-height: 30px;
	}

	.footer-nav-child li a {
	    color: #969696;
	}

	.footer-nav-child li a:hover {
	    color: #f9f9fa;
	}

	.footer-nav-list.footer_links{
		margin-left: 70px;
	}

	ul.footer-nav-child.footer_links_ul {
		overflow-y: auto;
		height: 120px;
		padding-right: 14px;
	}

	ul.footer-nav-child.footer_links_ul li{
		max-width:  104px;
		overflow: hidden;
	}

	ul.footer-nav-child.footer_links_ul li a {
		display: block;
		width: 100%;
		padding: 0 5px;
	}

	/*滚动条样式*/
	.footer_links_ul::-webkit-scrollbar {/*滚动条整体样式*/
		width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}
	.footer_links_ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		border-radius: 5px;
		box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		background: rgba(0,0,0,0.2);
	}
	.footer_links_ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
		box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		border-radius: 0;
		background: rgba(0,0,0,0.1);
	}

	.footer-code>div {
	    float:  right;
	    width:  28px;
	    height: 24px;
	    text-align: center;
	    cursor: pointer;
	    -webkit-transition: all 0.5 ease;
	    -o-transition: all 0.5 ease;
	    transition: all 0.5 ease;
	}

	.footer-weixin-box {
	    margin-right: 24px;
	    margin-left: 23px;
	}

	.code-pic {
	    display: none;
	    position: absolute;
	    top: 70px;
	    right: 0;
	    overflow:  hidden;
	    width: 135px;
	    height: 139px;
	}

	.code-pic img {
	    width:  100%;
	    height: 100%;
	}

	.code-pic.active {
	    display:  block;
	}

	.footer-bottom {
	    overflow:  hidden;
	    width: 100%;
	    height:  28px;
	    color:  #999;
	    font-size: 12px;
	    text-align:  center;
	    line-height:  28px;
	}
	.footer-bottom p {
		display: inline-block;
		margin-left: 15px;
	}

	.footer-bottom p:first-child {
		margin-left: 0;
	}

	.footer-bottom p a {
		color:  #999;
	}

	.footer-bottom p a:hover {
		color: #f9f9fa;
	}
</style>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'VFooter',
		components: {},
		
		computed: {
			...mapState(['headProdNav','productList','indexLinksData'])
		},
		// mounted (){
		// 	//判断是否为首页，首页则改变友情链接控制字段，只在首页显示
		// 	let that = this
		// 	if(that.$route.params.tag === undefined && that.$route.fullPath === '/'){
		// 		that.$store.commit('setIndexShowLinks', true)
		// 	}else {
		// 		that.$store.commit('setIndexShowLinks', false)
		// 	}
		// }
	}
</script>