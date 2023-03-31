//进行远程调用
import axios from 'axios'
//包装param参数
import qs from 'qs'
import Vue from 'vue'
// 声明基础访问地址 在只需要配置单个或有限明确的接口域名时可以直接设置，在生产环境和开发环境切换时需手动更改
//axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.baseURL = process.env.API_ROOT

//声明一个调用方法
export const requestLogin = params => {
  return axios.post('/user/login', qs.stringify(params)).then(res => res.data)
}
