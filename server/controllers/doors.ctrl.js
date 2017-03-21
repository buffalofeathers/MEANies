var express = require('express');
var procedures = require('../procedures/doors.proc');

var router = express.Router();

// Collection for all products
router.route('/')
    .get(function(req, res) {
        procedures.all().then(function(doors) {
            res.send(doors);
        }, function(err) {
            res.status(500).send(err);
        });
    });

    module.exports = router;