var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  var logAdded = req.session.valid;
  req.session.valid = null;
  
  if (logAdded == true) {
    res.render('index', { title: 'Log App',  added: 'true'});
  } else {
    res.render('index', { title: 'Log App', added: 'false'});
  }
  
});

module.exports = router;
