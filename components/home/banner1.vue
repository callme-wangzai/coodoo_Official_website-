<template>
<div>
	<div id="index-banner" class="xbanner index-banner">
		<div class="shop-list" v-swiper:mySwiper="swiperOption">
			<div class="swiper-wrapper">
            <div :id="'shop'+index" class="swiper-slide" v-for="(item,index) in banner" :key="index">
              <img class="shop-img" :src="$store.state.aiuSRC + item.picture.filePath" alt="">
			  <div class="shop-tips">
				  <div class="shop-name">{{item.showName}}</div>
				  <div class="shop-address" :title="item.address">{{item.address}}</div>
			  </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
		  <div class="swiper-button-prev left-button">
				<div class="swiper-button-prev swiper-button-white"></div>
			</div>
			<div class="swiper-button-next right-button">
				<div class="swiper-button-next swiper-button-white"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		components: {
		},
		name: 'VBanner1',
		props:{
			//banner为对象，里面的data属性包含着图片的数组
			banner: {
				type:Array,
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
					autoplay:true,
					slidesPerView : 'auto',
					spaceBetween : 20,
          			slidesOffsetBefore : 176,
				},


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
			console.log('banner',this.banner)
		},
		methods: {
		}
	}
</script>

<style scoped>
	.index-banner {
	    position:  relative;
	    /* overflow:  hidden;  */
	    width:  100%;
	    /* height:  768px; */
		/* height: 67.5rem; */
	}
	.shop-list>.swiper-wrapper{
    width: 37vw;
    height:20.8125vw;
  }
  .shop-img{
    width: 37vw;
    height:20.8125vw;
    border: none;
  }
	.swiper-slide{
		position: relative;
	}
	.shop-tips{
		position:absolute;
		bottom:0;
		width: 100%;
		height: 5.08vw;
		background: #000000;
		border: 0px solid #393939;
		opacity: 0.7;
		color: #fff;
	}
	.shop-name{
		margin-left:15px;
		margin-top:10px;
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		opacity: 0.8;
	}
	.shop-address{
		margin-left:15px;
		margin-top:10px;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		opacity: 0.8;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap
	}
	
</style>
<style>
	.xbanner .swiper-pagination-bullet{
		background: #000!important;
	}
	.xbanner .swiper-container{
		padding-bottom:32px;
	}
</style>