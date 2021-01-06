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

router.post('/', function(req, res, next) {
    fs.readFile(__dirname + '/../data/logs.json', (err, data) => {
        if (err) {
            throw err;
        }

        var dataArray = JSON.parse(data);
        
        var dateNow = new Date();
        dateNow.setHours(dateNow.getHours() + 1);
        var logId = dataArray.length;
        var favorite;

        if (typeof req.body.favorite != 'undefined') {
            favorite = 'true';
        } else {
            favorite = 'false';
        }

        var log = {
            "id": logId,
            "content": req.body.content,
            "date": dateNow,
            "favorite": favorite,
            "mood": req.body.mood,
            "authorId": 0
        }

        dataArray.push(log);

        writeFile(dataArray);
    });

    function writeFile(data) {
        fs.writeFile(__dirname + '/../data/logs.json', JSON.stringify(data), (err) => {
            if (err) {
                throw err;
            }

            res.redirect('/');
        });
    }

});

module.exports = router;