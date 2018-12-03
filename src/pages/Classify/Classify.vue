<!--模板-->
<template>
  <div>
    <header class="header">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索商品, 共9723款好物">
    </header>
    <!--左侧列表的导航-->
    <ShopListLeft />
    <!--右侧列表的导航-->
    <ShopListRight />
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 ShopListLeft 组件
  import ShopListLeft from '../../components/ClassifyChild/ShopListLeft/ShopListLeft.vue'
  import ShopListRight from '../../components/ClassifyChild/ShopListRight/ShopListRight.vue'
  export default {
    mounted(){
      //获取当前组件的数据信息
      this.$store.dispatch('getClassifyData',()=>{
        console.log('Classify数据请求成功~~')
      })
    },
    components:{
      //注册左侧列表导航组件
      ShopListLeft,
      //注册右侧列表导航组件
      ShopListRight
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .header
    width 100%
    height 2rem
    text-align center
    border-bottom 1px solid #000
    background #fff
    position absolute
    top 0
    left 0
    z-index 100
    input
      height 1.3rem
      font-size 0.6rem
      padding 0 3rem
      margin-top 0.3rem
      border-radius 0.2rem
      background #eeeeee
    .icon-sousuo
      position absolute
      top 0.6rem
      left 3.5rem

</style>
