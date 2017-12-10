import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态管理器模块
import permission from './modules/permission'

const store = new Vuex.Store({
  modules: {
    permission
  }
})

export default store
