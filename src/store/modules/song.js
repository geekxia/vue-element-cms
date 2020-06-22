import fetch from '@/utils/fetch'

const songModule = {
  namespaced: true,
  state: {
    songMsg: 1001,
    songList: []     // 音乐列表
  },
  getters: {},
  // mutations用于更新state
  mutations: {
    updateSongList(state, payload) {
      state.songList = payload
    }
  },
  // actions用于与后端API进行交互
  actions: {
    // 在actions中与后端API进行数据交互
    // 这是异步的，当拿到数据时使用mutations方法把数据赋值给state
    // 在组件中就可以使用mapState来使用后端返回的数据了
    getQQMusic(store, payload) {
      fetch({
        url: '/soso/fcgi-bin/client_search_cp',
        method: 'GET',
        params: payload
      }).then(res=>{
        store.commit('updateSongList', res.song.list)
      })
    }
  }
}

export default songModule
