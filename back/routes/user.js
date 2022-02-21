const express = require('express')

const userController = require('../controllers/user')
const route = express.Router()
const checkAuth = require('../middleware/auth')


route.post('/', userController.register)
route.post('/login', userController.login)
route.get('/isauth', checkAuth, userController.isAuthenticated)


module.exports = route