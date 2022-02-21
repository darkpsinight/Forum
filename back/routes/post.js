const express = require('express')
const postController = require('../controllers/Post')
const route = express.Router()
/* const checkAuth = require('../middlewares/auth') */


route.post('/',/*  checkAuth, */ postController.create)
route.delete('/:id', /* checkAuth, */ postController.deletepost)
route.post('/:id', /* checkAuth, */ postController.updatePost)
route.post('/:id', /* checkAuth, */ postController.getById)
route.post('/:id', /* checkAuth, */ postController.getAll)


module.exports = route