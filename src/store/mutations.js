/**
 * Created by Administrator on 2018/11/29 0029.
 */
//包含n个直接更新状态数据的对象
import {RECEIVE_HOME_DATA} from './mutation-types'
export default {
  [RECEIVE_HOME_DATA](state,{homeData}){
    //更新stat的状态数据 homeData
    state.homeData = homeData
  }
}
