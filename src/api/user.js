import request from '../utils/request'
/**
 * @method
 * @description 登录接口
 * @param {Object} //用户名以及密码
 */
export const login = (model) => request.post('/admin/login', model)
/**
 * @method
 * @description 左侧侧边栏接口
 * @param {}
 */
export const meun = () => request.post('/admin/getinfo')
/**
 * @method
 * @description 支付订单接口
 * @param {}
 */
export const order = () => request.get('/admin/statistics1')
/**
 * @method
 * @description 店铺信息接口
 * @param {}
 */
export const shop = () => request.get('/admin/statistics2')
/**
 * @method
 * @description 图表接口
 * @param {}
 */
export const getChart = (type) => request.get(`/admin/statistics3?type=${type}`)
