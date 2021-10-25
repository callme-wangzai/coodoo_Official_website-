<template>
	<section class="container">
		<img v-for="(item,index) in list" v-show="index!==0" :key="index" :src="$store.state.aiuSRC+item.filePath" alt="">
	</section>
</template>


<script>
	import { mapState } from 'vuex'
	import axios from 'axios'
	export default {
		data (){
			return {
				list:[]
			}
		},
		head () {
		  return {
		    title:'京东到家',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`京东到家`},
		      {name:'description',hid:'description',content:`京东到家`}
		    ]
		  }
		},
		async asyncData({params,store}){
			// let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
			// 	['jingdong_shop']
			// );
		  return {
			// fileList:banner.data.data.jingdong_shop.pictures,
		  } 
		},
		components: {
		},
		mounted(){
			this.init()
		},
		methods:{
			init(){
				for(let item of this.subject){
					
					if(item.sortIndex == this.$route.query.subject ){
						console.log(item)
						this.list = item.pictures
					}
				}
				console.log('list',this.list)
			}
		},
		computed: {
			...mapState(['subject'])
		},
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
	/* margin-bottom: 20px; */
}
</style>