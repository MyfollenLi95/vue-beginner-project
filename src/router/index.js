/**
 * Created by Administrator on 2018/11/29 0029.
 */
//引入 vue
import Vue from 'vue';
//引入 vue-router
import VueRouter from 'vue-router';
//引入路由组件
import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
//声明使用vue插件
Vue.use(VueRouter);
//创建路由对象
export default new VueRouter({
  mode:'history',//路径中没有 # 的默认有 设置 hash 也有 #
  //应用中的所有路由
  routes:[
    //一级路由
    {
      path:'/classify',
      component:Classify,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/home',
      component:Home,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/generalthings',
      component:GeneralThings,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    //默认一上来显示
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
