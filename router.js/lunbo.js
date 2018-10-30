const express = require("express");

const router = express.Router();

const NewsList = require("../model/newsList.js");

router.get("/getLunbo", function(req, res) {
    NewsList.getLunbo(function(error, data) {
    if (error) {
      res.json({ status: 0 });
    }
    var result = data;

    res.json([{ status: 1 }, { message: result }]);
  });
});

module.exports = router;
