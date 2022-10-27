const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_phone: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', Users)