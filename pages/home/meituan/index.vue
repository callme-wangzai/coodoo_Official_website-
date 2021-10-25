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
		    title:'美团',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`美团`},
		      {name:'description',hid:'description',content:`美团`}
		    ]
		  }
		},
		async asyncData({params,store}){
			let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['meituan_shop']
			);
		  return {
			fileList:banner.data.data.meituan_shop.pictures,
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