<template>
    <div>
        <div>分类</div>
         <div>{{result}}</div>
    </div>
</template>
<script>
import {text1} from '../../api/index'
export default {
    name:'category',
    data() {
        return {
            result:'',
        }
    },
    mounted(){
        text1().then(res=>this.result=res)
        .catch(err=>console.log(err))
        //  text1.interceptors.request.use(config=>console.log(config),err=>console.log(err))
    }
}
</script>
<style scoped>

</style>