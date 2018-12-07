<!--模板-->
<template>
  <div id="wrap">
    <div class="yxContainer" v-if="generalthings.yxLook">
      <div class="yxTitleTop">严选LOOK</div>
      <div class="yxLOOk">
        <div class="yxLOOkImg">
          <img v-lazy="generalthings.yxLook.picUrl" alt=""
               :key="generalthings.yxLook.picUrl">
        </div>
        <div class="yxUser">
          <div class="yxUserImg">
            <img v-lazy="generalthings.yxLook.avatar" alt=""
                 :key="generalthings.yxLook.picUrl">
          </div>
          <div class="yxText">
            {{generalthings.yxLook.nickname}}
          </div>
        </div>
      </div>
      <div class="yxContent">
        <span>
          {{generalthings.yxLook.content}}
        </span>
      </div>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['generalthings'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    width 100%
    height 100%
    .yxContainer
      width 100%
      height 21.5rem
      .yxTitleTop
        width 100%
        height 2rem
        /*background yellow*/
        text-align center
        line-height 2rem
        font-size 0.7rem
      .yxLOOk
        width 100%
        height auto
        .yxLOOkImg
          width 100%
          height 15rem
          img
            width 100%
            height 100%
        .yxUser
          width 100%
          height 1.1rem
          line-height 1.1rem
          /*background deeppink*/
          margin-bottom 0.7rem
          .yxUserImg
            width 1.1rem
            height 1.1rem
            padding-left 0.5rem
            display inline-block
            vertical-align middle
            img
              width 100%
              height 100%
              border-radius 50%
          .yxText
            font-size 0.6rem
            display inline-block
            padding-left 0.8rem
      .yxContent
        font-size 0.6rem // 不写宽度当贝文字撑开时，可以运用padding内边距调大小
        color #7f7f7f
        padding 0.2rem 0.7rem 0.4rem

</style>
