var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findAll = (req, res) =>
    User.find((err, users) => err
        ? res.send(500, err.message)
        : res.status(200).jsonp(users));

exports.findById = (req, res) =>
    User.findById(req.params.id, (err, user) => err
        ? res.send(500, err.message)
        : res.status(200).jsonp(user));

exports.add = (req, res) => {
    var user = new User({
        userName: req.body.userName,
    });

    user.save((err, user) => err
        ? res.status(500).send(err.message)
        : res.status(200).jsonp(user));
};

exports.delete = function (req, res) {
    User.findById(req.params.id, (err, user) =>
        user.remove((err, user) => err
            ? res.status(500).send(err.message)
            : res.status(200).jsonp(user))
    );
};