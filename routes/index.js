const router = require('express').Router();

module.exports = function (app) {

  router.get('/', function (req, res) {
    res.json({ error: false, message: 'Welcome on the router !' });
  });

  // Set all the routes here for each model
  app.use('/', router);
  app.use('/logs/', require('./logRoute'));
};
