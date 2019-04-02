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
    console.log("req.body", req.body);
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({ id: result.innerID });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.body.id;
    console.log("burger controller hit!");
    console.log(req.body);
    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        }, 
        condition,
        function(result){
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;