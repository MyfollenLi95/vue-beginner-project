<!--模板-->
<template>
  <div>
    <!--使用插槽传入数据因为每一个头部信息不一样-->
    <ToHeader/>

    <section class="wrap">
      <!--goods(商品列表) navList 切换栏-->
      <section class="goodNavList">
          <div class="navListContainer">
            <ul class="navList">
              <li><a href="javascript:;" class="active">推荐</a></li>
              <li><a href="javascript:;">家居</a></li>
              <li><a href="javascript:;">鞋包配饰</a></li>
              <li><a href="javascript:;">服装</a></li>
              <li><a href="javascript:;">电器</a></li>
              <li><a href="javascript:;">洗护</a></li>
              <li><a href="javascript:;">饮食</a></li>
              <li><a href="javascript:;">餐具</a></li>
              <li><a href="javascript:;">婴童</a></li>
              <li><a href="javascript:;">文体</a></li>
              <li><a href="javascript:;">特色区</a></li>
              <li><a href="javascript:;"></a></li>
            </ul>
          </div>
          <div class="navList-right-pull-down">
            <span></span>
          </div>
          <!--红色下边框-->
          <div class="navListSplit"></div>
        </section>

      <!--轮播-->
      <section class="swiperLoop">
        <div class="swiperLoopList">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><a href="javascript:;"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
              <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="wy-slogan-info">
            <ul>
              <li>
                <a href="javascript:;">
                  <i></i>
                  <span>网易自营品牌</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i></i>
                  <span>30天无忧退货</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i></i>
                  <span>48小时快速退款</span>
                </a>
              </li>
            </ul>
          </div>
          <!--分离框-->
          <Split />
          <!--商品制造商提供-->
          <div class="goodsTitle">
            <a>商品制造商直供</a>
            <i class="iconfont icon-tiaozhuan"></i>
          </div>
          <ul class="goodsList">
            <li class="goodsListLeftT">
              <div class="goodsDescribe">
                <span>无限回购榜单</span>
                <span class="smallFont">好物买了还想买</span>
              </div>
              <div class="goodsImg">
                <img src="http://yanxuan.nosdn.127.net/213c5adcd1181983207cef460f1115b6.png" alt="拖鞋">
                <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="按摩">
              </div>
            </li>
            <li class="goodsListRightT">
              <div class="goodsDescribe">
                <span>无限回购榜单</span>
                <span class="smallFont">好物买了还想买</span>
              </div>
              <div class="goodsImg">
                <img src="http://yanxuan.nosdn.127.net/213c5adcd1181983207cef460f1115b6.png" alt="拖鞋">
                <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="按摩">
              </div>
            </li>
            <li class="goodsListLeftB">
              <div class="goodsDescribe">
                <span>无限回购榜单</span>
                <span class="smallFont">好物买了还想买</span>
              </div>
              <div class="goodsImg">
                <img src="http://yanxuan.nosdn.127.net/213c5adcd1181983207cef460f1115b6.png" alt="拖鞋">
                <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="按摩">
              </div>
            </li>
            <li class="goodsListRightB">
              <div class="goodsDescribe">
                <span>无限回购榜单</span>
                <span class="smallFont">好物买了还想买</span>
              </div>
              <div class="goodsImg">
                <img src="http://yanxuan.nosdn.127.net/213c5adcd1181983207cef460f1115b6.png" alt="拖鞋">
                <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="按摩">
              </div>
            </li>
          </ul>
          <!--分离框-->
          <Split />
          <!--新品首发-->
          <div class="firstNewShop">
            <span class="arrows"></span>
            <span class="newFirst">新品首发</span>
            <div class="lookAll">
              <span>查看全部<i class="tempNext">></i></span>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //引入滑屏效果
  import BScroll from 'better-scroll'
  //引入 Swiper
  import Swiper from 'swiper'
  //子组件需要引入父组件的时候可以引入组件
  import ToHeader from '../../components/ToHeader/ToHeader.vue'
  //引入分离框组件
  import Split from '../../components/Split/Split.vue'
  export default {
    mounted(){
      new BScroll('.navListContainer',{
        scrollX: true, // 水平滑动
        click: true
      });
      //轮播
      const mySwiper =new Swiper('.swiper-container', {
       loop:true,// 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        },
      });
      //纵向滑屏
      new BScroll('.swiperLoop',{
        scrollY:true,
        click: true
      });
    },
    components:{
      //注册头部组件
      ToHeader,
      //注册分离框组件
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "swiper/dist/css/swiper.min.css"
  @import "../../comment/stylus/mixins.styl"
  .wrap
    position absolute
    top 2rem
    bottom 2rem
    left 0
    right 0
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
          background-image url("../../../static/img/pull-down.png")
          background-repeat no-repeat
          background-size .8rem .8rem
      /*下边框加不加都可以*/
      .navListSplit
        width 100%
        height .3rem
    .swiperLoop
      position absolute
      top 0rem
      bottom 0rem
      width 100%
      margin-top 1.6rem
      .wy-slogan-info
        width 100%
        height 1.5rem
        font-size 0rem
        /*line-height 1.5rem*/
        ul
          width 100%
          height 100%
          li
            float left
            width 33%
            text-align: center
            height 100%
            a
              display inline-block
              vert-align middle
              display flex
              align-items center
              justify-content center
              height 100%
              i
                font-size 0
                vert-align middle
                width .7rem
                height  .7rem
                display inline-block
                background-image url("../../../static/img/wy-slogan.png")
                background-repeat no-repeat
                background-size 100% 100%
              span
                display inline-block
                height  .7rem
                vert-align middle
                font-size .5rem
                line-height .7rem

      .goodsTitle
        width 100%
        height 2rem
        /*background greenyellow*/
        text-align: center
        line-height 2rem
        a
          color #999
          font-size 0.8rem
        .icon-tiaozhuan
          font-size 0.7rem
          color #999
      .goodsList
        width 100%
        clearFix() // 为了可以使用纵向滑屏效果
        margin-bottom 0.2rem
        box-sizing border-box
        li
          width 7.6rem
          height 6rem
          float left
          background rgb(245,245,245)
          .goodsDescribe
            display flex
            flex-direction column
            font-size 0.7rem
            margin 0.5rem 0 0 0.8rem
            .smallFont
              font-size 0.5rem
              margin-top 0.2rem
              color rgb(127,127,127)
          .goodsImg
            width 3rem
            height 3rem
            display flex
            margin 0.5rem 1rem 1rem 1rem
            img
              width 100%
          &.goodsListLeftT
            margin 0 0.2rem 0.2rem 0.3rem
          &.goodsListRightT
            margin 0 0.2rem 0.2rem 0
          &.goodsListLeftB
            margin 0 0.2rem 0 0.3rem
          &.goodsListRightB
            margin 0 0.2rem 0 0
      .firstNewShop
        width 100%
        height 5rem
        text-align: center
        background lightyellow
        position relative
        .newFirst
          font-size 0.8rem
          color rgb(127,127,127)
          margin-top 0.5rem
        .arrows
          position absolute
          left 60%
          bottom  0
          border-bottom 0.5rem solid red
          border-left 0.5rem solid transparent
          border-right 0.5rem solid transparent
        .lookAll
          width 5rem
          height 1.5rem
          background rgb(216,229,241)
          line-height 1.5rem
          position absolute
          left 50%
          top 50%
          margin-left -2.5rem



</style>
