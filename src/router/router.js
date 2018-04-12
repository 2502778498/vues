import Vue from 'vue'
import Router from 'vue-router'

// path:真实的路径
import page1 from '../view/page1/form'
import user from '../view/user/user'
import page3 from '../view/axios'
import page2 from '../view/page2/nav'
import show from '../show'
import Page404 from '../view/404'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: show
  },
  {
    path: '/show', // 仅作为url标识
    component: show,
    children: [
      {
        path: 'page3',
        component: page3
      },
      {
        path: 'page2',
        component: page2
      }
    ]
  },
  {
    path: '/view/page1/page1',
    component: page1
  },
  {
    path: '/view/user/:id', // 动态路由
    component: user
  },
  { path: '*', component: Page404 }
]

var router = new Router({
  routes
})
export default router
