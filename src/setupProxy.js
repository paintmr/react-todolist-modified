const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    // target: 'http://localhost:3344/',
    target: 'https://upload-pic-and-todolist-server.herokuapp.com/',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "" // 把/api置空。http://localhost:5000/api/data.json 相當於http://localhost:5000/data.json
    }
  }));
};