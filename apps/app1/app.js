// creates a module with name App1
// 2nd arg - dependencies - its mandatory even if there are no
angular.module('App1', []);
// creates a controller in App1 module
// 2nd argument is mandatory - without it it will not work
angular.module('App1').controller('App1Ctrl', function($scope) {
    $scope.randomColor = function() {
        var c = '#'+Math.floor(Math.random()*16777215).toString(16);
        $scope.msg = c;

    }
});