
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
// }).then(
//   res=>{
//     console.log(res)
// })
// axios.all([axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method:'get'
// }),
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   },
//   method:'get'
// })
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))