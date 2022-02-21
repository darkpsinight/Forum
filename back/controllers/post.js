const post = require('../models/post')


module.exports = {
    create: (req, res) => {
        const data = {
            user: req.user.sub,
            description: req.body.description,
            image: req.file && req.file.filename
        }
        post.create(data, (err, post) => {
            if (err) {
                res.status(500).json({ message: 'post not created'+err })
            } else {
                res.status(200).json({ message: 'post successfuly created' })
            }
        })
    },
    deletepost: (req, res) => {
        post.findByIdAndDelete({ _id: req.params.id }, (err, post) => {
            if (err) {
                res.status(500).json({
                    message: ' post not deleted'
                })
            } else {
                res.status(200).json({
                    message: ' post successfuly deleted'
                })
            }
        })
    },
    getById: (req, res) => {
        post.findBYId({ _id: req.params.id })
            .populate('user')
            .then(post => {
                res.status(200).json({ message: "post", data: post })
            })
            .catch(err => {
                res.status(500).json({ message: "post not found", data: null })
            })
    },
    getAll: (req, res) => {
        post.find({})
            .populate('user')
            .then(posts => {
                res.status(200).json({ message: "posts", data: posts })
            })
            .catch(err => {
                res.status(500).json({ message: "no posts in system", data: null })
            })
    },
    updatePost: (req, res) => {
        post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },
            (err, post) => {
                if (err) {
                    res.status(500).json({ message: "post not updated", data: null })
                } else {
                    res.status(200).json({ message: "post successfuly updated", data: post })
                }
            }
        )
    },
}