var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    }, 
    // the variables cols and vals are arrays
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};
// export all db functions for the controller (burger_controller.js)
module.exports = burger;