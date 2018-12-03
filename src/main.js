//引入 vue
import Vue from 'vue'
//引入 store
import store from './store'
//引入路由器对象
import router from './router'
//引入图片懒加载
import VueLazyload from 'vue-lazyload'
//引入组件 app
import App from './App'
//引入懒加载图片
import loading from './assets/images/loading.gif'
//引入 mock 数据
import './mock/mockServer'
//声明使用懒加载技术
Vue.use(VueLazyload, {
  loading
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  //之前的写法
  /*components: { App },
  template: '<App/>',*/
  //注册全局配置对象store对象
  store,
  //注册全局配置对象路由器对象
  router

});
