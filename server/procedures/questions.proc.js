var db = require("../config/db");

exports.read = function(id) {
    return db.row("GetQuestion", [id]);
}

exports.all = function() {
    return db.rows("GetQuestions");
}