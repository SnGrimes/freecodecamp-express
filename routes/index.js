var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Free Code Camp Dallas | Learn To Code' });
});

router.get('/jobboard', function (req, res, next) {
  res.render('jobboard', { title: 'Job Board'});
});
module.exports = router;
