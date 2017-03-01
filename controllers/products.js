var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.findAll = (req, res) =>
    Product.find((err, products) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(products));

exports.findById = (req, res) =>
    Product.findById(req.params.id, (err, product) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(product));

exports.add = (req, res) => {
    var product = new Product({
        name: req.body.name,
        year: req.body.year,
        productIDSource: req.body.productIDSource,
        productID: req.body.productID
    });

    product.save((err, product) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(product));
};

exports.update = (req, res) =>
    Product.findById(req.params.id, (err, product) => {
        product.name = req.body.name;
        product.year = req.body.year;
        product.productIDSource = req.body.productIDSource;
        product.productID = req.body.productID;

        product.save((err, product) => err
            ? res.status(500).send(err.message)
            : res.status(200).send(product));
    });

exports.delete = function (req, res) {
    Product.findById(req.params.id, (err, product) =>
        product.remove((err, product) => err
            ? res.status(500).send(err.message)
            : res.status(200).send(product))
    );
};