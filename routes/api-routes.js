// require express, models
const db = require("../models");

module.exports = app => {
  app.get("/api/birds", (req, res) => {
    db.Bird.all({}).then(bird => res.json(bird));
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
    db.Bird.create(req.body).then(newBird => {
      res.json(newBird);
    });
  });
};
