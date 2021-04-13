<template>
    <div class="goodlist-item">
        <img :src="goodsitem.show.img" alt="">
        <div class="goodlist-item-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"GoodListItem",
    props:{
        goodsitem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
}
</script>
<style scoped>
.goodlist-item{
    padding-bottom: 40px;
    width: 48%;
    position: relative;
}
.goodlist-item img{
    width: 100%;
    border-radius:5px;
    /* 添加圆角边框每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。如果省略左下角，右上角是相同的。如果省略右下角，左上角是相同的。如果省略右上角，左上角是相同的。 */
}
.goodlist-item-info{
    font-size: 12px;
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    overflow: hidden;
    /* 溢出隐藏 */
    text-align: center;
}
.goodlist-item-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文本溢出显示省略号 */
    white-space: nowrap;
    margin-bottom: 3px;
}
.goodlist-item-info .price{
    color:  #ff5777;
    margin-right: 20px;
}
.goodlist-item-info .collect{
    position: relative;
}
.goodlist-item-info ::before{
    /* :before 选择器在被选元素的内容前面插入内容 */
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>