var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    ProductSchema = require('./product.js').schema;

var tradeProductSchema = new Schema({
    product:  ProductSchema,
    price: { type: Number, require: true },
    tradeType: { type: String, enum: ['BUY', 'SALE'] }
});

module.exports = mongoose.model('TradeProduct', tradeProductSchema);