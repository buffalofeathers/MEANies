var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var procedures = require('../procedures/purchase.proc');
var emailSvc = require('../services/email.svc');


var router = express.Router();

// actually /api/purchase
router.post('/', function(req, res) {
    
    var amount = Number(req.body.amount);
    // amount = amount * 100; see shorthand below
    amount *= 100;

    // assuming front-end is sending POST request here with a request body with properties named amount and token

    stripeSvc.chargeCard(req.body.token, amount, 'MEANies')
    .then(function(success) {
        return procedures.create(req.body.productid, amount, success.id);
    })
    emailSvc.sendEmail(req.body.toAddress, 'no-reply@MEANies.com', 'MEANies uses Stripe!', req.body.content)
    .then(function(success) {
        console.log(success);
        console.log('Customer Email sent!');
    }, function(err) {
        console.log(err);
        res.sendStatus(500);
    })
    .then(function(success) {
        console.log(success);
        res.sendStatus(204);
    })
    .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;