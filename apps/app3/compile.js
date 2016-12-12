var App = angular.module('app', []);

App.directive('compileTest', function() {
    return {
        scope: {},
        compile: function(el, attrs) {
            el.append("{{ name }} {{ 1+ 2}}");
            return {
                post: function(scope, el, attrs) {
                    el.append("<br><i>{{ name }}</i>")
                }
            }
        },
    }
});