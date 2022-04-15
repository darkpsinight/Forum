const express = require('express')
const commentController = require('../controllers/comment')
const checkAuth = require('../middleware/auth')
const route = express.Router()

route.post('/', checkAuth, commentController.create)

module.exports = route