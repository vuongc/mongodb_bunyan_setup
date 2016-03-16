const bunyan = require('bunyan');

// Require log configuration file
const config = require('../config/log.json');

// Init bunyan logger
const logger = bunyan.createLogger({
  name: 'SAM-Solution',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: config.level,
      path: config.path,
    },
  ],
});

module.exports = logger;
