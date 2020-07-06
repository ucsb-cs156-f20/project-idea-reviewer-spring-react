const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  const springPaths = [
      '/api',
      '/ideas',
      '/reviews',
      '/students',
      '/users',
      '/admin',
      '/logout',
      '/login',
      '/oauth2/authorization/google',
      '/'
    ];
  app.use(createProxyMiddleware(springPaths, { target: 'http://localhost:8080/' }));
};

