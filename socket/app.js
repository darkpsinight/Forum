const io = require("socket.io")(4000, {
    cors: {
        origin: "http://localhost:3000",
    },
});


io.sockets.on('connection', function (socket) {
    console.log('Connected user.',socket.connected, socket.id);

    socket.on('disconnect', function (socket) {
        console.log('Disconnected user.',socket.connected, socket.id);
    });
});