const mongoose = require('mongoose');

module.exports = function (config) {
  mongoose.connect(config.url);
};
