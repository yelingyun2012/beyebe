import Main from '@/views/Main.vue'

// 依赖注入模块
const _import = require(`./_import-${process.env.NODE_ENV}`)

// 不作为Main组件的子页面展示的页面单独写,如下
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: _import('login')
  },
  {
    path: '/403',
    name: 'error_403',
    component: _import('error-page/403')
  },
  {
    path: '/500',
    name: 'error_500',
    component: _import('error-page/500')
  },
  {
    path: '*',
    name: 'error_404',
    component: _import('error-page/404')
  }
]

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/basic',
  component: Main,
  children: [
    {
      path: 'taskManagerChild/:id',
      name: 'taskManagerChild',
      title: '任务操作',
      component: _import('basic/child/taskManagerChild/taskManagerChild')
    },
    {
      path: 'siteManagerChild/:id',
      name: 'siteManagerChild',
      title: '站点管理',
      component: _import('basic/child/siteManagerChild/siteManagerChild')
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/basic',
    name: 'basic',
    icon: 'android-settings',
    title: '基本设置',
    component: Main,
    children: [
      {
        path: 'taskManager',
        name: 'taskManager',
        icon: 'compose',
        title: '任务管理',
        component: _import('basic/taskManager')
      },
      {
        path: 'siteManager',
        name: 'siteManager',
        icon: 'crop',
        title: '站点管理',
        component: _import('basic/siteManager')
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    icon: 'link',
    title: '用户管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        name: 'account_index',
        title: '用户管理',
        access: 0,
        component: _import('account/manager')
      }
    ]
  },
  {
    path: '/account1',
    name: 'account1',
    icon: 'link',
    title: '用户管理1',
    access: 1,
    component: Main,
    children: [
      {
        path: 'index1',
        name: 'account_index1',
        title: '用户管理1',
        access: 1,
        component: _import('account/manager')
      }
    ]
  }
]

// 所有定义的路由都要写在下面的routers里
export const routers = [...constantRouterMap, otherRouter, ...appRouter]
