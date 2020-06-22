// 每一个子module实际上就是一个普通json对象，可以包括state、getters、mutations、actions这些选项
const studyModule = {
  // 开启子模块的命名空间
  // 这个namespaced一定要开启，否则在组件使用 map...系列的api进行映射时是会报错的。
  namespaced: true,
  state: {
    msg: 2001,
    foo: 'foo'
  },
  getters: {
    msg2: function(state) {
      return state.msg*100
    }
  },
  mutations: {
    // payload 负载，就是组件带过来的数据
    updateMsg(state, payload) {
      state.msg += payload.count
    }
  },
  actions: {
    asyncUpdateMsg(store, payload) {
      setTimeout(()=>{
        // 在组件
        // this.$store.commit('updateMsg', payload)
        // 在atcions中，提交一个mutations方法
        store.commit('updateMsg', payload)
      }, 2000)
    }
  }
}

export default studyModule
