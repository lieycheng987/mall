<template>
    <div class="recommends">
        <div v-for="(item,id) in recommends" :key="id"  class="recommends-item"> 
            <a :href="item.link">
                <img :src="item.image" alt="无法显示">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:['recommends'],
    // prop:{
    //     recommends:{
    //         type:Array,
    //         default() {
    //             return[];
    //         }
    //     }
    // },
}
</script>
<style scoped>
.recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;  
    /* 内边距 */
    border-bottom: 10px solid #eee;
    /* 设置下边框的宽度，样式，颜色 solid是点状样式*/
}
.recommends-item{
    flex:1;
}
.recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>