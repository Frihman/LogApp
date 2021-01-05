var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile(__dirname + '/../data/logs.json', (err, data) => {
    if (err) {
        throw err;
    }
    res.send(data);
  });
  
  
});

module.exports = router;