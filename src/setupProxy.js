const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:5000/',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/" // 把/api置空。http://localhost:3000/api/data.json 相當於http://localhost:5000/data.json
    }
  }));
};