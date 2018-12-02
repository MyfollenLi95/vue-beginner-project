/**
 * Created by Administrator on 2018/11/29 0029.
 */
//包含n个间接更新状态数据的对象
//引入发送请求的方法
import {reqHomeData} from '../api'
import {RECEIVE_HOME_DATA} from './mutation-types'
export default {
  //异步获取action数据 homeData
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
  }
}
