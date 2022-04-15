const Comment = require('../models/comment')
const Post = require('../models/post')

module.exports = {
    create: async (req, res) => {
        const data = {
            user: req.user.sub,
            text: req.body.text
        }

        const comment = new Comment(data)

        comment.save().then(com => {
            Post.findByIdAndUpdate({ _id: req.body.post }, { $push: { comments: com._id } }, { new: true })
                .populate('user')
                .populate({ path: 'comments', populate: { path: 'user' } })
                .then(post => {
                    res.status(200).json({
                        message: 'Comment created',
                        data: post
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Comment not created',
                        data: null
                    })
                })
        })
    }
}