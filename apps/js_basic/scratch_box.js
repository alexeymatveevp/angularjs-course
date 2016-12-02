// inherit
function User(name, bday) {
    this.name = name;
    this.bday = bday;
    this.greet = function() {
        return "Hi, I'm " + name;
    }
}

var b = new User('Brendan');

console.log(b.name); // Brendan

User.prototype.greet = function() {
    return "Hi, " + this.name;
};
console.log(b.greet()); // Hi, Brendan


function User(name) {
    this.name = name;
    this.sex = 'm';
    return {
        name: function() {
            return 'Alex';
        }
    }
}

function JiraUser(id) {
    this.id = id;
    this.login = function() {
        // ...
    }
}

JiraUser.prototype = new User();
JiraUser.prototype.constructor = JiraUser;

var mike = new JiraUser(123);


function calc(a, b) {
    return a + b;
}
calc.prototype; // -> Object


Reflect.construct(User, ['alex']);

class User {
    constructor(name) {
        this.name = name;
    }
}

class JiraUser extends User {
    constructor(id) {
        super('[no name]');
        this.id = id;
    }
}

// function Function
var obj = {
    hello: 'hi'
};
var fn = new Function("return 'hello';");
console.log(fn());
var fn = function() {
    return this.hello;
};
console.log(fn.apply(obj));

// prototype
var o = {
    firstName: "Paul",
    lastName: "Irish"
};

Object.prototype.toString = function() {
    return 'hack';
};

console.log(o.toString());
var d = new Date();
console.log(d.toString());