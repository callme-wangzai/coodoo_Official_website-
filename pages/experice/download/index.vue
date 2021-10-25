<template>
	<section class="container">
		<div class="title">扫码立即下载【酷动数码】APP</div>
		<img src="~/assets/images/index/appStore.png" alt="">
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
		    title:'酷动APP下载',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`酷动APP下载`},
		      {name:'description',hid:'description',content:`酷动APP下载`}
		    ]
		  }
		},
		async asyncData({params,store}){
		},
		components: {
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
    min-height:calc(100vh - 27vw);
	text-align: center;
}
.container img{
	width:20vw;
	margin:0 auto;
}
.title{
	margin-top:5vw;
	margin-bottom:1vw;
	font-size: 16px;
	color:#395f8e;
	/* font-weight: 900; */
}
img{
	border:none;
	margin-bottom: 20px;
}
</style>