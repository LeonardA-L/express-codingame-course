var express = require('express');
var router = express.Router();


router.get('/status', function(req, res) {
  res.send({
    status: 'ok'
  });
});

module.exports = router;
