<!--模板-->
<template>
  <div class="subjectSelete">
    <div class="subjectSeleteTitle">专题精选<i class="iconfont icon-tiaozhuan"></i></div>
    <!--横向滑屏部分-->
    <div class="subjectSeleteContainer">
      <ul class="subjectSeleteList">
        <li class="subjectSeleteItem" v-for="(topicListItem,index) in homeData.topicList" :key="index">
          <div class="subjectSeleteItemImg">
            <img v-lazy="topicListItem.itemPicUrl" alt="">
          </div>
          <div class="subjectSeleteItemContent">
            <h4 class="title">{{topicListItem.title}}</h4>
            <span class="price">{{topicListItem.priceInfo}}元起</span>
          </div>
          <div class="subjectSeleteItemDescribe">{{topicListItem.subtitle}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入滑屏效果
  import BScroll from 'better-scroll'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    mounted(){
      //桩体精选商品横向滑屏
      new BScroll('.subjectSeleteContainer',{
        scrollX: true, // 水平滑动
        scrollY:false,// 禁止纵向滑屏
        click: true
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../../comment/stylus/mixins.styl"
  .subjectSelete
    width 100%
    /*height 25rem*/ // 一会修改过来为了让图片显示加的高度
    .subjectSeleteTitle
      width 100%
      height 2rem
      text-align: center
      line-height 2rem
      font-size 0.7rem
      /*background pink*/
      color #000
      position relative
      .icon-tiaozhuan
        position absolute
        right 37%
        top -10%
        font-size 0.4rem
        color rgb(127,127,127)
    .subjectSeleteContainer
      width 100%
      .subjectSeleteList
        width 3*12.3rem
        height 10rem
        padding-left 0.4rem
        .subjectSeleteItem
          float left
          width 12rem
          height 10rem
          /*background deeppink*/
          margin-right 0.3rem
          .subjectSeleteItemImg
            width 12rem
            height 7rem
            img
              width 100%
              height 100%
              border-radius .2rem
          .subjectSeleteItemContent
            width 100%
            height 1rem
            line-height 1rem
            margin 0.2rem 0
            clearFix()
            .title
              font-size 0.7rem
              color #000
              float left
            .price
              float right
              font-size 0.6rem
              color red
          .subjectSeleteItemDescribe
            font-size 0.55rem
            color rgb(127,127,127)
            padding-bottom 0.5rem
</style>
