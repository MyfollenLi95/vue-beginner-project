<!--模板-->
<template>
  <div id="wrap">
    <div class="topicWrap">
      <div class="topicTitle">
        十点一刻
      </div>
      <div class="topicContentWrap">
        <div class="topicContentWrapList" v-if="generalthings.tenfifteen">
          <div class="topicContent" v-for="(item,index) in generalthings.tenfifteen" :key="index">
            <div class="topicContentTitle">
              <span>-</span>
              <span>今日话题</span>
              <span>-</span>
            </div>
            <div class="sunny">{{item.title}}</div>
            <div class="drinks">{{item.desc}}</div>
            <div class="personal">{{item.participantNum}}人参与话题</div>
          </div>

        <div class="topicContent">
          <div class="sunny active">查看更多内容></div>
        </div>
          <!--<div class="topicContent">
            <div class="topicContentTitle">
              <span>-</span>
              <span>今日话题</span>
              <span>-</span>
            </div>
            <div class="sunny">夏日饮品</div>
            <div class="drinks">嘿，夏天你想喝什么</div>
            <div class="personal">5人参与话题</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  // 引入 vuex
  import {mapState} from 'vuex'
  //引入 BScroll
  import BScroll from 'better-scroll'
  export default {
    mounted(){

    },
    computed:{
      ...mapState(['generalthings'])
    },
    watch:{
      //监视一下当前组件的数据是否获取到
      generalthings(){
        this.$nextTick(() => {
          new BScroll('.topicContentWrap',{
            scrollX:true,
            scrollY:false, // 见一个禁掉一个
            click: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    width 100%
    .topicWrap
      width 100%
      height 10rem
      margin-bottom 0.5rem
      /*background deeppink*/
      position relative
      .topicTitle
        width 100%
        height 2rem
        background white
        font-size 0.7rem
        line-height 2rem
        text-align center
      .topicContentWrap
        position absolute
        left 0rem
        right 0rem
        bottom 0rem
        top 2rem
        .topicContentWrapList
          position absolute
          white-space nowrap
          padding-left 0.5rem
          padding-right 0.5rem
          .topicContent
            display inline-block
            vertical-align middle
            width 13rem
            height 8rem
            background url("./images/backgroundImg.png")
            background-repeat no-repeat
            background-size 100% 100%
            text-align center
            margin-right 0.4rem
            .topicContentTitle
              margin-top 0.5rem
              font-size 0.55rem
              color #7f7f7f
            .sunny
              font-size 0.7rem
              font-weight bold
              margin-top 1.5rem
              &.active
                margin-top 3.5rem
                font-weight 1
                font-size 1rem
            .drinks
              font-size 0.7rem
              margin-top 0.8rem
            .personal
              font-size 0.55rem
              margin-top 1rem

</style>
