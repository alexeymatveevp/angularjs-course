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
        require: ['^myParent', '?^^ngModel'],
        templateUrl: 'templates/myDirective.html',
        scope: {
            name: '<',
            provideData: '&provideDataFn',
            parentProperty: '='
        },
        // scope: true,
        controller: function($scope) {
            // $scope.name = "I'm isolated";
            console.log($scope);
            this.controllerName = 'im ct.controllerName';
        },
        link: function(scope, element, attributes, controllers) {
            console.log(controllers);
            var parentCtrl = controllers[0];
            scope.ct.parentProperty = parentCtrl.parentProperty;
        },
        controllerAs: 'ct',
        bindToController: true
    }
});
App.directive('myParent', function() {
    return {
        transclude: true,
        controller: function($scope) {
            console.log('im parent');
            this.parentProperty = 42;
        },
        controllerAs: 'ct',
        // template: '<div ng-transclude></div>'
        templateUrl: 'templates/myParent.html'
    }
});