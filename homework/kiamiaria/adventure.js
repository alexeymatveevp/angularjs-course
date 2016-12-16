var pathString = 'L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5';
var path = pathString.split(', ');

var x = 0, y = 0;
var direction = 'N';

var roadMap = [];
var visitTwice = false;

var checkVisitedTwice = function (a, b) {
    if (roadMap.indexOf(a + ':' + b) > 0) {
        visitTwice = true;
        console.log("Oh! I've already been here!");
    }
    roadMap.push(a + ':' + b);
}

var turnAndMove = function (turn, steps) {
    if ((direction === 'N' && turn === 'L') || (direction === 'S' && turn === 'R')) {
        moveBySteps('W', steps);
    } else if ((direction === 'W' && turn === 'L') || (direction === 'E' && turn === 'R')) {
        moveBySteps('S', steps);
    } else if ((direction === 'S' && turn === 'L') || (direction === 'N' && turn === 'R')) {
        moveBySteps('E', steps);
    } else if ((direction === 'E' && turn === 'L') || (direction === 'W' && turn === 'R')) {
        moveBySteps('N', steps)
    }
}

var moveBySteps = function (newDirection, steps) {
    direction = newDirection;
    while (steps > 0 && !visitTwice) {
        if (direction === 'N') y++;
        else if (direction === 'W') x--;
        else if (direction === 'S') y--;
        else if (direction === 'E') x++;
        steps--;
        console.log('Current location: ' + x + ', ' + y);
        checkVisitedTwice(x, y);
    }
}

for (var i = 0; i < path.length; i++) {
    turnAndMove(path[i].substring(0, 1), +path[i].substring(1));
    if (visitTwice) break;
}

var distance = 0;
distance += x < 0 ? -x : x;
distance += y < 0 ? -y : y;

console.log('Distance to Bunny HQ: ' + distance);
//253
//126