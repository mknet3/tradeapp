var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.findAll = (req, res) =>
    Product.find((err, products) => err
        ? res.send(500, err.message)
        : res.status(200).jsonp(products));

exports.findById = (req, res) =>
    Product.findById(req.params.id, (err, product) => err
        ? res.send(500, err.message)
        : res.status(200).jsonp(product));

exports.add = (req, res) => {

    var product = new Product({
        name: req.body.name,
        year: req.body.year,
        IdSource: req.body.IdSource,
        Id: req.body.Id
    });

    product.save((err, product) => err
        ? res.status(500).send(err.message)
        : res.status(200).jsonp(product));
};

exports.update = (req, res) =>
    Product.findById(req.params.id, (err, product) => {
        product.name = req.body.name;
        product.year = req.body.year;
        product.IdSource = req.body.IdSource;
        product.Id = req.body.Id;

        product.save((err, product) => err
            ? res.status(500).send(err.message)
            : res.status(200).jsonp(product));
    });

exports.delete = function (req, res) {
    Product.findById(req.params.id, (err, product) =>
        product.remove((err, product) => err
            ? res.status(500).send(err.message)
            : res.status(200).jsonp(product))
    );
};