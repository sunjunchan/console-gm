import axios from 'axios'
import _ from 'lodash'
import routes from '@/router/index.js'
import store from '@/store'
const { basePath } = require('../../faceConfig')
const request = (url, params,) => {
  // console.log('env: ', process.env.NODE_ENV)
  return new Promise((resolve, reject) => {
    axios({
      url: basePath + '/' + formatingUrl(url),
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"*",
        "Access-Control-Allow-Methods":"*"},
      ...params
    }).then(res => {
      if(res.data.message === '用户未登陆'){
        routes.push('/login')
      }else{
        resolve(res.data)
      }
      
    }).catch(e => {
      reject(e)
    })
  })
}
/**
 * 如果请求地址前端带/, 则去掉
 *
 * @param { String } targetUrl
 */
function formatingUrl(targetUrl) {
  if (targetUrl.indexOf('/') === 0) {
    return targetUrl.replace('/', '')
  }
  return targetUrl
}
function getCookie(name){
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
  //遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split("=");
    if (arr[0] == name){
      return arr[1];
    }
  }
  return "";
}
const exportFunc = () => {
  return {
    get(url, params = {},page){
      return request(url, {
        method: 'GET',
        params: params
      })
    },
    //登录
    login(url, params = {}){
      console.log('params: ', params)
      return request(url, {
        method: 'POST',
        data: {
          ...params
        }
      })
    },
    post(url, params = {},page){
      console.log('params: ', params)
      return request(url, {
        method: 'POST',
        data: {
          ...params
        }
      })
    }
  }
}
export default  exportFunc()
