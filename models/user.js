var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    tradeProductSchema = require('./trade-product.js').schema;

var userSchema = new Schema({
    userName: { type: String, unique: true, required: true },
    wishList: [tradeProductSchema],
    forSale: [tradeProductSchema]
});

module.exports = mongoose.model('User', userSchema);