<!--模板-->
<template>
  <div>
    <section class="LeftWrap">
      <div class="listMenu">
        <ul class="shopList">
          <!-- 先写好的一个静态再去调样式 -->
          <!--<li class="shopItem active"><a href="javascript:;">网易优选</a></li>-->
          <li  class="shopItem" :class="{active:index === currentIndex}"
               v-for="(classifyItem,index) in classify" @click="clickItem(index)">
            <a href="javascript:;">
              {{classifyItem.name}}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 BScroll
  import BScroll from 'better-scroll'
  //引入 pubsub
  import PubSub from 'pubsub-js'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0 // 初始化当前的索引值
      }
    },
    methods:{
      //点击当前组件的导航列表
      clickItem(index){
        // 更新状态数据
        this.currentIndex = index;
        //将此组件的数据传递给兄弟组件
        PubSub.publish('index',this.currentIndex)
      }
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.LeftWrap',{ // 滑动是给它 父元素绑定 BScroll 还有让最外层的元素被内层的超过去
          click: true,
          scrollY: true, // 垂直滑动
        });
        console.log('classify数据获取成功~~');

      })
    },
    computed:{
      //获取分类页面的数据
      ...mapState(['classify'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .LeftWrap
    position absolute
    top 2rem
    bottom 2rem
    left 0
    right 0
    .listMenu
      width 3.5rem
      height 100%
      padding-top 1.5rem
      padding-bottom 3rem
      .shopList
        width 100%
        .shopItem
          height 1.6rem
          line-height 1.6rem
          width 100%
          font-size 0.65rem
          /*background yellow*/
          text-align: center
          margin-bottom 0.5rem
          box-sizing border-box
          &.active
            border-left 0.15rem solid #b4282d
            /*有 active 类名下面的a标签*/
            a
              color #b4282d
              font-weight bold
              font-size 0.77rem
          /*全局中的a*/
          a
            color #000




</style>
