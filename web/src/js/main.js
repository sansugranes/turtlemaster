/**************************************************\
|   Authors : Santiago Sugrañes & Mathias Rogey
|
|   Description : Gets the websocket listening IP
|           from the Start page and creates a new
|           turtle.
\**************************************************/

var ip = sessionStorage.getItem('ip');
const ws = new WebSocket(ip);
const turtle = new Turtle('Jimin');

ws.onerror = function (e) {
    console.log(e.message);
}