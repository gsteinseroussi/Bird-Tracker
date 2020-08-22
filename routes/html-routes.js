// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
var express = require('express');
var app = express();


module.exports = (app) => {
  //testing
  console.log("ok");
  // viewed at http://localhost:8080
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

// app.listen(8080);
};
