var App = angular.module('app', ['myDirectives']);
App.controller('ctrl', function($scope) {
    $scope.consumeData = function(foo,data) {
        console.log("here is data: " + data);
    }
});
