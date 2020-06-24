// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 8889,
    proxy: {
      // 代理，转发
      '/jd': {
        target: 'http://localhost:9999',  // 目标（远程）服务器地址
        ws: true,
        changeOrigin: true
      },
      '/user': {
        target: 'http://localhost:9999',  // 目标（远程）服务器地址
        ws: true,
        changeOrigin: true
      }
    }
  }
}
