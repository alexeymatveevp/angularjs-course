var App = angular.module('app', []);
App.controller('ctrl', function($scope) {
    $scope.name = 'Some name';
    console.log($scope);
    $scope.consumeData = function(data) {
        console.log('data recieved: ' + data);
    }
});
App.directive('myDirective', function() {
    return {
        restrict: 'ECMA',
        templateUrl: 'myDirective.html',
        scope: {
            name: '<',
            provideData: '&provideDataFn'
        },
        // scope: true,
        controller: function($scope) {
            // $scope.name = "I'm isolated";
            console.log($scope);
            this.controllerName = 'im ct.controllerName';
        },
        controllerAs: 'ct'
    }
});