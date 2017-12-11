var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('root');
});

router.get('/about', function(req, res, next) {
  res.send('about');
});


module.exports = router;
