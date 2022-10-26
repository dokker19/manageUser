// models/user.js

const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    id: {
        type:Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    },
})

const USERS = mongoose.model('user', userSchema)
module.exports = USERS