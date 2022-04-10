const io = require("socket.io")(4000, {
    cors: {
        origin: "http://localhost:3000",
    },
});


io.on('connection', (socket) => {
    console.log('Connected user.✅');

    socket.on('addPost', data => {
        console.log(data);
        io.emit('newPost', data)
    })

    socket.on('disconnect', function (socket) {
        console.log('Disconnected user.⛔️');
    });
});