<!--模板-->
<template>
  <!--插槽组件的头部-->
  <header class="header">
    <div class="title"></div>
    <div class="searchInput">
      <input type="text" placeholder="搜索商品共，19604款好物">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="login">
      <span class="loginText">登录</span>
    </div>
  </header>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .header
    position absolute
    left 0
    top 0
    z-index 100
    display flex
    width 100%
    height 2rem
    background white
    .title
      width 25%
      background url("./imges/wyyx.png") no-repeat
      background-size 3rem
      background-position center
      margin-top 0.3rem
    .searchInput
      width 50%
      height 100%
      position relative
      input
        width 100%
        height 50%
        font-size 0.5rem
        background #ccc
        margin-top 0.5rem
        padding 0.1rem 0.7rem
        text-align: center
        outline none
        border-radius 0.1rem
      .icon-sousuo
        position absolute
        left 0.5rem
        top 0.8rem
    .login
      width 25%
      height 100%
      line-height 2rem
      text-align: center
      margin-left 0.5rem

      .loginText
        border-radius 0.2rem
        border 1px solid red
        font-size 0.5rem
        padding 0.1rem
        color red


</style>
