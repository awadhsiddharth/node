const net = require('net');

const server = net.createServer((socket) => {
    socket.end('bye\n');
}).on(`error`, (err) => {
    // handles error here
    if (err) {
        console.error(err);
    }
});

// grab a random port
server.listen(() => {
    address = server.address();
    console.log(`Opened server on %j`, address);
});
