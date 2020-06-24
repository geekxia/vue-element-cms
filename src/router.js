// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)

import navs from '@/utils/navs'
import Login from '@/components/common/login/Login.vue'



const routes = []

navs.map(ele=>{
  routes.push({path:ele.path, component:ele.comm})
  if(ele.children) {
    ele.children.map(ele=>{
      routes.push({path:ele.path, component:ele.comm})
    })
  }
})

let router = new VueRouter({
  mode: 'history',
  routes: [
    ...routes,
    { path: '/login', components: {login: Login } },
    { path: '/*', redirect: '/home'}
  ]
})

router.beforeEach(function(to, from, next) {
  if (to.path != '/login') {
    if(localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 抛出实例
export default router
