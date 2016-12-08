var App = angular.module('app', []);
App.controller('ctrl', function($scope) {
    $scope.q = 'q';
    $scope.printScope = function() {
        console.log(this);
    };
    $scope.registerListeners = function() {
        this.$on('q', function(event, args) {
            console.log('q catched! in scope ' + event.currentScope.$id);
            console.log(event);
            console.log(args);
        });
        this.$on('w', function(event, args) {
            console.log('w is here!');
            console.log(event);
            console.log(args);
        })
    };
    $scope.emit = function(val) {
        this.$emit(val);
    };
    $scope.broadcast = function(val) {
        this.$broadcast(val);
    }
});