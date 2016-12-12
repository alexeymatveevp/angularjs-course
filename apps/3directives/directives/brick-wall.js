angular.module('myDirectives').directive('brickWall', function() {
    return {
        restrict: 'ECMA',
        priority: 1,
        templateUrl: 'templates/brick-wall.html',
        link: function() {
            console.log('im brick wall i have prio 1');
        }
    }
});