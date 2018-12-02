/**
 * Created by Administrator on 2018/12/2 0002.
 */
//引入 ajax 模块
import ajax from './ajax'
//发送 home 的请求
export const reqHomeData = () => ajax('/homedata');
//发送 generalthings (识物的请求)
export const reqGeneralthings = () => ajax('/topicdata');
//发送获取 classify (分类请求)
export const reqClassify = () => ajax('/navdata');
