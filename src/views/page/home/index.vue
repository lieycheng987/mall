<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot="left"></div>
            <div slot="center">购物天地</div>
            <div slot="right"></div>
        </nav-bar>
        <home-swiper :banners="banners" class='swaper' ></home-swiper>
        <recommend-view :recommends='recommends' class="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="title" ></tab-control>
        <ul>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>         
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li><li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li><li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li><li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li><li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
            <li>列表1</li>
        </ul>
    </div>
</template>
<script>
 import{gethomemultidata,GetHomeGoods} from '@/api/home'
 import NavBar from '@/components/common/navbar/navbar'
 import HomeSwiper from '@/views/page/home/homeComps/HomeSwiper'
 import RecommendView from '@/views/page/home/homeComps/RecommendView'
 import FeatureView from '@/views/page/home/homeComps/FeatureView'
 import TabControl from '@/components/content/TabControl/TabControl'
export default {
    name:'home',
    data() {
        return {
            banners:'',
            recommends:'',
            title:['流行','新款','经典'],
            good:{
                'pop':{page:0,list:[]},
                'news':{page:0,list:[]},
                'sell':{page:0,list:[]},
            }
        }
    },
    components:{
         NavBar,
         HomeSwiper,
         RecommendView,
         FeatureView,
         TabControl
    },
    created() {
        this.Getresult()
    },
    methods:{
        Getresult(){
             gethomemultidata().then(res=>{
            this.banners=res.data.banner.list
            this.recommends=res.data.recommend.list
        })
        }
    }
}
</script>
<style scoped>
  .home {
    padding-top: 44px;
    height: 100vh; 
} 
 .home-nav {
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
  .tab-control {
      position: sticky;
      top: 44px;
      z-index: 9;
      /* 粘贴定位目前只有火狐可以用 */
}
</style>