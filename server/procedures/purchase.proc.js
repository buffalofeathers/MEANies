var db = require('../config/db');

exports.create = function(productid, price, stripetransactionid) {
    return db.row('InsertPurchase', [productid, price, stripetransactionid]);
}