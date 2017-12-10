import Vue from 'vue'
import App from './App'
import { router } from './router'
import store from './store'

/**
 * 实例化Vue对象
 */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.commit('permission/updateMenuList')
  }
})

/**
 * vue 开发环境配置
 * @param {Boolean} devtools 开启开发插件
 * @param {Boolean} productionTip 生产环境提示
 */
Vue.config.productionTip = false
Vue.config.devtools = true
