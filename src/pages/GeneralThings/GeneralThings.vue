<!--模板-->
<template>
  <div class="generalthingsWrap">
    <header class="header">
      <img src="https://yanxuan.nosdn.127.net/a9b8dd282983a8e6394acbd425e1ad8d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
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
    <div class="wrapContent">

    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0 // 定一个数据是否显示当前的列表区域
      }
    },
    computed:{
      ...mapState(['navListTop'])
    },
    methods:{
      gotoNext(index){
        //更新当前组件内的状态数据
        this.currentIndex = index;
      }
    },
    mounted(){
      //获取当前组件的数据
      this.$store.dispatch('getGeneralthingsData',() => {
        console.log('GeneralthingsData数据请求成功了~~')
      });
      //获取头部导航的数据
      this.$store.dispatch('getNavListTop',() => {
        console.log('头部数据获取成功~~')
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .generalthingsWrap
    width 100%
    height 100%
    .header
      width 100%
      height 4rem
      img
        width 100%
        height 2.3rem
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
      /*background deeppink*/

      margin-top 0.1rem
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
    .wrapContent
      position absolute
      top: 6.2rem
      bottom: 2rem
      left: 0
      right: 0
      background deeppink
      padding 0.2rem
</style>
