<template>
  <section class="container">
      <!-- banner -->
      <VBanner :banner="banner" :bannerType="'1'" ></VBanner>

      <!-- 广告位 -->
      <img @click="linkTo('https://shop40567215.youzan.com/v2/showcase/homepage?alias=PqERHgH7qr')" style="width:100%;cursor:pointer;" src="~/assets/images/index/banner.jpg" alt="">
      

      <!-- 产品展示 -->
      <div class="product-list swiper-container swiper2" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide product-slide" v-for="(item,index) in productList" :key="index">
            <div class="product-title">{{item.name}}</div>
            <div class="product-desc">{{item.desc}}</div>
            <div class="learn-more"><a @click="linkTo(item.mallLink)">了解更多 ></a></div>
            <img v-if="item.suspensions&&item.suspensions[0]" :src="$store.state.aiuSRC+item.suspensions[0].filePath">
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

      <!-- 门店信息 -->
      <div class="shop">
        <div class="shop-title">线下门店</div>
        <XBanner :banner="shopList" ></XBanner>
      </div>

      <!-- 主题活动 -->
      <div class="theme-activities">
        <div class="theme-title">精彩活动</div>
        <div class="theme-description">爱尚酷生活</div>
        <div class="theme-first">
          <img width="100%" @click="linkToActive(subject[0])" :src="$store.state.aiuSRC+subject[0].pictures[0].filePath" alt="">
        </div>
        <div class="theme-others">
          <div class="theme-second">
            <img height="100%" @click="linkToActive(subject[1])" :src="$store.state.aiuSRC+subject[1].pictures[0].filePath" alt="">
          </div>
          <div class="theme-third">
            <img height="100%" @click="linkToActive(subject[2])" :src="$store.state.aiuSRC+subject[2].pictures[0].filePath" alt="">
          </div>
        </div>
      </div>
      
      
      <!-- 门店搜索 -->
      <no-ssr>
      <div class="shop-search">
        <div class="search-title">
          <h3>您身边的Apple专家</h3>
          <div class="shop-description">即刻前往线下门店，酷享更多服务</div>
          <div class="search-input">
            <el-input
              v-model="input">
              <i slot="suffix" class="el-input__icon el-icon-search" @click="searchShop"></i>
            </el-input>
          </div>
        </div>
        <img style="width:100%;" :src="imageUrl" alt="">
        
      </div>
      </no-ssr>

      
  </section>
</template>
<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import AppLogo from '~/components/AppLogo.vue'
  import VHeader from '~/components/home/header'
  import VFooter from '~/components/home/footer'
  import VBanner from '~/components/home/banner'
  import XBanner from '~/components/home/banner1'
  import BBanner from '~/components/home/bottom-banner'
  import indexVideo from '~/components/home/indexVideo'
  import Video from '~/components/video'
  import prodListShow from '~/components/common/prodListShow'
  import indexNewsListShow from '~/components/common/indexNewsListShow'
  // import MapLoader from "@/plugins/aMap.js";
  export default {
    data(){
      return {
        imageUrl: require("~/static/shopSearch.jpeg"),
        swiperOption: {
					// pagination: {
					// 	el: ".swiper-pagination",
					// 	clickable: true ,//允许分页点击跳转
					// },
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
          loop : true,
					slidesPerView : 'auto',
					spaceBetween : 20,
          slidesOffsetBefore : 160,
				},
        num:0,
        clickProdIndex:0,
        clickNewsIndex: 0,
        videoUrl:'',
        videoModal:false,
        input:'',
        placeSearch:null,
        districtSearch: '',
        districtSearch1: '',
        districtSearch2: '',
        districtSearch3: '',
        provinceList: [],
        cityList:[],
        districtList:[],
        streetList:[],
        map:null,
        province:'',
        city:'',
        district:'',
        street:'',
        allStreet:[],
      }
    },
    components: {
      AppLogo,
      VHeader,
      VFooter,
      VBanner,
      XBanner,
      BBanner,
      indexVideo,
      prodListShow,
      indexNewsListShow,
      Video
    },
    head () {
      return {
        title:'coodoo',
        meta: [
          {name:'keywords',hid: 'keywords',content:`云麦,YUNMAI,好轻,云麦筋膜枪,云麦智能手表,云麦智能跳绳,云麦体脂秤,云麦好轻,云麦好轻Pro,云麦好轻Color2,云麦好轻mini2,云麦腕力球,云麦弹力圈,云麦瑜伽垫,体脂秤,筋膜枪,瑜伽,腕力球,体脂称`},
          {name:'description',hid:'description',content:`云麦科技旗下所有产品，包括云麦筋膜枪系列YUNMAI按摩筋膜枪PB、YUNMAI按摩筋膜枪SC，云麦体脂秤系列云麦好轻2、云麦好轻Pro、云麦好轻Color2、云麦好轻mini2，智能穿戴系列YUNMAI智能训练手表、YUNMAI智能跳绳，瑜伽系列瑜伽垫、瑜伽球、瑜伽砖、瑜伽柱、泡沫轴、瑜伽袜，运动服饰系列运动内衣、运动紧身裤等，运动装备系列运动跳绳、运动臂包、运动腰包、运动护膝、运动护肘、运动护腕、健力环、弹力带、阻力圈、握力圈等，同时提供云麦客户服务及售后支持`}
        ]
      }
    },
    async asyncData({params,store}){
      //banner数据动态获取
      let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
        ['main_carouselFigure']
      );
      return {
        banner:banner.data.data.main_carouselFigure,
      } 
    },
    computed: {
			...mapState(['productList','shopList','subject'])
		},
    methods: {
      shopLink(item){
        window.open(item.mallLink,'_target')
      },
      watchVideo(item){
        this.videoUrl = this.$store.state.aiuSRC+item.video.filePath
        this.videoModal = true
        console.log('this.videoUrl',this.videoUrl)
      },
      closeModal(){
        this.videoModal = false
      },
      linkTo(link){
        window.open(link,'_target')
      },
      searchShop(){
        localStorage.setItem('shopType',JSON.stringify({
          id:'',
          showName:this.input
        }))
        this.$router.push('/brand')
      },
      linkToActive(obj){
        if(obj.subjectDesc&&obj.subjectDesc!==''){
          window.open(obj.subjectDesc)
        }else{
          this.$router.push({path:'/home/activities',query:{
            subject:obj.sortIndex
          }})
        }
      } 
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    /* padding-top:80px; */
    height: auto;
    background: #fff;
  }
  .shop{
    margin-bottom:20px;
  }
  .shop-title{
    margin-top:2vw;
    margin-bottom:2vw;
    font-size: 45px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #333333;
    text-align: center;
  }
  .shop-list{
    overflow-x: hidden;
    /* display: flex;
    justify-content: space-around; */
  }
  .shop-list>.swiper-wrapper{
    width: 37vw;
    height:37vw;
  }
  .shop-img{
    width: 37vw;
    height:37vw;
    border: none;
  }
  .shop-main{
    background: #fff;
    padding-top:1.25rem;
    color:#585858;
  }
  .shop-name{
    text-align: center;
    font-size: 14px;
    font-weight: 900;
  }
  .shop-address{
    text-align: center;
    font-size: 12px;
    
    margin-top:1rem;
    margin-bottom:1.25rem;
  }
  .shop-time{
    font-size: 0.625rem;
    padding-right:0.3125rem;
    padding-bottom:0.625rem;
    text-align: right;
    color: #b6b6b6;
  }
  .product-list{
    margin-top:3.125vw;
  }
  .product-slide{
    width: 38vw !important;
    height:38vw;
    background: #f6f6f6;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .product-slide>img{
    width: 20vw;
    height: 20vw;
    /* margin-bottom:2vw; */
    margin:2vw auto;
  }
  .product-title{
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #333333;
    text-align: center;
    margin-top:4.16vw;
    margin-bottom:1vw
  }
  .product-desc{
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
    opacity: 0.7;
    width: 30vw;
    text-align: center;
    margin:0 auto;
  }
  .learn-more{
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
    opacity: 0.7;
    text-align: center;
    margin-top:1vw;
  }
  .learn-more>a{
    cursor: pointer;
  }
  .shop-search{
    position: relative;
    text-align: center;
  }
  .search-title{
    width: 400px;
    height:300px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-200px;
    margin-top:-150px;
  }
  .shop-search h3{
    font-size: 40px;
  }
  .shop-search .shop-description{
    font-size: 16px;
    margin-top: 20px;
    color:#999;
    
  }
  .shop-search .search-input{
    width:20vw;
    margin: 4vw auto;
    /* position:absolute;
    left:50%;
    top:50%;
    margin-left:-106.5px;
    margin-top:-20px; */
  }
  .el-icon-search{
    cursor: pointer;
  }
  .theme-activities{
    background: #000;
    /* padding-bottom:5vw; */
  }
  .theme-title{
    font-size: 60px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    opacity: 0.9;
    text-align: center;
    padding-top:2vw;
  }
  .theme-description{
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
    width: 20.8vw;
    margin:0 auto;
    text-align: center;
  }
  .theme-first{
    margin:2vw;
    margin-bottom:0;
    border-radius: 40px;
    overflow: hidden;
    height: 40vw;
    cursor: pointer;
  }
  .theme-others{
    padding:2vw;
    display: flex;
    height: 40vw;
  }
  .theme-second{
    width: 63vw;
    border-radius: 40px;
    overflow: hidden;
    margin-right: 2vw;
    cursor: pointer;
  }
  .theme-third{
    width: 31vw;
    border-radius: 40px;
    overflow: hidden;
    cursor: pointer;
  }
</style>
<style>
.el-form-item{
  margin: 10px 0;
}
.el-input__icon{
  font-size:18px;
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
</style>
