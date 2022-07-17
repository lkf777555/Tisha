import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, res) {
      state.token = res
      setItem('token', res)
    }
  },
  actions: {
    async token({ commit }, data) {
      const res = await data
      commit('setToken', res)
      return res
    }
  }
}
