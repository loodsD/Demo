var express = require('express');
var router = express.Router();
var mongooseController = require('../controllers/mongooseController');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iot/dashboard');
});

router.get('/history', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../data.json'), 'utf8', (err, data) => {
    if (err) {
      return next(err);
    }
    const jsonData = JSON.parse(data);
    res.render('iot/history', { data: jsonData });
  });
});

router.get('/alert', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../data.json'), 'utf8', (err, data) => {
    if (err) {
      return next(err);
    }
    const jsonData = JSON.parse(data);
    res.render('iot/alert', { data: jsonData });
  });
});


router.get('/graph', function(req, res, next) {
  res.render('iot/graph');
});

router.get('/about', function(req, res, next) {
  res.render('iot/about');
});

router.get('/durian-tunggal/latest', mongooseController.getLast10DurianTunggalData);

module.exports = router;
