app.factory('myFactory', function() {

    // factory returns an object
    // you can run some code before

    return {
        sayHello : function(name) {
            return "Hi " + name + "!";
        }
    }
});