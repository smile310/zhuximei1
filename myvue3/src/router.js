import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import iView from './views/iView.vue'
import About1 from './views/About1.vue'
import About2 from './views/About2.vue'
import ElementUI from './views/ElementUI.vue'
import ProductListOne from './views/ProductListOne.vue'
import ProductListTwo from './views/ProductListTwo.vue'
import Helloworld from './views/Helloworld.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"/about1",
      name:"about1",
      component: About1
    },
    {
      path:"/about2",
      name:"about2",
      component: About2
    },
    {
      path:'/iview',
      name:'iview',
      component:iView
    },
    {
      path:'/elementui',
      name:'elementui',
      component:ElementUI
    },
    {
      path:'/ProductListOne',
      name:'ProductListOne',
      component:ProductListOne
    },
    {
      path:'/ProductListTwo',
      name:'ProductListTwo',
      component:ProductListTwo
    },
     {
      path:'/ProductListTwo/Helloworld',
      name:'Helloworld',
      component:Helloworld
    }
  ]
})
