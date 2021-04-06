import Vue from "vue";
import VueRouter from "vue-router";


//注册
Vue.use(VueRouter)

let home =()=>import('views/home')
let category =()=>import('views/category')
let shopcart =()=>import('views/shopcart')
let profile =()=>import('views/profile')


let routes=[{
    path:"/",
    redirect:'/home'
    },{
      path:'/home',
      component:home
    },{
     path:'/category',
     component:category
    },{
     path:'/shopcart',
     component:shopcart
    },{
     path:'/profile',
     component:profile
    }]


let  vueRouter = new VueRouter({
  routes,
  mode:'history',
});


export default vueRouter
