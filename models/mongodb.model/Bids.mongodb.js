const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bids = new Schema({
    pet_id: {
        type: String,
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required :true
    },
    bidders: [{
        bidder_id: {
            type: String,
            required: true
        },
        bidder_amount: {
            type: Number,
            required: true
        }

    }]
})
module.exports = mongoose.model('Bids', Bids)