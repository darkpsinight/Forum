const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })
module.exports = new mongoose.model('comment', commentSchema)