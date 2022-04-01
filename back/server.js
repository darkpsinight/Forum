const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');

require('./config/database')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

// routes
app.use('/auth', require('./routes/user'))
app.use('/posts', require('./routes/post'))

//upload image
app.get("/images/:image", function (req, res) {
    res.sendFile(__dirname + "/uploads/" + req.params.image);
});

app.listen(5000, () => {
    console.log('server is runing on port 5000');
})
