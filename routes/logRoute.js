const router = require('express').Router();

const Log = require('../models/log');

// Get all the logs from server (useless here)
router.get('/', function (req, res) {
  Log.find({}, function (err, logs) {
    if (err) {
      res.json({ error: true, data: err });
    } else {
      res.json({ error: false, data: logs });
    }
  });
});

// Get all the log with a specific user_id
router.get('/:user_id', function (req, res) {
  Log.find({
    author_id: req.params.user_id,
  }, function (err, logs) {
    if (err) {
      res.json({ error: true, data: err });
    } else {
      res.json({ error: false, data: logs });
    }
  });
});

module.exports = router;
