<template>
    <div class="goods">
        <good-list-item v-for="(item,id) in goods" :key="id" :goodsitem="item"></good-list-item>
    </div>
</template>
<script>
import GoodListItem from './goodlist-item'
export default {
    name:'Goods',
    props:['goods'],
    components:{
        GoodListItem
    },
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    /* 根据flex-wrap包裹默认不包裹需要wrap才能包裹可以根据一行宽度到底显示几个 */
    justify-content:space-around ;
    /* 均等分（中间距离为均等分） */
}
</style>