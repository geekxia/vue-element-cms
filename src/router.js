// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)

import navs from '@/utils/navs'



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
  routes: [
    ...routes,

    { path: '/*', redirect: '/home'}
  ]
})

// 抛出实例
export default router
