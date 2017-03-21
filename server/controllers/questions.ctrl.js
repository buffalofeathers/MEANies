var express = require('express');
var procedures = require('../procedures/questions.proc');

var router = express.Router();

// Collection for all products
router.route('/')
    .get(function(req, res) {
        procedures.all().then(function(questions) {
            res.send(questions);
        }, function(err) {
            res.status(500).send(err);
        });
    });

// Collect product by given id
router.route('/:id')
    .get(function(req, res) {
        procedures.read(req.params.id).then(function(question) {
            res.send(question);
        }, function(err) {
            res.status(500).send(err);
        });
    });

module.exports = router;