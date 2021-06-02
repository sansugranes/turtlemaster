const MoveDirection = {
    FRONT : 0,
    BACK : 1,
    RIGHT : 2,
    LEFT : 3,
    UP : 4,
    DOWN : 5
};

const Cartesian = {
    NORTH : 0,
    SOUTH : 1,
    EST : 2,
    WEST : 3
};

const toTurtle = "webClient";

class Turtle {

    constructor(name) {
        this._name = name;
        this._data = {type: "", message: ""};
        this._position = null;
        this._facing = null;
    }

    eval(method) {
        ws.send(this.#buildMessage('toTurtleEval'))
    }

    updateTurtle(turtle) {
        this._position = turtle.position;
        this._facing = turtle.facing;
    }

    getTurtle() {
        return {position: this._position, facing: this._facing}
    }

    move(direction) {
        switch (direction) {

            case MoveDirection.FRONT:
                ws.send(this.#buildMessage(toTurtle, 'front'));
                break;
            case MoveDirection.BACK:
                ws.send(this.#buildMessage(toTurtle, 'back'));
                break;
            case MoveDirection.RIGHT:
                ws.send(this.#buildMessage(toTurtle, 'right'));
                break;
            case MoveDirection.LEFT:
                ws.send(this.#buildMessage(toTurtle, 'left'));
                break;
            case MoveDirection.UP:
                ws.send(this.#buildMessage(toTurtle, 'up'));
                break;
            case MoveDirection.DOWN:
                ws.send(this.#buildMessage(toTurtle, 'down'));
                break;           
            default:
                throw new Error("This isn't supposed to happend");
                break;

            console.log('sended');

        }
    }

    #buildMessage(type, message) {
        this._data.type = type;
        this._data.message = message;

        return JSON.stringify(this._data);
    }
}