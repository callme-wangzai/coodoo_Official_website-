<template>
	<section class="container">
		<img v-for="(item,index) in fileList" :key="index" :src="$store.state.aiuSRC+item.filePath" alt="">
	</section>
</template>


<script>
	import axios from 'axios'
	export default {
		data (){
			return {
			}
		},
		head () {
		  return {
		    title:'线上商城',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`线上商城`},
		      {name:'description',hid:'description',content:`线上商城`}
		    ]
		  }
		},
		async asyncData({params,store}){
			// let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
			// 	['jingdong_shop']
			// );
		  return {
			fileList:[]//banner.data.data.jingdong_shop.pictures,
		  } 
		},
		components: {
		},
		mounted(){
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
	/* margin-bottom: 20px; */
}
</style>