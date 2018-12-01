/**
 * Created by Administrator on 2018/11/29 0029.
 */
//引入 vue
import Vue from 'vue';
//引入 vuex
import Vuex from 'vuex'
//引入那几个管理状态的文件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//声明使用
Vue.use(Vuex);
//创建store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
