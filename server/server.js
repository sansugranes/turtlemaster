const server = require('websocket').server;
const http = require('http');

const wss = new server({
    httpServer: http.createServer().listen(8080)
});

console.log("listening on port 8080")

wss.on('request', (request) => {
    // Accepting client connection
    var socket = request.accept(null, request.origin);
    console.log('Client conected');

    socket.on('message', (message) => {
        // Parsing the message data to a JSON object (originnaly string)
        // NOTE(SanSugranes): Message data should always contain "type" and "message"
        var data = JSON.parse(message.utf8Data);

        // Separating web client messages from in-game turtle messages
        switch (data.type) {
            // Handeling Web Client messages
            case 'webClient': {
                console.log("Message recieved from web client : " + data.message);
                
                // Mesage object to send
                var sendMessage = {
                    type: 'serverToTurtle',
                    message: 'forward'
                }

                wss.broadcast(JSON.stringify(sendMessage));
                break;
            }
            // Handeling Turtle messages
            case 'turtleClient': {
                if(data.message == "mapInfos")
                var blockData = {
                    blockInfo: data.blockInfo,
                    blockPos: data.blockPos
                }

                var sendMessage = {
                    type: 'mapInfos',
                    message: blockData
                }

                wss.broadcast(JSON.stringify(sendMessage));

                break;
            }
        }
    });
})