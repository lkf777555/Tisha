import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    collapse: false
  },
  mutations: {
    setToken(state, res) {
      state.token = res
      setItem('token', res)
    },
    isTrue(state) {
      state.collapse = !state.collapse
    }
  },
  actions: {
    async token({ commit }, data) {
      const res = await data
      commit('setToken', res)
      return res
    },
    async isColl({ commit }) {
      commit('isTrue')
    }
  }
}
