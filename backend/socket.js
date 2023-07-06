const io = require('socket.io')(3000, {
    cors: {
        origin: '*'
    }
})

io.on("connection", socket => {
    console.log(socket.id);
    socket.on('send', value => {
        io.emit('receive', value);
    })

    socket.on('current-name', name => {
        io.emit('name', name);
    })

    socket.on('file-upload', values => {
        console.log(`Values: ${values}`);
        io.emit('file-details', values);
    })

})

