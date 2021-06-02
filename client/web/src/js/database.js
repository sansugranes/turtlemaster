let storageObj = JSON.parse(localStorage.getItem('storageObj'));

function initDatabase() {
    storageObj = {};
    storageObj.database = [];
    storageObj.turtleInfos = { position: { x: 0, y: 0, z: 0 }, facing: 0 };

    localStorage.setItem('storageObj', JSON.stringify(storageObj));
}

console.log(storageObj);

if (storageObj == null || storageObj.database == null || storageObj.turtleInfos == undefined || storageObj.turtleInfos.position == null) {
    initDatabase();
}

addWsListener(handleDatabaseMessage);

function addBlock(block) {
    storageObj.database.push(block);
}

function handleDatabaseMessage(e) {
    var data = JSON.parse(e.data);

    switch (data.type) {
        case "mapInfos":
            {
                var infos = data.message;
                if (infos.blockInfo != undefined) {

                    if (infos.blockInfo != "No block to inspect") {

                        var block = {
                            name: infos.blockInfo.name,
                            position: { x: infos.blockPos.x, y: infos.blockPos.y, z: infos.blockPos.z }
                        }

                        addBlock(block);
                    }
                }
                break;
            }
    }
}

window.onbeforeunload = function () {
    storageObj.turtleInfos = turtle.getTurtle();
    localStorage.setItem('storageObj', JSON.stringify(storageObj));
}
