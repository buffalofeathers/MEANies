var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

router.post('/', function(req, res) {
    var usEmail = [
        'redbullgrl@yahoo.com',
        'email@parrishholley.com',
        'linnterweb@gmail.com'
    ]
    for (var i = 0; i < usEmail.length; i++) {
        var usEmailAddress = usEmail[i];
        emailSvc.sendEmail(usEmailAddress, req.body.fromAddress, req.body.subject, req.body.content)
        .then(function(success) {
            console.log(success);
            res.send('Email sent!');
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    }
})

router.post('/customer', function(req, res) {
    emailSvc.sendEmail(req.body.toAddress, 'linnterweb@gmail.com', 'Your recent purchase from FlipCup', req.body.content)
    .then(function(success) {
        console.log(success);
        res.send('Customer Email sent!');
    }, function(err) {
        console.log(err);
        res.sendStatus(500);
    });
})

module.exports = router;