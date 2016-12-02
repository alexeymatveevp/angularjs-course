class User {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return this.name;
    }
}
class JiraUser extends User {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
}

var microsoft = new JiraUser('Microsoft', 321);
console.log(microsoft.greet());


// class Greeter {
//     constructor(public greeting: string) { }
//     greet() {
//         return "<h1>" + this.greeting + "</h1>";
//     }
// };
//
// var greeter = new Greeter("Hello, world!");
// var g = greeter.greeting;
//
// greeter.greet();
//
//
// var st: string = 'hello';
// var isHello: boolean = st;