<template>
	<section class="container">
        <img class="about-img" src="~/assets/images/index/about.jpeg" alt="">

		<div class="about-us">
			<div class="title">
				<div @click="liClick(1)" :class="`li ${current===1?'pointer':''}`"><span>关于酷动</span></div>
				<!-- <div @click="liClick(2)" :class="`li ${current===2?'pointer':''}`"><span>发展历程</span></div> -->
				<div @click="liClick(3)" :class="`li ${current===3?'pointer':''}`"><span>联系酷动</span></div>
				<div @click="liClick(4)" :class="`li ${current===4?'pointer':''}`"><span>商务合作</span></div>
				<div @click="liClick(5)" :class="`li ${current===5?'pointer':''}`"><span>加入我们</span></div>
				<div @click="liClick(2)" :class="`li ${current===2?'pointer':''}`"><span>隐私政策</span></div>
			</div>
			<div class="content">
				<div v-show="current===1">
					<div v-for="(banner,index) in about_main" :key="index">
						<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
					</div>
				</div>
				
				<div v-show="current===3">
					<div v-for="(banner,index) in about_contact" :key="index">
						<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
					</div>
				</div>
				<div v-show="current===4">
					<div v-for="(banner,index) in about_cooperation" :key="index">
						<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
					</div>
				</div>
				<div v-show="current===5">
					<div v-for="(banner,index) in about_joinUs" :key="index">
						<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
					</div>
				</div>

				<div v-show="current===2">
					<div v-for="(item,index) in privacy" :key="index" >
						<div v-html="item.content"></div>
					</div>
				</div>
			</div>
		</div>
			<!-- <img v-for="(item,index) in fileList" :key="index" :src="$store.state.aiuSRC+item.filePath" alt=""> -->
	</section>
</template>


<script>
	import axios from 'axios'
	export default {
		data (){
			return {
				current:1,
				about_main:[],
				privacy:[],
				about_contact:[],
				about_cooperation:[],
				about_joinUs:[],
				content:''
			}
		},
		head () {
		  return {
		    title:'关于我们',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`关于我们`},
		      {name:'description',hid:'description',content:`关于我们`}
		    ]
		  }
		},
		async asyncData({params,store}){
			
		  return {
		  } 
		},
		components: {
		},
		methods:{
			liClick(num){
				this.current = num
			},
			async init(){
				let banner1 = await axios.post(`${this.$store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['about_main']
				);
				this.about_main = banner1.data.data.about_main.pictures

				let banner2 = await axios.post(`${this.$store.state.aiuAPI}/rest/api/product-support/v1/query/list`,
				{
					"request" : {
						"supportName" : "隐私政策",
					}
				});
				console.log('banner2',banner2)
				this.privacy = banner2.data.data.list

				let banner3 = await axios.post(`${this.$store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
					['about_contact']
				);
				this.about_contact = banner3.data.data.about_contact.pictures

				let banner4 = await axios.post(`${this.$store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
					['about_cooperation']
				);
				this.about_cooperation = banner4.data.data.about_cooperation.pictures

				let banner5 = await axios.post(`${this.$store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
					['about_joinUs']
				);
				this.about_joinUs = banner5.data.data.about_joinUs.pictures
			}
		},
		mounted(){
			if(this.$route.query&&this.$route.query.tab){
				this.current = Number(this.$route.query.tab)
			}
			
			this.init()
		}
	}
</script>

<style scoped>
body{
	background: #000;
}
.container{
	background: #f6f6f6;
    /* height:100%; */
    min-height:calc(100vh - 27vw)
}
.container img{
	width:100%;
}
img{
	border:none;
	/* margin-bottom: 20px; */
}
.about-img{
	width: 100%;
	height: 30vw;
}
.about-us{
	padding: 2vw 10vw;
	display: flex;
}
.title{
	width: 10vw;
	/* margin-right: 5vw; */
}
.title .li{
	line-height: 20px;
    border-left: 2px solid transparent;
    padding-left: 20px;
    margin: 10px 0;
}
.title .li>span{
	cursor: pointer;
	color: #707473;
}
.title .li>span:hover{
	color: #44a8f2;
}
.pointer{
	border-left:2px solid #44a8f2!important;
}
.content{
	width: 70vw;
}
.content>div>div>img{
	/* width: 90%; */
}
</style>