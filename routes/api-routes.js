// require express, models
const express = require("express");

const db = require("../models");
const router = express.Router();


module.exports = function(app) {
  //testing
   console.log("here");

  // // where we add multiple api call request
  // Promise.all([
  //   fetch('https://jsonplaceholder.typicode.com/posts'),
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // ]).then(function (responses) {
  //   // Get a JSON object from each of the responses
  //   return Promise.all(responses.map(function (response) {
  //     return response.json();
  //   }));
  // }).then(function (data) {
  //   // Log the data to the console
  //   console.log(data);
  //   // You would do something with both sets of data here
    
  // }).catch(function (error) {
  //   // if there's an error, log it
  //   console.log(error);
  // });
  
};

//const db = require("../models");
const router = express.Router();

module.exports = function (app) {
  router.get("/", function (req, res) {
    birds.all(function (data) {
      const hbsObject = {
        birds: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
};

router.post("/birds", function (req, res) {
  console.log(req.body);
  birds.create(
    ["name", "location"],
    [req.body.name, req.body.location],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/birds/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  birds.update(
    {
      location: req.body.location,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

