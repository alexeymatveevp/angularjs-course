var App = angular.module('app', []);

App.controller('ctrl', function($scope, $injector) {
    var PiService = $injector.get('PiService');

    this.demandPi = function() {
        var PiService = $injector.get('PiService');
        this.pi = PiService.pi;
        this.picalc = PiService.calcPi();
    }
    // angular.extend(this, {
    //     pi: 4.115
    // })
    // angular.extend(this, PiService)
});


// service?
App.factory('PiService', function() {
    return {
        pi: 3.14,
        calcPi: function() {
            return 3.1415;
        }
    }
});

// angular.bootstrap(document)