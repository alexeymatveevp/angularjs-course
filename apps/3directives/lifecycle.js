var App = angular.module('app', []);

App.constant('httpTimeout', 2000);

App.config(function(httpTimeout) {
    console.log(httpTimeout);
    console.log('config')
});

App.service('NameService', function() {
    console.log('service NameService');
    var me = this;
    this.setName = function(name) {
        me.name = name;
    };
    this.getName = function(name) {
        return me.name;
    }
});

App.run(function(NameService) {
    console.log('run');
    NameService.setName('Alexey');
    console.log(NameService.getName());
});

App.directive('trace', function() {
    return {
        controller: function($scope) {
            console.log('controller')
        },
        compile: function(element,attrs) {
            console.log('compile');
            return {
                pre: function(s,e,a) {
                    console.log('pre link')
                },
                post: function(s,e,a) {
                    console.log('post link')
                }
            }
        }
    }
});
