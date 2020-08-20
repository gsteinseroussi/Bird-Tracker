// require express, models
var express = require("express");
const db = require("../models");
var router = express.Router();

module.exports = function(app) {
  router.get("/", function(req, res) {
    birds.all(function(data) {
      var hbsObject = {
        birds: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
};

router.post("/birds", function(req, res) {
  console.log(req.body);
  birds.create(
    ["name", "location"],
    [req.body.name, req.body.location],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/birds/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  birds.update(
    {
      location: req.body.location,
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
