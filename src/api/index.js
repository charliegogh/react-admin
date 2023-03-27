import axios from 'axios'
import { getToken } from '@/utils/auth'
import { notification } from 'antd'
const service = axios.create({
  baseURL: 'http://localhost:88/',
  withCredentials: true, // 允许携带 cookie
  timeout: 50000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// request拦截器   请求拦截器
service.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken()
  return config
}, error => {
  Promise.reject(error)
})
//  响应拦截器
service.interceptors.response.use(
  response => {
    console.log('~~~~~~~~~~')
    return Promise.resolve(response)
  },
  error => {
    const errMsg = error.toString()
    const code = errMsg.substr(errMsg.indexOf('code') + 5)
    switch (code) {
      case '401':
        notification.error({
          message: '登录过期请重新登录'
        })
        break
    }
    return Promise.reject(error)
  }
)
const fetch = (method, url, data = {}, config) => {
  config = config || {}
  config.method = method
  config.url = url
  method.toLocaleLowerCase() === 'get' ? config['params'] = data : config['data'] = data
  return service(config).then((res) => (res.data))
}
const postAction = (url, parameter, config) => {
  return fetch('post', url, parameter, config)
}
const getAction = (url, parameter, config) => fetch('get', url, parameter, config)
export {
  postAction,
  getAction
}
