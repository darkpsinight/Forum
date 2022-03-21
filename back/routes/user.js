const express = require('express')

const userController = require('../controllers/user')
const route = express.Router()
const checkAuth = require('../middleware/auth')


route.post('/', userController.register)
route.post('/login', userController.login)
route.get('/isauth', checkAuth, userController.isAuthenticated)
route.post('/logout', checkAuth, userController.logout)
route.get('/me', checkAuth, userController.getMe)


module.exports = route