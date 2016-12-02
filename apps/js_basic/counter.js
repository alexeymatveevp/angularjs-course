// 1
// var counter = 0;
//
// function add() {
//     counter += 1;
//     console.log(counter);
// }
//
// add();
// add();
// add();



// 2
// function add() {
//     var counter = 0;
//     counter += 1;
//     console.log(counter);
// }
//
// add();
// add();
// add();


// 3
// var add = function () {
//     var counter = 0;
//     return function () {
//         counter += 1;
//         console.log(counter);
//     }
// }();
//
// add();
// add();
// add();

// 4
var counter = (function() {
    var i = 0;
    return {
        get: function() {
            return i;
        },
        inc: function() {
            return ++i;
        },
        set: function(value) {
            i = value
            return i;
        }
    }
}());
console.log(counter.get());
console.log(counter.set(3));
console.log(counter.inc());