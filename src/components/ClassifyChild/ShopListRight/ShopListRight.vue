<!--模板-->
<template>
  <div>
    <section class="Rightwrap">
      <div class="goodsWrap">
        <div class="goodsList" v-if="classify.length">
          <div class="goodsListImg" :style="{backgroundImage:`url(${classify[index].bannerUrl})`}"></div>
          <div class="goodsListTitle">{{classify[index].name}}</div>
          <div class="goodsListItem">
            <ul class="ImgList">
              <li class="ImgItem" v-for="(Item,index) in classify[index].subCateList" :key="index">
                <img v-lazy="Item.wapBannerUrl" :key="Item.wapBannerUrl" alt="">
                <div class="ImgItemText ellipsis">{{Item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 pubsub
  import PubSub from 'pubsub-js'
  //引入 BScroll
  import BScroll from 'better-scroll'
  //引入 vuex
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        index:0 // 定一个索引可以让左右的列表对应起来
      }
    },
    mounted(){
//      this.$nextTick(() => {


//      });
      PubSub.subscribe('index',(msg,data) => {
          this.index = data;
          //console.log(this.scroll);
          //this.scroll.refresh()
        console.log('兄弟之间数据传输成功了~~',data)
      })
    },
    //获取分类组件的数据
    computed:{
      ...mapState(['classify'])
    },
    watch:{
      index(){
       this.$nextTick(()=>{
          new BScroll('.Rightwrap',{ // 滑动是给它 父元素绑定 BScroll 还有让最外层的元素被内层的超过去
           click: true
         });
       })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  .Rightwrap
    position absolute
    top 2rem
    bottom 2rem
    left 3.6rem
    right 0rem
    /*background deeppink*/
    border-left 1px solid #000
    .goodsWrap
      width 100%
      box-sizing border-box
      padding 0.5rem 0.5rem 0 0.5rem
      .goodsListImg
        display inline-block
        width 100%
        height 3.9rem
        background-size 100% 100%
        background-repeat no-repeat
      .goodsListTitle
        width 100%
        height 2rem
        line-height 2rem
        font-size 0.7rem
        text-align center
      .goodsListItem
        width 100%
        .ImgItem
          display inline-block
          width 3.5rem
          height 3.5rem
          text-align center
          img
            width 100%
            height 100%
          .ImgItemText
            font-size 0.6rem
            margin-left 0.4rem


</style>

