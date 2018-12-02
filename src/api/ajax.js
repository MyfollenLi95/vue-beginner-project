/**
 * Created by Administrator on 2018/12/2 0002.
 */
/*用于发送ajax请求的函数
 包装axios
 函数的返回值是promise对象
 */
//封装 ajax 请求
//引入 axios
import axios from 'axios'

//暴露出去
export default function ajax(url,data={},method='GET') {
  //封装一个promise对象
  return new Promise((resolve, reject) => {
    let promise;
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += `${key}=${value}&`
      });
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1); // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
