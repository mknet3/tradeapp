var mongoose = require('mongoose');

var tradeProductSchema = new mongoose.Schema({
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    price: { type: Number, require: true }
});

module.exports = mongoose.model('TradeProduct', tradeProductSchema);