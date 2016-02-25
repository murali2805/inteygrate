var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'inteygrate.com:Salesforce - Node.js integration using Streaming API Demo' });
});

module.exports = router;
