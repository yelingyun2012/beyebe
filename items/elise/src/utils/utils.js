// 获取页面打开路径
export const setCurrentPath = (vm, name) => {
  let router = getRouterObjByName(vm.$store.state.permission.routers, name)
  let title = router.title
  let isOtherRouter = router.name === 'otherRouter'
  let currentPathArr = [
    {
      title: '首页',
      path: '/home',
      name: 'home_index'
    }
  ]

  if (name === 'home_index') {
    currentPathArr = [
      {
        title: '首页',
        path: '',
        name: 'home_index'
      }
    ]
  } else if (name.indexOf('_index') >= 0 || isOtherRouter) {
    currentPathArr.push({
      title: title,
      path: '',
      name: name
    })
  } else {
    let currentPathObj = vm.$store.state.permission.routers.find(item =>item.children.some(child => child.name === name))
    let childObj = currentPathObj.children.find(child => child.name === name)

    currentPathArr.push(
      {
        title: currentPathObj.title,
        path: '',
        name: currentPathObj.name
      },
      {
        title: childObj.title,
        path: currentPathObj.path + '/' + childObj.path,
        name: name
      }
    )
  }
  vm.$store.commit('permission/setCurrentPath', currentPathArr)
  return currentPathArr
}

// 访问一级菜单时默认打开第一个二级菜单
export const toDefaultPage = (routers, name, router, next) => {
  let notHandle = true
  for (let item of routers) {
    if (item.name === name && item.children && item.redirect === undefined) {
      router.replace({ name: item.children[0].name })
      notHandle = false
      next()
      break
    }
  }
  if (notHandle) next()
}

// 获取路由对象
export const getRouterObjByName = (routers, name) => {
  if (name && routers && routers.length) {
    let routerObj = null
    for (const item of routers) {
      if (item.name === name) return item
      routerObj = getRouterObjByName(item.children, name)
      if (routerObj) return routerObj
    }
  }
  return null
}

// 判断targetArr是否包含ele
export const oneOf = (ele, targetArr) => {
  return targetArr.includes(ele)
}

// 判断当前路由是否为验证路由
export const showThisRoute = (itAccess, currentAccess) => {
  return Array.isArray(itAccess) ? util.oneOf(currentAccess, itAccess) : itAccess === currentAccess
}
