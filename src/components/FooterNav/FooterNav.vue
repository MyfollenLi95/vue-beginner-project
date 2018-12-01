<!--模板-->
<template>
  <div class="footerContainer">
    <section class="footer">
      <ul class="footerList">
        <a href="javascript:;" :class="{footerColor: $route.path === '/home'}" @click="goto('/home')">
          <li class="home iconfont icon-home"></li>
          <span>首页</span>
        </a>
        <a href="javascript:;" :class="{footerColor: $route.path === '/generalthings'}" @click="goto('/generalthings')">
          <li class="generalThings iconfont icon-shiwu"></li>
          <span>识物</span>
        </a>
        <a href="javascript:;" :class="{footerColor: $route.path === '/classify'}" @click="goto('/classify')">
          <li class="classify iconfont icon-fenlei"></li>
          <span>分类</span>
        </a>
        <a href="javascript:;" :class="{footerColor: $route.path === '/shopcart'}" @click="goto('/shopcart')">
          <li class="shopCart iconfont icon-goShop"></li>
          <span>购物车</span>
        </a>
        <a href="javascript:;" :class="{footerColor: $route.path === '/profile'}" @click="goto('/profile')">
          <li class="profile iconfont icon-preson"></li>
          <span>个人</span>
        </a>
      </ul>
    </section>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  export default {
    methods:{
      goto(path){
        // 编程式路由导航
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../comment/stylus/mixins.styl"
  .footerContainer
    top-border-1px(#000)
    width 100%
    height 2rem
    position fixed
    left 0
    bottom 0
    .footer
      width 100%
      height 100%
      background #999
      .footerList
        width 100%
        height 100%
        display flex
        justify-content space-around
        box-sizing border-box
        a
          width 20%
          height 100%
          display flex
          flex-direction column
          align-items center
          &.footerColor
            color red
          li
            width 100%
            height 100%
            font-size: 1rem;
            margin-top 0.2rem
            text-align: center
          span
            font-size 0.2rem
            margin-bottom 0.2rem


</style>
