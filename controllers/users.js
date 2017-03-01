var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findAll = (req, res) =>
    User.find((err, users) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(users));

exports.findById = (req, res) =>
    User.findById(req.params.id).populate('forSale').exec((err, user) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(user));

exports.add = (req, res) => {
    var user = new User({
        userName: req.body.userName,
    });

    user.save((err, user) => err
        ? res.status(500).send(err.message)
        : res.status(200).send(user));
};

exports.delete = function (req, res) {
    User.findById(req.params.id, (err, user) =>
        user.remove((err, user) => err
            ? res.status(500).send(err.message)
            : res.status(200).send(user))
    );
};