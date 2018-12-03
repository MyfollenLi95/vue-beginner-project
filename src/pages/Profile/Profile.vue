<!--模板-->
<template>
  <div>
    <section id="register">
      <header class="header">
        <img src="https://yanxuan.nosdn.127.net/a9b8dd282983a8e6394acbd425e1ad8d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        <div class="headerShopCart">
          网易严选
          <span class="headerText iconfont icon-sousuo"></span>
          <span class="headerText iconfont icon-goShop" @click="$router.replace('/shopcart')"></span>
          <span class="headerText iconfont icon-home" @click="$router.replace('/home')"></span>
        </div>
      </header>
      <div class="registerWrap">
        <div class="registerContent">
          <div class="registerImg">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="registerMthods">
            <div class="registerPhone"><i class="iconfont icon-iconfontshouji"></i>手机号码登录</div>
            <div class="registerUser"><i class="iconfont icon-duanxin"></i>邮箱账号登录</div>
            <div class="fastRegister">手机号快捷注册></div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footerContent">
          <div><i class="iconfont icon-wechat"></i>微信</div>
          <div class="QQlogin"><i class="iconfont icon-QQ"></i>QQ</div>
          <div><i class="iconfont icon-weibo"></i>微博</div>
        </div>
      </footer>
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
  #register
    width 100%
    height 100%
    .header
      width 100%
      height 4rem
      img
        width 100%
        height 2.3rem
      .headerShopCart
        width 100%
        height 1.7rem
        background rgb(250,250,250)
        font-size 0.9rem
        text-align: center
        line-height 1.7rem
        font-family '楷体'
        font-weight 550
        position relative
        .headerText
          position absolute
          right 2rem
          top 0
          color rgb(127,127,127)
          font-size 1.1rem
          &.icon-goShop
            right 0.5rem
          &.icon-home
            left -12rem
    .registerWrap
      width 100%
      position absolute
      top 4rem
      bottom 0
      background #F2F5F4
      .registerContent
        width 100%
        height 15rem
        text-align: center
        .registerImg
          display inline-block
          width 100%
          height 2rem
          padding-top 3rem
          padding-bottom 3rem
          img
            height 100%
        .registerMthods
          width 100%
          color white
          font-size 0.7rem
          .registerPhone
            display inline-block
            width 14rem
            height 2rem
            line-height 2rem
            background #b4282d
            .icon-iconfontshouji
              display inline-block
              vertical-align middle
              font-size 1rem
              margin-right 0.3rem
          .registerUser
            display inline-block
            width 14rem
            height 2rem
            line-height 2rem
            background #b4282d
            margin 0.5rem 0
            .icon-duanxin
              display inline-block
              vertical-align middle
              font-size 1rem
              margin-right 0.3rem
          .fastRegister
            display inline-block
            width 14rem
            height 2rem
            line-height 2rem
            color #000

    .footer
      position absolute
      right 0
      left 0
      bottom 2rem
      .footerContent
        width 100%
        height 1rem
        text-align: center
        div
          display inline-block
          font-size 0.7rem
          color rgb(127,127,127)
          width 4rem
          height 1rem
          .iconfont
            font-size 0.8rem
            margin-right 0.2rem
          &.QQlogin
            border-left 1px solid rgb(204,206,205)
            border-right 1px solid rgb(204,206,205)

</style>
