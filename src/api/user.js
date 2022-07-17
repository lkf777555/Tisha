import request from '../utils/request'
/**
 * @method
 * @description 登录接口
 * @param {Object} //用户名以及密码
 */
export const login = (model) => request.post('/admin/login', model)
