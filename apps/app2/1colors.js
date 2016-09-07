// creates a module with name App2
// 2nd arg - dependencies - its mandatory even if there are no
angular.module('app', []);
// creates a controller in App2 module
// 2nd argument is a factory-function - without it it will not work
angular.module('app').controller('ctrl', function($scope) {

    $scope.randomColor = function() {
        var c = '#'+Math.floor(Math.random()*16777215).toString(16);
        $scope.color = c;
        return c;
    };

    $scope.insertColor = function() {
        var container = document.querySelector('#color-container')
        var c = '#'+Math.floor(Math.random()*16777215).toString(16);
        var div = document.createElement('div');
        div.setAttribute('style', 'display: block; background-color: ' + c + '; width: 200px; height: 10px;');
        container.appendChild(div);
    };
});
