<template>
	<section class="container">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item style="font-weight:900;" >服务与支持</el-breadcrumb-item>
			<el-breadcrumb-item><a>维修支持</a></el-breadcrumb-item>
		</el-breadcrumb>
		<img @click="linkTo(item)" v-for="(item,index) in fileList" :key="index" :src="$store.state.aiuSRC+item.filePath" alt="">
	</section>
</template>


<script>
	import { mapState } from 'vuex'
	import axios from 'axios'
	export default {
		data (){
			return {
				shopTypeList:[]
			}
		},
		head () {
		  return {
		    title:'维修支持',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`维修支持`},
		      {name:'description',hid:'description',content:`维修支持`}
		    ]
		  }
		},
		async asyncData({params,store}){
			let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['maintenance_support']
			);
		  return {
			fileList:banner.data.data.maintenance_support.pictures,
		  } 
		},
		components: {
		},
		mounted(){
		},
		computed: {
			...mapState(['shopType'])
		},
		methods:{
			linkTo(){
				let obj = {}
				for(let item of this.shopType){
					if(item.showName.includes('维修')){
						obj = item
					}
				}
				this.$router.push({path:'/brand',query:{
					id:obj.id
				}})
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
	cursor: pointer;
	border:none;
	/* margin-bottom: 20px; */
}
.el-breadcrumb{
	margin: 20px 0;
}
</style>