var App = angular.module('app', []);
App.directive('randomNumber', function($interval) {
    return {
        template: '<div><h4>random number:</h4><span>{{number}}</span></div>',
        scope: {
             max: '@'
        },
        link: function(scope, element, attrs, controller) {
            //scope.$watch(attrs.max, function (val) {
            //    element.find('span').text(Math.random() * val);
            //});
            attrs.$observe('max', function(val) {
                element.find('span').text(Math.random() * val);
            });
            // var timerId = $interval(function() {
            //     element.find('span').text(Math.random() * 42);
            // }, 500);

            // element.on('$destroy', function() {
            //     $interval.cancel(timerId);
            // })
        },
        // controllerAs: 'ct'
    }
});