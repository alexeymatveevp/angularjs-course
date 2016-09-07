angular.module('app', []);

function ClockController($scope) {
    var updateClock = function () {
        $scope.clock = new Date();
    };
    // set interval is a vanillajs function
    // so angular is not aware of the interval function
    // to make it aware - call $apply fn -it will run a digest loop of $watchers aware
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();

    // or there is another option to use build-in $interval service
};

angular.module('app').controller('ClockController', ClockController);
