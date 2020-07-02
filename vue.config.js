// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 8889,
    proxy: {
      // 代理，转发
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
