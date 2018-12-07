<!--模板-->
<template>
  <div id="wrap">
    <div class="moreWonderful">
      <div class="moreWonderfulTitle">
        <span class="before"></span>
        <span class="text">更多精彩</span>
        <span class="after"></span>
      </div>
      <ul class="List">
        <!--套一层div为了遍历生成样式-->
        <div v-for="(item,index) in generalthings.yxWeek" :key="index">
          <li class="item">
            <a href="javascript:;" class="itemImg">
              <img v-lazy="item.scenePicUrl" alt="" :key="item.scenePicUrl">
            </a>
            <div class="itemContent">
              <span>{{item.title}}</span>
            </div>
          </li>
          <!--分隔符组件-->
          <Split />
        </div>
      </ul>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  // 引入分隔符组件
  import Split from '../../PublicSplit/Split/Split.vue'
  export default {
    computed:{
      ...mapState(['generalthings'])
    },
    components:{
      //注册分隔符组件
      Split,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    width 100%
    height 100%
    .moreWonderful
      width 100%
      /*background deeppink*/
      .moreWonderfulTitle
        width 100%
        height 2rem
        /*background yellow*/
        text-align center
        line-height 2rem
        display flex
        justify-content center
        .before
          width 4rem
          height 1px
          &::before // 利用伪元素设置一像素的边
            content ''
            display block
            width 4rem
            height 1px
            background #d9d9d9
            margin-top 0.9rem
        .text
          margin 0 0.5rem
          font-size 0.6rem
        .after
          width 4rem
          height 1px
          &::after // 利用伪元素设置一像素的边
            content ''
            display block
            width 4rem
            height 1px
            background #d9d9d9
            margin-top 0.9rem


      .List
        width 100%
        .item
          width 14rem
          height 10rem
          background white
          margin 0 auto
          padding 0 0.5rem 0.5rem 0.5rem
          .itemImg
            display block
            width 14rem
            height 8rem
            img
              width 100%
              height 100%
          .itemContent
            font-size 0.6rem
            line-height 1rem
            height 1rem
            width 14rem
            background white
            margin-top 0.8rem




</style>
