import { appRouter, otherRouter } from '@/router/router'
import cookie from 'eustia-module/cookie'
import { showThisRoute } from '@/utils/utils'

const state = {
  routers: [otherRouter, ...appRouter],
  menuList: [],
  openedSubmenuArr: [],
  currentPath: []
}

const mutations = {
  getMenuList(state) {
    state.menuList = appRouter
  },
  setCurrentPath(state, pathArr) {
    state.currentPath = pathArr
  },
  addOpenSubmenu(state, name) {
    let [isEmpty, hasThisName] = [false, false]
    if (name.length === 0) isEmpty = true
    if (state.openedSubmenuArr.includes(name)) hasThisName = true
    if (!isEmpty && !hasThisName) state.openedSubmenuArr.push(name)
  },
  updateMenuList(state) {
    // 用户权限码
    let accessCode = parseInt(Cookies.get('accessCode'))
    let menuList = []
    appRouter.forEach(item => {
      if (item.access !== undefined) {
        if (Util.showThisRoute(item.access, accessCode)) {
          if (item.children.length === 1) {
            menuList.push(item)
          } else {
            let len = menuList.push(item)
            menuList[len - 1].children = item.children.filter(child => {
              if (child.access !== undefined) {
                if (child.access === accessCode) {
                  return child
                }
              } else {
                return child
              }
            })
          }
        }
      } else {
        if (item.children.length === 1) {
          menuList.push(item)
        } else {
          let len = menuList.push(item)
          let handledItem = JSON.parse(JSON.stringify(menuList[len - 1]))
          handledItem.children = item.children.filter(child => {
            if (child.access !== undefined) {
              if (Util.showThisRoute(child.access, accessCode)) {
                return child
              }
            } else {
              return child
            }
          })
          menuList.splice(len - 1, 1, handledItem)
        }
      }
    })
    state.menuList = menuList
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
