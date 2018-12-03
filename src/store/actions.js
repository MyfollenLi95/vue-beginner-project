/**
 * Created by Administrator on 2018/11/29 0029.
 */
//包含n个间接更新状态数据的对象
//引入发送请求的方法
import {
  reqHomeData,
  reqClassify,
  reqGeneralthings
} from '../api'
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CLASSIFY_DATA,
  RECEIVE_GENERALTHINGS_DATA,
  RECEIVE_NAVLISTTOP
} from './mutation-types'
export default {
  //异步获取 action 数据 homeData
  async getHomeData({commit},cb){
    //获取数据
    const result = await reqHomeData();
    //判断一下是否获取成功
    if (result.code ===0){//成功
      const homeData = result.data;
      commit(RECEIVE_HOME_DATA,{homeData});
      //判断一下当前的cb是不是回调函数
      typeof cb==='function' && cb()
    }else {
      console.log('发送请求失败~~')
    }
  },
  //异步获取 action 数据 ClassifyData
  async getClassifyData({commit},cb){
    //获取数据
    const result = await reqClassify();
    //判断数据是否成功接收到
    if (result.code ===0){//成功
      const classify = result.data;
      commit(RECEIVE_CLASSIFY_DATA,{classify});
      //判断一下当前的cb是不是回调函数
      typeof cb==='function' && cb()
    }else {
      console.log('发送请求失败~~')
    }
  },
  //异步获取 action 数据 generalthingsData
  async getGeneralthingsData({commit},cb){
    //获取数据
    const result = await reqGeneralthings();
    //判断一下当前的数据是否请求成功了
    if (result.code === 0){//成功
      //获取当前请求来的数据
      const generalthings = result.data;
      commit(RECEIVE_GENERALTHINGS_DATA,{generalthings});
      //判断一下当前的cb是不是回调函数
      typeof cb==='function' && cb()
    }else {
      console.log('发送请求失败~~')
    }
  },

  // 同步 action 获取数据识物的自定义数据
  getNavListTop({commit},cb){
    commit(RECEIVE_NAVLISTTOP);
    //判断一下当前的cb是不是回调函数
    typeof cb==='function' && cb()
  }
}
