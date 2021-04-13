<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key='index'
        class="tab-control-item" :class="{active:index===currentindex}"
        @click="changespan(index)">
            <span >{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    // props:[title],
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentindex:0,
        }
    },
    methods:{
        changespan(param){
            
            this.currentindex=param;
            console.log(this.currentindex)
        }
    }
}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.tab-control-item{
    flex:1; 
}
.tab-control-item span{
    padding: 3px;
}
.active{
    color:#ff5777;
}
.active span{
    border-bottom: 3px solid  #ff8198;;
}
</style>