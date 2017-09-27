var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    year: { type: Number, min: 1900, max: 2100 },
    IdSource: { type: String, enum: ['ASIN'], required: true },
    Id: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Product', productSchema);