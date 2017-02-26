var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    year: { type: Number, min: 1900, max: 2100 },
    productIDSource: { type: String, enum: ['ASIN'], required: true },
    productID: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Product', productSchema);