const bunyan = require('bunyan');

// Init bunyan logger
const logger = bunyan.createLogger({
  name: 'SAM-Solution',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'warn',
      path: './SAM-Solution-error.log',
    },
  ],
});

module.exports = logger;
