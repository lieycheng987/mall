<template>
  <div id="app">
     <tab-solt/>
    <router-view/>
  </div>
</template>
<script>
import TabSolt from '@/components/common/TabBar/Tab-solt'
export default {
  name:"App",
  components:{
    TabSolt
  },
}
</script>
<style lang='scss'>
 @import "assets/css/base.css";
</style>
