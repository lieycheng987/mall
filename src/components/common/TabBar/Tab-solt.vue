<template>
<div>
    <tab-bar>
        <tab-bar-item path="/home" Activecolor='rgb(255, 11, 11)'>
        <img slot="item-icon" src="@/assets/img/tabbar/购物.png" alt="首页">
        <img slot="item-active-icon" src="@/assets/img/tabbar/购物active.png" alt="首页">
        <div slot="item-text">首页</div>
       </tab-bar-item>
    <tab-bar-item path="/category" Activecolor='red'>
        <img slot="item-icon" src="@/assets/img/tabbar/应用.png" alt="分类">
        <img slot="item-active-icon" src="@/assets/img/tabbar/应用active.png" alt="分类">
        <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" Activecolor='red'>
        <img slot="item-icon" src="@/assets/img/tabbar/购物袋.png" alt="购物车">
        <img slot="item-active-icon" src="@/assets/img/tabbar/购物袋acitve.png" alt="购物车">
        <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" Activecolor='red'>
        <img slot="item-icon" src="@/assets/img/tabbar/我的.png" alt="我的">
        <img slot="item-active-icon" src="@/assets/img/tabbar/我的active.png" alt="我的">
        <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>  
</div>   
</template>
<script>
import TabBar from '@/components/common/TabBar/TabBar'
import TabBarItem from '@/components/common/TabBar/TabBar-item'
export default {
  name:"tab-solt",
  components:{
      TabBar,
      TabBarItem,
      
  },
  data() {
      return {
      }
  },
}
</script>
<style scoped>
/* .tab-bar-item img{
    width: 90px;
    height: 90px;
}
.tab-bar-item div{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    margin-top: 3px;
    
} */
</style>
