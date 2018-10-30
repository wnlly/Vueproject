const express = require("express");

const router = express.Router();

const NewsList = require("../model/newsList.js");

router.get("/getLunbo", function(req, res) {

    NewsList.getLunbo(function(error, data) {
    if (error) {
     return  res.send({ status: 0 });
    }
    var result = data;

    res.send([{ status: 1 }, { message: result }]);
  });
});


router.get("/getnewslist",function(req,res){
    NewsList.getnewslist(function(error,data){
      if(error){
        return res.send({status:0})
      }

      var body  = {
        stattus:1,
        message:data
      };

      res.send(body)
    })
})

module.exports = router;
