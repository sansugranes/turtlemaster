var wsListeners = [];

ws.onmessage = function (e) {
    wsListeners.forEach(item => {
        item(e);
    });
};

function addWsListener(listener) {
    wsListeners.push(listener);
}