angular.module('myDirectives').directive('p', function() {
    return {
        link: function(scope, element, attrs) {
            element.text('im a p');
        }
    }
});