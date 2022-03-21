const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


function signToken(userID, role) {
    return jwt.sign({
        iss: 'moonServer',
        sub: userID,
        role: role
    }, 'secret', { expiresIn: '1h' })
}


module.exports = {
    register: (req, res) => {
        const { email, password, name } = req.body
        /* console.log(req.body); */
        if (!email || !password || !name)
            return res.status(400).json({ message: 'Please enter all fields' })
        User.findOne({ email: email }, async (err, user) => {
            if (!user) {
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(password, salt)
                const newuser = new User({
                    name: name,
                    email: email,
                    password: hash
                })
                User.create(newuser, (err, user) => {
                    if (err) {
                        res.status(500).json({
                            message: 'User not created'
                        })
                    } else {

                        //pour afficher ce message aprés 3 secondes
                        setTimeout(() => {
                            res.status(200).json({
                                message: 'User successfully created'
                            })
                        }, 3000);
                    }

                })
            } else {
                res.status(400).json({
                    message: 'user with this email is already exist'
                })
            }
        })
    },


    login: (req, res) => {
        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).json({ message: 'Please enter all fields' })
        User.findOne({ email }, async (err, user) => {
            if (!user) {
                res.status(403).json({ message: 'User with email does not exist' })
                console.log('wrongmail');
            } else {
                const ismatch = await bcrypt.compare(password, user.password)
                if (ismatch) {
                    console.log('ismatch');
                    const token = signToken(user._id, user.role);
                    res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });
                    return res.status(200).json({ isAuthenticated: true, role: user.role })
                } else {
                    res.status(403).json({ message: 'Invalid password !' })
                    console.log('notmatch');
                }
            }
        })
    },


    logout: (req, res) => {
        res.clearCookie("access_token");
        return res.status(200).json({ success: true, user: { email: "", role: "" } })
    },


    isAuthenticated: (req, res) => {
        const { role } = req.user
        return res.status(200).json({ isAuthenticated: true, role: role })
    },


    getMe: (req, res) => {
        const { sub } = req.user

        User.findOne({ _id: sub }, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: 'User not found',
                    data: null
                })
            } else {
                res.status(200).json({
                    message: 'User found',
                    data: user
                })
            }
        })
    },


    uploadAvatar: (req, res) => {
        const { sub } = req.user

        User.findByIdAndUpdate({ _id: sub }, { avatar: req.file.filename }, { new: true }, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: 'Error uploading avatar',
                    data: null
                })
            } else {
                res.status(200).json({
                    message: 'Uploading avatar success',
                    data: user
                })
            }
        })
    },


    update: (req, res) => {
        const { sub } = req.user

        User.findByIdAndUpdate({ _id: sub }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: 'Error updating user',
                    data: null
                })
            } else {
                res.status(200).json({
                    message: 'Successfuly updated user',
                    data: user
                })
            }
        })
    },


}