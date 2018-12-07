<!--模板-->
<template>
  <div id="wrap">
    <header class="header">
      <!--slot插槽是将不同的样式才分出来相同的留下-->
      <slot name="phone"></slot>
      <slot name="email"></slot>
      <!--公共的部分-->
      <span>Please Login 网易严选</span>
      <span class="iconfont icon-huitui1" @click="$router.back()"></span>
    </header>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  export default {  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    height 100%
    width 100%
    .header
      width 100%
      height 2rem
      background #02a774
      text-align center
      line-height 2rem
      position relative
      span
        display inline-block
        vertical-align middle
      .icon-huitui1
        font-size 1rem
        position absolute
        left 0.5rem
        top 0.1rem
        color #333
</style>
