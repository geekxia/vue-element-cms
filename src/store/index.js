import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 这就是一个store子模块
import study from './modules/study'
import song from './modules/song'

const store = new Vuex.Store({
  // modules这个选项用于把子module进行合并（带命名空间）
  modules: {
    study,
    song
  }
})

export default store
