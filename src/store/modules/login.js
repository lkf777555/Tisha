export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, res) {
      state.token = res
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
