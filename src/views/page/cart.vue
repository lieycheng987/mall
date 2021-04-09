<template>
    <div>
        <div>购物车</div>
        <div>{{result}}</div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    name:'cart',
    data() {
        return {
            result:'',
        }
    },
    // created(){
    //     axios({
    //         url:'http://152.136.185.210:7878/api/m5/category'
    //     }).then(res=>{
    //         this.result=res;
    //     })
    // }
}
</script>
<style scoped>

</style>