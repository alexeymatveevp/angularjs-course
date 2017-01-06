class Axis {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    add(x, y) {
        this._x += x;
        this._y += y;
    }
}

const DIRECTION = {
    N: new Axis(0, 1),
    E: new Axis(1, 0),
    W: new Axis(-1, 0),
    S: new Axis(0, -1)
};

const ROTATION = {
    R: "R",
    L: "L"
};

function calculate(input) {
    let currentDirection = DIRECTION.N;
    let currentPoint = new Axis(0, 0);
    let history = [];

    for (let i = 0; i < input.length; i++) {
        currentDirection = retrieveNextDirection(currentDirection, input[i].charAt(0));
        let steps = input[i].substring(1, input[i].length);
        for (let j = 0; j < steps; j++) {
            currentPoint.add(currentDirection.x, currentDirection.y);

            if (contains(history, currentPoint)) {
                return Math.abs(currentPoint.x) + Math.abs(currentPoint.y);
            }
            history.push(new Axis(currentPoint.x, currentPoint.y));
        }
    }

    return Math.abs(currentPoint.x) + Math.abs(currentPoint.y);
}

function retrieveNextDirection(currentDirection, rotation) {
    switch (currentDirection) {
        case DIRECTION.N:
            return rotation === ROTATION.R ? DIRECTION.E : DIRECTION.W;
        case DIRECTION.E:
            return rotation === ROTATION.R ? DIRECTION.S : DIRECTION.N;
        case DIRECTION.S:
            return rotation === ROTATION.R ? DIRECTION.W : DIRECTION.E;
        case DIRECTION.W:
            return rotation === ROTATION.R ? DIRECTION.N : DIRECTION.S;
        default:
            return null;
    }
}

function contains(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].x === elem.x && arr[i].y === elem.y) {
            return true;
        }
    }
    return false;
}

const INPUT = "L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5";

console.log(calculate(INPUT.split(", ")));


