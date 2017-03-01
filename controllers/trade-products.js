var mongoose = require('mongoose');
var TradeProduct = mongoose.model('TradeProduct');

exports.findAll = (req, res) =>
    TradeProduct.find((err, tradeProducts) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(tradeProducts));

exports.findById = (req, res) =>
    TradeProduct.findById(req.params.id, (err, tradeProduct) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(tradeProduct));

exports.add = (req, res) => {
    var tradeProduct = new TradeProduct({
        product: req.body.product,
        price: req.body.price,
        tradeType: req.body.tradeType
    });

    tradeProduct.save((err, tradeProduct) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(tradeProduct));
};

exports.update = (req, res) =>
    TradeProduct.findById(req.params.id, (err, tradeProduct) => {
        tradeProduct.product = req.body.product;
        tradeProduct.price = req.body.price;
        tradeProduct.tradeType = req.body.tradeType;

        tradeProduct.save((err, tradeProduct) => err
            ? res.status(500).send(err.message)
            : res.status(200).send(tradeProduct));
    });

exports.delete = function (req, res) {
    TradeProduct.findById(req.params.id, (err, tradeProduct) =>
        tradeProduct.remove((err, tradeProduct) => err
            ? res.status(500).send(err.message)
            : res.status(200).send(tradeProduct))
    );
};