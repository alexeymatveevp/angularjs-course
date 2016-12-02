function User(name) {
    console.log('User constructor');
    this.name = name;
    this.fn = function() {
        console.log('hi')
    }
}

function JiraUser(id) {
    console.log('JiraUser constructor');
    User.prototype.constructor.call(this, 'alex');
    this.id = id;
}

JiraUser.prototype = new User();
JiraUser.prototype.constructor = JiraUser;



var ju = new JiraUser(123);
var ji = new JiraUser(123);
console.log(ju.name);
ji.fn()
ju.fn = function() {console.log('ha')}
ju.__proto__.fn = function() {console.log('ho')}
ji.fn()
ju.fn();

var o = new Object();
var fn = new Function("console.log('im a fn')");
fn();