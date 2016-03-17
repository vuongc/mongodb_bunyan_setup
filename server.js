const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const logger = require('./libs/log');
const routes = require('./routes/index');

const port = 8080;
var config = require('./config/database.json');

// Set environment
app.set('port', process.env.port || port);

// User middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes
var router = require('./routes/index')(app);

// Get database instance
var database = require('./libs/database')(config.devDatabase);

// Create server
app.listen(app.get('port'), function () {
  logger.info('Express server listening on port ' + app.get('port'));
});
