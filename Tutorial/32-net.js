// importing net module
const net = require('net');

// creating tcp server,takes a callback function as as argument
// which will be invoked every time a new client connects to server
const server = net.createServer((socket) => {
    socket.end('bye\n');
}).on(`error`, (err) => {
    // handles error here
    if (err) {
        console.error(err);
    }
});

// grab a random port, as no specified port is mentioned
server.listen(() => {
    address = server.address();
    console.log(`Opened server on %j`, address);
});
