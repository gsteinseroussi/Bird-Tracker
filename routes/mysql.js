const connection = require("../config/connection.js");
const express = require('express');
const app = express();



.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM birds", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  