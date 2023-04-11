const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.afaqs.com',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  );
};
