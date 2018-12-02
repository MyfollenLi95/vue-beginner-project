<!--模板-->
<template>
  <!--默认暴露的Vue组件js代码-->
  <!--横向商品滑屏-->
  <div class="swiper-wrapper-food-container" :class="name">
    <div class="swiper-wrapper-food">
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
</template>
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入滑屏效果
  import BScroll from 'better-scroll'
  export default {
    props:{
      name:String
    },
    mounted(){
      //商品横向滑屏
      new BScroll(`.${this.name}`,{
        scrollX: true, // 水平滑动
        scrollY:false,// 禁止纵向滑屏
        click: true
      });
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
          font-size 0.8rem
          margin-top 0.5rem
        .swiperDoc
          font-size 0.6rem
          margin-top 0.5rem
        .swiperPrice
          font-size 0.7rem
          color red
          margin-top 0.5rem

</style>
