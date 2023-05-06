const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderer: {
        name: String
    },
    restaurant: {
        type: String
    },
    food: {
        type: Array
    },
    total_price: {
        type: Number
    },
    card_name: {
        type: Number
    },
    card_date: {
        type: Text
    },
    card_code: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);