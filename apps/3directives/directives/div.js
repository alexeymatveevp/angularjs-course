angular.module('myDirectives').directive('div', function() {
    return {
        link: function(scope, element, attrs) {
            element.css('border', '1px dashed green');
        }
    }
});