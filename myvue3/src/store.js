import Vue from 'vue'
import Vuex from 'vuex'
// Vuex是一个专门为Vue.js应用程序开发的状态管理模式, 
// 它采用集中式存储管理所有组件的公共状态, 
// 并以相应的规则保证状态以一种可预测的方式发生变化.
Vue.use(Vuex)
// vuex 核心概念四个：state,getters,actions,mutations
export default new Vuex.Store({
  state: {
  	products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations: {
  	minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    },
    addPrice:(state,payadd)=>{
    	let addPrice = state.products.forEach( product => {
	        product.price += payadd
    	})
    }
  },
  	// actions 类似于 mutations，不同在于：
	// actions提交的是mutations而不是直接变更状态
	// actions中可以包含异步操作, mutations中绝对不允许出现异步
	// actions中的回调函数的第一个参数是context, 是一个与store实例具有相同属性和方法的对象
  actions: {
  	minusPriceAsync( context, payload ) {
  		console.log(context)
      setTimeout( () => {
      	context.state.products.forEach( product => {
	        if(product.name=="鼠标"){
	        	product.price+=10;
	        	console.log(product);
	        	// context.commit( 'minusPrice', payload );
	        }
    	})
      }, 1000)
    },
    addPriceAsync( context, payload ) {
      setTimeout( () => {
        context.commit( 'addPrice', payload ); //context提交
      }, 1000)
    },
    // commit--指的就是mutations中的突变  
    // {}括号中可有state,commit,getters,
    // rootGetters,rootState,dispatch
    addPriceAsync1({commit}){
    	setTimeout( () => {
        	commit('addPrice',6);
      	}, 500)
    }
  }
})
