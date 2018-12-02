<!--模板-->
<template>
  <div>
    <!--居家好物-->
    <div class="listGoods" v-for="(cateItem,index) in homeData.cateList" :key="index">
      <div class="listGoodsTitle">{{cateItem.name}}好物</div>
      <ul class="listGoodsAll">
        <li class="listGoodsItem" v-for="(item,index) in cateItem.itemList" :key="index">
          <div class="listGoodsItemImg">
            <img :src="item.listPicUrl" alt="">
          </div>
          <div class="listGoodsItemContent">{{item.simpleDesc}}</div>
          <div class="listGoodsItemName ellipsis">{{item.name}}</div>
          <div class="listGoodsItemPrice">￥{{item.retailPrice}}</div>
        </li>
        <li class="listGoodsItem lastListGoodsItem">
          <div class="listGoodsItemImg">
            <span>更多电器好物</span>
            <i class="iconfont icon-tiaozhuan"></i>
          </div>
          <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
          <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
          <div class="listGoodsItemPrice">￥209.25</div>
        </li>
      </ul>
      <!--分离框-->
      <Split />
    </div>


  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 Split 组件
  import Split from '../../PublicSplit/Split/Split.vue'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homeData']),

    },
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
      position relative
      .listGoodsItem
        width 47%
        height 12rem
        display inline-block
        .listGoodsItemImg
          width 100%
          height 8rem
          background rgb(244,244,244)
          line-height 8rem
          text-align: center
          font-size 0.7rem
          color #000
          position relative
          .icon-tiaozhuan
            font-size 2rem
            color rgb(127,127,127)
            position absolute
            right 2.7rem
            top 2rem
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
          &.lastListGoodsItemContent
            background #f4f4f4
        .listGoodsItemName
          font-size 0.6rem
          margin 0.4rem 0 0.1rem 0.3rem
        .listGoodsItemPrice
          margin-left 0.3rem
          color red
          font-size 0.7rem


</style>
