<!--模板-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(focusItem,index) in homeData.focusList" :key="index">
        <a href="javascript:;">
          <img class="swiper-slide" v-lazy="focusItem.picUrl" alt="">
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 Swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    //监视一下数据是否请求回来
    watch:{
      homeData(){
        this.$nextTick(() => {
          this._initSwiper()
        })
      },
    },
    //定一个初始化轮播的方法
    methods:{
      _initSwiper(){
        //轮播
        new Swiper('.swiper-container', {
          //loop:true,// 循环模式选项
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*css样式*/
  //设置小圆点的样式，把上面的 scoped 属性去掉就可以设置样式了
  .swiper-pagination-bullet
    width 0.85rem
    height 0.17rem
    background deeppink
    border-radius 0
</style>
