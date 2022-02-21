const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "user",
        enum:["user","admin"]
    },
    avatar:{
        type: String,
        default: "avatardefault.png"
    },
})

module.exports = new mongoose.model('user',userSchema)