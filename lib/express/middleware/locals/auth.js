

var self = module.exports = {
  __module: {
    provides: {
      registerMiddleware: {
        before: ['express/middleware/routes'],
        after: ['express/middleware/authentication']
      }
    }
  },

  registerMiddleware: function(expressApp) {
    //pass the user object into the view
    expressApp.use('/', function(req, res, next) {
      expressApp.locals.auth = {
        user: req.user
      };
      next();
    });
  }
};
