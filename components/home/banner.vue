<template>
<div>
	<div id="index-banner1" class="index-banner" v-if="bannerType==='1'">
		<div v-swiper:mySwiper="swiperOption">
			<!-- 有传参进来 -->
			<div v-if="banner.pictures.length>0" class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,index) in banner.pictures" :key="index">
					<img @click="toShop(index)" v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<!-- <div class="swiper-button-prev left-button"> -->
				<div class="swiper-button-prev swiper-button-white"></div>
			<!-- </div> -->
			<!-- <div class="swiper-button-next right-button"> -->
				<div class="swiper-button-next swiper-button-white"></div>
			<!-- </div> -->
			
		</div>
	</div>
	<div id="index-banner2" class="index-banner" v-if="bannerType==='2'">
		<div v-swiper:mySwiper="swiperOption">
			<!-- 有传参进来 -->
			<div v-if="banner.pictures.length>0" class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,index) in banner.pictures" :key="index">
					<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev swiper-button-white">
				
			</div>
			<div class="swiper-button-next swiper-button-white"></div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		components: {
		},
		name: 'VBanner',
		props:{
			//banner为对象，里面的data属性包含着图片的数组
			banner: {
				type:Object,
				required:true
			},
			bannerType: {
				type:String,//1:首页高度：1080；2.门店页高度：
				required:true
			},
		},
		data (){
			return {
				isLeft:true,
				currentIndex: 0,
				timer: '',
				clickTime: 0,
				swiperData:[
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					},
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					},
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					}
				],
				swiperOption: {
					pagination: {
						el: ".swiper-pagination",
						clickable: true //允许分页点击跳转
					},
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					loop : true,
					autoplay:true
				// some swiper options...
				}


			}
		},
		computed:{
			// swiper(){
			// 	return this.$refs.mySwiper.swiper
			// }
		},
		created (){

		},
		mounted(){
			console.log('banner>>>>',this.banner)
		},
		methods: {
			toShop(index){
				window.open(this.banner.value.split(';')[index])
			}
		}
	}
</script>

<style scoped>
	.index-banner {
	    position:  relative;
	    overflow:  hidden; 
	    width:  100%;
	    /* height:  768px; */
		/* height: 67.5rem; */
	}
	#index-banner1 .swiper-slide>img{
		width: 100%;
    	/* height: 768px; */
		height: 45rem;
	}
	#index-banner2 .swiper-slide>img{
		width: 100%;
    	/* height: 768px; */
		height: 30rem;
	}
	#index-banner3 .swiper-slide>img{
		width: 100%;
    	/* height: 768px; */
		height: 30rem;
	}
	
	
</style>
<style>
	.index-banner .swiper-pagination-bullet{
		background:#fff!important;
		cursor: pointer;
	}
	.index-banner .swiper-pagination-bullet-active{
		background:orange!important;
	}
	.index-banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
		margin:0px 8px
	}
	.index-banner .swiper-pagination-bullet{
		width:14px;
		height:14px;
	}
	.left-button{
		background: rgba(0,0,0,0.1);
		padding: 15px 10px;
		margin-top:-30px;border-radius: 0px 15px 15px 0;
	}
	.left-button:hover{
		background: rgba(0,0,0,0.2);
	}
	.right-button{
		background: rgba(0,0,0,0.1);
		padding: 15px 10px;
		margin-top:-30px;
		border-radius:15px 0px 0px 15px;
	}
	.right-button:hover{
		background: rgba(0,0,0,0.2);
	}
	#index-banner1  .swiper-pagination-bullet{
		border:solid 2px orange;
	}
</style>