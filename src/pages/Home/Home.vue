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
            <div  class="newFirst"><span>新品首发</span></div>
            <div class="lookAll">
              <span>查看全部<i class="tempNext">></i></span>
            </div>
          </div>
          <!--分离框-->
          <Split />
          <!--横向商品滑屏-->
          <div class="swiper-wrapper-food-container swiper-wrapper-food-container-T">
            <div class="swiper-wrapper-food swiper-wrapper-food-T">
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-foodAll">
                <span>查看全部</span>
              </div>
            </div>
          </div>
          <!--分离框-->
          <Split />
          <!--人气推荐，好物精选-->
          <div class="firstNewShop">
            <span class="arrows"></span>
            <div  class="newFirst"><span>新品首发</span></div>
            <div class="lookAll">
              <span>查看全部<i class="tempNext">></i></span>
            </div>
          </div>
          <!--分离框-->
          <Split />
          <!--横向商品滑屏-->
          <div class="swiper-wrapper-food-container swiper-wrapper-food-container-B">
            <div class="swiper-wrapper-food swiper-wrapper-food-B">
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-food">
                <div class="swiperImg">
                  <img src="http://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png?imageView&quality=65&thumbnail=330x330" alt="拖鞋">
                </div>
                <div class="swiperFood">绿豆糕</div>
                <div class="swiperDoc ellipsis">
                  细腻松软，入口柔软
                </div>
                <div class="swiperPrice">￥12.9</div>
              </div>
              <div class="swiper-slide-foodAll">
                <span>查看全部</span>
              </div>
            </div>
          </div>
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
          <div class="subjectSelete">
            <div class="subjectSeleteTitle">专题精选<i class="iconfont icon-tiaozhuan"></i></div>
            <!--横向滑屏部分-->
            <div class="subjectSeleteContainer">
              <ul class="subjectSeleteList">
                <li class="subjectSeleteItem">
                  <div class="subjectSeleteItemImg">
                    <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="subjectSeleteItemContent">
                    <h4 class="title">给毛孔来一次深度清洁</h4>
                    <span class="price">107.1元起</span>
                  </div>
                  <div class="subjectSeleteItemDescribe">硅胶洁面仪，洗出会发光的素颜肌</div>
                </li>
                <li class="subjectSeleteItem">
                  <div class="subjectSeleteItemImg">
                    <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="subjectSeleteItemContent">
                    <h4 class="title">给毛孔来一次深度清洁</h4>
                    <span class="price">107.1元起</span>
                  </div>
                  <div class="subjectSeleteItemDescribe">硅胶洁面仪，洗出会发光的素颜肌</div>
                </li>
                <li class="subjectSeleteItem">
                  <div class="subjectSeleteItemImg">
                    <img src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="subjectSeleteItemContent">
                    <h4 class="title">给毛孔来一次深度清洁</h4>
                    <span class="price">107.1元起</span>
                  </div>
                  <div class="subjectSeleteItemDescribe">硅胶洁面仪，洗出会发光的素颜肌</div>
                </li>
              </ul>
            </div>
          </div>
          <!--分离框-->
          <Split />
          <!--居家好物-->
          <div class="listGoods">
            <div class="listGoodsTitle">居家好物</div>
            <ul class="listGoodsAll">
              <li class="listGoodsItem">
                <div class="listGoodsItemImg">
                  <img src="../../../static/img/muban.png" alt="">
                </div>
                <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
                <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
                <div class="listGoodsItemPrice">￥209.25</div>
              </li>
              <li class="listGoodsItem">
                <div class="listGoodsItemImg">
                  <img src="../../../static/img/muban.png" alt="">
                </div>
                <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
                <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
                <div class="listGoodsItemPrice">￥209.25</div>
              </li>
              <li class="listGoodsItem">
                <div class="listGoodsItemImg">
                  <img src="../../../static/img/muban.png" alt="">
                </div>
                <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
                <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
                <div class="listGoodsItemPrice">￥209.25</div>
              </li>
              <li class="listGoodsItem">
                <div class="listGoodsItemImg">
                  <img src="../../../static/img/muban.png" alt="">
                </div>
                <div class="listGoodsItemContent">宽细夹排，升级爽滑凉感</div>
                <div class="listGoodsItemName ellipsis">天然宽篾头层青碳化竹凉席</div>
                <div class="listGoodsItemPrice">￥209.25</div>
              </li>
            </ul>
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
      //商品横向滑屏
      new BScroll('.swiper-wrapper-food-container-T',{
        scrollX: true, // 水平滑动
        scrollY:false, // 禁止到垂直方向的滑屏
        click: true
      });
      //商品横向滑屏
      new BScroll('.swiper-wrapper-food-container-B',{
        scrollX: true, // 水平滑动
        scrollY:false, // 禁止到垂直方向的滑屏
        click: true
      });
      //桩体精选商品横向滑屏
      new BScroll('.subjectSeleteContainer',{
        scrollX: true, // 水平滑动
        scrollY:false, // 禁止到垂直方向的滑屏
        click: true
      });
    },
    components:{
      //注册头部组件
      ToHeader,
      //注册分离框组件
      Split,

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
    padding-bottom 2rem
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
        text-align center
        background pink
        position relative
        .newFirst
          font-size 0.8rem
          color rgb(127,127,127)
          position absolute
          left 6.3rem
          top 1.3rem
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
          background rgb(216,229,241)
          line-height 1.5rem
          position absolute
          left 50%
          top 50%
          margin-left -2.5rem
          font-size 0.6rem
          color rgb(127,127,127)
      .swiper-wrapper-food-container
        margin-left 0.5rem
        .swiper-wrapper-food
          clearFix()
          width 8*6.2rem
          .swiper-slide-foodAll
            width 5rem
            height 5rem
            text-align: center
            line-height 5rem
            float left
            border 2px solid rgb(127,127,127)
            font-size 0.7rem
            color rgb(127,127,127)
          .swiper-slide-food
            width 5rem
            height 10rem
            margin-right 0.5rem
            float left
            .swiperImg
              width 5rem
              height 5rem
              background #eeeeee
              img
                width 100%
            .swiperFood
              font-size 0.8rem
              margin-top 0.5rem
            .swiperDoc
              font-size 0.6rem
              margin-top 0.5rem
            .swiperPrice
              font-size 0.7rem
              color red
              margin-top 0.5rem

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

      .listGoods
        width 100%
        height 20rem //一会修改
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
          .listGoodsItem
            width 50%
            height 12rem
            display inline-block
            .listGoodsItemImg
              width 100%
              height 8rem
              background rgb(244,244,244)
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
              color rgb(162,142,132)
              background rgb(241,236,226)
            .listGoodsItemName
              font-size 0.6rem
              margin 0.4rem 0 0.1rem 0.3rem
            .listGoodsItemPrice
              margin-left 0.3rem
              color red
              font-size 0.7rem


</style>
