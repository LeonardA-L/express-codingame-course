var express = require('express');
var router = express.Router();

// Our database :
var userbase = require('./userbase');

router.get('/users', function(req, res) {
  res.send(userbase);
});

router.get('/users/:index', function(req, res) {
  var index = parseInt(req.params.index); // Don't forget to parse as a number :)
  res.send(userbase[index]);
});

// TODO create an API with the form /users/:index/:amount returning `amount` users starting at index `index`
router.get('/users/:index/:amount', function(req, res) {
  // TODO
});
//

module.exports = router;
