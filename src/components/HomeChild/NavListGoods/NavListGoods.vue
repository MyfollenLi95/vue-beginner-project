<!--模板-->
<template>
  <!--goods(商品列表) navList 切换栏-->
  <section class="goodNavList">
    <div class="navListContainer">
      <ul class="navList">
        <li><a href="javascript:;" :class="{active:currentIndex === 0}" @click="nextShop(0)">推荐</a></li>
        <li v-for="(cateItem,index) in homeData.cateList" :key="index"
             @click="nextShop(index+1)">
          <a href="javascript:;" :class="{active:currentIndex === index+1}">{{cateItem.name}}</a>
        </li>
      </ul>
    </div>
    <div class="navList-right-pull-down" @click="isShow=true">
      <span></span>
    </div>
    <!--遮罩层-->
    <div class="mask" ref="mask" v-show="isShow">
      <!--列表全部-->
      <div class="maskText">全部频道</div>
      <ul class="maskList">
        <li class="maskItem"><a href="javascript:;" class="active">推荐</a></li>
        <li class="maskItem"><a href="javascript:;">居家</a></li>
        <li class="maskItem"><a href="javascript:;">配件</a></li>
        <li class="maskItem"><a href="javascript:;">服装</a></li>
        <li class="maskItem"><a href="javascript:;">电器</a></li>
        <li class="maskItem"><a href="javascript:;">洗护</a></li>
        <li class="maskItem"><a href="javascript:;">饮食</a></li>
        <li class="maskItem"><a href="javascript:;">餐厨</a></li>
        <li class="maskItem"><a href="javascript:;">婴童</a></li>
        <li class="maskItem"><a href="javascript:;">文体</a></li>
      </ul>
      <!--关闭遮罩层-->
      <div class="closeMask" @click="isShow=false">x</div>
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
    data(){
      return{
        currentIndex:0, // 初始化当前 index 的值默认为0
        isShow:false // 初始化遮罩层是否显示
      }
    },
    methods:{
      // 传入的 index 是当前遍历出来的索引值
      nextShop(index){
        this.currentIndex = index
      },
    },
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
    /*遮罩层*/
    .mask
      position absolute
      left 0
      top 0
      width 100%
      height 8rem
      background #fff
      .maskText
        font-size 0.6rem
        position absolute
        left 0.5rem
        top 0.5rem
      .maskList
        width 100%
        margin-top 1.5rem
        li
          width 2.5rem
          height 0.5rem
          text-align center
          display inline-block
          font-size 0.7rem
          padding 0.6rem
          background #FAFAFA
          margin 0.1rem 0
          border-radius 0.2rem
          a
            color #000
            &.active
              color red
      .closeMask
        width 1.2rem
        height 1.2rem
        text-align center
        line-height 1.2rem
        background white
        color #000
        position absolute
        right 0
        top 0
    /*下边框加不加都可以*/
    .navListSplit
      width 100%
      height .3rem
</style>
