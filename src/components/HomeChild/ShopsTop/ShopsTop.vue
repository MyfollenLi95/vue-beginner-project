<!--模板-->
<template>
  <!--默认暴露的Vue组件js代码-->
  <!--横向商品滑屏-->
  <div class="swiper-wrapper-food-container swiper-wrapper-food-container-T">
    <div class="swiper-wrapper-food">
      <div class="swiper-slide-food" v-for="(newItemNewUserItem,index) in homeData.newItemNewUserList ">
        <div class="swiperImg">
          <img :src="newItemNewUserItem.primaryPicUrl" alt="">
        </div>
        <div class="swiperFood ellipsis">{{newItemNewUserItem.name}}</div>
        <div class="swiperDoc ellipsis">
          {{newItemNewUserItem.simpleDesc}}
        </div>
        <div class="swiperPrice">￥{{newItemNewUserItem.retailPrice}}</div>
      </div>

      <div class="swiper-slide-foodAll">
        <span>查看全部</span>
      </div>
    </div>
  </div>
</template>
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  //引入滑屏效果
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    watch:{
      homeData(){
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    methods:{
      _initScroll(){
          //商品横向滑屏
          new BScroll('.swiper-wrapper-food-container-T',{
            scrollX: true, // 水平滑动
            scrollY:false,// 禁止纵向滑屏
            click: true
          });
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  @import "../../../comment/stylus/mixins.styl"
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
          font-size 0.7rem
          margin-top 0.5rem
        .swiperDoc
          font-size 0.55rem
          color rgb(127,127,127)
          margin-top 0.5rem
        .swiperPrice
          font-size 0.7rem
          color red
          margin-top 0.5rem

</style>
