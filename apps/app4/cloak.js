var app = angular.module('app', []);
app.controller('ctrl', function($scope, $timeout) {
    var list = [];
    for (var i=0; i<1000; i++) {
        list.push({
            name: 'alex',
            date: '20.09.1990',
            id: i
        });
    }
    $timeout(function() {
        $scope.list = list;
        $scope.someLongLoadedValue = 42;

    }, 1000);

});