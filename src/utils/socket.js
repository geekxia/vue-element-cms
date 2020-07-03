import io from 'socket.io-client'

let socket = io('http://10.36.147.164:3000')
socket.on('connect', function() {
  console.log('socket连接成功')
})

export default socket
