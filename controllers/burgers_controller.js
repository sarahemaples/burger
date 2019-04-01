var express = require("express");

var router = express.Router();

// import model burger.js to use its db functions
var burger = require("../models/burger");

// default route
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["name", "devoured"], [req.body.name, false], function(result){
        res.json({ id: result.innerID });
    });
});


module.exports = router;