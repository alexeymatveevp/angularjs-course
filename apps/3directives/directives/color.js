angular.module('myDirectives').directive('color', function() {
    return {
        link: function(scope, element, attrs) {
            element.css('color', 'red');
        }
    }
});