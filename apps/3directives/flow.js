var App = angular.module('app', []);
App.controller('ctrl', function($scope) {
    $scope.$observe('w', function(val, old) {
        console.log(val + ' ' + old);
    })
});
App.directive('draggable', function() {
    function link(scope, element, attrs) {
        scope.$watch('asdf', function(val,old) {
            console.log(val + " " + old)
        })
    }
    return {
        link: link,
        scope: {
            asdf:  '='
        }
    }
});