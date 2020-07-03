<template>
<div class="chat">

  <div class="container">

    <div ref='chat' class="top">
      <div class="row" v-for='item in msgArr' :key='item.id'>
        <!-- <span v-text='item.user'></span> -->
        <div v-html='item.msg'></div>
      </div>
    </div>

    <div class="bottom">
      <input class="msg" type="text" v-model.trim='msg' @keyup.enter='send'>
      <button class="btn" @click='send'>发送</button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Chat',
  data: function() {
    return {
      socket: null,
      content: '',
      msg: '',
      count: 0,
      msgArr: []
    }
  },
  mounted() {
    // // 创建客户的socket实例
    this.$socket.on('student', (msg)=> {
      // that.content += '<div>'+msg+'</div>'
      this.count++
      this.msgArr.push({
        id: this.count,
        msg: '<div>'+msg+'</div>'
      })
      // 在下一次DOM渲染结束时执行
      // that.$nextTick(()=>{
      //   that.$refs.chat.scrollTop = that.$refs.chat.scrollHeight
      // })
    })
  },
  updated() {
    let chatRef = this.$refs.chat
    chatRef.scrollTop = chatRef.scrollHeight
  },
  methods: {
    send() {
      // 向服务器发消息
      if(this.msg) {
        this.$socket.emit('server', this.msg)
        this.msg = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  background: white;
  padding: 20px;
}
.container {
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  height: 400px;
  position: relative;
  overflow: auto;
}

/* 底部按钮 */
.bottom {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  overflow: hidden;
}
.bottom .msg {
  float: left;
  width: 420px;
  height: 30px;
  box-sizing: border-box;
}
.bottom .btn {
  float: right;
  width: 70px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}

/* 消息面板 */
.top {
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 80px;
  right: 20px;
  overflow: auto;
  padding-bottom: 30px;
}
.row {
  line-height: 35px;
  width: 300px;
}
</style>
