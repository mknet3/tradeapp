var mongoose = require('mongoose');
var TradeProduct = mongoose.model('TradeProduct');

exports.findById = (req, res) =>
    TradeProduct.findById(req.params.id).populate('product').exec((err, tradeProduct) => err
        ? res.send(500, err.message)
        : res.status(200).jsonp(tradeProduct));

exports.add = (req, res) => {

    var tradeProduct = new TradeProduct({
        product: req.body.product,
        price: req.body.price
    });

    tradeProduct.save((err, tradeProduct) => err
        ? res.status(500).send(err.message)
        : res.status(200).jsonp(tradeProduct));
};