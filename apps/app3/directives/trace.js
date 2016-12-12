angular.module('myDirectives').directive('trace', function() {
    return {
        template: '<div color>asdf<p>afef</p></div>',
        link: function(scope, element, attrs) {
            console.log('pre link manual');
        }, // actually it's shortcut for post-link
        controller: function($scope) {
            $scope.foo = 'foo';
            console.log('controller')
        },
        compile: function(element,attrs) {
            console.log('compile');
            element.append('<br>');
            element.append('<span color>Im still compiling</span>');
            return {
                pre: function(s,e,a) {
                    console.log('pre link')
                    element.append('<div color>im {{foo}} pre</div>')
                },
                post: function(s,e,a) {
                    console.log('post link')
                    element.append('<div color>im {{foo}} post</div>')
                }
            }
        }
    }
});