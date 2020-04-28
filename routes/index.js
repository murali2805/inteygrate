var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Salesforce - Node.js integration using Streaming API Demo by inteygrate.com' });
});

module.exports = router;
