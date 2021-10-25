<template>
  	<section class="container brand">
		<!-- banner -->
		<VBanner :banner="banner" :bannerType="'2'"></VBanner>
		<!-- 门店列表 -->
		<no-ssr>
		<div class="shopList">
			<div class="shop-title">门店列表</div>
			<el-form ref="form" label-width="80px">
				<el-row>
					<el-col :span="6">
						<el-form-item label="关键字:">
							<el-input v-model="form.name" clearable placeholder="请输入关键字"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="门店分类:">
						<el-select id='shopType' filterable clearable v-model="form.shopTypeId" placeholder="请选择" @change="shopChange">
							<el-option
								v-for="(item,index) in shopType"
								:key="index"
								:label="item.showName"
								:value="item.id">
							</el-option>
						</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item label-width="40px" label="">
							<el-button type="primary" @click="search">搜索</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>   
			<div class="list">
				<el-table
				:data="shopList"
				style="width: 100%">
				<el-table-column
					prop="showName"
					label="日期">
					<template slot-scope="scope">
						<div class="title">{{scope.row.showName}}</div>
						<div>地址：{{scope.row.address}}</div>
						<div>电话：{{scope.row.telephone}}</div>
					</template>
				</el-table-column>
				<!-- <el-table-column
					prop="address"
					label="姓名"
					width="180">
				</el-table-column> -->
				<el-table-column
					prop="picture.filePath"
					width="180"
					label="地址">
					<template slot-scope="scope">
						<img class="shop-img" v-if="scope.row.picture" :src="$store.state.aiuSRC + scope.row.picture.filePath" alt="">
					</template>
				</el-table-column>
				</el-table>
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:page-sizes="[10, 30, 50, 100]"
					:current-page.sync="currentPage1"
					:page-size="pageSize"
					layout="total, sizes, prev, pager, next"
					:total="total">
				</el-pagination>
			</div>
		</div>
		</no-ssr>
		<!-- 门店信息 -->
		<!-- <div class="shop">
			<div class="shop-title">门店信息</div>
			<div class="shop-list">
				<div :id="'shop'+index" v-for="(item,index) in shopList" :key="index">
					<img v-if="item.picture" class="shop-img" :src="$store.state.aiuSRC + item.picture.filePath" alt="">
					<div class="shop-main">
					<div class="shop-name">{{item.showName}}</div>
					<div class="shop-address">{{item.address}}</div>
					<div class="shop-time">营业时间：9:00--22:00</div>
					</div>
				</div>
			</div>
		</div> -->
      <no-ssr>
        <div class="input-card">
			<div class="shop-title">附近门店</div>
          <el-form ref="form" label-width="60px">
            <el-row>
              <el-col :span="5">
                <el-form-item label="省市区">
                  <el-select id='province' filterable v-model="province" placeholder="请选择" @change="provinceChange">
                    <el-option
                      v-for="(province,index) in provinceList"
                      :key="index"
                      :label="province.name"
                      :value="province.adcode">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="地级市">
                  <el-select id='city' filterable v-model="city" placeholder="请选择" @change="cityChange">
                    <el-option
                      v-for="(city,index) in cityList"
                      :key="index"
                      :label="city.name"
                      :value="city.adcode">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="区县">
                  <el-select id='district' filterable v-model="district" placeholder="请选择" @change="districtChange">
                    <el-option
                      v-for="(district,index) in districtList"
                      :key="index"
                      :label="district.name"
                      :value="district.adcode">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="街道">
                  <el-select id='street' filterable v-model="street" placeholder="请选择" @change="setCenter">
                    <el-option
                      v-for="(street,index) in streetList"
                      :key="index"
                      :label="street"
                      :value="street"
                      >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>        
        </div>
      

      </no-ssr> 
      <div class="map">
        <div id="container"></div>
        <div id="panel"></div>
      </div>
  </section>
</template>
<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import VBanner from '~/components/home/banner'
  export default {
	name: "ShopList",
    data(){
      return {
        experiencePlace:['包头','成都','南京','东莞'],
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
		currentPage1:1,
		total:0,
		pageSize:10,
		shopList:[],
		form:{
			name:'',
			shopTypeId:''
		}
      }
    },
    components: {
      VBanner,
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
        ['shop']
      );
      return {
        banner:banner.data.data.shop.pictures,
        // backgroundList:background.data.data.list
      } 
    },
    computed: {
			...mapState(['productList','shopType'])
		},
    methods: {
		async getShopList(num){
			if(num!==1){
				if(this.$route.query && this.$route.query.city !== ''){
					this.form.name = this.$route.query.city
				}
				if(this.$route.query && this.$route.query.id !== ''){
					this.form.shopTypeId = this.$route.query.id?Number(this.$route.query.id):''
				}
			}
			let result = await axios.post(`${this.$store.state.aiuAPI}/rest/api/shop/v1/query/list`,{
				pageNum:this.currentPage1,
				pageSize:this.pageSize,
				request:{
					shopTypeInfo:{
						id:this.form.shopTypeId
					},
					showName:this.form.name,
				}
			})
			this.currentPage1 = result.data.data.pageNum
			this.total = result.data.data.total
			this.pageSize = result.data.data.pageSize
			this.shopList = result.data.data.list
		},
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
		createMap () {
			var map = new window.AMap.Map('container', {
			resizeEnable: true, 
			});
			this.map = map
			AMap.service(["AMap.PlaceSearch"], () => {
			//构造地点查询类
				var placeSearch = new AMap.PlaceSearch({ 
					pageSize: 5, // 单页显示结果条数
					pageIndex: 1, // 页码
					city: "440300", // 兴趣点城市
					citylimit: false,  //是否强制限制在设置的城市内搜索
					map: this.map, // 展现结果的地图实例
					panel: "panel", // 结果列表将在此容器中进行展示。
					autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
				});
				//关键字查询
				placeSearch.search(this.input||'酷动|coodoo|Coodoo');
			});
			
		},
		search(){
			this.getShopList(1)
		},
		shopChange(val){
			this.form.shopTypeId = val
		},
		init(){
			var _this = this;
			AMap.plugin('AMap.DistrictSearch', function () {
				_this.districtSearch = new AMap.DistrictSearch({
					level: 'country',
					subdistrict: 1
				})
				_this.districtSearch1 = new AMap.DistrictSearch({
					level: 'province',
					subdistrict: 1
				})
				_this.districtSearch2 = new AMap.DistrictSearch({
					level: 'city',
					subdistrict: 1
				})
				_this.districtSearch3 = new AMap.DistrictSearch({
					level: 'district',
					subdistrict: 1
				})
			});
			this.districtSearch.search('中国', function (status, result) {
				var list = result.districtList[0]['districtList'];
				for (var i = 0; i < list.length; i++) {
					_this.provinceList.push(
						{
						name:list[i].name,
						adcode:list[i].adcode
						}
					);
				}
			})
				
		},
		provinceChange () {
			var _this = this;
			var provinceName = this.province;
			this.cityList = [];
			this.districtSearch1.search(provinceName, function (status, result) {
				console.log('provinceChange',result)
				var list = result.districtList[0]['districtList'];
				for (var i = 0; i < list.length; i++) {
					_this.cityList.push(
						{
						name:list[i].name,
						adcode:list[i].adcode
						}
					);
				}
			})
		},
		cityChange: function (e) {
			var _this = this;
			var cityName = this.city;
			this.districtList = [];
			this.districtSearch2.search(cityName, function (status, result) {
				console.log('cityChange',result)
				var list = result.districtList[0]['districtList'];
				for (var i = 0; i < list.length; i++) {
					_this.districtList.push(
						{
						name:list[i].name,
						adcode:list[i].adcode
						}
					);
				}
			})
		},
		districtChange: function(e) {
			var _this = this;
			var districtName = this.district;
			this.streetList = [];
			this.districtSearch3.search(districtName, (status, result) => {
				console.log('streetList',result)
				this.allStreet = result.districtList[0].districtList
				let obj = null
				result.districtList.forEach(item=>{
					if(item.adcode===this.district){
					obj = item
					}
					
				})
				var list = obj['districtList'];
				for (var i = 0; i < list.length; i++) {
					_this.streetList.push(list[i].name);
					console.log(list[i]);
				}
			})
		},
		setCenter() {
			console.log('city',this.city)
			let obj = null
			console.log('allStreet',this.allStreet)
			this.allStreet.forEach(item=>{
			if(item.name === this.street){
				obj = item
			}
			})
			this.map.setCenter(obj.center)

			AMap.service(["AMap.PlaceSearch"], () => {
			//构造地点查询类
				var placeSearch = new AMap.PlaceSearch({ 
					pageSize: 5, // 单页显示结果条数
					pageIndex: 1, // 页码
					city: this.city, // 兴趣点城市
					citylimit: false,  //是否强制限制在设置的城市内搜索
					map: this.map, // 展现结果的地图实例
					panel: "panel", // 结果列表将在此容器中进行展示。
					autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
				});
				//关键字查询
				placeSearch.search(this.input||'酷动|coodoo|Coodoo');
			});
		} ,
		handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
		}
    },
    mounted(){
      this.createMap()
      this.init()
	  this.getShopList()
    },
	watch: {
      $route: {
        handler: function(val, oldVal){
			this.getShopList()
        },
        // 深度观察监听
        deep: true
      }
    }
	
  }
</script>

<style scoped>
.input-card{
  margin: 0 10vw;
}
.map{
  /* width: 80rem;
  height: 40rem; */
  /* margin:0 4rem; */
  /* width: 100%; */
  height: 40rem;
  position: relative;
  margin:10px 10vw;
}
#panel {
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
	/* margin-right: 10vw; */
}
#container {
  width: 100%;
  height: 40rem;
}
  .container {
    width: 100%;
    /* padding-top:80px; */
    height: auto;
    background: #f6f6f6;
  }
  .shop-title{
    margin-top:2rem;
    margin-bottom:1.25rem;
    font-size: 28px;
    font-weight: 900;
    text-align: center;
  }
  .shop-list{
    display: flex;
    justify-content: space-around;
  }
  .shop-img{
    width: 20rem;
    height: 20rem;
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
  .shopList{
	  margin:10px 10vw;
  }
  .shop-img{
	  width:120px;
	  height: 80px;
  }
  .list .title{
	  font-size: 18px;
	  font-weight: 900;
  }
  .el-pagination{
	  /* text-align: right; */
  }
</style>
<style>
.brand .el-form-item{
  margin: 10px 0;
}
.brand .el-table__header tr{
	display: none;
}
.brand .el-table tr{
	background: #f6f6f6;
}
.brand .el-pagination .btn-next, .el-pagination .btn-prev{
	background: #f6f6f6;
}
.brand .el-pagination button:disabled{
	background: #f6f6f6;
}
.brand .el-pager li{
	background: #f6f6f6;
}
.brand .el-pagination .el-select .el-input{
	background: #f6f6f6;
}
.brand .el-pagination .el-input__inner{
	background: #f6f6f6;
	border:none;
}
.el-table__empty-block{
	background: #f6f6f6;
}
</style>
