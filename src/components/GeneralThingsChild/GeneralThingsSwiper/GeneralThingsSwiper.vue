<!--模板-->
<template>
  <div id="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in generalthings.banner" :key="index">
          <a href="javascript:;" class="swiperWrap">
            <div class="swiperUrl" :style="{backgroundImage:`url(${item.picUrl})`}">
              <div class="swiperContent">
                <div class="YxTitle">
                  <span>-</span>
                  <span>{{item.subTitle}}</span>
                  <span>-</span>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="text">{{item.desc}}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 vuex
  import {mapState} from 'vuex'
  //引入 swiper js库
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed:{
      ...mapState(['generalthings'])
    },
    watch:{
      //监视这个数据是否获取到了
      generalthings(){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
//        slidesPerView: 'auto',
            loop:true
          });
          console.log('generalthings数据来了~~')
        })
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    width 100%
  .swiperWrap
    display block
    width 90%
    height 8rem
    margin 0.4rem auto
    .swiperUrl
      width 100%
      height 100%
      background-repeat no-repeat
      background-size 100% 100%
      position relative
      .swiperContent
        position absolute
        top 0
        bottom 0
        right 0
        left 0
        margin auto
        width 10rem
        height 5rem
        background rgba(255,255,255,.9)
        text-align: center
        .YxTitle
          font-size 0.55rem
          color #7f7f7f
          margin-top 1rem
        .title
          font-size 0.7rem
          color #333
          font-weight bold
          margin-top 0.5rem
        .text
          font-size 0.5rem
          color #333
          margin-top 0.5rem

</style>
