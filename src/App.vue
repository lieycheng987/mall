<template>
  <div id="app">
     <tab-solt></tab-solt>
    <router-view/>
  </div>
</template>
<script>
import TabSolt from '@/components/TabBar/Tab-solt'
export default {
  name:"App",
  components:{
    TabSolt
  },
}
</script>
<style lang="scss">
</style>
