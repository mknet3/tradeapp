var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    TradeProductSchema = require('./trade-product.js');

var userSchema = new Schema({
    userName: { type: String, unique: true, required: true },
    wishList: [{type: ObjectId, ref: 'TradeProduct'}],
    forSale: [{type: ObjectId, ref: 'TradeProduct'}]
});

module.exports = mongoose.model('User', userSchema);