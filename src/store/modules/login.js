import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    collapse: false
  },
  mutations: {
    // 存储的token
    setToken(state, res) {
      state.token = res
      setItem('token', res)
    },
    // 收缩折叠栏取反
    isTrue(state) {
      state.collapse = !state.collapse
    }
  },
  actions: {
    // 调用异步token
    async token({ commit }, data) {
      const res = await data
      commit('setToken', res)
      return res
    },
    // 调用异步取反
    async isColl({ commit }) {
      commit('isTrue')
    }
  }
}
