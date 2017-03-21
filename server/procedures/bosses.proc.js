var db = require("../config/db");

exports.read = function(id) {
    return db.row("GetBossQuestion", [id]);
}

exports.all = function() {
    return db.rows("GetBossQuestions");
}