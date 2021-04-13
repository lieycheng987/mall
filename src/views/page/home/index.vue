<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav">
            <div slot="left"></div>
            <div slot="center">购物天地</div>
            <div slot="right"></div>
        </nav-bar>
        <home-swiper :banners="banners" class='swaper' ></home-swiper>
        <recommend-view :recommends='recommends' class="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="title" 
        @tabclick="tabclick">
        </tab-control>
        <good-list :goods="ShowGoods"></good-list>
    </div>
</template>
<script>
 import{gethomemultidata,GetHomeGoods} from '@/api/home'
 import NavBar from '@/components/common/navbar/navbar'
 import HomeSwiper from '@/views/page/home/homeComps/HomeSwiper'
 import RecommendView from '@/views/page/home/homeComps/RecommendView'
 import FeatureView from '@/views/page/home/homeComps/FeatureView'
 import TabControl from '@/components/content/TabControl/TabControl'
 import GoodList from '@/components/content/goods/goodlist'
export default {
    name:'home',
    data() {
        return {
            banners:'',
            recommends:'',
            title:['流行','新款','经典'],
            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
        },
        currenttype:'pop',
        }
    },
    components:{
         NavBar,
         HomeSwiper,
         RecommendView,
         FeatureView,
         TabControl,
         GoodList,
    },
    computed:{
        ShowGoods(){
            return this.goods[this.currenttype].list
        }
    },
    created() {
        this.Getresult()
        this.gethomegoods('pop')
        this.gethomegoods('new')
        this.gethomegoods('sell')//将create的方法放入methods中封装然后直接调用即可
    },
    methods:{
        // 网络请求相关
        Getresult(){
             gethomemultidata().then(res=>{
            this.banners=res.data.banner.list
            this.recommends=res.data.recommend.list
        })
        },
        gethomegoods(type){
            const page=this.goods[type].page+1
            GetHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list) //（...）数组特殊语法可以吧一个数组中的数一个个push到另一个数组
                this.goods[type].page+=1//页码加一
                console.log(res)
            })
        },
        // 事件监听
        tabclick(index){
            if(index==0)
            this.currenttype='pop'
            if(index==1)
            this.currenttype='new'
            if(index==2)
            this.currenttype='sell'
        }
    }
}
</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh; 
     /* position: relative; */
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
      top: 100px;
      z-index: 9;
      /* 粘贴定位目前只有火狐可以用 */
}
</style>