var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    ProductSchema = require('./product.js');

var tradeProductSchema = new Schema({
    product:  {type: ObjectId, ref: 'Product'},
    price: { type: Number, require: true },
    tradeType: { type: String, enum: ['BUY', 'SALE'] }
});

module.exports = mongoose.model('TradeProduct', tradeProductSchema);