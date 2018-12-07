<!--模板-->
<template>
  <div class="generalthingsWrap">
    <header class="header" ref="headerTop">
      <img src="../../../static/img/wyyxTop.png" alt="">
      <div class="headerShopCart">
        <span class="headerFind">发现</span>
        <span class="headerHome">甄选家</span>
        <span class="headerText iconfont icon-sousuo"></span>
        <span class="headerText iconfont icon-goShop" @click="$router.replace('/shopcart')"></span>
        <span class="headerText iconfont icon-home" @click="$router.replace('/home')"></span>
      </div>
    </header>
    <div class="wrapTop">
      <ul class="navListTop">
        <li class="navItemTop" :class="{active:index === currentIndex}"
            v-for="(item,index) in navListTop" @click="gotoNext(index)">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="wrapContentList">
      <div class="wrapContentItem">
        <!--头部轮播图-->
        <GeneralThingsSwiper />
        <!--上半部分的滑动组件-->
        <GeneralThingsScrollTop />
        <!--分隔栏组件-->
        <Split/>
        <!--为你推荐-->
        <div class="contentList" v-if="generalthings.recommend">
          <div class="titleTop">
            <!--超过三层读取属性时，必须在最外层容器判断一下是否有当前的属性存在-->
            {{generalthings.recommend.name}}
          </div>
          <div class="contentItem">
            <!--上面的内容-->
            <div class="imgItem">
              <img v-lazy="generalthings.recommend.Item[0].picUrl"
                   alt="" :key="generalthings.recommend.Item[0].picUrl">
            </div>
            <div class="textContent">
              <span class="textLeft">{{generalthings.recommend.Item[0].title}}</span>
              <span class="textRight">{{generalthings.recommend.Item[0].priceInfo}}元起</span>
            </div>
            <div class="activeContent">
              <span class="activeContentText">
                {{generalthings.recommend.Item[0].subTitle}}
              </span>
            </div>
            <!--下面的内容-->
            <div class="itemsBottom" v-if="index>=1" v-for="(item,index) in generalthings.recommend.Item">
              <div class="itemLeft">
                <div class="itemTextTop">{{item.title}}</div>
                <div class="itemTextBottom ellipsis">{{item.subTitle}}</div>
              </div>
              <div class="itemRight">
                <img v-lazy="item.picUrl" alt="" :key="item.picUrl">
                <span>{{item.typeName}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--分隔栏组件-->
        <Split/>
        <!--十一刻-->
        <GeneralThingsScrollBottom />
        <!--分隔栏组件-->
        <Split/>
        <!--严选臻品-->
        <div class="contentList" v-if="generalthings.zhen">
          <div class="titleTop">
            <!--超过三层读取属性时，必须在最外层容器判断一下是否有当前的属性存在-->
            {{generalthings.zhen.name}}
          </div>
          <div class="contentItem">
            <!--上面的内容-->
            <div class="imgItem">
              <img v-lazy="generalthings.zhen.Item[0].picUrl"
                   alt="" :key="generalthings.zhen.Item[0].picUrl">
            </div>
            <div class="textContent">
              <span class="textLeft">{{generalthings.zhen.Item[0].title}}</span>
              <span class="textRight">{{generalthings.zhen.Item[0].priceInfo}}元起</span>
            </div>
            <div class="activeContent">
              <span class="activeContentText">
                {{generalthings.zhen.Item[0].subTitle}}
              </span>
            </div>
            <!--下面的内容-->
            <div class="itemsBottom" v-if="index>=1" v-for="(item,index) in generalthings.zhen.Item">
              <div class="itemLeft">
                <div class="itemTextTop">{{item.title}}</div>
                <div class="itemTextBottom ellipsis">{{item.subTitle}}</div>
              </div>
              <div class="itemRight">
                <img v-lazy="item.picUrl" alt="" :key="item.picUrl">
                <span>{{item.typeName}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--分隔栏组件-->
        <Split/>
        <!--严选look组件-->
        <GeneralThingsYxLOOK />
        <!--分隔栏组件-->
        <Split/>
        <!--精彩更多组件-->
        <GeneralThingsKindsOf />
      </div>
    </div>
    <!--右边的按钮回到顶部-->
    <div class="gotoTop iconfont icon-huidaodingbu" @click="gotoTop"></div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  //引入 BScroll
  import BScroll from 'better-scroll'
  // 引入 GeneralThingsSwiper 组件
  import GeneralThingsSwiper from '../../components/GeneralThingsChild/GeneralThingsSwiper/GeneralThingsSwiper.vue'
  //引入 GeneralThingsScrollTop 组件
  import GeneralThingsScrollTop from '../../components/GeneralThingsChild/GeneralThingsScrollTop/GeneralThingsScrollTop.vue'
  //引入 GeneralThingsScrollBottom 组件
  import GeneralThingsScrollBottom from '../../components/GeneralThingsChild/GeneralThingsScrollBottom/GeneralThingsScrollBottom.vue'
  // 引入 GeneralThingsYxLOOK 组件
  import GeneralThingsYxLOOK from '../../components/GeneralThingsChild/GeneralThingsYxLOOK/GeneralThingsYxLOOK.vue'
  //引入 GeneralThingsKindsOf 组件
  import GeneralThingsKindsOf from '../../components/GeneralThingsChild/GeneralThingsKindsOf/GeneralThingsKindsOf.vue'
  //引入分割栏组件
  import Split from '../../components/PublicSplit/Split/Split.vue'
  export default {
    data(){
      return{
        currentIndex:0 // 定一个数据是否显示当前的列表区域
      }
    },
    computed:{
      ...mapState(['navListTop','generalthings'])
    },
    watch:{
      //监视一下当前的组件内的数据是否请求回来
      generalthings(){
        this.scrollLoop = new BScroll('.wrapContentList',{
          scrollX:false,
          scrollY:true, // 见一个禁掉一个
          click: true
        })
      }
    },
    methods:{
      //头部切换tap栏
      gotoNext(index){
        //更新当前组件内的状态数据
        this.currentIndex = index;
      },
      //回到顶部逻辑
      gotoTop(){
        //获取 sectionTop 标签
        const headerTop = this.$refs.headerTop;
        this.scrollLoop.scrollToElement(headerTop,500); // BScroll上面的方法回到那个元素
      }
    },
    mounted(){
      //获取当前组件的数据
      this.$store.dispatch('getGeneralthingsData',() => {
        console.log('GeneralthingsData数据请求成功了~~')
      });
      //获取头部导航的数据
      this.$store.dispatch('getNavListTop',() => {
        console.log('GeneralthingsData头部数据获取成功~~')
      });

    },
    components:{
      //注册头部轮播组件
      GeneralThingsSwiper,
      //注册上半部分的滑动组件
      GeneralThingsScrollTop,
      //注册下半部分的滑动组件
      GeneralThingsScrollBottom,
      //注册严选look组件
      GeneralThingsYxLOOK,
      //注册更多精彩组件
      GeneralThingsKindsOf,
      //注册分隔栏组件
      Split,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .generalthingsWrap
    width 100%
    height 100%
    position relative
    .header
      width 100%
      height 4rem
      position absolute
      left 0
      top 0
      z-index 10
      img
        width 100%
        height 2.3rem
        display block
      .headerShopCart
        width 100%
        height 1.7rem
        background rgb(250,250,250)
        text-align: center
        line-height 1.7rem
        position relative
        .headerFind
          color #b4282d
          font-family '微软雅黑'
          font-weight 550
          font-size 0.9rem
        .headerHome
          font-size 0.7rem
          color rgb(127,127,127)
          padding 0 0.3rem
        .headerText
          position absolute
          right 2rem
          top 0
          color rgb(127,127,127)
          font-size 1.1rem
          &.icon-goShop
            right 0.5rem
          &.icon-home
            left -12rem
    .wrapTop
      width 100%
      height 1.5rem
      position absolute
      left 0
      top 3.9rem
      z-index 10
      background white
      padding-bottom 0.5rem
      .navListTop
        width 100%
        height 100%
        box-sizing border-box
        text-align center
        border-top 1px solid #666
        border-bottom 1px solid #666
        .navItemTop
          text-align center
          display inline-block
          width 2.2rem
          height 100%
          line-height 1.5rem
          font-size 0.7rem
          margin 0 0.3rem
          &.active
            a
              border-bottom 3px solid #b4282d
              padding 0 0.25rem 0.18rem 0.25rem
              color #b4282d
          a
            color rgb(127,127,127)
    .wrapContentList
      position fixed
      top 6.2rem
      bottom 2rem
      left 0
      right 0
      /*background yellow*/
      /*padding 0.2rem*/
      .wrapContentItem
        width 100%
        .contentList
          width 100%
          .titleTop
            width 100%
            height 2rem
            background white
            text-align center
            line-height 2rem
            font-size 0.7rem
          .contentItem
            width 100%
            height 23.5rem // 一会得删掉
            .imgItem
              width 14.7rem
              height 8rem
              margin 0 auto
              border-left 1px solid #d9d9d9
              border-right 1px solid #d9d9d9
              border-top 1px solid #d9d9d9
              img
                width 100%
                height 100%
            .textContent
              width 14.7rem
              height 1.5rem
              margin 0 auto
              line-height 1.5rem
              border-left 1px solid #d9d9d9
              border-right 1px solid #d9d9d9
              span
                font-size 0.7rem
                &.textLeft
                  float left
                  margin-left 0.4rem
                  color #333
                &.textRight
                  float right
                  margin-right 0.4rem
                  color #b4282d
            .activeContent
              width 14.7rem
              height 1.5rem
              margin 0 auto
              border-left 1px solid #d9d9d9
              border-right 1px solid #d9d9d9
              border-bottom 1px solid #d9d9d9
              .activeContentText
                font-size 0.6rem
                line-height 1.5rem
                margin-left 0.5rem
                color #7f7f7f

            .itemsBottom
              width 14.7rem
              height 5rem
              margin 0 auto
              /*background deeppink*/
              border 1px solid #d9d9d9
              margin-top 0.6rem
              display flex
              .itemLeft
                width 65%
                height 100%
                /*background yellow*/
                font-size 0.55rem
                .itemTextTop
                  font-size 0.8rem
                  margin 1.5rem 0 0 0.4rem
                .itemTextBottom
                  margin 0.5rem 0 0 0.5rem
              .itemRight
                width 35%
                height 100%
                /*background red*/
                position relative
                img
                  width 100%
                  height 100%
                span
                  display block
                  width 4rem
                  height 0.7rem
                  background rgba(255,255,255,0.9)
                  text-align center
                  line-height 0.7rem
                  font-size 0.5rem
                  border-radius 0.4rem
                  position absolute
                  left 0.3rem
                  top 0.3rem

    .gotoTop
      font-size 2rem
      position fixed
      right 0.3rem
      bottom 2.5rem
      color: #ff4444
      z-index 100
      opacity 1
</style>
