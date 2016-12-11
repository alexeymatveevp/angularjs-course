var App = angular.module('app', []);

App.directive('draggable', function() {
    function link(scope, element, attrs) {
        scope.$watch(attrs.wat, function(val,old) {
            console.log('wat: ' + val + " " + old)
        });
        attrs.$observe('obs', function(val) {
            console.log("obs: " + val)
        });
        attrs.$observe('wat', function(val) {
            console.log("observe wat: " + val)
        })
    }
    return {
        link: link,
        // scope: { }
    }
});