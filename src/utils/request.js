import axios from 'axios'

const http = axios.create({
  baseURL: '',
  timeout: 5000
})
// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
