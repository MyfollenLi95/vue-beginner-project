<!--模板-->
<template>
  <!--goods(商品列表) navList 切换栏-->
  <section class="goodNavList">
    <div class="navListContainer">
      <ul class="navList">
        <li><a href="javascript:;" class="active">推荐</a></li>
        <li v-for="(cateItem,index) in homeData.cateList" :key="index">
          <a href="javascript:;">{{cateItem.name}}</a>
        </li>
      </ul>
    </div>
    <div class="navList-right-pull-down">
      <span></span>
    </div>
    <!--红色下边框-->
    <div class="navListSplit"></div>
  </section>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入滑屏效果
  import BScroll from 'better-scroll'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    //在计算属性中展开 homeData数据
    computed:{
      ...mapState(['homeData'])
    },
    mounted(){
      new BScroll('.navListContainer',{
        scrollX: true, // 水平滑动
        scrollY:false,// 禁止纵向滑屏
        click: true
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .goodNavList
    width 100%
    position absolute
    left 0
    top 0
    z-index 100
    background white
    .navList
      font-size 0
      white-space nowrap
      height 1.3rem
      width 12*2.7 rem
      li
        display inline-block
        width 2.7rem
        font-size .6rem
        text-align: center
        height 100%
        padding-top 0.5rem
        a
          display inline-block
          padding 0 .2rem
          height 1rem
          color #000
          &.active
            border-bottom 2px solid #b4282d
            color: #b4282d
            padding 0 0.3rem
    .navList-right-pull-down
      width 3rem
      position absolute
      right 0
      top 0.3rem
      background white
      height 1.3rem
      span
        width .9rem
        height .9rem
        display block
        margin 0 auto
        background-image url("../../../../static/img/pull-down.png")
        background-repeat no-repeat
        background-size .8rem .8rem
    /*下边框加不加都可以*/
    .navListSplit
      width 100%
      height .3rem
</style>
