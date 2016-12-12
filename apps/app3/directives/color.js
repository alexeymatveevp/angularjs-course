angular.module('myDirectives').directive('color', function() {
    return {
        priority: 5,
        link: function(scope, element, attrs) {
            console.log('im color i have prio 5');
            element.css('color', 'red');
        }
    }
});