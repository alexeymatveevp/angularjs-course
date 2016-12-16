/**
 * Created by amylniko on 15.12.2016.
 */
//$(document).ready(function () {
    var directions = [[0,1],[1,0],[0,-1],[-1,0]];
    var completedCells = [{x:0,y:0}];
    var currentDirection = 0;
    var curX=0;
    var curY=0;
    var lastX;
    var lastY;
    var input = "R4, R3, L3, L2, L1, R1, L1, R2, R3, L5, L5, R4, L4, R2, R4, L3, R3, L3, R3, R4, R2, L1, R2, L3, L2, L1, R3, R5, L1, L4, R2, L4, R3, R1, R2, L5, R2, L189, R5, L5, R52, R3, L1, R4, R5, R1, R4, L1, L3, R2, L2, L3, R4, R3, L2, L5, R4, R5, L2, R2, L1, L3, R3, L4, R4, R5, L1, L1, R3, L5, L2, R76, R2, R2, L1, L3, R189, L3, L4, L1, L3, R5, R4, L1, R1, L1, L1, R2, L4, R2, L5, L5, L5, R2, L4, L5, R4, R4, R5, L5, R3, L1, L3, L1, L1, L3, L4, R5, L3, R5, R3, R3, L5, L5, R3, R4, L3, R3, R1, R3, R2, R2, L1, R1, L3, L3, L3, L1, R2, L1, R4, R4, L1, L1, R3, R3, R4, R1, L5, L2, R2, R3, R2, L3, R4, L5, R1, R4, R5, R4, L4, R1, L3, R1, R3, L2, L3, R1, L2, R3, L3, L1, L3, R4, L4, L5, R3, R5, R4, R1, L2, R3, R5, L5, L4, L1, L1".split(", ");
    input.forEach(function (item,i,arr) {
        var direction = item.charAt(0);
        if(direction === "R") {
            currentDirection-=1;
            if(currentDirection<0) {
                currentDirection+=4;
            }
        } else {
            currentDirection+=1;
            if(currentDirection>=4) {
                currentDirection-=4;
            }
        }
        var stepsNumber = item.substring(1,item.length);
        lastX = curX;
        lastY = curY;
        curX += directions[currentDirection][0]*Number(stepsNumber);
        curY += directions[currentDirection][1]*Number(stepsNumber);
        var tmpX = lastX;
        var tmpY = lastY;
        for(var j=0;j<(Math.abs(Math.abs(curX)-Math.abs(lastX))+Math.abs(Math.abs(curY)-Math.abs(lastY)));j++) {
            tmpX+=directions[currentDirection][0];
            tmpY+=directions[currentDirection][1];
            completedCells.forEach(function (item,i,arr) {
                if(item.x === tmpX && item.y === tmpY) {
                    console.log("You visit this place again:"+tmpX+" "+tmpY);
                    return;
                }
            })
            completedCells.push({x:tmpX,t:tmpY});
        }
    })
    console.log(curX);
    console.log(curY);
//})