var App = angular.module('app', []);
App.controller('ctrl', function($scope, $timeout, $window) {
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.asdf = 'asdf';
        })
    }, 1000);
    // $timeout(function() {
    //     $scope.asdf = 'qwer';
    // }, 500);
    // $window.sc = $scope;
    // $scope.data = {
    //     www: 'www'
    // };
    // $scope.$watch('data.www', function(val) {
    //     console.log(val);
    // }, true)
});