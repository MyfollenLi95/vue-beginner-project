<!--模板-->
<template>
  <div>
    <!--使用插槽传入数据因为每一个头部信息不一样-->
    <ToHeader/>
    <!--主界面内容-->
    <section class="wrap" ref="sectionTop">
      <!--goods(商品列表) navList 切换栏-->
      <NavListGoods />
      <!--整体滑动-->
      <section class="ScrollLoopContainer">
        <div class="ScrollLoopList">
          <!--轮播组件-->
          <SwiperLoop />
          <div class="wy-slogan-info">
            <ul>
              <li v-for="(policyDescItem,index) in homeData.policyDescList" :key="index">
                <a href="javascript:;">
                  <i :style="{backgroundImage:`url(${policyDescItem.icon})`}"></i>
                  <span>{{policyDescItem.desc}}</span>
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
            <li :class="goodsListArr[index]" v-if="index<4" v-for="(tagItem,index) in homeData.tagList" :key="index">
              <div class="goodsDescribe">
                <span>{{tagItem.name}}</span>
                <span class="smallFont">{{tagItem.floorPrice}}元起</span>
              </div>
              <div class="goodsImg">
                <img v-lazy="tagItem.picUrl" alt="拖鞋">
              </div>
            </li>
          </ul>
          <!--分离框-->
          <Split />
          <!--新品首发-->
          <div class="firstNewShop">
            <span class="arrows"></span>
            <div  class="newFirst"><span>新品首发</span></div>
            <div class="lookAll">
              <span>查看全部<i class="tempNext">></i></span>
            </div>
          </div>
          <!--白色分离框-->
          <div class="SplitWhite"></div>
          <!--横向商品滑屏上面的-->
          <ShopsTop />
          <!--分离框-->
          <Split />
          <!--人气推荐，好物精选-->
          <div class="firstNewShop">
            <span class="arrows"></span>
            <div  class="newFirst"><span>人气推荐.好物精选</span></div>
            <div class="lookAll">
              <span>查看全部<i class="tempNext">></i></span>
            </div>
          </div>
          <!--白色分离框-->
          <div class="SplitWhite"></div>
          <!--横向商品滑屏下面的-->
          <ShopsBottom />
          <!--分离框-->
          <Split />
          <!--严选限购时间-->
          <div class="shopTime">
            <div class="shopTimeLeft">
              <div class="shopTimeLeftTitle">
                <span>严选限时购</span>
              </div>
              <!--需要动态的计算倒计时-->
              <div class="countDown">
                <span>01</span>:<span>36</span>:<span>45</span>
              </div>
              <div class="nextAction">
                <span>下一场</span>
                <span>22:00</span>
                <span>开始</span>
              </div>
            </div>
            <div class="shopTimeRight">
              <img src="../../../static/img/wyyxTime.png" alt="限时抢购">
              <div class="shopTimeRightFoodPrice">
                <span>￥15</span>
                <span>￥25</span>
              </div>
            </div>
          </div>
          <!--分离框-->
          <Split />
          <!--图片墙-->
          <div class="wallImg">
            <img src="https://yanxuan.nosdn.127.net/5ac976683b6b5c51b2865dbc15bca10b.jpg" alt="">
          </div>
          <!--分离框-->
          <Split />
          <!--专题精选-->
          <SubjectSelete />
          <!--分离框-->
          <Split />
          <!--居家好物-->
          <ListGoods />
          <!--底部信息栏-->
          <div class="bottomMessage">
            <div class="bottomMessageBtn">
              <div class="bottomMessageBtnLeft">下载App</div>
              <div class="bottomMessageBtnRight">电脑版</div>
            </div>
            <div class="bottomMessageContent">
              <div class="bottomMessageCopy">网易公司版权所有 © 1997-2018</div>
              <div class="bottomMessageFood">食品经营许可证：JY13301080111719</div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <!--右边的按钮回到顶部-->
    <div class="gotoTop iconfont icon-huidaodingbu" @click="gotoTop"></div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //引入滑屏效果
  import BScroll from 'better-scroll'
  //引入 vuex
  import {mapState} from 'vuex'
  //子组件需要引入父组件的时候可以引入组件
  import ToHeader from '../../components/ToHeader/ToHeader.vue'
  //商品列表
  import NavListGoods from '../../components/HomeChild/NavListGoods/NavListGoods.vue'
  //引入轮播部分组件
  import SwiperLoop from '../../components/HomeChild/SwiperLoop/SwiperLoop.vue'
  //引入商品列表横向滑动组件上面的
  import ShopsTop from '../../components/HomeChild/ShopsTop/ShopsTop.vue'
  //引入商品列表横向滑动组件下面的
  import ShopsBottom from '../../components/HomeChild/ShopsBottom/ShopsBottom.vue'
  //引入分离框组件
  import Split from '../../components/PublicSplit/Split/Split.vue'
  //引入专题精选组件
  import SubjectSelete from '../../components/HomeChild/SubjectSelete/SubjectSelete.vue'
  //引入商品列表组件
  import ListGoods from '../../components/HomeChild/ListGoods/ListGoods.vue'

  export default {
    data(){
      return{
        //定义个数据保存 goodsList 类名
        goodsListArr:['goodsListLeftT','goodsListRightT','goodsListLeftB','goodsListRightB'],
      }
    },
    mounted(){
      //获取 home 数据信息 , 后面传一个回调函数等到数据到了之后执行
      this.$store.dispatch('getHomeData',() => {
        this.scrollLoop = new BScroll('.ScrollLoopContainer',{
          scrollY:true,
          scrollX:false,
          click: true
        });
        console.log('home 的数据已经来了~~~')
      });
    },
    methods:{
      gotoTop(){
        //获取 sectionTop 标签
        const section = this.$refs.sectionTop;
        this.scrollLoop.scrollToElement(section,500); // BScroll上面的方法回到那个元素
      }
    },
    //在计算属性中展开数据
    computed:{
      ...mapState(['homeData'])
    },
    components:{
      //注册头部组件
      ToHeader,
      //注册分离框组件
      Split,
      //注册轮播组件
      SwiperLoop,
      //注册商品列表导航组件
      NavListGoods,
      //注册商品列表横向哈东组件上面的
      ShopsTop,
      //注册商品列表横向哈东组件下面的
      ShopsBottom,
      //注册商家列表组件
      ListGoods,
      //注册专题精选组件
      SubjectSelete
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../comment/stylus/mixins.styl"
  .wrap
    position absolute
    top 2rem
    bottom 2rem
    left 0
    right 0
    .ScrollLoopContainer
      position absolute
      top 2rem
      bottom 0rem
      width 100%
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
                background-repeat no-repeat
                background-size 100% 100%
              span
                color #000
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
            font-size 0.6rem
            margin 0.5rem 0 0 0.8rem
            .smallFont
              font-size 0.5rem
              margin-top 0.2rem
              color rgb(127,127,127)
          .goodsImg
            width 3rem
            height 6rem
            display flex
            img
              height  100%
              margin -1.5rem 0 0 -1.5rem
          &.goodsListLeftT
            margin 0 0.2rem 0.2rem 0.3rem
          &.goodsListRightT
            margin 0 0.2rem 0.2rem 0
          &.goodsListLeftB
            margin 0 0.2rem 0 0.3rem
          &.goodsListRightB
            margin 0 0.2rem 0 0
      .SplitWhite
        background #fff
        width 100%
        height .5rem
      .firstNewShop
        width 100%
        height 5rem
        text-align center
        background url("https://yanxuan.nosdn.127.net/1f3325048d0a103230c4f5218f9c6600.jpg")
        background-repeat no-repeat
        position relative
        .newFirst
          font-size 0.8rem
          color #fff
          position absolute
          left 4rem
          top 1.3rem
          width 8rem
          height 2rem
        .arrows
          position absolute
          left 46%
          bottom  0
          border-bottom 0.5rem solid white
          border-left 0.5rem solid transparent
          border-right 0.5rem solid transparent
        .lookAll
          width 5rem
          height 1.5rem
          background #f4e9cb
          line-height 1.5rem
          position absolute
          left 50%
          top 50%
          margin-left -2.5rem
          font-size 0.6rem
          color #b4a078
      .shopTime
        width 100%
        height 6.5rem
        /*background pink*/
        .shopTimeLeft
          float left
          background white
          margin 1rem 0 0 2rem
          .shopTimeLeftTitle
            font-size 0.8rem
            letter-spacing 0.3rem
            color rgb(127,127,127)
          .countDown
            width 100%
            height 1.5rem
            display flex
            margin 0.7rem 0
            span
              width 20%
              height 90%
              background rgb(68,68,68)
              color white
              line-height 1.5rem
              text-align: center
              border-radius 0.1rem
              padding 0 0.23rem
              font-size 0.7rem
          .nextAction
            font-size 0.5rem
            color rgb(127,127,127)
        .shopTimeRight
          position relative
          width 7rem
          height 7rem
          float right
          img
            width 100%
          .shopTimeRightFoodPrice
            position absolute
            right 0.5rem
            bottom 1rem
            width 2.5rem
            height 2.5rem
            background rgb(239,138,3)
            border-radius 50%
            display flex
            flex-direction column
            align-items center
            justify-content center
            span
              font-size 0.7rem
              margin-top 0.1rem
              color white



      .wallImg
        width 100%
        img
          width 100%
          display block // 解决图片的留白问题
      .bottomMessage
        width 100%
        height 7rem
        background #656565
        border-top 1px solid #656565
        .bottomMessageBtn
          width 11rem
          margin-left 2.5rem
          margin-top 1rem
          /*background deeppink*/
          clearFix()
          .bottomMessageBtnLeft
            float left
            width 4rem
            height 1rem
            border 1px solid #eeeeee
            padding 0.2rem
            font-size 0.7rem
            text-align: center
            line-height 1rem
            color white
          .bottomMessageBtnRight
            color white
            width 4rem
            height 1rem
            float right
            border 1px solid #eeeeee
            padding 0.2rem
            font-size 0.7rem
            text-align: center
            line-height 1rem
        .bottomMessageContent
          width 100%
          height 2rem
          /*background pink*/
          margin-top 1rem
          div
            text-align: center
            font-size 0.6rem
            color white
            &.bottomMessageFood
              margin 0.5rem 0

  .gotoTop
    font-size 2rem
    position fixed
    right 0.3rem
    bottom 2.5rem
    color: #ff4444
    z-index 100
    opacity 1
</style>
