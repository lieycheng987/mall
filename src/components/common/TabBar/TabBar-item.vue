<template>
 <div class="tab-bar-item"> 
    <div @click="tabclick">
      <div v-if="!isEnter"><slot  name="item-icon"></slot></div>
      <div v-else><slot name="item-active-icon"></slot></div>
      <div :style="ActiveStyle"><slot name="item-text"></slot></div>
    </div>  
 </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,   
        Activecolor:{
        type:String,
        default:'rgb(255, 11, 11)'
    },
    data() {
        return {
          
          }
        }
    },
    computed:{
        isEnter(){
            return this.$route.path.indexOf(this.path)!==-1//判断当前路由是否活跃
        },
        ActiveStyle(){
            return this.isEnter?{color:this.Activecolor} : {}//判断是否是活跃路由改变字体颜色
        },
    },
    methods:{
        tabclick(){
            this.$router.push(this.path).catch(err=>{})//拿到路由实现点击跳跃
            console.log(111)
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style> 