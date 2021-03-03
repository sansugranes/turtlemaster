const server = require('websocket').server;
const http = require('http');

const wss = new server({
    httpServer: http.createServer().listen(8080)
});

wss.on('request', (request) =>{
    var socket = request.accept(null, request.origin);

    console.log('Client conected');

    socket.on('message', (message) => {
        var data = JSON.parse(message.utf8Data);
    }); 
})