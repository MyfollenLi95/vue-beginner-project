/**
 * Created by Administrator on 2018/11/29 0029.
 */
//包含n个直接更新状态数据的对象
import {
  RECEIVE_HOME_DATA,
  RECEIVE_CLASSIFY_DATA,
  RECEIVE_GENERALTHINGS_DATA,
  RECEIVE_NAVLISTTOP
} from './mutation-types'
export default {
  [RECEIVE_HOME_DATA](state,{homeData}){
    //更新state的状态数据 homeData
    state.homeData = homeData
  },
  [RECEIVE_CLASSIFY_DATA](state,{classify}){
    //更新state的状态数据 homeData
    state.classify = classify
  },
  [RECEIVE_GENERALTHINGS_DATA](state,{generalthings}){
    //更新state的状态数据 homeData
    state.generalthings = generalthings
  },
  [RECEIVE_NAVLISTTOP](state){
    //获取state状态的自定义数据
    const navListTop = state.navListTop;
  }
}
