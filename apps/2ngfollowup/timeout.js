var App = angular.module('app', []);
App.controller('ctrl', function($scope, $timeout) {
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.asdf = 'asdf';
        })
    }, 1000);
    $timeout(function() {
        $scope.asdf = 'qwer';
    }, 500)
});