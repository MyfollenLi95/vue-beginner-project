<!--模板-->
<template>
  <div id="wrap">
    <div class="wrapList">
      <ul class="list">
        <li class="item" v-for="(item,index) in generalthings.column" :key="index">
          <div class="itemImg">
            <img v-lazy="item.picUrl" alt="">
            <span>{{item.articleCount}}</span>
          </div>
          <div class="itemText ellipsis">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 BScroll
  import BScroll from 'better-scroll'
  //引入 vuex
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['generalthings'])
    },
    mounted(){
      new BScroll('.wrapList',{
        scrollX:true,
        scrollY:false, // 见一个禁掉一个
        click: true
      })
    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../../comment/stylus/mixins.styl"
  #wrap
    width 100%
    height 5.5rem
    margin-bottom 0.3rem
    .wrapList
      height 3.6rem
      position relative
      .list
        height 100%
        position absolute
        left 0
        top 0
        padding 0.5rem 0.5rem
        white-space nowrap //父元素定位子元素行内块元素永不换行
        .item
          width 3.6rem
          display inline-block
          height 100%
          background yellow
          margin-right 0.5rem
          .itemImg
            width 100%
            height 100%
            position relative
            img
              width 100%
              height 100%
            span
              font-size 0.5rem
              position absolute
              right 0
              top 0.1rem
              color #fff
          .itemText
            line-height 1rem
            text-align center
            font-size 0.55rem
            padding 0.4rem 0



</style>
