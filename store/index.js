import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	aiuAPI:'http://manager-api.coodoo.com.cn',//生产
	aiuSRC:'http://manager-file.coodoo.com.cn/',//生产
	// aiuAPI:'http://coodoo-api.aiyoukit.com',//预生产
	// aiuSRC:'http://coodoo-file.aiyoukit.com',//预生产
	// aiuAPI:'http://47.106.86.150:8092',//测试
	// aiuSRC:'http://47.106.86.150:8083',//测试
	headProdNav: {},
	headNewsNav: {},
	headJobNav: {},
	indexLinksData: null,
	// indexShowLinks: false
};

const mutations = {
		setProductList(state,data){
			state.productList = data
		},
		setShopList(state,data){
			state.shopList = data
		},
		setShopType(state,data){
			state.shopType = data
		},
		setSubject(state,bool){
			state.subject = bool
		},
		setSupportList(state,data){
			state.supportList = data
		}	
};

const getters = {
};

const actions = {
	async nuxtServerInit({commit,state,req}) {
		
			let productList = await axios.post(`${state.aiuAPI}/rest/api/product/v1/query/list`,{
				asc:true,
        		sortName:"sortForHome"
			})
			commit('setProductList',productList.data.data.list);

			let shopList = await axios.post(`${state.aiuAPI}/rest/api/shop/v1/query/list`,{
				request:{
					sortIndex:1
				}
			})
			commit('setShopList',shopList.data.data.list);

			let shopType = await axios.post(`${state.aiuAPI}/rest/api/shop-type/v1/query/list-all`,{
				asc:true,
        		sortName:"sortIndex"
			})
			commit('setShopType',shopType.data.data);

			let subject = await axios.post(`${state.aiuAPI}/rest/api/subject/v1/query/list-all`,{
				
			})
			commit('setSubject',subject.data.data);

			let support = await axios.post(`${state.aiuAPI}/rest/api/product-support/v1/query/list`,{
				request:{
					sortIndex:"0"
				}
			})
			commit('setSupportList',support.data.data.list);


	}
};

const store = () => new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store