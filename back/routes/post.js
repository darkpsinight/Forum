const express = require('express')
const postController = require('../controllers/Post')
const checkAuth = require('../middleware/auth')
const route = express.Router()


route.post('/', checkAuth, postController.create)
route.delete('/:id', checkAuth, postController.deletepost)
route.put('/:id', checkAuth, postController.updatePost)
route.get('/:id', checkAuth, postController.getById)
route.get('/', checkAuth, postController.getAll)


module.exports = route