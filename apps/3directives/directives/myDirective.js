angular.module('myDirectives').directive('myDirective', function() {
    return {
        templateUrl: 'templates/myDirective.html',
        restrict: 'ECMA',
        scope: {
            myName: '=?name',
            provideFn: '&consumeFn',
            parentProperty: '='
        },
        require: ['^myParent', '^form'],
        link: function(scope, elements, atrrs, controllers) {
            scope.parentProperty = controllers[0].parentProperty;
            console.log(controllers);
        }
    }
});

angular.module('myDirectives').directive('myParent', function() {
    return {
        //templateUrl: 'templates/myDirective.html',
        //restrict: 'ECMA',
        scope: {},
        controller: function($scope) {
            $scope.parentProperty = 1;
            this.parentProperty = 42;
            this.printScope = function() {
                console.log($scope);
            }
        },
        controllerAs: 'ct',
        link: function(scope, element, atrrs, controllers) {
            element.css('border', '1px solid red');
            console.log('im parent');
        },
        transclude: true,
        templateUrl: 'templates/myParent.html'
    }
});
