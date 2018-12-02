<!--模板-->
<template>
  <div>
    <!--配件好物-->
    <div class="listGoods">
      <div class="listGoodsTitle">居家好物</div>
      <ul class="listGoodsAll">
        <li class="listGoodsItem">
          <div class="listGoodsItemImg">
            <img src="../../../../static/img/muban.png" alt="">
          </div>
          <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
          <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
          <div class="listGoodsItemPrice">￥209.25</div>
        </li>
        <li class="listGoodsItem">
          <div class="listGoodsItemImg">
            <img src="../../../../static/img/muban.png" alt="">
          </div>
          <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
          <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
          <div class="listGoodsItemPrice">￥209.25</div>
        </li>
        <li class="listGoodsItem">
          <div class="listGoodsItemImg">
            <img src="../../../../static/img/muban.png" alt="">
          </div>
          <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
          <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
          <div class="listGoodsItemPrice">￥209.25</div>
        </li>
        <li class="listGoodsItem">
          <div class="listGoodsItemImg">
            <img src="../../../../static/img/muban.png" alt="">
          </div>
          <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
          <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
          <div class="listGoodsItemPrice">￥209.25</div>
        </li>
      </ul>
    </div>
    <!--分离框-->
    <Split />
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 Split 组件
  import Split from '../../PublicSplit/Split/Split.vue'
  export default {
    components:{
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../../comment/stylus/mixins.styl"
  .listGoods
    width 100%
    /*height 20rem*/
    .listGoodsTitle
      width 100%
      height 2.5rem
      text-align: center
      line-height 2.5rem
      font-size 0.6rem
      background white
    .listGoodsAll
      width 100%
      margin-left 0.4rem
      .listGoodsItem
        width 47%
        height 12rem
        display inline-block
        .listGoodsItemImg
          width 100%
          height 8rem
          background rgb(244,244,244)
          img
            width 100%
        .listGoodsItemContent
          box-sizing border-box
          width 100%
          height 1rem
          background pink
          font-size 0.6rem
          padding 0.8rem 0.3rem
          line-height 0.3rem
          color #9f8a60
          background rgb(241,236,226)
        .listGoodsItemName
          font-size 0.6rem
          margin 0.4rem 0 0.1rem 0.3rem
        .listGoodsItemPrice
          margin-left 0.3rem
          color red
          font-size 0.7rem


</style>
