// 这是整个Vue项目的入口文件

// 安装Vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 关闭项目启动的生产提示
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router'
import store from './store/'  // 导入store目录中的index.js文件

import http from './utils/api'
Vue.prototype.$http = http

// 创建根组件实例
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
// $mount() 手动挂载
