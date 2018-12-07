<!--模板-->
<template>
  <div id="wrap">
    <!--手机登录方式-->
    <LoginMethods>
      <span class="iconfont icon-iconfontshouji" slot="phone"></span>
    </LoginMethods>
    <div class="registerImg">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="inputPhone">
      <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
      <input type="text" placeholder="验证码" v-model="code">
      <span @click="getCode">{{countDown<=0? '获取验证码': '倒计时' + countDown + '秒'}}</span>
    </div>
    <div class="hint">
      <span>温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意</span>
      <a href="javascript:;">《用户服务协议》</a>
    </div>
    <div class="login" @click="gotoHome">
      <input  type="submit" value="登录" class="login_submit">
    </div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 登录头部组件
  import LoginMethods from '../../../components/LoginMethods/LoginMethods.vue'
  // 引入 mint-ui 组件库
  import {Toast, MessageBox } from 'mint-ui'
  export default {
    data(){
      return{
        phone:'',// 定一个手机号数据
        countDown:0, // 从0开始
        code:'' // 默认没有验证码
      }
    },
    methods:{
      getCode(){
        //更新当前数字状态指
        Toast('短信发送成功');
        if (this.countDown>0){
          return
        }
        this.countDown = 30;
        const interalId = setInterval(() => {
          console.log('----', this.countDown);
          this.countDown--;
          if(this.countDown<=0) {
            this.countDown = 0;
            // 清除定时器
            clearInterval(interalId)
          }
        }, 1000)
      },
      gotoHome(){
        //正则验证手机号输入是否正确
        if (/^1\d{10}$/.test(this.phone) && /^\d{6}$/.test(this.code)){
          this.$router.push('home')
        }else {
          MessageBox.alert('请输入正确的手机号或正确的验证码')
        }
      }
    },
    computed:{

    },
    components:{
      LoginMethods //注册登录方式的头部组件
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*css样式*/
  #wrap
    width 100%
    height 100%
    .icon-iconfontshouji
      display inline-block
      vertical-align middle
      font-size 1rem
    .registerImg
      display inline-block
      width 100%
      text-align center
      height 3rem
      padding-top 3rem
      padding-bottom 3rem
      img
        height 100%
    .inputPhone
      width 100%
      text-align center
      position relative
      input
        width 12rem
        height 1.5rem
        font-size 0.7rem
        padding 0 0.5rem
        border-radius 0.2rem
        margin-top 0.5rem
        outline none
        border 1px solid #ccc
      span
        font-size 0.5rem
        color #ccc // 字体默认上来时黑色点击倒计时变为灰色
        position absolute
        right 2.2rem
        top 1rem
    .hint
      width 100%
      height 2rem
      position relative
      span
        display inline-block
        font-size 0.56rem
        width 12rem
        margin-left 1.9rem
        margin-top 0.5rem
        color #999
        letter-spacing 0.01rem
      a
        display inline-block
        font-size 0.56rem
        width 5rem
        position absolute
        top 1.1rem
        right 1.7rem
        color #02a774
    .login
      width 100%
      text-align center
      .login_submit
        display inline-block
        width 14rem
        height 1.5rem
        margin-top 30px
        border-radius 0.2rem
        background #4cd96f
        color #fff
        text-align center
        font-size 0.8rem
        line-height 1.5rem
        border 0





</style>
