import Vue from 'vue'
import VueRouter from 'vue-router'
import TabBar from '@/components/TabBar/TabBar'
Vue.use(VueRouter)
const Home=()=>import("../views/page/home.vue")
const Cart=()=>import("../views/page/cart.vue")
const Category=()=>import("../views/page/category.vue")
const Profile=()=>import("../views/page/profile.vue")
const routes = [
 {
   path:'/',
   redirect: '/index',
 },
 {
   path:'/index',
   name:'index',
   name:'tab-bar',
   component:TabBar,
   meta:{
     title:"购物网站"
   },
  },
  {
       path:'/home',
       name:'home',
       component:Home,
       meta:{
         title:"首页",
       }
     },
     {
       path:"/category",
       name:'category',
       component:Category,
       meta:{
         title:"分类",
       }
     },
     {
       path:"/cart",
       name:'cart',
       component:Cart,
       meta:{
         title:"购物车"
       }
     },
     {
      path:"/profile",
      name:'profile',
      component:Profile,
      meta:{
        title:"我的"
      }
     }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active',
})
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next()
})
export default router
