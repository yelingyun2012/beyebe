import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers, otherRouter, appRouter } from './router'
import { toDefaultPage, getRouterObjByName } from '@/utils/utils'
import cookie from 'eustia-module/cookie'

import LoadingBar from 'iview/src/components/loading-bar'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  routes: routers
}

export const router = new VueRouter(RouterConfig)

// 路由守卫
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  if (!cookie.get('token') && to.name !== 'login') {
    next('/login')
  } else if (cookie.get('token') && to.name === 'login') {
    next('/basic')
  } else {
    const curRouterObj =  getRouterObjByName([otherRouter, ...appRouter], to.name)
    if (curRouterObj && curRouterObj.access !== undefined) {
      if (curRouterObj.access === parseInt(cookie.get('accessCode'))) {
        toDefaultPage([otherRouter, ...appRouter], to.name, router, next)
      } else {
        next({
          name: 'error_403'
        })
      }
    }else{
      toDefaultPage([...routers], to.name, router, next)
    }
  }
})

router.afterEach(() => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})
