/**************************************************\
|   Authors : Santiago Sugrañes & Mathias Rogey
|
|   Description : Dispatches socket events to the
|           different scripts.
\**************************************************/

var wsListeners = [];

ws.onmessage = function (e) {
    wsListeners.forEach(item => {
        item(e);
    });
};

function addWsListener(listener) {
    wsListeners.push(listener);
}