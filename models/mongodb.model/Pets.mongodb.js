const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pets = new Schema({
    pet_name: {
        type: String,
        required: true
    },
    pet_type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false
    },
    owner_id: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    number_of_trials: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Pets' , Pets)