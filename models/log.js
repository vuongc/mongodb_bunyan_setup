const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model('Log', new Schema({
  name:      String,
  hostname:  String,
  pid:       Number,
  author_id: String,
  level:     String,
  err:       Object,
  msg:       String,
  time:    { type: Date, default: Date.now },
  v:         Number,
}, {
  autoIndex: true,
}));
