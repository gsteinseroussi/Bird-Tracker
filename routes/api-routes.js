// require express, models

const db = require("../models");
const axios = require("axios");

module.exports = app => {
  app.get("/api/birds", (req, res) => {
    db.Bird.findAll({}).then(bird => res.json(bird));
  });

  app.get("/api/birds/:id", (req, res) => {
    db.Bird.findOne({
      where: {
        id: req.params.id
      }
    }).then(bird => {
      res.json(bird);
    });
  });

  app.post("/api/birds", (req, res) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&text=${req.body.name}&sort=interestingness-desc&group_id=14477233%40N00&extras=url_q&per_page=1&page=1&format=json&nojsoncallback=1`
      )
      .then(data => {
        const { name, location, activity, time } = req.body;
        const imageURL = data.data.photos.photo[0].url_q;
        db.Bird.create({
          name,
          location,
          activity,
          time,
          imageUrl: imageURL
        }).then(newBird => {
          res.json(newBird);
        });
      });
  });
};
