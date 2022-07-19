import { createStore } from 'vuex'
import login from './modules/login'
import tag from './modules/tag'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    login,
    tag
  }
})
