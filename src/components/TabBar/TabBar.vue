<template>
<div>
    <div id="tab-bar">
        <slot></slot>
    </div>
</div>
</template>
<script>
export default {
    name:'TabBar',
}
</script>
<style scoped>
body{
    padding: 0;
    margin: 0;
}
.title{
    color:rgb(247, 8, 8);
    position: relative;
    top: 100px;
}
#tab-bar{
    display: inline-flex;
    background-color:#ccc;
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100,.2);
}

</style>