import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview' //引入iview依赖
import 'iview/dist/styles/iview.css' //引入iview css 样式
import ElementUI from 'element-ui'
import './element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css' //(根据版本路径不同会有差异，按照自己版本路径)

Vue.config.productionTip = false
Vue.use(iView) //使用iview组件
Vue.use(ElementUI) //使用element-ui组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
