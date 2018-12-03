<!--模板-->
<template>
  <div id="app">
      <!--路由界面显示-->
      <router-view/>
      <!--底部导航-->
      <FooterNav v-show="this.$route.meta.isShow"/>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  import FooterNav from './components/FooterNav/FooterNav.vue'
  export default {
    //注册组件
    components:{
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
</style>
