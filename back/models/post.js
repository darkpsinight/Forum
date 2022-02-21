const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        }
    ],
    image: {
        type: String,
        default: "postdefault.png"
    }
}, { timestamps: true })
module.exports = new mongoose.model('post', postSchema)