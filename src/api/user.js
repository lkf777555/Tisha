import request from '../utils/request'

export const login = (model) => request.post('/admin/login', model)
