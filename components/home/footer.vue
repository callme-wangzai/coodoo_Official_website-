<template>
	<footer class="v-footer">
		<div id="index-footer">
			<div class="index-footer-box">
				<div class="footer-top">
					<!-- <div class="footer-logo-box clearfix">
						<div class="footer-logo">
							<nuxt-link to="/">
								<img src="~/assets/images/index/logo2.png">
							</nuxt-link>
						</div>
					</div> -->
				
				</div>
				<div class="code">
					<div class="gongzhonghao">
						<img src="~/assets/images/index/gongzhonghao.jpeg" alt="">
					</div>
					<div class="des">
						<div class="title">Coodoo官方公众号</div>
						<div>了解Apple产品及周边配件的绝佳场所</div>
					</div>
					<div class="xiaochengxu">
						<img src="~/assets/images/index/xiaochengxu.png" alt="">
					</div>
					<div class="des">
						<div class="title">Apple授权专营店</div>
						<div>在你身边的产品与服务</div>
					</div>
				</div>
				<div class="footer-bottom">
					<p>Copyright © 2011 www.COODOO.com.cn All Rights Reserved.Power by COODOO Digital</p>
					<p>版权所有 © Coodoo 保留所有权利 备案/许可证编号为: <span class="link" @click="linkToWeb">粤ICP备12064129号-2</span></p>
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
		height: 4rem;
		margin-top:2rem;
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
	.code{
		margin-top:2vw;
		margin-bottom: 2vw;
		display: flex;
		justify-content: center;
		
	}
	.gongzhonghao{
		width:8vw;
		height: 8vw;
		border:solid 3px #000;
		border-radius: 1vw;
		overflow: hidden;
	}
	.gongzhonghao>img{
		width:8vw;
		height: 8vw;
	}
	.xiaochengxu{
		width:8vw;
		height: 8vw;
		margin-left: 3vw;
		border:solid 3px #000;
		border-radius: 1vw;
		overflow: hidden;
	}
	.xiaochengxu>img{
		width:8vw;
		height: 8vw;
	}
	.des{
		margin-left: 1vw;
		/* margin-right: 5vw; */
		color: #fff;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.des .title{
		font-size: 16px;
		font-weight: bold;
		font-family: 'pingfang';
		margin-bottom:5px;
	}
	.footer-bottom {
	    overflow:  hidden;
	    width: 100%;
	    /* height:  28px; */
	    color:  #999;
	    font-size: 12px;
	    text-align:  center;
	    line-height:  28px;
	}
	.footer-bottom p {
		/* display: inline-block; */
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
	#index-footer{
		/* position: absolute;
		bottom:0;
		z-index: 999; */
	}
	.link{
		cursor: pointer;
	}
	.link:hover{
		text-decoration:underline!important;
	}
</style>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'VFooter',
		components: {},
		methods:{
			linkToWeb(){
				window.open('https://beian.miit.gov.cn/')
			}
		}
	}
</script>