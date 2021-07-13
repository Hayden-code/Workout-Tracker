// const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.render("index");
// });

// router.get("/stats", (req, res) => {
//   res.render("stats");
// });

// router.get("/exercise", (req, res) => {
//   res.render("exercise");
// });

// module.exports = router;

// ---------------------------------------------------------------------------------------------------

const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/exercise", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
