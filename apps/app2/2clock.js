angular.module('app', []);

function ClockController($scope) {
    var updateClock = function () {
        $scope.clock = new Date();
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
};

angular.module('app').controller('ClockController', ClockController);