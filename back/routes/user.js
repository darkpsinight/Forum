const express = require('express')

const userController = require('../controllers/user')
const route = express.Router()
const checkAuth = require('../middleware/auth')
const upload = require('../middleware/upload')


route.post('/', userController.register)
route.post('/login', userController.login)
route.get('/isauth', checkAuth, userController.isAuthenticated)
route.post('/logout', checkAuth, userController.logout)
route.get('/me', checkAuth, userController.getMe)
route.put('/avatar', checkAuth, upload.single('avatar'), userController.uploadAvatar)
route.put('/', checkAuth, userController.update)


module.exports = route