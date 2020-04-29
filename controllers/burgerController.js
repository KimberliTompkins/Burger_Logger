var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database function
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those ro
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/burgers/:id", function(req, res) {



});

// Export routes for server.js to use.
module.exports = router;
