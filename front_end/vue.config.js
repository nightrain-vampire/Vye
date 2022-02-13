let proxyObj = {}

proxyObj['/'] = {
  //websocket
  ws: false,
  target: 'http://localhost:8081',
  //发送请求的host头会被改成target的
  changeOrigin: true,
  //不重写请求地址
  pathRewrite: {
    '^/':'/'
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}