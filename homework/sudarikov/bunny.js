var pathString = 'L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5';
var path = pathString.split(', ');
var h = 0;
var w = 0;

var north = 'north';
var south = 'south';
var east = 'east';
var west = 'west';

var left = 'L';
var right = 'R'

var currentDirection = north;
var i = 0;
while (i != path.length) {
    var step = path[i++];
    var blocks = +step.substring(1);
    var turnDirection = step.substring(0, 1);


    if ((currentDirection === north && turnDirection === left) || (currentDirection === south && turnDirection === right)) {
        w = w - blocks;
        currentDirection = west;
        continue;
    }
    if ((currentDirection === south && turnDirection === left) || (currentDirection === north && turnDirection === right)) {
        w = w + blocks;
        currentDirection = east;
        continue;
    }
    if ((currentDirection === west && turnDirection === left) || (currentDirection === east && turnDirection === right)) {
        h = h - blocks;
        currentDirection = south;
        continue;
    }
    if ((currentDirection === east && turnDirection === left) || (currentDirection === west && turnDirection === right)) {
        h = h + blocks;
        currentDirection = north;
        continue;
    }
}

console.log(Math.abs(h) + Math.abs(w));
