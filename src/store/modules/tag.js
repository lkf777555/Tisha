import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    tagList: getItem('view') || [{ name: '主控台', path: '/' }]
  },
  mutations: {
    addview(state, res) {
      const data = state.tagList.find((item) => item.path === res.path)
      if (!data) {
        state.tagList.push(res)
        setItem('view', state.tagList)
      }
    },
    remote(state, path) {
      state.tagList = state.tagList.filter((v) => {
        return v.path !== path
      })
      setItem('view', state.tagList)
    }
  },
  actions: {
    async views({ commit }, data) {
      const res = await data
      commit('addview', res)
      return res
    },
    async remote({ commit }, data) {
      const res = await data
      commit('remote', res)
      return res
    }
  }
}
