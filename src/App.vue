<template>
  <div id="app" class="wrapper">
    <router-view/>
    <tab-solt/>
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
  // @import "./assets/css/base";
</style>
