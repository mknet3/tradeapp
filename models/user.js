var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    wishList: [{type: mongoose.Schema.Types.ObjectId, ref: 'TradeProduct'}],
    forSale: [{type: mongoose.Schema.Types.ObjectId, ref: 'TradeProduct'}]
});

module.exports = mongoose.model('User', userSchema);