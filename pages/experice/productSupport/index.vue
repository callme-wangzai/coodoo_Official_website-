<template>
	<section class="container">
        <div class="vhtml" v-html="content"></div>
			<!-- <img v-for="(item,index) in fileList" :key="index" :src="$store.state.aiuSRC+item.filePath" alt=""> -->
	</section>
</template>


<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default {
		data (){
			return {
				content : ''
			}
		},
		head () {
		  return {
		    title:'产品支持',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`产品支持`},
		      {name:'description',hid:'description',content:`产品支持`}
		    ]
		  }
		},
		async asyncData({params,store}){
			// let fileList = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
			// 	['about_us']
			// );
		  return {
			fileList:[]//fileList.data.data.about_us.pictures
		  } 
		},
		components: {
		},
		computed: {
			...mapState(['supportList'])
		},
		methods:{
			initData(){
				let index = this.$route.query.id
				console.log('index',index)
				let item = this.supportList.find(item=>item.id == index)
				console.log('item',item)
				this.content = item.content
			}
		},
		mounted(){
			this.initData()
		},
		watch: {
			$route: {
				handler: function(val, oldVal){
					this.initData()
				},
				// 深度观察监听
				deep: true
			}
		}
	}
</script>

<style scoped>
body{
	background: #000;
}
.container{
	padding:0 30px;
	background: #f6f6f6;
    /* height:100%; */
    min-height:calc(100vh - 27vw)
}
.container img{
	width:100%;
}
img{
	border:none;
	margin-bottom: 20px;
}
.vhtml{
	min-height: 100px;
}
</style>