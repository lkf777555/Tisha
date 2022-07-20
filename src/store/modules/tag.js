import { setItem, getItem } from '../../utils/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    tagList: getItem('view') || [{ name: '主控台', path: '/' }]
  },
  mutations: {
    // 判断是否重复
    addview(state, res) {
      const data = state.tagList.find((item) => item.path === res.path)
      if (!data) {
        state.tagList.push(res)
        setItem('view', state.tagList)
      }
    },
    // 删除对应tag
    remote(state, path) {
      console.log(path)
      state.tagList = state.tagList.filter((v) => {
        return v.path !== path
      })
      setItem('view', state.tagList)
    },
    // 删除其他tag
    CloesOther(state, path) {
      state.tagList = state.tagList.filter((item) => {
        return item.path === path
      })
      state.tagList.forEach((v) => {
        if (v.path !== '/') {
          state.tagList.push({ path: '/', name: '主控台' })
        }
      })
      setItem('view', state.tagList)
    },
    // 删除所有tag
    CloseAll(state) {
      state.tagList = state.tagList.filter((item) => {
        return item.path === '/'
      })
      setItem('view', state.tagList)
      router.push('/')
    }
  },
  actions: {
    // 添加tag
    async views({ commit }, data) {
      const res = await data
      commit('addview', res)
      return res
    },
    // 删除tag
    async remote({ commit }, data) {
      const res = await data
      commit('remote', res)
      return res
    },
    // 删除其他tag
    async handleCloseOther({ commit }, data) {
      const res = await data
      commit('CloesOther', data)
      return res
    },
    // 删除所有tag
    async handleCloseAll({ commit }) {
      commit('CloseAll')
    }
  }
}
