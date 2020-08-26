const path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/allBirds", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/allBirds.html"));
  });
};
