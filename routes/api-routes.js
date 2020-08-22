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
