const post = require('../models/post')


module.exports = {
    create: (req, res) => {
        const data = {
            user: req.user.sub,
            text: req.body.text,
            /* image: req.file && req.file.filename */
        }

        console.log(data)

        post.create(data, (err, post) => {
            if (err) {
                res.status(500).json({ message: 'Post not created , '+ err })
            } else {
                res.status(200).json({ message: 'Post successfuly created', data : post })
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
    getOwnPosts: (req, res) => {
        const { sub } = req.user

        post.find({ user: sub })
            .populate('user')
            .then(posts => {
                res.status(200).json({
                    message: 'user posts',
                    data: posts
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'no user posts',
                    data: null
                })
            })
    },
}