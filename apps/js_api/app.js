angular.module('app', []).controller('ctrl', function($scope, $interval) {
  $interval(function() {
    navigator.getBattery().then(function(battery) {
      $scope.$apply(function() {
        $scope.battery = makeArrayOfProps(battery);
      });
    });
  }, 1000);

  $scope.cssSupports = CSS.supports('-moz-columns', '100px 3');
  $scope.cssSupports2 = CSS.supports('flex', 0);

  makeArrayOfProps = function(obj) {
    var arr = [];
    for (var i in obj) {
      arr.push(i + ' = ' + obj[i]);
    }
    return arr;
  }

});
