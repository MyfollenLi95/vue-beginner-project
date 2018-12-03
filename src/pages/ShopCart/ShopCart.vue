<!--模板-->
<template>
  <div>
    <section id="shopCart">
      <header class="header">
        <img src="https://yanxuan.nosdn.127.net/a9b8dd282983a8e6394acbd425e1ad8d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        <div class="headerShopCart">购物车<span class="headerText">领券</span></div>
      </header>
      <section class="shopCartContent">
        <ul class="shopCartContentTop">
          <li><span><i class="iconfont icon-icon-test"></i>30天无忧退货</span></li>
          <li><span><i class="iconfont icon-icon-test"></i>48小时快速退款</span></li>
          <li><span><i class="iconfont icon-icon-test"></i>满88元免邮费</span></li>
        </ul>
        <div class="shopCartContentTopBottom">
          <div class="shopCartPic">
            <div class="shopCartImg"></div>
          </div>
          <div class="login">
            <div class="loginContent">去添加点什么吧~~</div>
            <div  class="goToLogin">登录</div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #shopCart
    width 100%
    height 100%
    .header
      width 100%
      height 4rem
      img
        width 100%
        height 2rem
      .headerShopCart
        width 100%
        height 2rem
        background white
        font-size 0.75rem
        text-align: center
        line-height 2rem
        position relative
        .headerText
          position absolute
          right 1.5rem
          top 0
          color #b4282d
    .shopCartContent
      position absolute
      top 4rem
      left 0
      bottom 2rem
      right 0
      background rgb(244,244,244)
      .shopCartContentTop
        font-size 0.6rem
        display flex
        justify-content space-around
        margin-top 0.5rem
        color #666
        .icon-icon-test
          display inline-block
          width 0.21rem
          height 0.21rem
          font-size 0.21rem
          color #d9d9d9
          margin-right 0.3rem


      .shopCartContentTopBottom
        width 100%
        height 50%
        .shopCartPic
          width 100%
          height 100%
          .shopCartImg
            height 90%
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
            background-repeat no-repeat
            background-position center 7.5rem
            background-size 20%
        .login
          width 100%
          text-align center
          font-size 0.7rem
          .loginContent
            width 100%
            margin-bottom 0.9rem
            color #999
          .goToLogin
            display inline-block
            width 10rem
            height 2rem
            line-height 2rem
            background #b4282d
            color #fff
            border-radius 0.2rem





</style>
